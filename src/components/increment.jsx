import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, startCounter } from "../store/increment";

const Increment = () => {

    const dispatch = useDispatch()
    const startNumber = useSelector(startCounter);

    return (
        <div>
            <h1>{startNumber.value}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}

export default Increment;