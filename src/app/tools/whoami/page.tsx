'use client'
import { useEffect, useState } from "react";

export default function WhoAmI() {
  const [ip, setIP] = useState('');
  useEffect(() => {
    fetch('/api/getip')
      .then(res => res.json())
      .then(data => setIP(data.ip))
      .catch(err => console.error('Error fetching IP:', err));
  }, []);
  

  return (
    <div>WhoAmI {ip}</div>
  );
}