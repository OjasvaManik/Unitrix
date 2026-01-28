"use client";

import { useEffect, useState } from "react";
import { bebasNeue, righteous } from "@/types/fonts";
import { cn } from "@/lib/utils";


export default function HexClock() {
  const [ time, setTime ] = useState<Date | null>( null );

  useEffect( () => {
    const updateTime = () => setTime( new Date() );
    updateTime();

    const timer = setInterval( updateTime, 1000 );
    return () => clearInterval( timer );
  }, [] );

  if ( !time ) return null;

  const format = ( n: number ) => n.toString().padStart( 2, "0" );

  const hours = format( time.getHours() );
  const minutes = format( time.getMinutes() );
  const seconds = format( time.getSeconds() );

  const hexColor = `#${ hours }${ minutes }${ seconds }`;

  return (
    <main
      className={ cn( "flex flex-col items-center justify-center transition-colors duration-700 ease-in-out bg-background rounded-lg", bebasNeue.className ) }
      style={ { backgroundColor: hexColor } }
    >
      <div className="flex flex-col items-center justify-center p-12 backdrop-blur-md">
        <div className="relative group flex items-center justify-center">
          {/* Hex Display - REMOVED font-mono */ }
          <h1
            className="text-7xl md:text-9xl font-black text-white tracking-tighter select-none tabular-nums drop-shadow-md group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300">
            { hexColor }
          </h1>

          {/* Real Time Overlay - REMOVED font-mono */ }
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-primary backdrop-blur-lg rounded-xl">
            <span className="text-4xl md:text-6xl font-bold text-white tabular-nums">
              { hours }:{ minutes }:{ seconds }
            </span>
          </div>
        </div>

        {/* Label - REMOVED font-mono */ }
        <p className={ cn( "mt-6 text-white/60 text-xs tracking-widest uppercase", righteous.className ) }>
          Current Hex Color
        </p>
      </div>
    </main>
  );
}