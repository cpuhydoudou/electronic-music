"use client";

import { useEffect, useRef, useState } from "react";

type Wave = "sine" | "square" | "sawtooth";
const waves: { id: Wave; cn: string; en: string; description: string; path: string }[] = [
  { id: "sine", cn: "正弦波", en: "SINE", description: "纯净、柔和，只有一个基频。", path: "M0 32 C20 2 44 2 64 32 S108 62 128 32 S172 2 192 32" },
  { id: "square", cn: "方波", en: "SQUARE", description: "明亮、中空，像经典游戏机。", path: "M0 48 V16 H48 V48 H96 V16 H144 V48 H192" },
  { id: "sawtooth", cn: "锯齿波", en: "SAW", description: "锐利、饱满，适合铜管与贝斯。", path: "M0 48 L48 16 V48 L96 16 V48 L144 16 V48 L192 16" },
];

export default function WaveLab() {
  const [active, setActive] = useState<Wave | null>(null);
  const [frequency, setFrequency] = useState(220);
  const contextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const stop = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
    setActive(null);
  };

  const play = (wave: Wave) => {
    if (active === wave) return stop();
    stop();
    const AudioContextClass = window.AudioContext;
    const context = contextRef.current ?? new AudioContextClass();
    contextRef.current = context;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = wave;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, context.currentTime + 0.03);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillatorRef.current = oscillator;
    gainRef.current = gain;
    setActive(wave);
  };

  useEffect(() => {
    if (oscillatorRef.current && contextRef.current) {
      oscillatorRef.current.frequency.setTargetAtTime(frequency, contextRef.current.currentTime, 0.02);
    }
  }, [frequency]);

  useEffect(() => () => {
    oscillatorRef.current?.stop();
    void contextRef.current?.close();
  }, []);

  return (
    <div className="wave-lab">
      <div className="wave-grid">
        {waves.map((wave) => (
          <button className={`wave-card ${active === wave.id ? "is-active" : ""}`} key={wave.id} onClick={() => play(wave.id)} aria-pressed={active === wave.id}>
            <span className="wave-meta"><b>{wave.cn}</b><small>{wave.en}</small></span>
            <svg viewBox="0 0 192 64" role="img" aria-label={`${wave.cn}波形`}><path d={wave.path} /></svg>
            <span className="wave-description">{wave.description}</span>
            <span className="play-control"><i>{active === wave.id ? "■" : "▶"}</i>{active === wave.id ? "停止试听" : "点击试听"}</span>
          </button>
        ))}
      </div>
      <div className="frequency-control">
        <label htmlFor="frequency">基频 <strong>{frequency} Hz</strong></label>
        <input id="frequency" type="range" min="80" max="880" value={frequency} onChange={(e) => setFrequency(Number(e.target.value))} />
        <div><span>低沉</span><span>A4 = 440 Hz</span><span>明亮</span></div>
      </div>
      <p className="audio-note">请调低设备音量后试听。同一时间只播放一种波形。</p>
    </div>
  );
}
