'use client';

import { useEffect, useState } from "react";

export default function WhoAmI() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const lang = navigator.language;
    const resolution = window.screen.width + '*' + window.screen.height;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    setUserInfo({
      userAgent,
      lang,
      resolution,
      timezone,
    });
  }, []);

  return (
    <div>{JSON.stringify(userInfo)}</div>
  );
}