import BeatLab from "@/components/BeatLab";
import Glossary from "@/components/Glossary";
import WaveLab from "@/components/WaveLab";
import { genres, history } from "@/data/content";

const SectionTitle = ({ kicker, title, text }: { kicker: string; title: string; text: string }) => (
  <header className="section-title"><p>{kicker}</p><h2>{title}</h2><span>{text}</span></header>
);

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="声波档案馆首页"><i>◉</i><span>声波档案馆<small>SONIC ARCHIVE</small></span></a>
        <div className="nav-links"><a href="#history">历史</a><a href="#genres">流派</a><a href="#synth">合成器</a><a href="#tempo">节拍</a><a href="#glossary">词典</a></div>
        <a className="nav-cta" href="#wave-lab"><span>●</span> 开始实验</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>实验性声音指南</span><i></i> NO. 001</p>
          <h1>从电流到<br/><em>舞池。</em></h1>
          <p className="hero-lead">电子音乐不是一种声音，而是一种创造声音的方法。戴上耳机，亲手塑造一束看不见的波。</p>
          <div className="hero-actions"><a className="primary" href="#wave-lab">进入声音实验室 <b>↘</b></a><a href="#history">从历史开始 <span>↓</span></a></div>
          <div className="hero-stats"><div><b>150+</b><span>年声音探索</span></div><div><b>∞</b><span>种可能波形</span></div><div><b>4/4</b><span>舞池通用密码</span></div></div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="record"><div className="record-lines"></div><div className="record-label"><b>OSC</b><span>220 HZ</span></div></div>
          <div className="scope"><span>LIVE SIGNAL</span><svg viewBox="0 0 300 90"><path d="M0 45 C18 5 35 5 52 45 S88 85 105 45 S140 5 158 45 S193 85 210 45 S245 5 263 45 S282 85 300 45" /></svg></div>
          <span className="visual-note note-a">AMPLITUDE<br/>↗ 0.72</span><span className="visual-note note-b">WAVEFORM<br/>SINE_01</span>
        </div>
      </section>

      <div className="ticker"><div>OSCILLATOR <i>✦</i> FILTER <i>✦</i> AMPLIFIER <i>✦</i> SEQUENCER <i>✦</i> MODULATION <i>✦</i> OSCILLATOR <i>✦</i> FILTER <i>✦</i> AMPLIFIER</div></div>

      <section className="section shell" id="history">
        <SectionTitle kicker="01 / 时间轴" title="声音如何变成电子？" text="这不是一夜之间发生的革命。每一次技术跃迁，都让声音离开原来的容器。" />
        <div className="timeline">{history.map((item, index) => <article key={item.year}><div className="timeline-year"><span>{String(index + 1).padStart(2,"0")}</span><b>{item.year}</b></div><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>

      <section className="section genre-section" id="genres"><div className="shell">
        <SectionTitle kicker="02 / 声音地图" title="不止一种舞池语言" text="流派不是边界，而是寻找声音的坐标。速度、地域与技术共同塑造了不同的身体感受。" />
        <div className="genre-grid">{genres.map((genre, index) => <article className={`genre-card ${genre.color}`} key={genre.name}><div className="genre-top"><span>0{index + 1}</span><i>{genre.origin}</i></div><h3>{genre.name}</h3><p>{genre.text}</p><div className="pattern">{genre.pattern}</div><footer><span>TEMPO</span><b>{genre.bpm} BPM</b></footer></article>)}</div>
      </div></section>

      <section className="section shell" id="synth">
        <SectionTitle kicker="03 / 信号路径" title="合成器：一座声音工厂" text="合成不是挑选预制音色，而是从简单波形开始，经过一连串机器，把声音塑造成想要的样子。" />
        <div className="signal-chain">
          <article><span>01</span><div className="module-icon wave-icon">∿</div><h3>振荡器</h3><small>OSCILLATOR</small><p>产生原始波形<br/>声音的“原材料”</p></article><i>→</i>
          <article><span>02</span><div className="module-icon filter-icon">⌁</div><h3>滤波器</h3><small>FILTER</small><p>削减部分频率<br/>改变声音的“明暗”</p></article><i>→</i>
          <article><span>03</span><div className="module-icon envelope-icon">⌁</div><h3>包络</h3><small>ENVELOPE</small><p>控制声音随时间变化<br/>塑造“起承转合”</p></article><i>→</i>
          <article><span>04</span><div className="module-icon amp-icon">◢</div><h3>放大器</h3><small>AMPLIFIER</small><p>控制最终音量<br/>把信号送往扬声器</p></article>
        </div>
        <aside className="signal-note"><b>把它想象成雕塑</b><p>振荡器提供一块石头，滤波器削去多余部分，包络赋予动作，放大器决定它离你多近。</p></aside>
      </section>

      <section className="section lab-section" id="wave-lab"><div className="shell">
        <SectionTitle kicker="04 / 互动实验" title="听见波形的形状" text="不同波形含有不同的泛音组合。点击卡片试听，再拖动频率，感受音高如何改变。" />
        <WaveLab />
      </div></section>

      <section className="section shell tempo-section" id="tempo">
        <SectionTitle kicker="05 / 节拍实验" title="BPM：时间的刻度" text="BPM 是 Beats Per Minute 的缩写。它告诉我们一分钟有多少拍，也决定身体如何回应音乐。" />
        <div className="tempo-layout"><div className="tempo-copy"><p>绝大多数舞曲使用 <strong>4/4 拍</strong>：每小节四拍，底鼓常常稳稳落在每一拍上。</p><div className="count-row">{["1","2","3","4"].map((n) => <span key={n}><b>{n}</b><i>KICK</i></span>)}</div><p className="tip"><i>TIP</i> House 常在 120–128 BPM，而 Drum & Bass 可以达到 170 BPM。速度改变的不只是快慢，还有律动的感知方式。</p></div><BeatLab /></div>
      </section>

      <section className="section glossary-section" id="glossary"><div className="shell">
        <SectionTitle kicker="06 / 快速索引" title="电子音乐术语词典" text="从 ADSR 到 Sidechain，把制作人常说的“黑话”翻译成人话。" />
        <Glossary />
      </div></section>

      <footer className="footer shell"><div className="brand"><i>◉</i><span>声波档案馆<small>SONIC ARCHIVE</small></span></div><p>保持好奇，保持聆听。<br/>声音的未来，正在被你创造。</p><a href="#top">回到顶部 ↑</a><small>© 2026 SONIC ARCHIVE · 为每一双好奇的耳朵制作</small></footer>
    </main>
  );
}
