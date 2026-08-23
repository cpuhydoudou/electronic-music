"use client";

import { useEffect, useRef, useState } from "react";

export default function BeatLab() {
  const [bpm, setBpm] = useState(124);
  const [playing, setPlaying] = useState(false);
  const [beat, setBeat] = useState(0);
  const contextRef = useRef<AudioContext | null>(null);
  const beatRef = useRef(0);

  useEffect(() => {
    if (!playing) { beatRef.current = 0; setBeat(0); return; }
    const tick = () => {
      const context = contextRef.current ?? new AudioContext();
      contextRef.current = context;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.value = beatRef.current === 0 ? 1000 : 720;
      gain.gain.setValueAtTime(0.11, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.06);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.065);
      beatRef.current = (beatRef.current + 1) % 4;
      setBeat(beatRef.current);
    };
    tick();
    const timer = window.setInterval(tick, 60000 / bpm);
    return () => window.clearInterval(timer);
  }, [playing, bpm]);

  useEffect(() => () => { void contextRef.current?.close(); }, []);

  return (
    <div className="beat-lab">
      <div className="tempo-readout"><span>{bpm}</span><small>BPM</small></div>
      <div className="beat-dots" aria-label={`四拍指示器，当前第 ${beat + 1} 拍`} role="status" aria-live="polite">{[0,1,2,3].map((item) => <span aria-hidden="true" className={playing && beat === item ? "on" : ""} key={item}>{item + 1}</span>)}</div>
      <label htmlFor="bpm">调整速度</label>
      <input id="bpm" type="range" min="60" max="180" value={bpm} aria-valuetext={`${bpm} BPM`} onChange={(e) => setBpm(Number(e.target.value))} />
      <div className="tempo-labels"><span>60 慢板</span><span>120 舞曲</span><span>180 高速</span></div>
      <button className="beat-button" onClick={() => setPlaying((value) => !value)}>{playing ? "■ 停止节拍" : "▶ 启动节拍器"}</button>
    </div>
  );
}