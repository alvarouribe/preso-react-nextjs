'use client';

import { useState } from 'react';

export default function Example2() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userData, setUserData] = useState({
    name: 'Alvaro',
    age: 21,
    email: '',
  });

  // const updateName = (event:) => {
  //   const newName = event.target.value;
  //   console.log('Updating name to:', newName);
  //   // setUserData({
  //   //     name: newName
  //   // });
  //   // console.log('userData:', userData);
  // };

  return (
    <main>
      <section>
        <h1>Example 2 - Objects updates</h1>
        <p>
          Lets say we want to change the state when the input changes... How can
          we fix this code:
        </p>
        <ul>
          <li>event type issue</li>
          <li>update the object data state</li>
        </ul>
        <form>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Insert your name"
            // onChange={updateName}
            value={userData.name}
          />
        </form>
      </section>
    </main>
  );
}
