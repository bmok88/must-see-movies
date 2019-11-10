import React from 'react';

interface PosterProps {
    url: string;
    alt: string;
    size: string;
}

const Poster = ({ url, alt, size }: PosterProps) => {
    return (
        <div className="poster-container">
            <img src={`http://image.tmdb.org/t/p/${size}${url}`} alt={alt} />
        </div>
    );
};

export default Poster;
