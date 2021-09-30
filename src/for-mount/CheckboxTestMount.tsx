import React, {
    ChangeEvent,
    useState,
} from "react";
import {Input} from "./Input";


export const CheckboxTextMount = () => {
    const [checked, setChecked] = useState(false);

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked);
    }

    return (
        <div>
            <p>Test</p>
            <Input
                checked={checked}
                onChangeChecked={onChangeChecked}
            />
            {checked && <p style={{fontSize: '50px'}}>Тестирование checkbox с помощью enzyme</p>}
        </div>
    )
}
