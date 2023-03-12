import React, { useState, useEffect } from 'react'

export default function BT2() {
    let [timer, setTimer] = useState(10)
    console.log(timer)
    useEffect(()=>{
        let time=setInterval(() => {
            setTimer(timer - 1)
        }, 1000)

        if(timer==0){
            clearInterval(time)
        }
        return ()=>{
            clearInterval(time)
        }
    },[timer])

    let render=()=>{
        if(timer!=0){
            return<p> count from {timer}</p>
        }
        else{
            alert("time's up");
        }
    }
    

    return (
        <div>
            {render()}
        </div>
    )
}
