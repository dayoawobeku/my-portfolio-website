import {useState} from 'react';

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        className="text-grey bg-white dark:text-white dark:bg-grey my-4 rounded p-2"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
