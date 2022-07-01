import { useState } from 'react';
import { Button } from './Button';
import { CounterResult } from './CounterResult';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <CounterResult count={count} />
    </div>
  );
};

export { Counter };
