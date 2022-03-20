import { useState, useLayoutEffect, useEffect, useRef } from "react"

const useInterval = (intervalHandler, delay) => {

    const timerId = useRef(intervalHandler);

    useLayoutEffect(()=>{
        timerId.current = intervalHandler;
    },[intervalHandler]);

    useEffect(()=>{
        if (!delay && delay !== 0) {
            return;
        }
        
        const timerInstance = setInterval(timerId.current(), delay);

        return () => clearInterval(timerInstance);
    }, []);
}

export default useInterval;