"use client";

import { useState } from "react";

export default function Example3() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <main>
            <section>
                <h1>Example 3 - Object state instead of multiple small ones </h1>
                <form className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="Insert your firstName" 
                        onChange={(e) => { setFirstName(e.target.value) }} 
                        value={firstName} />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Insert your lastName" 
                        onChange={(e)=>{ setLastName(e.target.value) }}  
                        value={lastName}/>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Insert your email" 
                        onChange={(e) => { setEmail(e.target.value) }} 
                        value={email} />
                </form>
            </section>
        </main>
    )
}