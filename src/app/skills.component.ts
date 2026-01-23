import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  standalone: true,
  template: `
    <section id="skills">
      <h2>Skills</h2>

      <div class="skills-groups">

        <!-- Languages & Frameworks -->
        <div class="card skills-card">
          <h3>Languages & Frameworks</h3>
          <div class="skills-grid">
            
            <div class="skill-item">
              <img src="assets/icons/angular.svg" alt="Angular" />
              <span>Angular</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/javascript.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/typescript.svg" alt="typescript" />
              <span>TypeScript</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/react.svg" alt="React" />
              <span>ReactJS</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/html.svg" alt="HTML" />
              <span>HTML</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/css.svg" alt="CSS" />
              <span>CSS</span>
            </div>
          </div>
        </div>

        <!-- Backend & Databases -->
        <div class="card skills-card">
          <h3>Backend & Databases</h3>
          <div class="skills-grid">
            <div class="skill-item">
              <img src="assets/icons/NET_Core_Logo.svg" alt=".NET Core" />
              <span>ASP.NET Core</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/csharp.svg" alt="C#" />
              <span>C#</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/sql.svg" alt="SQL Server" />
              <span>SQL Server</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/api.svg" alt="REST API" />
              <span>REST APIs</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/jwt.svg" alt="JWT" />
              <span>JWT Authentication</span>
            </div>
          </div>
        </div>

        <!-- Cloud & DevOps -->
        <div class="card skills-card">
          <h3>Cloud & DevOps</h3>
          <div class="skills-grid">
            <div class="skill-item">
              <img src="assets/icons/Microsoft_Azure.svg" alt="Azure" />
              <span>Microsoft Azure</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/github.svg" alt="GitHub Actions" />
              <span>GitHub Actions</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/github.svg" alt="CI/CD" />
              <span>CI/CD Pipelines</span>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div class="card skills-card">
          <h3>Tools</h3>
          <div class="skills-grid">
            <div class="skill-item">
              <img src="assets/icons/git.svg" alt="Git" />
              <span>Git</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/github.svg" alt="GitHub" />
              <span>GitHub</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/postman.svg" alt="Postman" />
              <span>Postman</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/Visual_Studio.svg" alt="Visual Studio" />
              <span>Visual Studio</span>
            </div>
            <div class="skill-item">
              <img src="assets/icons/bootstrap.svg" alt="Bootstrap" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .skills-groups {
      display: grid;
      gap: 32px;
      margin-top: 40px;
    }

    .skills-card h3 {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 1.2rem;
      position: relative;
    }

    .skills-card h3::after {
      content: '';
      width: 36px;
      height: 3px;
      background: var(--primary);
      display: block;
      margin-top: 8px;
      border-radius: 2px;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 20px;
    }

    .skill-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      border-radius: 12px;
      background: var(--card);
      border: 1px solid var(--border);
      transition: transform .25s ease, box-shadow .25s ease;
    }

    :host-context(.dark) img[src*="api.svg"] {
    filter: invert(1) brightness(1.1);
    }

   /* GitHub icon (used in skills) */
    :host-context(.dark) img[src*="github.svg"] {
    filter: invert(1) brightness(1.1);
      }

    .skill-item:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-sm);
    }

    .skill-item img {
      width: 28px;
      height: 28px;
      object-fit: contain;
    }

    .skill-item span {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--fg);
    }

    @media (min-width: 900px) {
      .skills-groups {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class SkillsComponent {}
