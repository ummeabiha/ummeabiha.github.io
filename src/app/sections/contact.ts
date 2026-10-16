import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal.directive';
import { profile } from '../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal],
  template: `
    <section id="contact" class="block">
      <div class="container">
        <div class="box" reveal>
          <div class="glow" aria-hidden="true"></div>
          <div class="left">
            <span class="pill">Let's work together</span>
            <h2>Have a project or role in mind?</h2>
            <p>Open to .NET, Angular and AI engineering opportunities and research collaborations.</p>
            <div class="cta">
              <a class="btn btn-primary" [href]="'mailto:' + p.email"><app-icon name="send" [size]="18" /> Say Hello</a>
              <a class="btn btn-ghost" [href]="p.resume" download><app-icon name="download" [size]="18" /> Resume</a>
            </div>
          </div>

          <div class="right">
            <a class="row" [href]="'mailto:' + p.email">
              <span class="icon-tile"><app-icon name="mail" /></span>
              <div><small>Email</small><b>{{ p.email }}</b></div>
            </a>
            <a class="row" [href]="'tel:' + phoneHref">
              <span class="icon-tile"><app-icon name="phone" /></span>
              <div><small>Phone</small><b>{{ p.phone }}</b></div>
            </a>
            <div class="row">
              <span class="icon-tile"><app-icon name="pin" /></span>
              <div><small>Location</small><b>{{ p.location }}</b></div>
            </div>
            <div class="socials">
              <a [href]="p.links.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><app-icon name="linkedin" [size]="20" /></a>
              <a [href]="p.links.github" target="_blank" rel="noopener" aria-label="GitHub"><app-icon name="github" [size]="20" /></a>
              <a [href]="p.links.orcid" target="_blank" rel="noopener" aria-label="ORCID"><app-icon name="orcid" [size]="20" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .box { position: relative; overflow: hidden; display: grid; grid-template-columns: 1.1fr 1fr; gap: 40px; padding: 48px; border-radius: 26px;
      background: linear-gradient(var(--surface-solid), var(--surface-solid)) padding-box, var(--grad) border-box; border: 1px solid transparent; }
    .glow { position: absolute; width: 420px; height: 420px; right: -120px; top: -160px; border-radius: 50%; background: rgba(124,108,255,.25); filter: blur(90px); pointer-events: none; }
    .left, .right { position: relative; }
    h2 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 800; letter-spacing: -.03em; line-height: 1.15; margin: 16px 0 12px; }
    .left p { color: var(--muted); max-width: 420px; }
    .cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
    .right { display: flex; flex-direction: column; gap: 12px; justify-content: center; }
    .row { display: flex; align-items: center; gap: 14px; padding: 12px 14px; border-radius: 14px; background: rgba(255,255,255,.03); border: 1px solid var(--border); transition: .2s; min-width: 0; }
    a.row:hover { border-color: var(--border-strong); background: rgba(255,255,255,.06); }
    .row div { min-width: 0; }
    .row small { display: block; font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; color: var(--faint); }
    .row b { font-weight: 600; font-size: .95rem; overflow-wrap: anywhere; }
    .socials { display: flex; gap: 10px; margin-top: 6px; }
    .socials a { width: 46px; height: 46px; border-radius: 13px; display: grid; place-items: center; border: 1px solid var(--border-strong); background: rgba(255,255,255,.03); color: var(--muted); transition: .2s; }
    .socials a:hover { background: var(--grad); color: #0b0f22; border-color: transparent; transform: translateY(-3px); }
    @media (max-width: 860px) { .box { grid-template-columns: 1fr; padding: 32px 24px; } }
    @media (max-width: 420px) { .box { padding: 26px 18px; } .cta .btn { flex: 1; } }
  `,
})
export class Contact {
  p = profile;
  phoneHref = profile.phone.replace(/\s/g, '');
}
