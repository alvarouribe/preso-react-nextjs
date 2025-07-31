"use client";

import { useState } from "react";

export default function Example1() {
    const [count, setCount] = useState(0);
    
    const increaseByOne = () => {
        console.log('Lets increase by 1!');
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
        <main>
            <section className="flex flex-col">
                <h1>Example 1 - Types of setters</h1>
                <p>+1 sets the state of count to <code>count</code> + 1. So it will increase count +1</p>
                <p>+3 calls the same setter but 3 times, <strong>what do you think will happen?</strong></p>
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
            </section>
        </main>
    )
}