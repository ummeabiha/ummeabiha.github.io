import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal.directive';
import { certifications, education } from '../data/portfolio.data';

@Component({
  selector: 'app-education',
  imports: [Icon, Reveal],
  template: `
    <section id="education" class="block">
      <div class="container">
        <div class="sec-head" reveal>
          <span class="pill">Education</span>
          <h2>Learning never stops</h2>
          <div class="line"></div>
        </div>

        <div class="layout">
          <div class="edu">
            @for (e of edu; track e.school; let i = $index) {
              <div class="school glass hover" [class.current]="e.current" reveal [revealDelay]="i * 100">
                <span class="icon-tile"><app-icon name="grad" /></span>
                <div class="info">
                  <h3>{{ e.degree }}</h3>
                  <p>{{ e.full }}</p>
                  <div class="row">
                    <span class="date"><app-icon name="calendar" [size]="14" /> {{ e.period }}</span>
                    <span class="note" [class.live]="e.current">{{ e.note }}</span>
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="certs glass" reveal [revealDelay]="150">
            <h3><app-icon name="award" [size]="20" /> Certifications</h3>
            <ul>
              @for (c of certs; track c) {
                <li><app-icon name="check" [size]="16" /> {{ c }}</li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .layout { display: grid; grid-template-columns: 1.15fr 1fr; gap: 18px; }
    .edu { display: grid; gap: 18px; }
    .school { display: flex; gap: 18px; padding: 24px; }
    .school.current { border-color: rgba(124,108,255,.4); background: linear-gradient(135deg, rgba(124,108,255,.1), rgba(46,230,214,.04)); }
    h3 { font-size: 1.1rem; font-weight: 700; letter-spacing: -.01em; }
    .info p { color: var(--muted); font-size: .9rem; margin: 2px 0 12px; }
    .row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
    .date { display: inline-flex; align-items: center; gap: 6px; font-size: .8rem; color: var(--faint); }
    .note { font-size: .76rem; font-weight: 700; padding: 3px 10px; border-radius: 999px; background: rgba(124,108,255,.14); color: #cfc8ff; }
    .note.live { background: rgba(46,230,214,.12); color: var(--accent); }
    .certs { padding: 24px; }
    .certs h3 { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
    .certs h3 app-icon { color: #ffd479; }
    ul { list-style: none; }
    li { display: flex; align-items: center; gap: 10px; padding: 9px 0; font-size: .9rem; color: var(--muted); border-bottom: 1px dashed var(--border); }
    li:last-child { border: 0; }
    li app-icon { color: var(--accent); flex: none; }
    @media (max-width: 860px) { .layout { grid-template-columns: 1fr; } }
    @media (max-width: 420px) { .school { flex-direction: column; } }
  `,
})
export class Education {
  edu = education;
  certs = certifications;
}
