import React from "react";

export const GetGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4tB9vblhnWP6J2unDocO9hDI9ZW2d1dD&q=${category}&limit=25&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        };
    });

    return gifs;
};