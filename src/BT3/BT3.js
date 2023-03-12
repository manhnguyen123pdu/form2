import React from 'react'
import useIncrease from './useIncrease'
export default function BT3() {
    let [count, setCount] = useIncrease(1)
    let [count1, setCount1] = useIncrease(2)

    return (
        <div>
            <h2>Tăng 1</h2>
            {count}
            <br />
            <button onClick={() => { setCount(1) }}>increase +1</button>
            <h2>Tăng 2</h2>
            {count1}
            <br />
            <button onClick={() => { setCount1() }}>increase +2</button>
        </div>
    )
}
