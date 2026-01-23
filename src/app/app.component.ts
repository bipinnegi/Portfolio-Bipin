import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills.component';
import { ProjectsComponent } from './projects.component';
import { EducationComponent } from './education.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    FooterComponent
  ],
  template: `
    <navbar></navbar>

    <main>
      <hero class="reveal"></hero>
      <about class="reveal"></about>
      <skills class="reveal"></skills>
      <projects class="reveal"></projects>
      <education class="reveal"></education>
      <footer-cmp class="reveal"></footer-cmp>
    </main>
  `
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll('.reveal')
      .forEach(el => observer.observe(el));
  }
}
