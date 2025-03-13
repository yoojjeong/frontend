// 현재 시각을 출력하는 함수

import { useEffect, useState } from "react";

export default function Time() {
  const [dateTime, setDateTime] = useState(getFormattedDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000); // 1초마다 시간과 날짜 갱신

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  return (
    <div className="text-white font-medium text-sm">
      <span>{`${dateTime.date} ${dateTime.time}`}</span>
    </div>
  );
}

// 날짜-시간 포매팅
function getFormattedDateTime() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return {
    date: `${year}-${month}-${day}`, // 2025-03-13
    time: `${hours}:${minutes}:${seconds}`, // 15:21:00
  };
}
