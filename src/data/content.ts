export const history = [
  { year: "1876", title: "声音成为电信号", text: "电话的发明证明声音可以被转换、传输与重现，为电子声音打开入口。" },
  { year: "1948", title: "磁带音乐诞生", text: "法国的具体音乐把火车、锅炉等录音剪切重组：音乐不再只来自乐器。" },
  { year: "1964", title: "模块合成器登场", text: "Moog 合成器用振荡器、滤波器与控制电压，让音乐家真正“雕刻”声音。" },
  { year: "1983", title: "MIDI 建立共同语言", text: "不同品牌的电子乐器开始交换音符、速度与控制信息。" },
  { year: "1980s", title: "舞池文化爆发", text: "芝加哥 House 与底特律 Techno 把鼓机、采样器和未来主义带进夜店。" },
  { year: "Today", title: "工作室进入笔记本", text: "一台电脑就能完成作曲、合成、混音与发行，声音设计成为大众语言。" },
];

export const genres = [
  { name: "House", bpm: "118–130", origin: "芝加哥", color: "lime", text: "温暖、循环、四拍踩镲与充满灵魂的律动。", pattern: "● · ● · ● · ● ·" },
  { name: "Techno", bpm: "125–145", origin: "底特律", color: "violet", text: "机械脉冲、未来主义与不断演化的重复结构。", pattern: "● ◦ ● ◦ ● ◦ ● ◦" },
  { name: "Trance", bpm: "128–145", origin: "德国", color: "cyan", text: "长线铺陈、琶音与情绪高涨的释放时刻。", pattern: "╱╲╱╲╱╲╱╲" },
  { name: "Dubstep", bpm: "≈ 140", origin: "伦敦", color: "orange", text: "半拍律动、深沉次低音和剧烈调制的贝斯。", pattern: "● · · ◉ · · ● ·" },
  { name: "Ambient", bpm: "自由", origin: "英国", color: "blue", text: "空间、纹理与缓慢变化，让环境本身成为音乐。", pattern: "≈ ～～ ≈ ～～" },
  { name: "Drum & Bass", bpm: "160–180", origin: "英国", color: "pink", text: "高速碎拍与滚动的低音线，兼具速度与重量。", pattern: "●·● ·●●· ●·" },
];

export const terms = [
  ["ADSR", "包络的四个阶段：起音、衰减、延音、释音。"],
  ["BPM", "每分钟节拍数，用来描述音乐速度。"],
  ["Cutoff", "滤波器截止频率，决定哪些频率能通过。"],
  ["DAW", "数字音频工作站，例如 Ableton Live、Logic Pro。"],
  ["LFO", "低频振荡器，用慢速周期信号调制音高、音量等参数。"],
  ["MIDI", "传递音符与控制信息的协议，本身并不包含声音。"],
  ["Oscillator", "振荡器，合成器产生基础波形的声源。"],
  ["Resonance", "共振，强调滤波器截止频率附近的频率。"],
  ["Sample", "采样，被录下并用于音乐创作的一段声音。"],
  ["Sequencer", "音序器，按照时间顺序记录并播放音乐事件。"],
  ["Sidechain", "侧链，用一个声音控制另一个声音，常制造抽吸感。"],
  ["Synthesizer", "合成器，通过电子或数字方式生成、塑造声音。"],
];
