'use client';
import { useState } from 'react';

export default function Example4() {
  const [price, setPrice] = useState(0);
  const [nonPrimitivePrice, setNonPrimitivePrice] = useState({ value: 0 });
  console.log('Example 4 page mounted');

  const handleClick = () => {
    setPrice(0);
    // setPrice(price + 1);
  };

  const handleNonPrimitiveClick = () => {
    // setNonPrimitivePrice({ value: nonPrimitivePrice.value + 1 });
    setNonPrimitivePrice({ value: 0 });
  };

  return (
    <main>
      <section>
        <h1>Primitives vs Non primitives</h1>
        <p>
          In this example, we will see how React handles state updates with
          primitives and non-primitives. We will use a number as a primitive and
          an object as a non-primitive.
        </p>
        <p>
          <strong>
            I set a console log to see when the component ReRenders
          </strong>
        </p>
        <p>
          React renders the component when the state changes. When we update the
          state with a primitive, React knows that the value has changed and
          re-renders the component. However, when we update the state with a
          non-primitive, React does not know if the value has changed or not.
          This is because React compares the reference of the object, not the
          value. If the reference is the same, React assumes that the value has
          not changed and does not re-render the component.
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col w-full items-center justify-between gap-2">
            <h2>Primitive state</h2>
            <div className="mt-4 text-lg border p-2 rounded text-white size-30">
              Price {price}
            </div>
            <button
              className="cursor-pointer"
              type="button"
              onClick={handleClick}
            >
              Change price (number)
            </button>
          </div>

          <div className="flex flex-col w-full items-center justify-between gap-2">
            <h2>Non Primitive state</h2>
            <div className="mt-4 text-lg border p-2 rounded text-white size-30">
              non Primitive Price {nonPrimitivePrice.value}
            </div>
            <button
              className="cursor-pointer"
              type="button"
              onClick={handleNonPrimitiveClick}
            >
              Change price (object)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
