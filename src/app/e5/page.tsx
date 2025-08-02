'use client';

import { useEffect, useState } from 'react';

export default function Example5() {
  console.log('Example 5 page mounted');

  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    console.log('UseEffect Example 5 page mounted');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    return () => {
      console.log('UseEffect Example 5 page unmounted');
    };
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section>
        <h1>Example 5 - useEffect conditional rendering</h1>
        {data?.title}
      </section>
    </main>
  );
}
