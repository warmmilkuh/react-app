import { useState } from "react";
import Welcome from "./Welcome";

export default function Hello({name, department})
{
    const [count,setCount] = useState(0);
    function handleClick()
    {
        setCount(count+1)
    }
    return (
        <>
            <h1>Hello {name} from {department}!</h1>
            <h2>Button clicked {count} times!</h2>
            <Welcome />
            <button onClick={handleClick}>Click</button>
        </>
    )
}