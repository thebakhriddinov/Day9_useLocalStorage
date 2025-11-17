import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const storedValue = () => {
        const item = localStorage.getItem(key);
    }
}