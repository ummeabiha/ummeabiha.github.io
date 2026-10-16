import { Component, computed, signal } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal.directive';
import { ProjectCat, profile, projects } from '../data/portfolio.data';

type Filter = 'All' | ProjectCat;

@Component({
  selector: 'app-projects',
  imports: [Icon, Reveal],
  template: `
    <section id="projects" class="block">
      <div class="container">
        <div class="sec-head" reveal>
          <span class="pill">Featured Projects</span>
          <h2>Some of my recent work</h2>
          <div class="line"></div>
        </div>

        <div class="filters" reveal role="tablist">
          @for (f of filters; track f) {
            <button role="tab" [class.on]="filter() === f" [attr.aria-selected]="filter() === f" (click)="filter.set(f)">
              {{ f }} <span class="count">{{ count(f) }}</span>
            </button>
          }
        </div>

        <div class="grid">
          @for (p of visible(); track p.title; let i = $index) {
            <article class="card glass hover" [class.featured]="p.badge === 'Featured' && filter() !== 'Web & Mobile'" [attr.data-cat]="p.cat">
              <div class="art">
                <span class="num mono">{{ (i + 1).toString().padStart(2, '0') }}</span>
                @if (p.badge) { <span class="badge">{{ p.badge }}</span> }
                <span class="big"><app-icon [name]="p.icon" [size]="34" [stroke]="1.6" /></span>
              </div>
              <div class="body">
                <span class="cat">{{ p.cat }}</span>
                <h3>{{ p.title }}</h3>
                <p>{{ p.blurb }}</p>
                @if (p.metric) { <div class="metric"><app-icon name="activity" [size]="15" /> {{ p.metric }}</div> }
                <div class="foot">
                  <div class="tags">
                    @for (t of p.tags; track t) { <span class="tag">{{ t }}</span> }
                  </div>
                  @if (p.link) {
                    <a class="gh" [href]="p.link" target="_blank" rel="noopener" [attr.aria-label]="p.title + ' on GitHub'">
                      <app-icon name="github" [size]="18" />
                    </a>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <div class="more" reveal>
          <a class="btn btn-ghost" [href]="links.github" target="_blank" rel="noopener">
            <app-icon name="github" [size]="18" /> More on GitHub <app-icon name="arrow" [size]="16" />
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .filters { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; margin-bottom: 36px; }
    .filters button { padding: 9px 16px; border-radius: 999px; border: 1px solid var(--border); background: rgba(255,255,255,.03); color: var(--muted); font-weight: 600; font-size: .88rem; display: inline-flex; align-items: center; gap: 8px; transition: .2s; }
    .filters button:hover { color: var(--text); border-color: var(--border-strong); }
    .filters button.on { background: var(--grad); color: #0b0f22; border-color: transparent; }
    .count { font-size: .72rem; padding: 1px 7px; border-radius: 999px; background: rgba(255,255,255,.08); }
    .on .count { background: rgba(11,15,34,.18); }

    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    .card { display: flex; flex-direction: column; overflow: hidden; animation: pop .45s ease both; }
    .card.featured { grid-column: span 2; }
    .card.featured .art { height: 150px; }

    .art { position: relative; height: 130px; display: grid; place-items: center; overflow: hidden;
      background: radial-gradient(circle at 20% 20%, rgba(139,123,255,.45), transparent 55%), radial-gradient(circle at 85% 90%, rgba(46,230,214,.35), transparent 55%), #0f1736; }
    [data-cat='.NET'] .art { background: radial-gradient(circle at 20% 20%, rgba(116,77,255,.55), transparent 55%), radial-gradient(circle at 85% 90%, rgba(91,140,255,.4), transparent 55%), #10163a; }
    [data-cat='Web & Mobile'] .art { background: radial-gradient(circle at 20% 20%, rgba(46,230,214,.4), transparent 55%), radial-gradient(circle at 85% 90%, rgba(91,140,255,.35), transparent 55%), #0d1a30; }
    .art::after { content: ''; position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px); background-size: 16px 16px; mask-image: linear-gradient(transparent, #000); }
    .big { position: relative; z-index: 1; width: 72px; height: 72px; border-radius: 20px; display: grid; place-items: center; background: rgba(10,15,36,.55); border: 1px solid rgba(255,255,255,.18); backdrop-filter: blur(8px); color: #fff; transition: transform .35s; }
    .card:hover .big { transform: scale(1.08) rotate(-4deg); }
    .num { position: absolute; z-index: 1; top: 12px; left: 14px; font-size: .78rem; color: rgba(255,255,255,.7); }
    .badge { position: absolute; z-index: 1; top: 10px; right: 12px; font-size: .7rem; font-weight: 700; padding: 4px 10px; border-radius: 999px; background: rgba(10,15,36,.6); border: 1px solid rgba(255,255,255,.2); color: #fff; }

    .body { padding: 20px 22px 22px; display: flex; flex-direction: column; flex: 1; }
    .cat { font-size: .7rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); }
    h3 { font-size: 1.1rem; font-weight: 700; margin: 6px 0 8px; letter-spacing: -.01em; }
    p { color: var(--muted); font-size: .9rem; flex: 1; }
    .metric { display: inline-flex; align-self: flex-start; align-items: center; gap: 7px; margin-top: 14px; font-size: .8rem; font-weight: 600; color: #cfc8ff; background: rgba(124,108,255,.12); border: 1px solid rgba(124,108,255,.25); padding: 5px 10px; border-radius: 8px; }
    .foot { display: flex; align-items: flex-end; justify-content: space-between; gap: 10px; margin-top: 16px; }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .gh { flex: none; width: 38px; height: 38px; border-radius: 11px; display: grid; place-items: center; border: 1px solid var(--border-strong); color: var(--text); transition: .2s; }
    .gh:hover { background: var(--grad); color: #0b0f22; border-color: transparent; }

    .more { text-align: center; margin-top: 40px; }
    @keyframes pop { from { opacity: 0; transform: translateY(14px) scale(.98); } }

    @media (max-width: 960px) { .grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 620px) { .grid { grid-template-columns: 1fr; } .card.featured { grid-column: auto; } }
  `,
})
export class Projects {
  links = profile.links;
  filters: Filter[] = ['All', 'AI', '.NET', 'Web & Mobile'];
  filter = signal<Filter>('All');
  visible = computed(() => this.filter() === 'All' ? projects : projects.filter(p => p.cat === this.filter()));
  count = (f: Filter) => f === 'All' ? projects.length : projects.filter(p => p.cat === f).length;
}
