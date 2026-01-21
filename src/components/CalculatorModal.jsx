import React, { useState, useRef, useEffect } from 'react';
import { X, Delete, Copy, History, Calculator as CalcIcon } from 'lucide-react';

export default function CalculatorModal({ isOpen, onClose }) {
    // Simple token-based system - NO placeholder boxes
    const [tokens, setTokens] = useState([]);
    const [editingToken, setEditingToken] = useState(null); // { index, part }
    const [result, setResult] = useState(null);
    const [memory, setMemory] = useState(0);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [activeTab, setActiveTab] = useState('basic');

    const tabs = [
        { id: 'basic', label: '+ −', sublabel: '× ÷' },
        { id: 'functions', label: 'f(x) e', sublabel: 'log ln' },
        { id: 'trig', label: 'sin cos', sublabel: 'tan cot' },
        { id: 'calculus', label: 'lim dx', sublabel: '∫ Σ ∞' }
    ];

    const TOKEN = {
        NUMBER: 'num',
        OPERATOR: 'op',
        FRACTION: 'frac',
        SQRT: 'sqrt',
        POWER: 'pow',
        FUNC: 'func',
        PAREN: 'paren',
        VAR: 'var'
    };

    // Update token value directly
    const updateToken = (index, part, value) => {
        const newTokens = [...tokens];
        const token = newTokens[index];
        if (!token) return;

        if (part && token.extra) {
            token.extra[part] = value;
        } else if (token.extra && token.extra.content !== undefined) {
            token.extra.content = value;
        } else {
            token.value = value;
        }
        setTokens(newTokens);
    };

    // Add number - if editing, append to that token part
    const addNumber = (num) => {
        setResult(null);

        if (editingToken) {
            const { index, part } = editingToken;
            const token = tokens[index];
            if (!token) return;

            let currentValue = '';
            if (part && token.extra) {
                currentValue = token.extra[part] || '';
            } else if (token.extra?.content !== undefined) {
                currentValue = token.extra.content || '';
            } else {
                currentValue = token.value || '';
            }

            updateToken(index, part, currentValue + num);
            return;
        }

        // Not editing - add new number token or append to last
        if (tokens.length > 0 && tokens[tokens.length - 1].type === TOKEN.NUMBER) {
            const newTokens = [...tokens];
            newTokens[newTokens.length - 1].value += num;
            setTokens(newTokens);
        } else {
            setTokens([...tokens, { type: TOKEN.NUMBER, value: num }]);
        }
    };

    // Add operator
    const addOperator = (op) => {
        // If editing a paren or func, add operator to content
        if (editingToken) {
            const { index, part } = editingToken;
            const token = tokens[index];
            if (token && (token.type === TOKEN.PAREN || token.type === TOKEN.FUNC)) {
                let currentValue = '';
                if (part && token.extra) {
                    currentValue = token.extra[part] || '';
                }
                updateToken(index, part, currentValue + op);
                setResult(null);
                return;
            }
        }

        setEditingToken(null);
        setTokens([...tokens, { type: TOKEN.OPERATOR, value: op }]);
        setResult(null);
    };

    // Add fraction - immediately start editing numerator
    const addFraction = () => {
        const newToken = { type: TOKEN.FRACTION, extra: { num: '', den: '' } };
        const newIndex = tokens.length;
        setTokens([...tokens, newToken]);
        setEditingToken({ index: newIndex, part: 'num' });
        setResult(null);
    };

    // Add sqrt
    const addSqrt = () => {
        const newToken = { type: TOKEN.SQRT, extra: { content: '' } };
        const newIndex = tokens.length;
        setTokens([...tokens, newToken]);
        setEditingToken({ index: newIndex, part: 'content' });
        setResult(null);
    };

    // Add power
    const addPower = () => {
        const newToken = { type: TOKEN.POWER, extra: { base: '', exp: '' } };
        const newIndex = tokens.length;
        setTokens([...tokens, newToken]);
        setEditingToken({ index: newIndex, part: 'base' });
        setResult(null);
    };

    // Add function
    const addFunc = (name) => {
        const newToken = { type: TOKEN.FUNC, value: name, extra: { arg: '' } };
        const newIndex = tokens.length;
        setTokens([...tokens, newToken]);
        setEditingToken({ index: newIndex, part: 'arg' });
        setResult(null);
    };

    // Add paren
    const addParen = () => {
        const newToken = { type: TOKEN.PAREN, extra: { content: '' } };
        const newIndex = tokens.length;
        setTokens([...tokens, newToken]);
        setEditingToken({ index: newIndex, part: 'content' });
        setResult(null);
    };

    // Add variable
    const addVar = (v) => {
        setEditingToken(null);
        setTokens([...tokens, { type: TOKEN.VAR, value: v }]);
        setResult(null);
    };

    // Click on editable part
    const handlePartClick = (index, part = null) => {
        setEditingToken({ index, part });
    };

    // Get value for display
    const getPartValue = (token, part) => {
        if (part && token.extra) {
            return token.extra[part] || '';
        } else if (token.extra?.content !== undefined) {
            return token.extra.content || '';
        }
        return token.value || '';
    };

    // Tokens to calc string
    const tokensToCalc = () => {
        const parts = tokens.map(t => {
            switch (t.type) {
                case TOKEN.NUMBER:
                    return t.value || '0';
                case TOKEN.OPERATOR:
                    const opMap = { '×': '*', '÷': '/', '−': '-', '+': '+', '%': '/100' };
                    return opMap[t.value] || t.value;
                case TOKEN.VAR:
                    if (t.value === 'π') return Math.PI;
                    if (t.value === 'e') return Math.E;
                    return t.value;
                case TOKEN.FRACTION:
                    const num = t.extra?.num || '0';
                    const den = t.extra?.den || '1';
                    return `(${num || 0}/${den || 1})`;
                case TOKEN.SQRT:
                    return `Math.sqrt(${t.extra?.content || '0'})`;
                case TOKEN.POWER:
                    const base = t.extra?.base || '1';
                    const exp = t.extra?.exp || '1';
                    return `Math.pow(${base || 1},${exp || 1})`;
                case TOKEN.FUNC:
                    // Convert operator symbols in arg
                    let funcArg = t.extra?.arg || '0';
                    funcArg = funcArg.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
                    const funcMap = {
                        'sin': `Math.sin(${funcArg})`,
                        'cos': `Math.cos(${funcArg})`,
                        'tan': `Math.tan(${funcArg})`,
                        'log': `Math.log10(${funcArg})`,
                        'ln': `Math.log(${funcArg})`,
                        'abs': `Math.abs(${funcArg})`,
                        'exp': `Math.exp(${funcArg})`
                    };
                    return funcMap[t.value] || `${t.value}(${funcArg})`;
                case TOKEN.PAREN:
                    // Convert operator symbols in content
                    let parenContent = t.extra?.content || '0';
                    parenContent = parenContent.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
                    return `(${parenContent})`;
                default:
                    return '';
            }
        });

        // Add implicit multiplication between number/var and paren/func/sqrt/power
        let result = '';
        for (let i = 0; i < tokens.length; i++) {
            const curr = tokens[i];
            const prev = i > 0 ? tokens[i - 1] : null;

            // If previous token is NUMBER or VAR and current is PAREN/FUNC/SQRT/POWER/FRACTION, add *
            if (prev && (prev.type === TOKEN.NUMBER || prev.type === TOKEN.VAR) &&
                (curr.type === TOKEN.PAREN || curr.type === TOKEN.FUNC ||
                    curr.type === TOKEN.SQRT || curr.type === TOKEN.POWER || curr.type === TOKEN.FRACTION)) {
                result += '*';
            }

            result += parts[i];
        }

        return result;
    };

    // Calculate
    const calculate = () => {
        setEditingToken(null);
        try {
            const calcStr = tokensToCalc();
            console.log('Calculating:', calcStr);
            const res = eval(calcStr);
            if (isNaN(res) || !isFinite(res)) {
                setResult('Error');
            } else {
                const formatted = Number(res.toFixed(10)).toString();
                setResult(formatted);
                setHistory([...history, { tokens: JSON.parse(JSON.stringify(tokens)), result: formatted }]);
            }
        } catch (e) {
            console.error(e);
            setResult('Error');
        }
    };

    // Clear
    const clear = () => {
        setTokens([]);
        setResult(null);
        setEditingToken(null);
    };

    // Backspace
    const backspace = () => {
        if (editingToken) {
            const { index, part } = editingToken;
            const token = tokens[index];
            if (!token) return;

            let currentValue = getPartValue(token, part);
            if (currentValue.length > 0) {
                updateToken(index, part, currentValue.slice(0, -1));
                return;
            }
        }

        if (tokens.length > 0) {
            const last = tokens[tokens.length - 1];
            if (last.type === TOKEN.NUMBER && last.value.length > 1) {
                const newTokens = [...tokens];
                newTokens[newTokens.length - 1].value = last.value.slice(0, -1);
                setTokens(newTokens);
            } else {
                setTokens(tokens.slice(0, -1));
            }
        }
        setResult(null);
    };

    // Memory functions
    const handleMemoryClear = () => setMemory(0);
    const handleMemoryRecall = () => memory !== 0 && addNumber(memory.toString());
    const handleMemoryAdd = () => result && setMemory(memory + parseFloat(result));
    const handleMemorySubtract = () => result && setMemory(memory - parseFloat(result));

    // Editable span component - click to edit
    const EditableSpan = ({ value, isEditing, onClick, placeholder = '_', className = '' }) => (
        <span
            onClick={onClick}
            className={`cursor-text px-1 min-w-[1rem] inline-block text-center rounded transition-all ${isEditing
                ? 'bg-cyan-500/40 ring-2 ring-cyan-400'
                : 'hover:bg-slate-600/50'
                } ${className}`}
        >
            {value || <span className="text-slate-500 opacity-70">{placeholder}</span>}
        </span>
    );

    // Render token
    const renderToken = (token, index) => {
        const isEditingThis = editingToken?.index === index;

        switch (token.type) {
            case TOKEN.NUMBER:
            case TOKEN.VAR:
                return (
                    <span
                        key={index}
                        className={`cursor-pointer px-0.5 rounded ${isEditingThis ? 'bg-cyan-500/30 ring-1 ring-cyan-400' : 'hover:bg-slate-700/50'}`}
                        onClick={() => handlePartClick(index)}
                    >
                        {token.value}
                    </span>
                );

            case TOKEN.OPERATOR:
                return (
                    <span key={index} className="text-cyan-300 mx-1">
                        {token.value}
                    </span>
                );

            case TOKEN.FRACTION:
                return (
                    <span key={index} className="inline-flex flex-col items-center mx-2" style={{ verticalAlign: 'middle' }}>
                        <EditableSpan
                            value={token.extra?.num}
                            isEditing={isEditingThis && editingToken?.part === 'num'}
                            onClick={(e) => { e.stopPropagation(); handlePartClick(index, 'num'); }}
                            className="border-b-2 border-white pb-0.5 min-w-[1.5rem]"
                        />
                        <EditableSpan
                            value={token.extra?.den}
                            isEditing={isEditingThis && editingToken?.part === 'den'}
                            onClick={(e) => { e.stopPropagation(); handlePartClick(index, 'den'); }}
                            className="pt-0.5 min-w-[1.5rem]"
                        />
                    </span>
                );

            case TOKEN.SQRT:
                return (
                    <span key={index} className="inline-flex items-center mx-1">
                        <span className="text-xl">√</span>
                        <span className="border-t-2 border-white px-1">
                            <EditableSpan
                                value={token.extra?.content}
                                isEditing={isEditingThis}
                                onClick={(e) => { e.stopPropagation(); handlePartClick(index, 'content'); }}
                            />
                        </span>
                    </span>
                );

            case TOKEN.POWER:
                return (
                    <span key={index} className="inline-flex items-baseline mx-1">
                        <EditableSpan
                            value={token.extra?.base}
                            isEditing={isEditingThis && editingToken?.part === 'base'}
                            onClick={(e) => { e.stopPropagation(); handlePartClick(index, 'base'); }}
                        />
                        <sup className="text-xs ml-0.5">
                            <EditableSpan
                                value={token.extra?.exp}
                                isEditing={isEditingThis && editingToken?.part === 'exp'}
                                onClick={(e) => { e.stopPropagation(); handlePartClick(index, 'exp'); }}
                            />
                        </sup>
                    </span>
                );

            case TOKEN.FUNC:
                return (
                    <span key={index} className="inline-flex items-center mx-1">
                        <span className="text-purple-300">{token.value}</span>
                        <span className="text-slate-400">(</span>
                        <EditableSpan
                            value={token.extra?.arg}
                            isEditing={isEditingThis}
                            onClick={(e) => { e.stopPropagation(); handlePartClick(index, 'arg'); }}
                        />
                        <span className="text-slate-400">)</span>
                    </span>
                );

            case TOKEN.PAREN:
                return (
                    <span key={index} className="inline-flex items-center mx-1">
                        <span className="text-slate-400 text-lg">(</span>
                        <EditableSpan
                            value={token.extra?.content}
                            isEditing={isEditingThis}
                            onClick={(e) => { e.stopPropagation(); handlePartClick(index, 'content'); }}
                        />
                        <span className="text-slate-400 text-lg">)</span>
                    </span>
                );

            default:
                return null;
        }
    };

    if (!isOpen) return null;

    // Button component
    const Button = ({ children, onClick, className = '', variant = 'default' }) => {
        const baseClass = "h-10 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg text-sm flex items-center justify-center";
        const variants = {
            default: "bg-slate-700 hover:bg-slate-600 text-white",
            operator: "bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white",
            function: "bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white",
            equals: "bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white",
            clear: "bg-gradient-to-br from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-white",
            memory: "bg-slate-600 hover:bg-slate-500 text-cyan-300 text-xs"
        };
        return (
            <button onClick={onClick} className={`${baseClass} ${variants[variant]} ${className}`}>
                {children}
            </button>
        );
    };

    // Render tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'basic':
                return (
                    <>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button variant="memory" onClick={handleMemoryClear}>MC</Button>
                            <Button variant="memory" onClick={handleMemoryRecall}>MR</Button>
                            <Button variant="memory" onClick={handleMemoryAdd}>M+</Button>
                            <Button variant="memory" onClick={handleMemorySubtract}>M-</Button>
                            <Button variant="clear" onClick={clear}>C</Button>
                            <Button onClick={backspace}><Delete className="w-4 h-4" /></Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button onClick={addParen}>()</Button>
                            <Button onClick={addFraction}>
                                <span className="flex flex-col items-center text-[10px] leading-tight">
                                    <span>a</span>
                                    <span className="w-3 h-px bg-white"></span>
                                    <span>b</span>
                                </span>
                            </Button>
                            <Button onClick={() => addNumber('7')}>7</Button>
                            <Button onClick={() => addNumber('8')}>8</Button>
                            <Button onClick={() => addNumber('9')}>9</Button>
                            <Button variant="operator" onClick={() => addOperator('÷')}>÷</Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button onClick={addSqrt}>√</Button>
                            <Button onClick={addPower}>xⁿ</Button>
                            <Button onClick={() => addNumber('4')}>4</Button>
                            <Button onClick={() => addNumber('5')}>5</Button>
                            <Button onClick={() => addNumber('6')}>6</Button>
                            <Button variant="operator" onClick={() => addOperator('×')}>×</Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button onClick={() => addVar('π')}>π</Button>
                            <Button onClick={() => addVar('x')}>x</Button>
                            <Button onClick={() => addNumber('1')}>1</Button>
                            <Button onClick={() => addNumber('2')}>2</Button>
                            <Button onClick={() => addNumber('3')}>3</Button>
                            <Button variant="operator" onClick={() => addOperator('−')}>−</Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5">
                            <Button onClick={() => addVar('e')}>e</Button>
                            <Button onClick={() => addOperator('%')}>%</Button>
                            <Button onClick={() => addNumber('0')}>0</Button>
                            <Button onClick={() => addNumber('.')}>.</Button>
                            <Button variant="equals" onClick={calculate}>=</Button>
                            <Button variant="operator" onClick={() => addOperator('+')}>+</Button>
                        </div>
                    </>
                );

            case 'functions':
                return (
                    <>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button variant="function" onClick={() => addFunc('abs')}>|x|</Button>
                            <Button variant="function" onClick={() => addFunc('log')}>log</Button>
                            <Button variant="function" onClick={() => addFunc('ln')}>ln</Button>
                            <Button variant="function" onClick={() => addFunc('exp')}>exp</Button>
                            <Button variant="clear" onClick={clear}>C</Button>
                            <Button onClick={backspace}><Delete className="w-4 h-4" /></Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button onClick={() => addNumber('7')}>7</Button>
                            <Button onClick={() => addNumber('8')}>8</Button>
                            <Button onClick={() => addNumber('9')}>9</Button>
                            <Button variant="operator" onClick={() => addOperator('÷')}>÷</Button>
                            <Button onClick={addFraction}>a/b</Button>
                            <Button onClick={addPower}>xⁿ</Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button onClick={() => addNumber('4')}>4</Button>
                            <Button onClick={() => addNumber('5')}>5</Button>
                            <Button onClick={() => addNumber('6')}>6</Button>
                            <Button variant="operator" onClick={() => addOperator('×')}>×</Button>
                            <Button onClick={addSqrt}>√</Button>
                            <Button onClick={addParen}>()</Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button onClick={() => addNumber('1')}>1</Button>
                            <Button onClick={() => addNumber('2')}>2</Button>
                            <Button onClick={() => addNumber('3')}>3</Button>
                            <Button variant="operator" onClick={() => addOperator('−')}>−</Button>
                            <Button onClick={() => addVar('π')}>π</Button>
                            <Button onClick={() => addVar('e')}>e</Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5">
                            <Button onClick={() => addNumber('0')} className="col-span-2">0</Button>
                            <Button onClick={() => addNumber('.')}>.</Button>
                            <Button variant="operator" onClick={() => addOperator('+')}>+</Button>
                            <Button variant="equals" onClick={calculate} className="col-span-2">=</Button>
                        </div>
                    </>
                );

            case 'trig':
                return (
                    <>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button variant="function" onClick={() => addFunc('sin')}>sin</Button>
                            <Button variant="function" onClick={() => addFunc('cos')}>cos</Button>
                            <Button variant="function" onClick={() => addFunc('tan')}>tan</Button>
                            <Button variant="clear" onClick={clear}>C</Button>
                            <Button onClick={backspace} className="col-span-2"><Delete className="w-4 h-4" /></Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button onClick={() => addNumber('7')}>7</Button>
                            <Button onClick={() => addNumber('8')}>8</Button>
                            <Button onClick={() => addNumber('9')}>9</Button>
                            <Button variant="operator" onClick={() => addOperator('÷')}>÷</Button>
                            <Button onClick={() => addVar('π')}>π</Button>
                            <Button onClick={addParen}>()</Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button onClick={() => addNumber('4')}>4</Button>
                            <Button onClick={() => addNumber('5')}>5</Button>
                            <Button onClick={() => addNumber('6')}>6</Button>
                            <Button variant="operator" onClick={() => addOperator('×')}>×</Button>
                            <Button onClick={addSqrt}>√</Button>
                            <Button onClick={addPower}>xⁿ</Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5 mb-1.5">
                            <Button onClick={() => addNumber('1')}>1</Button>
                            <Button onClick={() => addNumber('2')}>2</Button>
                            <Button onClick={() => addNumber('3')}>3</Button>
                            <Button variant="operator" onClick={() => addOperator('−')}>−</Button>
                            <Button onClick={() => addNumber('0')}>0</Button>
                            <Button onClick={() => addNumber('.')}>.</Button>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5">
                            <Button variant="operator" onClick={() => addOperator('+')} className="col-span-3">+</Button>
                            <Button variant="equals" onClick={calculate} className="col-span-3">=</Button>
                        </div>
                    </>
                );

            case 'calculus':
                return (
                    <>
                        <div className="grid grid-cols-5 gap-1.5 mb-1.5">
                            <Button variant="function" onClick={() => addVar('lim')}>lim</Button>
                            <Button variant="function" onClick={() => addVar('∫')}>∫</Button>
                            <Button variant="function" onClick={() => addVar('Σ')}>Σ</Button>
                            <Button variant="function" onClick={() => addVar('∞')}>∞</Button>
                            <Button variant="clear" onClick={clear}>C</Button>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5 mb-1.5">
                            <Button onClick={() => addNumber('7')}>7</Button>
                            <Button onClick={() => addNumber('8')}>8</Button>
                            <Button onClick={() => addNumber('9')}>9</Button>
                            <Button variant="operator" onClick={() => addOperator('÷')}>÷</Button>
                            <Button onClick={backspace}><Delete className="w-4 h-4" /></Button>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5 mb-1.5">
                            <Button onClick={() => addNumber('4')}>4</Button>
                            <Button onClick={() => addNumber('5')}>5</Button>
                            <Button onClick={() => addNumber('6')}>6</Button>
                            <Button variant="operator" onClick={() => addOperator('×')}>×</Button>
                            <Button onClick={addPower}>xⁿ</Button>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5 mb-1.5">
                            <Button onClick={() => addNumber('1')}>1</Button>
                            <Button onClick={() => addNumber('2')}>2</Button>
                            <Button onClick={() => addNumber('3')}>3</Button>
                            <Button variant="operator" onClick={() => addOperator('−')}>−</Button>
                            <Button variant="operator" onClick={() => addOperator('+')}>+</Button>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5">
                            <Button onClick={() => addNumber('0')} className="col-span-2">0</Button>
                            <Button onClick={() => addNumber('.')}>.</Button>
                            <Button variant="equals" onClick={calculate} className="col-span-2">=</Button>
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative flex gap-3 animate-scale-in">
                {/* Main Calculator */}
                <div className="w-80 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="px-3 py-2 border-b border-slate-700 flex justify-between items-center bg-slate-900/50">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                                <CalcIcon className="w-3.5 h-3.5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-white">Kalkulator Scientific</h3>
                                <p className="text-slate-400 text-[9px]">Klik area untuk edit</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <button onClick={() => setShowHistory(!showHistory)} className={`p-1.5 rounded-full transition-colors ${showHistory ? 'bg-cyan-500/20 text-cyan-400' : 'hover:bg-slate-700 text-slate-400'}`}>
                                <History className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => navigator.clipboard.writeText(result || '')} className="p-1.5 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white">
                                <Copy className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={onClose} className="p-1.5 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white">
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>

                    {/* Display */}
                    <div className="px-3 py-3 bg-slate-900/30">
                        <div
                            className="w-full min-h-[4rem] bg-slate-800/50 rounded-xl p-3 flex flex-wrap items-center justify-end gap-1 text-lg font-mono text-white overflow-x-auto"
                            onClick={() => setEditingToken(null)}
                        >
                            {tokens.length === 0 ? (
                                <span className="text-slate-500">0</span>
                            ) : (
                                tokens.map((token, index) => renderToken(token, index))
                            )}
                        </div>
                        {result !== null && (
                            <div className="text-right text-xl font-bold text-cyan-400 mt-2">
                                = {result}
                            </div>
                        )}
                        {memory !== 0 && (
                            <div className="text-right text-[10px] text-cyan-400 mt-1">M: {memory}</div>
                        )}
                    </div>

                    {/* Tab Navigation */}
                    <div className="px-3 pb-1.5">
                        <div className="flex gap-0.5 bg-slate-800/50 p-0.5 rounded-lg">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 py-1.5 px-1 rounded-md text-[10px] font-medium transition-all ${activeTab === tab.id
                                        ? 'bg-slate-900 text-white shadow'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                                        }`}
                                >
                                    <div>{tab.label}</div>
                                    <div className="text-[8px] opacity-70">{tab.sublabel}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="px-3 pb-3">
                        {renderTabContent()}
                    </div>
                </div>

                {/* History Panel */}
                {showHistory && (
                    <div className="w-48 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="px-3 py-2 border-b border-slate-700 bg-slate-900/50">
                            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                                <History className="w-3.5 h-3.5" />
                                Riwayat
                            </h4>
                        </div>
                        <div className="p-2 max-h-[300px] overflow-y-auto">
                            {history.length === 0 ? (
                                <p className="text-slate-500 text-[10px] text-center py-6">Belum ada riwayat</p>
                            ) : (
                                <div className="space-y-1.5">
                                    {history.slice(-8).reverse().map((item, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                setTokens(JSON.parse(JSON.stringify(item.tokens)));
                                                setResult(item.result);
                                            }}
                                            className="text-[10px] bg-slate-800/50 p-2 rounded-lg cursor-pointer hover:bg-slate-700/50"
                                        >
                                            <div className="text-cyan-400 font-bold">= {item.result}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {history.length > 0 && (
                                <button onClick={() => setHistory([])} className="w-full mt-2 py-1.5 text-[10px] text-slate-400 hover:text-red-400">
                                    Hapus Semua
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
    
}
