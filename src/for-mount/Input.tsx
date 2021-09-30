import React, {ChangeEvent} from "react";

type InputProps = {
    checked: boolean
    onChangeChecked: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (
    {
        checked,
        onChangeChecked
    }: InputProps
) => {
    return (
    <div>
        <input
            type='checkbox'
            checked={checked}
            onChange={onChangeChecked}
            style={{height: '40px', width: '40px'}}
        />
        <p>Test render</p>
    </div>
)
}
