"use client";

import { useMemo, useState } from "react";

type Envelope = { attack: number; decay: number; sustain: number; release: number };
type Key = keyof Envelope;

const controls: { key: Key; short: string; name: string; help: string; min: number; max: number; step: number; unit: string }[] = [
  { key: "attack", short: "A", name: "起音 Attack", help: "从无声到最大音量", min: 0.05, max: 2, step: 0.05, unit: "s" },
  { key: "decay", short: "D", name: "衰减 Decay", help: "从峰值降到延音电平", min: 0.05, max: 2, step: 0.05, unit: "s" },
  { key: "sustain", short: "S", name: "延音 Sustain", help: "按住音符时保持的音量", min: 0, max: 1, step: 0.05, unit: "" },
  { key: "release", short: "R", name: "释音 Release", help: "松开按键后回到无声", min: 0.05, max: 3, step: 0.05, unit: "s" },
];

export default function ADSRLab() {
  const [values, setValues] = useState<Envelope>({ attack: 0.45, decay: 0.55, sustain: 0.62, release: 1.15 });
  const [triggered, setTriggered] = useState(false);
  const points = useMemo(() => {
    const attackX = 30 + (values.attack / 2) * 110;
    const decayX = attackX + 50 + (values.decay / 2) * 80;
    const sustainEnd = decayX + 105;
    const sustainY = 180 - values.sustain * 130;
    const releaseX = sustainEnd + 45 + (values.release / 3) * 100;
    return { attackX, decayX, sustainEnd, sustainY, releaseX };
  }, [values]);

  const update = (key: Key, value: number) => setValues((current) => ({ ...current, [key]: value }));

  return (
    <div className={`adsr-panel ${triggered ? "is-triggered" : ""}`}>
      <div className="adsr-display">
        <div className="display-head"><span>ENVELOPE GENERATOR</span><b>EG-01</b></div>
        <svg viewBox="0 0 470 220" role="img" aria-labelledby="adsr-chart-title adsr-chart-desc">
          <title id="adsr-chart-title">当前 ADSR 音量包络曲线</title>
          <desc id="adsr-chart-desc">曲线依次经过起音、衰减、延音与释音阶段；拖动下方控制器会实时改变曲线。</desc>
          <g className="adsr-grid">{[40,80,120,160,200].map((y) => <line x1="20" x2="450" y1={y} y2={y} key={y}/>)}</g>
          <path className="adsr-fill" d={`M20 190 L${points.attackX} 30 L${points.decayX} ${points.sustainY} L${points.sustainEnd} ${points.sustainY} L${points.releaseX} 190 Z`} />
          <path className="adsr-line" d={`M20 190 L${points.attackX} 30 L${points.decayX} ${points.sustainY} L${points.sustainEnd} ${points.sustainY} L${points.releaseX} 190`} />
          <g className="adsr-points"><circle cx={points.attackX} cy="30" r="5"/><circle cx={points.decayX} cy={points.sustainY} r="5"/><circle cx={points.sustainEnd} cy={points.sustainY} r="5"/></g>
          <g className="adsr-labels"><text x="22" y="210">0</text><text x={points.attackX - 5} y="20">A</text><text x={points.decayX - 5} y={points.sustainY - 12}>D</text><text x={points.sustainEnd - 5} y={points.sustainY - 12}>S</text><text x={points.releaseX - 5} y="210">R</text></g>
        </svg>
        <button type="button" className="gate-button" onPointerDown={() => setTriggered(true)} onPointerUp={() => setTriggered(false)} onPointerLeave={() => setTriggered(false)} onKeyDown={(event) => { if (event.key === " " || event.key === "Enter") setTriggered(true); }} onKeyUp={() => setTriggered(false)}>
          <span aria-hidden="true">{triggered ? "●" : "○"}</span> 按住触发包络
        </button>
      </div>
      <div className="adsr-controls">
        {controls.map((control) => (
          <div className="adsr-control" key={control.key}>
            <div className="knob-readout"><span aria-hidden="true">{control.short}</span><output htmlFor={`adsr-${control.key}`}>{values[control.key].toFixed(2)}{control.unit}</output></div>
            <label htmlFor={`adsr-${control.key}`}><b>{control.name}</b><small>{control.help}</small></label>
            <input id={`adsr-${control.key}`} type="range" min={control.min} max={control.max} step={control.step} value={values[control.key]} aria-valuetext={`${values[control.key].toFixed(2)}${control.unit}`} onChange={(event) => update(control.key, Number(event.target.value))}/>
          </div>
        ))}
      </div>
      <p className="adsr-explain"><b>ADSR 决定声音的“动作”。</b>短起音像敲击，长起音像渐入；高延音让声音持续饱满，长释音则留下更久的尾音。</p>
    </div>
  );
}
