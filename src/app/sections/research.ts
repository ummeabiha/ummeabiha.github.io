import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal.directive';
import { awards, profile, publications } from '../data/portfolio.data';

@Component({
  selector: 'app-research',
  imports: [Icon, Reveal],
  template: `
    <section id="research" class="block">
      <div class="container">
        <div class="sec-head" reveal>
          <span class="pill">Research & Awards</span>
          <h2>Publications & recognition</h2>
          <div class="line"></div>
        </div>

        <div class="pubs">
          @for (p of pubs; track p.link; let i = $index) {
            <a class="pub glass hover" [href]="p.link" target="_blank" rel="noopener" reveal [revealDelay]="i * 100">
              <span class="icon-tile"><app-icon name="book" /></span>
              <div>
                <span class="venue">{{ p.venue }}</span>
                <h3>{{ p.title }}</h3>
                <span class="read">Read paper <app-icon name="arrow" [size]="15" /></span>
              </div>
            </a>
          }
        </div>

        <div class="awards">
          @for (a of awards; track a.title; let i = $index) {
            <div class="award glass hover" reveal [revealDelay]="i * 70">
              <span class="ic"><app-icon [name]="a.icon" [size]="22" /></span>
              <b>{{ a.title }}</b>
              <small>{{ a.text }}</small>
            </div>
          }
        </div>

        <p class="orcid" reveal>
          <a [href]="orcid" target="_blank" rel="noopener"><app-icon name="orcid" [size]="18" /> View full record on ORCID</a>
        </p>
      </div>
    </section>
  `,
  styles: `
    .block { background: var(--bg-2); }
    .pubs { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .pub { display: flex; gap: 18px; padding: 24px; }
    .venue { font-size: .74rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--accent); }
    h3 { font-size: 1.02rem; font-weight: 600; line-height: 1.45; margin: 6px 0 12px; }
    .read { display: inline-flex; align-items: center; gap: 6px; font-size: .86rem; font-weight: 600; color: #b6adff; }
    .pub:hover .read { color: var(--text); }
    .awards { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-top: 22px; }
    .award { padding: 20px 16px; text-align: center; display: flex; flex-direction: column; align-items: center; }
    .ic { width: 50px; height: 50px; border-radius: 50%; display: grid; place-items: center; margin-bottom: 12px; color: #ffd479; background: radial-gradient(circle, rgba(255,212,121,.18), rgba(255,212,121,.04)); border: 1px solid rgba(255,212,121,.3); }
    b { font-size: .92rem; line-height: 1.3; }
    small { color: var(--muted); font-size: .8rem; margin-top: 4px; }
    .orcid { text-align: center; margin-top: 30px; }
    .orcid a { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); font-size: .9rem; font-weight: 500; }
    .orcid a:hover { color: #a6ce39; }
    @media (max-width: 1000px) { .awards { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 760px) { .pubs { grid-template-columns: 1fr; } .awards { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 420px) { .pub { flex-direction: column; } }
  `,
})
export class Research {
  pubs = publications;
  awards = awards;
  orcid = profile.links.orcid;
}
