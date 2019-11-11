/** @jsx jsx */
import { FunctionComponent } from 'react';

import { css, jsx } from '@emotion/core';

interface DropdownProps {
    data: { id: number; name: string }[];
    allCheckbox?: boolean;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
    data,
    allCheckbox = true
}) => {
    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {data.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
