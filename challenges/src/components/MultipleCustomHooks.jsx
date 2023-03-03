import React from "react";
import { UseCounter } from "../hooks/UseCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
    const { counter, increment } = UseCounter(0);
    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    );

    return (
        <>
            <h1>Multiple Custom Hooks</h1>
            <br></br>
            {isLoading ? (
                <div className="alert">Loading...</div>
            ) : (
                <blockquote className="Blockquote">
                    <p className="Pi">{data[0]?.quote}</p>
                    <footer> {data[0]?.author} </footer>
                </blockquote>
            )}
            <button onClick={() => increment()}> Genera una frase </button>
        </>
    );
};