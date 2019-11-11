/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface PosterProps {
    url: string;
    alt: string;
    size: string;
    scaled?: string;
    customClass?: string;
}

const Poster = ({ url, alt, size, scaled, customClass }: PosterProps) => {
    return (
        <div className="inline-block">
            <img
                src={`http://image.tmdb.org/t/p/${size}${url}`}
                alt={alt}
                css={css`
                    width: ${scaled};
                `}
                className={customClass}
            />
        </div>
    );
};

export default Poster;
