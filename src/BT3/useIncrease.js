import {useState} from 'react'

export default function useIncrease(initial) {
    let[count,setcount]=useState(initial)
    let increasecount=(i)=>{
        setcount(count+Number(i))
    }
    return [count,increasecount]
  
}

