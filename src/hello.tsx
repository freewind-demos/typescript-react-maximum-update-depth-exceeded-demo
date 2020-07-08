//import * as React from 'react'
import React, {useEffect, useState} from 'react'

export default function Hello() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      setCount(n => n + 1);
    }
  }, [count]);

  return <div>
    <h1>Hello React</h1>
    <div>
      <button onClick={() => setCount(1)}>{count}</button>
    </div>
  </div>
};
