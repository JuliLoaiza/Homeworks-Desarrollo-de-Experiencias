import React from "react";
import { useState, useEffect } from "react";

export const UseCounter = (value) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        console.log("LlamarHandle");
        setCounter(counter + 1);
    };

    const handleSubstract = () => {
        console.log("llamando handleSubstract");
        setCounter(counter - 1);
    };

    const handleReset = () => {
        console.log("llamando handleReset");
        setCounter(value * 0);
    };

    return {
        counter,
        increment: handleAdd,
        decrement: handleSubstract,
        reset: handleReset,
    };
};