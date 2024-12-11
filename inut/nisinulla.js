function isContinuous(scaleType) {
    // Logic to determine if scaleType is continuous
    return scaleType === 'linear' || scaleType === 'logarithmic';
}

function isDiscretizing(scaleType) {
    // Logic to determine if scaleType is discretizing
    return scaleType === 'ordinal' || scaleType === 'quantize';
}

const Gradient = 'gradient';
const Discrete = 'discrete';
const Symbols = 'symbols';

// Example scaleType value
let scaleType = 'linear';

let type = isContinuous(scaleType) ? Gradient : isDiscretizing(scaleType) ? Discrete : Symbols;

console.log(type); // Outputs: 'gradient'
