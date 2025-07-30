"use client";

import { useState } from "react";

export default function Example2() {
    const [userData, setUserData] = useState({
        name: 'Alvaro',
        age: 0,
        email: ''
    });
    const updateName = (event) => {
        const newName = event.target.value;
        console.log('Updating name to:', newName);
    };
    return (
        <main>
            <h1>Example 2 - Objects updates</h1>
           
            <section>
                <form>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Insert your name" 
                        onChange={updateName}
                        value={userData.name} />
                </form>
            </section>
        </main>
    )
}