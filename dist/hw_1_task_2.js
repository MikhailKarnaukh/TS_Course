export function processData(data) {
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    else if (typeof data === 'number') {
        return data * data;
    }
    else if (typeof data === 'boolean') {
        return !data;
    }
    else if (Array.isArray(data)) {
        if (data.length === 0) {
            return "Empty array: []";
        }
        return data.map(i => i * i);
    }
    throw new Error('Input correct value');
}
