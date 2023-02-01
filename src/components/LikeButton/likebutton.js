import { useState } from 'react';

export function LikeButton() {
  const [color, setColor] = useState(' ');
  const [counter, setCounter] = useState(0);
  const [colors, setColors] = useState([
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
  ]);

  function handleClick() {
    setCounter(counter + 1);

    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  }

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {counter} Likes
      </button>
    </div>
  );
}
