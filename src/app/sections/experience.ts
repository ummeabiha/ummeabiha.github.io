import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal.directive';
import { experience } from '../data/portfolio.data';

@Component({
  selector: 'app-experience',
  imports: [Icon, Reveal],
  template: `
    <section id="experience" class="block">
      <div class="container narrow">
        <div class="sec-head" reveal>
          <span class="pill">Experience</span>
          <h2>Where I've worked</h2>
          <div class="line"></div>
        </div>

        <ol class="timeline">
          @for (j of jobs; track j.company) {
            <li reveal>
              <span class="node" [class.now]="j.current"><app-icon name="briefcase" [size]="16" /></span>
              <article class="glass hover">
                <header>
                  <div>
                    <h3>{{ j.role }}</h3>
                    <p class="co">{{ j.company }} @if (j.current) { <span class="badge">Current</span> }</p>
                  </div>
                  <div class="when">
                    <span><app-icon name="calendar" [size]="14" /> {{ j.period }}</span>
                    <span><app-icon name="pin" [size]="14" /> {{ j.location }}</span>
                  </div>
                </header>
                <ul>
                  @for (pt of j.points; track pt) { <li>{{ pt }}</li> }
                </ul>
                <div class="tags">
                  @for (t of j.tags; track t) { <span class="tag">{{ t }}</span> }
                </div>
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .block { background: var(--bg-2); }
    .narrow { max-width: 900px; }
    .timeline { list-style: none; position: relative; padding-left: 58px; }
    .timeline::before { content: ''; position: absolute; left: 19px; top: 10px; bottom: 10px; width: 2px; background: linear-gradient(var(--primary), rgba(46,230,214,.5), transparent); }
    .timeline > li { position: relative; margin-bottom: 18px; }
    .node { position: absolute; left: -58px; top: 22px; width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center; background: var(--surface-solid); border: 1px solid var(--border-strong); color: #c9c2ff; }
    .node.now { background: var(--grad); color: #0b0f22; border: 0; box-shadow: 0 0 0 6px rgba(124,108,255,.15), 0 0 30px rgba(124,108,255,.5); }
    article { padding: 22px 24px; }
    header { display: flex; justify-content: space-between; gap: 14px; flex-wrap: wrap; margin-bottom: 12px; }
    h3 { font-size: 1.1rem; font-weight: 700; letter-spacing: -.01em; }
    .co { color: #a99cff; font-weight: 600; font-size: .95rem; display: flex; align-items: center; gap: 8px; margin-top: 2px; }
    .badge { font-size: .68rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--accent); background: rgba(46,230,214,.1); border: 1px solid rgba(46,230,214,.3); padding: 2px 8px; border-radius: 999px; }
    .when { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; font-size: .8rem; color: var(--faint); }
    .when span { display: inline-flex; align-items: center; gap: 6px; }
    ul { list-style: none; color: var(--muted); font-size: .93rem; }
    ul li { position: relative; padding-left: 18px; margin-bottom: 5px; }
    ul li::before { content: ''; position: absolute; left: 0; top: .62em; width: 7px; height: 7px; border-radius: 2px; background: var(--grad); }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
    @media (max-width: 600px) {
      .timeline { padding-left: 0; }
      .timeline::before, .node { display: none; }
      .when { align-items: flex-start; flex-direction: row; gap: 14px; }
      article { padding: 20px; }
    }
  `,
})
export class Experience {
  jobs = experience;
}
