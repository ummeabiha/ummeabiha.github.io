import { Component } from '@angular/core';
import { Navbar } from './sections/navbar';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Skills } from './sections/skills';
import { Experience } from './sections/experience';
import { Projects } from './sections/projects';
import { Research } from './sections/research';
import { Education } from './sections/education';
import { Contact } from './sections/contact';
import { Footer } from './sections/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Experience, Projects, Research, Education, Contact, Footer],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-research />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {}
