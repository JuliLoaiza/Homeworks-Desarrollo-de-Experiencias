import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { UseCounter } from "./hooks/UseCounter";

export const GiftExpertApp = () => {
    const { counter, increment, decrement, reset } = UseCounter(0);
    const [categories, setCategories] = useState(["Gatitos"]);
    const onAddCategory = (category) => {
        setCategories((list) => [...list, category]);
    };

    return (
        <>
            <h1>Contador</h1>
            <span>Los gatitos que quiero: {counter}</span>
            <br></br>
            <button onClick={() => increment()}> +1 </button>
            <button onClick={() => decrement()}>-1</button>
            <button onClick={() => reset()}>Reiniciar</button>
            <h1>GitExpert</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {categories.map((category, key) => {
                return <GifGrid category={category} key={key} />;
            })}
        </>
    );
};

export default GiftExpertApp;
