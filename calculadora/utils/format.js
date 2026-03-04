export function sanitizeNumberString(s) {
    // manter dígitos, um ponto, e sinal do início
    if (!s) return "0";
    return s;
}

export function toNumber(displayText) {
    // display está formatado com separadores; remove tudo
    const raw = String(displayText).replace(/\./g, "").replace(/,/g,".")
    const n = Number(raw);
    return Number.isFinite(n) ? n : NaN;
}

export function formatNumber(n, locale = "pt-BR") {
    if (!Number.isFinite(n)) return "Erro";

    // evita floats infinitos na tela
    const fixed = fixFloat(n);

    // separador de milhar e decimal
    return new Intl.NumberFormat(locale, {
        maximumFractionDigits: 10
    }).format(fixed);
}

export function fixFloat(n) {
    // reduz erro de ponto flutuante
    return Math.round((n + Number.EPSILON) * 1e12) / 1e12;
}

