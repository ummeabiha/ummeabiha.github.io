import { Component, HostListener, signal } from '@angular/core';
import { Icon } from '../shared/icon';
import { profile } from '../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  imports: [Icon],
  template: `
    <header [class.scrolled]="scrolled()">
      <nav class="container nav">
        <a href="#home" class="brand" (click)="open.set(false)">
          <span class="mark"><app-icon name="code" [size]="18" [stroke]="2.4" /></span>
          <span>Abiha<span class="dot">.</span>dev</span>
        </a>

        <ul class="links" [class.open]="open()">
          @for (l of links; track l.id) {
            <li><a [href]="'#' + l.id" [class.active]="active() === l.id" (click)="open.set(false)">{{ l.label }}</a></li>
          }
          <li class="mobile-cta"><a class="btn btn-primary btn-sm" [href]="profile.resume" download>Resume <app-icon name="download" [size]="16" /></a></li>
        </ul>

        <div class="right">
          <a class="btn btn-primary btn-sm cta" [href]="profile.resume" download>Resume <app-icon name="download" [size]="16" /></a>
          <button class="burger" (click)="open.set(!open())" [attr.aria-label]="open() ? 'Close menu' : 'Open menu'">
            <app-icon [name]="open() ? 'x' : 'menu'" [size]="20" />
          </button>
        </div>
      </nav>
    </header>
  `,
  styles: `
    header { position: fixed; inset: 0 0 auto; z-index: 100; transition: background .3s, border-color .3s; border-bottom: 1px solid transparent; }
    header.scrolled { background: rgba(7, 11, 25, .78); backdrop-filter: blur(14px); border-color: var(--border); }
    .nav { height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
    .brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.08rem; letter-spacing: -.02em; }
    .mark { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center; background: var(--grad); color: #0b0f22; }
    .dot { color: var(--accent); }
    .links { display: flex; gap: 6px; list-style: none; }
    .links a { display: block; padding: 8px 14px; border-radius: 10px; font-size: .92rem; color: var(--muted); font-weight: 500; transition: color .2s, background .2s; }
    .links a:hover { color: var(--text); }
    .links a.active { color: var(--text); background: rgba(124,108,255,.14); }
    .mobile-cta { display: none; }
    .right { display: flex; align-items: center; gap: 10px; }
    .burger { display: none; width: 42px; height: 42px; border-radius: 12px; border: 1px solid var(--border-strong); place-items: center; }
    @media (max-width: 900px) {
      .burger { display: grid; }
      .cta { display: none; }
      .links { position: absolute; top: 72px; left: 12px; right: 12px; flex-direction: column; gap: 2px; padding: 10px;
        background: rgba(12, 18, 40, .97); border: 1px solid var(--border); border-radius: 16px; backdrop-filter: blur(14px);
        opacity: 0; pointer-events: none; transform: translateY(-8px); transition: .25s; }
      .links.open { opacity: 1; pointer-events: auto; transform: none; }
      .links a { padding: 12px 14px; }
      .mobile-cta { display: block; padding-top: 6px; }
      .mobile-cta a { display: flex; color: #0b0f22 !important; }
    }
  `,
})
export class Navbar {
  profile = profile;
  open = signal(false);
  scrolled = signal(false);
  active = signal('home');
  links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
    let current = 'home';
    for (const l of this.links) {
      const el = document.getElementById(l.id);
      if (el && el.getBoundingClientRect().top <= 120) current = l.id;
    }
    this.active.set(current);
  }
}
