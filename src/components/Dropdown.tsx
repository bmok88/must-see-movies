/** @jsx jsx */
import { FunctionComponent, useState, useEffect } from 'react';

import { css, jsx } from '@emotion/core';

interface DropdownProps {
    keyName: string;
    data: any[];
    selectDropdownItem: any;
    allCheckbox?: boolean;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
    keyName,
    data,
    selectDropdownItem
}) => {
    const [selection, setSelection] = useState('All');

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
                {selection}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {data.map(data => (
                    <li
                        key={data.id}
                        onClick={() => {
                            setSelection(data[keyName]);
                            selectDropdownItem(data);
                        }}
                    >
                        {data[keyName]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
