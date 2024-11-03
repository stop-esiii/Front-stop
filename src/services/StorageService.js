export function getItem(key) {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
    return null;
}

export function setItem(key, value) {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
    }
}

export function removeItem(key) {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
}