import Link from "next/link";

export default function Home() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="wordmark" href="/">
          <span className="wordmark-mark">A</span>
          Anti-Slop UI
        </a>
        <span className="version-pill">v0.1 / Constraint mode</span>
      </header>
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">A stricter creative instrument</p>
          <h1>Make less.<br /><em>Mean more.</em></h1>
          <p className="hero-description">An AI-powered UI generator that treats design constraints as product decisions, not suggestions.</p>
          <Link className="primary-button" href="/sandbox/review-panel">Open the sandbox <span aria-hidden="true">-&gt;</span></Link>
        </div>
        <div className="principle-board">
          <div className="board-header"><span>Active design system</span><span className="board-status"><span aria-hidden="true">o</span> Locked</span></div>
          <div className="board-title"><span>Field Notes</span><span className="board-version">1.0.0</span></div>
          <div className="token-rows">
            <div className="token-row"><span className="swatch ink" /><span>Purpose-driven color</span><b>07 tokens</b></div>
            <div className="token-row"><span className="swatch signal" /><span>Semantic states</span><b>07 states</b></div>
            <div className="token-row"><span className="spacing-mark"><i /><i /><i /></span><span>Spacing scale</span><b>06 steps</b></div>
          </div>
          <div className="board-rule" />
          <div className="board-footer"><span aria-hidden="true">[x]</span> No untracked utility classes</div>
        </div>
      </section>
      <section className="phase-strip">
        <div className="phase-intro"><span className="eyebrow">The four checks</span><p>Every interface passes through a deliberate sequence before it earns a place in production.</p></div>
        <div className="phase-item"><span>01</span><div><h2>Constrain</h2><p>Tokens before prompts.</p></div><span aria-hidden="true">+</span></div>
        <div className="phase-item"><span>02</span><div><h2>Explore</h2><p>States before export.</p></div><span aria-hidden="true">-</span></div>
        <div className="phase-item"><span>03</span><div><h2>Subtract</h2><p>Earn every element.</p></div><span aria-hidden="true">-</span></div>
      </section>
    </main>
  );
}
