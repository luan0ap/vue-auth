export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = (key) => {
    let data = localStorage.getItem(key);
    return data && JSON.parse(data) || '';
}