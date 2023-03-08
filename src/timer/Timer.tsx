import { useEffect } from 'react';

interface TimerProps {
  time: number;
  paused: boolean;
  setTime: (newTime: number) => void;
}

const Timer = (props: TimerProps) => {
  // const [time, setTime] = useState(props.time || 60000);
  // const [paused, setPaused] = useState(props.paused || false);

  useEffect(() => {
    if (props.time > 0 && !props.paused) {
      const timer = setTimeout(() => {
        props.setTime(props.time - 1000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  return <div>Timer {String(props.time)}</div>;
};

export default Timer;
