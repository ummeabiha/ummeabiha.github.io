import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/** Fades an element in when it scrolls into view. Usage: <div reveal [revealDelay]="100"> */
@Directive({ selector: '[reveal]', host: { class: 'reveal' } })
export class Reveal implements OnInit, OnDestroy {
  revealDelay = input(0);
  private el = inject(ElementRef<HTMLElement>);
  private io?: IntersectionObserver;

  ngOnInit() {
    const node = this.el.nativeElement as HTMLElement;
    node.style.transitionDelay = `${this.revealDelay()}ms`;
    if (typeof IntersectionObserver === 'undefined') { node.classList.add('in'); return; }
    this.io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { node.classList.add('in'); this.io?.disconnect(); }
    }, { threshold: 0.12 });
    this.io.observe(node);
  }

  ngOnDestroy() { this.io?.disconnect(); }
}
