import React from "react";
import { GetGif } from "../helpers/GetGif";
import { useEffect, useState } from "react";
import { GetItem } from "./GetItem";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const images = await GetGif(category);
        setImages(images);
    };

    useEffect(() => {
        getImages();
    });

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((image, key) => {
                    return <GetItem key={key} {...image}></GetItem>;
                })}
            </div>
        </>
    );
};