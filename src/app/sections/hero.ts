import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Icon } from '../shared/icon';
import { profile } from '../data/portfolio.data';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  template: `
    <section id="home" class="hero">
      <div class="bg-grid" aria-hidden="true"></div>
      <div class="glow g1" aria-hidden="true"></div>
      <div class="glow g2" aria-hidden="true"></div>

      <div class="container grid">
        <div class="copy">
          <span class="pill"><span class="live"></span>{{ p.title }}</span>
          <h1>Hi, I'm <span class="grad-text">{{ p.shortName }}</span></h1>
          <p class="typed mono">&gt; {{ typed() }}<span class="caret"></span></p>
          <p class="tagline">{{ p.tagline }}</p>

          <div class="cta">
            <a class="btn btn-primary" href="#projects">View My Work <app-icon name="arrow" [size]="18" /></a>
            <a class="btn btn-ghost" [href]="p.resume" download>Download CV <app-icon name="download" [size]="18" /></a>
          </div>

          <div class="stack">
            <span class="label">Core stack</span>
            <div class="logos">
              @for (t of stack; track t) {
                <span class="logo" [title]="t"><img [src]="'tech/' + t + '.svg'" [alt]="t" width="26" height="26" /></span>
              }
            </div>
          </div>
        </div>

        <div class="visual" aria-hidden="true">
          <div class="dots"></div>
          <div class="ring r1"></div>
          <div class="ring r2"></div>
          <div class="orb">
            @if (p.photo) {
              <img [src]="p.photo" [alt]="p.name" class="photo" />
            } @else {
              <span class="mono-initials">AR</span>
            }
          </div>

          <div class="float f1"><img src="tech/angular.svg" alt="" width="22" /> Angular</div>
          <div class="float f2"><img src="tech/dotnetcore.svg" alt="" width="22" /> .NET</div>
          <div class="float f3"><app-icon name="brain" [size]="18" /> AI / LLMs</div>

          <div class="code mono">
            <div class="code-top"><span></span><span></span><span></span><em>Developer.cs</em></div>
<pre><b class="k">var</b> abiha = <b class="k">new</b> <b class="t">Developer</b> {{ '{' }}
  Stack = [<b class="s">".NET"</b>, <b class="s">"Angular"</b>],
  Focus = <b class="s">"AI-powered apps"</b>,
  Learning = <b class="s">"MS AI @ FAST"</b>
{{ '}' }};</pre>
          </div>
        </div>
      </div>

      <a href="#about" class="scroll-hint" aria-label="Scroll down"><span></span></a>
    </section>
  `,
  styles: `
    .hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding: 120px 0 80px; overflow: hidden; }
    .bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(160,170,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(160,170,255,.05) 1px, transparent 1px); background-size: 56px 56px; mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%); }
    .glow { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
    .g1 { width: 520px; height: 520px; background: rgba(124,108,255,.28); top: -120px; right: -80px; }
    .g2 { width: 420px; height: 420px; background: rgba(46,230,214,.14); bottom: -160px; left: -120px; }

    .grid { position: relative; display: grid; grid-template-columns: 1.1fr 1fr; gap: 48px; align-items: center; width: 100%; }
    .pill { text-transform: none; letter-spacing: 0; font-size: .82rem; }
    .live { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 4px rgba(46,230,214,.2); animation: pulse 2s infinite; }
    h1 { font-size: clamp(2.8rem, 7vw, 4.6rem); font-weight: 800; letter-spacing: -.045em; line-height: 1.02; margin: 22px 0 14px; }
    .typed { font-size: clamp(1rem, 2.2vw, 1.25rem); color: var(--accent); min-height: 1.6em; }
    .caret { display: inline-block; width: 9px; height: 1.1em; background: var(--accent); margin-left: 3px; vertical-align: -3px; animation: blink 1s steps(1) infinite; }
    .tagline { font-size: clamp(1.15rem, 2.4vw, 1.45rem); font-weight: 600; margin-top: 10px; color: var(--text); max-width: 520px; letter-spacing: -.01em; }
    .cta { display: flex; flex-wrap: wrap; gap: 12px; margin: 34px 0 40px; }

    .stack .label { display: block; font-size: .72rem; letter-spacing: .16em; text-transform: uppercase; color: var(--faint); margin-bottom: 12px; font-weight: 600; }
    .logos { display: flex; flex-wrap: wrap; gap: 10px; }
    .logo { width: 48px; height: 48px; border-radius: 13px; display: grid; place-items: center; background: rgba(255,255,255,.04); border: 1px solid var(--border); transition: .25s; }
    .logo:hover { transform: translateY(-4px); border-color: var(--border-strong); background: rgba(255,255,255,.07); }

    .visual { position: relative; aspect-ratio: 1; max-width: 480px; width: 100%; justify-self: center; }
    .ring { position: absolute; border-radius: 50%; border: 1px dashed rgba(160,170,255,.18); }
    .r1 { inset: 4%; animation: spin 60s linear infinite; }
    .r2 { inset: 16%; border-style: solid; border-color: rgba(160,170,255,.08); }
    .orb { position: absolute; inset: 22%; border-radius: 50%; background: var(--grad); padding: 4px; box-shadow: 0 0 120px -10px rgba(124,108,255,.6); display: grid; place-items: center; }
    .orb::before { content: ''; position: absolute; inset: 4px; border-radius: 50%; background: radial-gradient(circle at 30% 25%, #1c2550, #0a1022 70%); }
    .mono-initials { position: relative; font-size: clamp(3rem, 8vw, 5.2rem); font-weight: 800; letter-spacing: -.04em; background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .photo { position: relative; width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
    .dots { position: absolute; top: 2%; right: 0; width: 90px; height: 90px; background-image: radial-gradient(rgba(160,170,255,.35) 1.5px, transparent 1.5px); background-size: 14px 14px; }

    .float { position: absolute; display: flex; align-items: center; gap: 8px; padding: 9px 14px; border-radius: 12px; font-size: .85rem; font-weight: 600; background: rgba(14,21,48,.85); border: 1px solid var(--border-strong); backdrop-filter: blur(10px); box-shadow: var(--shadow); animation: bob 6s ease-in-out infinite; }
    .f1 { top: 14%; left: 0; }
    .f2 { top: 40%; right: -4%; animation-delay: -2s; }
    .f3 { bottom: 26%; left: -2%; color: var(--accent); animation-delay: -4s; }

    .code { position: absolute; right: -2%; bottom: 0; width: 290px; background: rgba(10,15,36,.92); border: 1px solid var(--border-strong); border-radius: 14px; padding: 12px 16px 14px; font-size: .74rem; line-height: 1.75; box-shadow: var(--shadow); backdrop-filter: blur(10px); }
    .code-top { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
    .code-top span { width: 9px; height: 9px; border-radius: 50%; background: #ff6b6b; }
    .code-top span:nth-child(2) { background: #ffd166; } .code-top span:nth-child(3) { background: #3ee08f; }
    .code-top em { margin-left: 8px; font-style: normal; color: var(--faint); font-size: .7rem; }
    pre { font-family: inherit; color: #c7cdea; white-space: pre-wrap; }
    b { font-weight: 400; } .k { color: #b39dff; } .t { color: #2ee6d6; } .s { color: #ffd479; }

    .scroll-hint { position: absolute; bottom: 26px; left: 50%; translate: -50% 0; width: 24px; height: 38px; border: 2px solid var(--border-strong); border-radius: 14px; }
    .scroll-hint span { position: absolute; left: 50%; top: 7px; width: 4px; height: 8px; margin-left: -2px; border-radius: 2px; background: var(--accent); animation: wheel 1.8s infinite; }

    @keyframes blink { 50% { opacity: 0; } }
    @keyframes pulse { 50% { box-shadow: 0 0 0 7px rgba(46,230,214,0); } }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes bob { 50% { transform: translateY(-10px); } }
    @keyframes wheel { 0% { opacity: 0; transform: translateY(0); } 40% { opacity: 1; } 100% { opacity: 0; transform: translateY(12px); } }

    @media (max-width: 960px) {
      .hero { min-height: auto; padding: 110px 0 70px; }
      .grid { grid-template-columns: 1fr; gap: 56px; }
      .visual { max-width: 400px; }
      .scroll-hint { display: none; }
    }
    @media (max-width: 480px) {
      .code { width: 240px; font-size: .66rem; right: 0; }
      .f2 { right: 0; } .f3 { left: 0; }
      .float { font-size: .78rem; padding: 7px 11px; }
      .cta .btn { flex: 1; }
      .logo { width: 44px; height: 44px; }
    }
  `,
})
export class Hero implements OnInit, OnDestroy {
  p = profile;
  stack = ['csharp', 'dotnetcore', 'angular', 'typescript', 'microsoftsqlserver', 'azure', 'python', 'pytorch'];
  typed = signal('');
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit() { this.loop(0, 0, false); }
  ngOnDestroy() { clearTimeout(this.timer); }

  private loop(i: number, len: number, deleting: boolean) {
    const word = this.p.roles[i];
    this.typed.set(word.slice(0, len));
    let next = deleting ? len - 1 : len + 1;
    let delay = deleting ? 40 : 85;
    let ni = i, del = deleting;
    if (!deleting && len === word.length) { del = true; next = len; delay = 1800; }
    else if (deleting && len === 0) { del = false; ni = (i + 1) % this.p.roles.length; next = 0; delay = 300; }
    this.timer = setTimeout(() => this.loop(ni, next, del), delay);
  }
}
