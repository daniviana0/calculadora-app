import { fixFloat, formatNumber, toNumber } from "./format";

const OPS = new Set(["+", "-", "*", "/"]);

export function createEngine({ locale = "pt-BR"} = {}) {
    function initialState() {
        return {
            display: formatNumber(0, locale),
            expression: "",
            storedValue: null,    
            pendingOp: null,
            isNewEntry: true,
            lastKey: null,
        };
    }

    function reduce(state, key) {
        const s = { ...state, lastKey: key };
        // Programar
        return s;
    }

    function onDigitOrDot(s, key, locale) {

    }

    function onOperator(s, op, locale) {

    }

    function onEqual(s, locale) {

    }
    function compute(a, b, op) {
        
    }
    function symbol(op) {
        
    }

    function isDigit(k) {
        
    }
    function displayToRaw(displayText) {
        
    }

    return { initialState, reduce } 
}