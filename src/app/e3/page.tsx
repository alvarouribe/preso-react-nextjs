"use client";

import { useState } from "react";

export default function Example3() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
        
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            firstName: value // how to update via name?
        }));
    };
    return (
        <main>
            <section>
                <h1>Example 3 - Object changes </h1>
                <form className="flex flex-col gap-4">
                    <input type="text" name="firstName" placeholder="Insert your firstName" onChange={handleChange} value={form.firstName} />
                    <input type="text" name="lastName" placeholder="Insert your lastName" onChange={handleChange}  value={form.lastName}/>
                    <input type="text" name="email" placeholder="Insert your email" onChange={handleChange} value={form.email} />
                </form>
            </section>
        </main>
    )
}