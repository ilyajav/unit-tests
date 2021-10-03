import React, {
    ChangeEvent,
    useState,
} from "react";


export const CheckboxText = () => {
    const [checked, setChecked] = useState(false);

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.checked)
        setChecked(e.currentTarget.checked);
    }

    return (
        <div>
            <p>Test</p>
            <input
                type='checkbox'
                checked={checked}
                onChange={onChangeChecked}
                style={{height: '40px', width: '40px'}}
            />
            {checked && <p style={{fontSize: '50px'}}>Тестирование checkbox с помощью enzyme</p>}
        </div>
    )
}
