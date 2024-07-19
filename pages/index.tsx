import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const colors = [
    'red', 'blue', 'green', 'yellow', 'purple',
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#800080',
    'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(128, 0, 128)',
    'rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(128, 0, 128, 0.5)',
    'hsl(0, 100%, 50%)', 'hsl(120, 100%, 50%)', 'hsl(240, 100%, 50%)', 'hsl(60, 100%, 50%)', 'hsl(300, 100%, 50%)',
    'hsla(0, 100%, 50%, 0.5)', 'hsla(120, 100%, 50%, 0.5)', 'hsla(240, 100%, 50%, 0.5)', 'hsla(60, 100%, 50%, 0.5)', 'hsla(300, 100%, 50%, 0.5)'
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [text, setText] = useState("Don't Click Me!");
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [again, setAgain] = useState<JSX.Element[]>([]);

  const mouseEnter = () => {
    setHover(true);
    if (clicked) {
      setText("Please, stop clicking me");
    } else {
      setText("Don't do it!");
    }
  };

  const mouseLeave = () => {
    setHover(false);
    if (clicked) {
      setText("You clicked me...");
    } else {
      setText("Don't Click Me!");
    }
  };

  const mouseDown = () => {
    setText("woww...");
  };

  const counter = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;

      if (newCount > 11 && newCount % 10 === 0) {
        setAgain(prevAgain => [...prevAgain, <h1 key={newCount}>and again...</h1>]);
      }

      return newCount;
    });
  };

  const handleClick = () => {
    setClicked(true);
    setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    counter();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-10">
      <div className="flex justify-center items-center">
        <button
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          onMouseDown={mouseDown}
          onClick={handleClick}
          className="rounded-lg text-5xl p-5"
          style={{ backgroundColor: colors[currentColorIndex] }}
        >
          {text}
        </button>
      </div>

      <div>
        <h1>{(count < 11) ? "" : "Now we see your TRUE colors."}</h1>
      </div>
      <h1>{again}</h1>
    </main>
  );
}
