import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal.directive';
import { highlights, profile, stats } from '../data/portfolio.data';

@Component({
  selector: 'app-about',
  imports: [Icon, Reveal],
  template: `
    <section id="about" class="block">
      <div class="container">
        <div class="top">
          <div class="text" reveal>
            <span class="pill">About me</span>
            <h2>Building software people can <span class="grad-text">depend on.</span></h2>
            <p>{{ p.intro }}</p>
            <div class="meta">
              <span><app-icon name="pin" [size]="16" /> {{ p.location }}</span>
              <span><app-icon name="languages" [size]="16" /> Urdu · English · Chinese</span>
            </div>
          </div>

          <div class="stats">
            @for (s of stats; track s.label; let i = $index) {
              <div class="stat glass hover" reveal [revealDelay]="i * 80">
                <span class="icon-tile"><app-icon [name]="s.icon" /></span>
                <div><b>{{ s.value }}</b><small>{{ s.label }}</small></div>
              </div>
            }
          </div>
        </div>

        <div class="cards">
          @for (h of highlights; track h.title; let i = $index) {
            <div class="card glass hover" reveal [revealDelay]="i * 100">
              <span class="icon-tile"><app-icon [name]="h.icon" /></span>
              <h3>{{ h.title }}</h3>
              <p>{{ h.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .block { background: linear-gradient(180deg, transparent, var(--bg-2) 30%, var(--bg-2) 70%, transparent); }
    .top { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
    h2 { font-size: clamp(1.8rem, 3.6vw, 2.5rem); font-weight: 700; letter-spacing: -.03em; line-height: 1.15; margin: 16px 0 16px; }
    .text p { color: var(--muted); font-size: 1.05rem; max-width: 480px; }
    .meta { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 22px; color: var(--faint); font-size: .9rem; }
    .meta span { display: inline-flex; align-items: center; gap: 7px; }
    .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .stat { display: flex; align-items: center; gap: 16px; padding: 22px; }
    .stat b { display: block; font-size: 1.75rem; font-weight: 800; letter-spacing: -.03em; line-height: 1.1; }
    .stat small { color: var(--muted); font-size: .86rem; }
    .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 56px; }
    .card { padding: 26px; }
    .card h3 { font-size: 1.08rem; margin: 18px 0 6px; }
    .card p { color: var(--muted); font-size: .92rem; }
    @media (max-width: 900px) { .top { grid-template-columns: 1fr; gap: 36px; } .cards { grid-template-columns: 1fr; } }
    @media (max-width: 420px) { .stat { flex-direction: column; align-items: flex-start; gap: 12px; padding: 18px; } }
  `,
})
export class About {
  p = profile;
  stats = stats;
  highlights = highlights;
}
