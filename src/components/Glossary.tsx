"use client";

import { useState } from "react";
import { terms } from "@/data/content";

export default function Glossary() {
  const [query, setQuery] = useState("");
  const shown = terms.filter(([term, description]) => `${term}${description}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <div className="search-box"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索术语，例如 MIDI、滤波器……" aria-label="搜索术语" /></div>
      <div className="term-grid">
        {shown.map(([term, description]) => <article className="term-card" key={term}><h3>{term}</h3><p>{description}</p></article>)}
      </div>
      {shown.length === 0 && <p className="empty-state">没有找到相关术语，换个关键词试试。</p>}
    </div>
  );
}
