"use client";
import { useState } from "react";

export default function Example4() {
    const [price, setPrice] = useState(0);
    console.log('Example 4 page mounted');

    const handleClick = () => {
        // setPrice(price + 1);
        setPrice(0);
    };

    return (
        <main>
            <section>
                <h1>Primitives vs Non primitives</h1>
                <div className="mt-4 text-lg border p-2 rounded text-white size-30">
                    Price {price}
                </div>
                <button className="cursor-pointer" type="button" onClick={handleClick}>Increse price</button>
            </section>

        </main>
    )
}