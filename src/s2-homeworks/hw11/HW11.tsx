import React, { useState } from 'react';
import s from './HW11.module.css';
import s2 from '../../s1-main/App.module.css';
import { restoreState } from '../hw06/localStorage/localStorage';
import SuperRange from './common/c7-SuperRange/SuperRange';

function HW11() {
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0));
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100));

    const handleSingleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue1(newValue);
        }
    };

    const handleDoubleChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            // Гарантируем, что первый ползунок не превышает второй
            const [newVal1, newVal2] = newValue;
            if (newVal1 < newVal2) {
                setValue1(newVal1);
                setValue2(newVal2);
            } else if (newValue[0] !== value1) {
                // Если двигаем первый ползунок
                setValue1(Math.min(newVal1, value2 - 1));
            } else if (newValue[1] !== value2) {
                // Если двигаем второй ползунок
                setValue2(Math.max(newVal2, value1 + 1));
            }
        }
    };

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={handleSingleChange}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1, value2]}
                            onChange={handleDoubleChange}
                            disableSwap
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HW11;