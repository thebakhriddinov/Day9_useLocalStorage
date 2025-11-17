import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const storedValue = () => {
        const item = localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
    };

    const [value, setValue] = useState(storedValue);

    const updateValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key.JSON.stringify(newValue));
    };

    return [value, updateValue]
}