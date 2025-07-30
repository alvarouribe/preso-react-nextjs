"use client";

import { useState } from "react";

export default function Example1() {
    const [count, setCount] = useState(0);

    const increaseByOne = () => {
        setCount(count + 1);
        
        // or setCount((prevCount) => prevCount + 1);
        // https://react.dev/learn/queueing-a-series-of-state-updates
    };

    const increaseByThree = () => {
        console.log('Lets increase by 3!');
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    };
    return (
        <>
            <h1 className='text-2xl mb-4'>Types of setters</h1>

            <main className="flex flex-col">
                <div className="mt-4 text-lg border p-2 rounded text-white size-30">
                    Count {count}
                </div>

                <div className="flex gap-4 mt-12">
                    <button 
                        onClick={increaseByOne}>
                        Increase +1
                    </button>

                    <button 
                        onClick={increaseByThree}>
                        Increase +3
                    </button>
                </div>
            </main>
        </>
    )
}