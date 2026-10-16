import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { profile } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  template: `
    <footer>
      <div class="container inner">
        <span>© {{ year }} {{ name }}</span>
        <span class="built">Built with <img src="tech/angular.svg" alt="Angular" width="16" height="16" /> Angular</span>
        <a href="#home" class="top" aria-label="Back to top"><app-icon name="up" [size]="18" /></a>
      </div>
    </footer>
  `,
  styles: `
    footer { border-top: 1px solid var(--border); padding: 26px 0; color: var(--faint); font-size: .86rem; }
    .inner { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
    .built { display: inline-flex; align-items: center; gap: 6px; }
    .top { width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center; border: 1px solid var(--border-strong); color: var(--text); transition: .2s; }
    .top:hover { background: var(--grad); color: #0b0f22; border-color: transparent; }
  `,
})
export class Footer {
  year = new Date().getFullYear();
  name = profile.name;
}
