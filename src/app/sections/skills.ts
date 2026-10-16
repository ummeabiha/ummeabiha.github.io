import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal.directive';
import { concepts, skillGroups } from '../data/portfolio.data';

@Component({
  selector: 'app-skills',
  imports: [Icon, Reveal],
  template: `
    <section id="skills" class="block">
      <div class="container">
        <div class="sec-head" reveal>
          <span class="pill">My Skills</span>
          <h2>Technologies I work with</h2>
          <div class="line"></div>
        </div>

        <div class="groups">
          @for (g of groups; track g.title; let i = $index) {
            <div class="group glass" reveal [revealDelay]="i * 90">
              <div class="g-head">
                <span class="icon-tile sm"><app-icon [name]="g.icon" [size]="18" /></span>
                <h3>{{ g.title }}</h3>
              </div>
              <div class="tiles">
                @for (t of g.items; track t.name) {
                  <div class="tile">
                    <img [src]="'tech/' + t.logo + '.svg'" [alt]="t.name" [class.invert]="t.invert" width="30" height="30" loading="lazy" />
                    <span>{{ t.name }}</span>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>

      <div class="marquee" aria-label="Concepts and frameworks">
        <div class="track">
          @for (c of loop; track $index) {
            <span class="chip"><app-icon name="sparkles" [size]="14" /> {{ c }}</span>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .groups { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .group { padding: 20px; }
    .g-head { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
    .icon-tile.sm { width: 38px; height: 38px; border-radius: 11px; }
    h3 { font-size: 1rem; font-weight: 700; }
    .tiles { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .tile { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 14px 6px 12px; border-radius: 12px; background: rgba(255,255,255,.025); border: 1px solid transparent; transition: .2s; text-align: center; }
    .tile:hover { border-color: var(--border-strong); background: rgba(255,255,255,.05); transform: translateY(-2px); }
    .tile img { height: 30px; width: auto; max-width: 44px; object-fit: contain; }
    .tile img.invert { filter: invert(1) hue-rotate(180deg) brightness(1.2); }
    .tile span { font-size: .78rem; color: var(--muted); font-weight: 500; }

    .marquee { margin-top: 56px; overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); }
    .track { display: flex; gap: 12px; width: max-content; animation: scroll 40s linear infinite; }
    .marquee:hover .track { animation-play-state: paused; }
    .chip { display: inline-flex; align-items: center; gap: 7px; padding: 9px 16px; border-radius: 999px; border: 1px solid var(--border); background: rgba(255,255,255,.03); color: var(--muted); font-size: .88rem; font-weight: 500; white-space: nowrap; }
    .chip app-icon { color: var(--accent); }
    @keyframes scroll { to { transform: translateX(-50%); } }

    @media (max-width: 1000px) { .groups { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 560px) { .groups { grid-template-columns: 1fr; } .tiles { grid-template-columns: repeat(3, 1fr); } }
  `,
})
export class Skills {
  groups = skillGroups;
  loop = [...concepts, ...concepts];
}
