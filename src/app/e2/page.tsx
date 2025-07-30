"use client";

import { useState } from "react";

export default function Example2() {
    const [userData, setUserData] = useState({
        name: 'Alvaro',
        age: 0,
        email: ''
    });
    const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        console.log('Updating name to:', newName);
        
        // setUserData((prevData) => ({
        //     ...prevData,
        //     name: newName
        // }));
        // or alternatively
        // setUserData(() => {
        //     return {
        //         ...userData,
        //         name: newName
        //     };
        // });
        // or alternatively
        setUserData(() => ({
            ...userData,
            name: newName
        }));
        // or alternatively
        // setUserData({ ...userData, name: newName });
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