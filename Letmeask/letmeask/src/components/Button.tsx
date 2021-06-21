import { useState } from "react";

export function Button() {

    const [counter, setCounter] = useState(0);

    function increaseNumber() {

        setCounter(counter + 1);

        console.log(counter)

    }

    return(
        <button onClick={increaseNumber}>
            {counter}
        </button>
    )
}