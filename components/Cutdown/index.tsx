import { useEffect, useState } from "react";

export default function Cutdown() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("02/25/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-cutdown">
      <h1>Hari yang ditunggu</h1>
      <div className="cutdown">
        <div className="days">
          <h3>
            <span className="time">{days}</span>
          </h3>
          <h4>Days</h4>
        </div>
        <div className="hours">
          <h3>
            <span className="time">{hours}</span>
          </h3>
          <h4>Hours</h4>
        </div>
        <div className="mins">
          <h3>
            <span className="time">{minutes}</span>
          </h3>
          <h4>Minute</h4>
        </div>
        <div className="seconds">
          <h3>
            <span className="time">{seconds}</span>
          </h3>
          <h4>Second</h4>
        </div>
      </div>
    </div>
  );
}
