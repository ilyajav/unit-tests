import React, {
    ChangeEvent,
    useState,
} from "react";
import {Input} from "./text";


export const CheckboxTextMount = () => {
    const [checked, setChecked] = useState(false);

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    return (
        <div>
            <p>Test</p>
             <Input
                 checked={checked}
                 onChecked={onChangeChecked}
             />
            {checked && <p style={{fontSize: '50px'}}>Тестирование checkbox с помощью enzyme</p>}
        </div>
    )
}
