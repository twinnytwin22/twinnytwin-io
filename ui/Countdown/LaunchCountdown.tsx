'use client'
import { useState, useEffect } from "react";
import moment from "moment";

type TimeRemaining = {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const LaunchCountdown = ({ targetDate }: { targetDate: Date }) => {
  console.log(targetDate)
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const difference = moment(targetDate).diff(now);
      const duration = moment.duration(difference);
      const weeks = Math.floor(duration.asWeeks());
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setTimeRemaining({ days, hours, minutes, seconds, weeks });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="mx-auto w-full max-w-sm relative z-10">
      <div className="grid grid-flow-col items-end text-white text-center justify-items-center content-center justify-center mx-auto font-owners">
        {timeRemaining.weeks > 0 && (
          <div className="flex flex-col justify-items-center content-center justify-center p-2.5 w-20">
            <div className=" font-bold">{timeRemaining.weeks % 100}</div>
            <div className="text-xs font-semibold md:p-1 font-owners">weeks</div>
          </div>
        )}
        {timeRemaining.days > 0 && (
          <div className="flex flex-col justify-items-center content-center justify-center p-2.5 w-20">
            <div className=" font-bold">{timeRemaining.days}</div>
            <div className="text-xs font-semibold md:p-1 font-owners">days</div>
          </div>
        )}
        {timeRemaining.hours > 0 && (
          <div className="flex flex-col justify-items-center content-center justify-center p-2.5 w-20">
            <div className=" font-bold">{timeRemaining.hours}</div>
            <div className="text-xs font-semibold md:p-1 font-owners">hours</div>
          </div>
        )}
        <div className="flex flex-col justify-items-center content-center justify-center p-2.5 w-20">
          <div className=" font-bold">{timeRemaining.minutes}</div>
          <div className="text-xs font-semibold md:p-1 font-owners">minutes</div>
        </div>
        <div className="flex flex-col justify-items-center content-center justify-center p-2.5 w-20">
          <div className=" font-bold">{timeRemaining.seconds}</div>
          <div className="text-xs font-semibold md:p-1 font-owners">seconds</div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCountdown;
