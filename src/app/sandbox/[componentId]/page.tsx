"use client";

import { useState } from "react";

type SandboxState = "default" | "loading" | "error" | "empty";

const states: SandboxState[] = ["default", "loading", "error", "empty"];

export default function SandboxPage({
  params,
}: {
  params: Promise<{ componentId: string }>;
}) {
  const [activeState, setActiveState] = useState<SandboxState>("default");
  const componentId = "review-panel";

  void params;

  return (
    <main className="sandbox-shell">
      <header className="topbar">
        <a className="wordmark" href="/">
          <span className="wordmark-mark">A</span>
          Anti-Slop UI
        </a>
        <span className="route-label">Sandbox / {componentId}</span>
      </header>
      <section className="sandbox-layout">
        <aside className="sandbox-sidebar">
          <p className="eyebrow">Component showcase</p>
          <h1>Stress the edges.</h1>
          <p className="sidebar-copy">
            Preview generated components against the states that usually get
            forgotten.
          </p>
          <div className="state-list" role="group" aria-label="Preview states">
            {states.map((state) => (
              <button
                className={`state-button ${activeState === state ? "is-active" : ""}`}
                key={state}
                onClick={() => setActiveState(state)}
              >
                <span className="state-dot" />
                {state}
              </button>
            ))}
          </div>
        </aside>
        <section className="preview-area">
          <div className="preview-toolbar">
            <span>Live preview</span>
            <span className="toolbar-status"><span className="status-dot" /> Tokens locked</span>
          </div>
          <div className="preview-stage">
            <div className="review-panel">
              <div className="panel-kicker">Field note 042</div>
              {activeState === "loading" && (
                <div className="state-message"><span className="spin" aria-hidden="true">o</span><span>Loading review...</span></div>
              )}
              {activeState === "error" && (
                <div className="state-message error-message"><span aria-hidden="true">!</span><span>Review could not be loaded.</span></div>
              )}
              {activeState === "empty" && (
                <div className="state-message"><span aria-hidden="true">[]</span><span>No review notes yet.</span></div>
              )}
              {activeState === "default" && (
                <>
                  <div className="panel-heading-row">
                    <h2>North meadow access gate</h2>
                    <span className="badge">Open</span>
                  </div>
                  <p className="panel-body">The latch still catches after rain. Confirm replacement part before the next site visit.</p>
                  <div className="panel-footer"><span>Updated 12 min ago</span><span aria-hidden="true">[x]</span> Ready for review</div>
                </>
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}