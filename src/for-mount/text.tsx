import React, {ChangeEvent} from "react";

type InputProps = {
    checked: boolean;
    onChecked: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (
    {
     checked,
     onChecked,
    }: InputProps
) => {

    return (
    <div>
        <p>Test1</p>
        <input
            name='input-check'
            type='checkbox'
            checked={checked}
            onChange={e => onChecked(e)}
            style={{height: '40px', width: '40px'}}
        />
    </div>
)
}
