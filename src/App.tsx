import { useState } from 'react';
import './App.css';
import Timer from './timer/Timer';
import Topics from './timer/Topics';

function App() {
  const [paused, setPaused] = useState(false);
  const [time, setTime] = useState(10000);

  return (
    <div className='App'>
      <Topics
        topics={[
          { title: 'Topic 1', active: true },
          { title: 'Topic 2', active: true },
        ]}
      />
      <Timer
        time={time}
        paused={paused}
        setTime={(newTime) => {
          setTime(newTime);
        }}
      />

      <button onClick={() => setPaused(!paused)}>
        {paused ? 'start' : 'pause'} timer
      </button>
      <button onClick={() => setTime(60000)}>1 min.</button>
      <button onClick={() => setTime(60000 * 5)}>5 min.</button>
      <button onClick={() => setTime(60000 * 10)}>10 min.</button>
    </div>
  );
}

export default App;
