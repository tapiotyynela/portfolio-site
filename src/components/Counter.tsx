import { useEffect, useState } from 'react';
import { CounterProps } from '../types/Counter/counterTypes';

export const Counter = ({ startTime }: CounterProps) => {
    const [time, setTime] = useState({
        years: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
    });

    useEffect(() => {
        getDateDiff();
        const interval = setInterval(getDateDiff, 1000);
        return () => clearInterval(interval);
    }, []);

    const getDateDiff = () => {
        const years = new Date().getFullYear() - startTime.getFullYear();
        const now: any = new Date();
        const start: any = new Date(now.getFullYear(), 0, 0);
        const diff =
            now -
            start +
            (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
        const oneDay = 1000 * 60 * 60 * 24;
        const days = Math.floor(diff / oneDay);
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        const seconds = new Date().getSeconds();
        setTime({
            years: years.toString(),
            days: days.toString(),
            hours: hours.toString(),
            minutes: minutes.toString(),
            seconds: seconds.toString(),
        });
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p style={{ color: '#ffffff' }}> {` Started: ${time.years} `} </p>
            <p style={{ color: '#ffffff' }}> {` years ${time.days}`}</p>
            <p style={{ color: '#ffffff' }}>{`days ${time.hours}`}</p>
            <p style={{ color: '#ffffff' }}>{`hours ${time.minutes}`}</p>
            <p style={{ color: '#ffffff' }}>{`minutes ${time.seconds}`}</p>
            <p style={{ color: '#ffffff' }}> seconds ago</p>
        </div>
    );
};
