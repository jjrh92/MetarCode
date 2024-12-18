/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [icaoCode, setIcaoCode] = useState('');
  const [metarResult, setMetarResult] = useState('');
  const [tafResult, setTafResult] = useState('');

  const apiKey = process.env.NEXT_PUBLIC_API_KEY; // Using environment variable here because we don't want to show the API key to the public

  const fetchMetar = async (code: string) => {
    try {
      const response = await fetch(`https://api.checkwx.com/bot/metar/${code}`, {
        method: 'GET',
        headers: {
          'X-API-Key': apiKey as string // Assert apiKey as string
        },
        redirect: 'follow'
      });
      const result = await response.text();
      setMetarResult(result);
    } catch (error) {
      console.error('Error fetching METAR data:', error);
    }
  };
  
  const fetchTaf = async (code: string) => {
    try {
      const response = await fetch(`https://api.checkwx.com/bot/taf/${code}`, {
        method: 'GET',
        headers: {
          'X-API-Key': apiKey as string // Assert apiKey as string
        },
        redirect: 'follow'
      });
      const result = await response.text();
      setTafResult(result);
    } catch (error) {
      console.error('Error fetching TAF data:', error);
    }
  };

  const handleInputChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value.toUpperCase();
    setIcaoCode(value);
  };

  useEffect(() => {
    if (icaoCode.length === 4) {
      fetchMetar(icaoCode);
      fetchTaf(icaoCode);
    }
  }, [fetchMetar, fetchTaf, icaoCode]);

  return (
    <main className="flex md:flex-row flex-col items-center justify-center sm:justify-around h-screen bg-blue-100 sm:px-20 sm:py-20">
      <div className="flex flex-col items-center gap-0 md:gap-2">
        <h1 className="hidden sm:flex text-xl md:text-6xl">METAR CODE</h1>
        <h2 className="text-2xl text-gray-500">Airport Code (ICAO)</h2>
        <input
          autoComplete='off'
          className="text-green-600 text-4xl sm:text-9xl w-[300px] mb-2 md:pb-0 sm:w-96 text-center font-bold"
          type="text"
          maxLength={4}
          placeholder="ICAO"
          id="icaoTextArea"
          value={icaoCode}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-1 sm:gap-5">
        <textarea
          placeholder="Code Result Metar"
          readOnly
          className="text-green-600 text-center text-balance align-middle w-[300px] sm:w-[40rem] h-[150px] sm:h-[15rem]"
          id="metarTextArea"
          value={metarResult}
        />
        <textarea
          placeholder="Code Result TAF"
          readOnly
          className="text-green-600 text-center text-balance w-[300px] sm:w-[40rem] h-[150px] sm:h-[15rem]"
          id="tafTextArea"
          value={tafResult}
        />
      </div>
    </main>
  );
}
