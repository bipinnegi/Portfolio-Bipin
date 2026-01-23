import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  standalone: true,
  template: `
    <section id="projects">
      <h2>Projects</h2>

      <div class="projects-grid">

        <!-- Project 1 -->
        <div class="card project-card">
          <div class="project-header">
            <h3>Multi-Tenant Project Management API</h3>
            <a
              class="github-link"
              href="https://github.com/bipinnegi/MultiTenant.ProjectManagement.API.git"
              target="_blank"
              rel="noopener"
            >
              <img src="assets/icons/github.svg" alt="GitHub" />
            </a>
          </div>

          <p class="description">
            Secure, cloud-deployed REST API designed with tenant isolation,
            JWT authentication, and role-based access control to support
            scalable multi-tenant systems.
          </p>

          <div class="tech-stack">
            <span><img src="assets/icons/NET_Core_Logo.svg" /> ASP.NET Core</span>
            <span><img src="assets/icons/sql.svg" /> SQL Server</span>
            <span><img src="assets/icons/Microsoft_Azure.svg" /> Azure</span>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="card project-card">
          <div class="project-header">
            <h3>Multi-Tenant Project Management UI</h3>
            <a
              class="github-link"
              href="https://github.com/bipinnegi/multi-tenant-project-management-ui.git"
              target="_blank"
              rel="noopener"
            >
              <img src="assets/icons/github.svg" alt="GitHub" />
            </a>
          </div>

          <p class="description">
            Angular-based frontend for managing projects and tasks with
            role-aware UI, clean component architecture, and responsive
            layouts focused on usability and clarity.
          </p>

          <div class="tech-stack">
            <span><img src="assets/icons/angular.svg" /> Angular</span>
            <span><img src="assets/icons/html.svg" /> HTML</span>
            <span><img src="assets/icons/css.svg" /> CSS</span>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      gap: 32px;
      margin-top: 40px;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      gap: 18px;
      transition: transform .35s ease, box-shadow .35s ease;
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-md);
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    .project-header h3 {
      margin: 0;
      font-size: 1.25rem;
    }

    .github-link {
      display: inline-flex;
      padding: 8px;
      border-radius: 50%;
      transition: background .25s ease;
    }

    .github-link:hover {
      background: var(--primary-soft);
    }

    .github-link img {
      width: 30px;
      height: 30px;
    }
    :host-context(.dark) img[src*="api.svg"] {
  filter: invert(1) brightness(1.1);
}

/* GitHub icon (used in skills) */
:host-context(.dark) img[src*="github.svg"] {
  filter: invert(1) brightness(1.1);
}

    .description {
      font-size: 0.95rem;
      color: var(--muted);
      line-height: 1.6;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 8px;
    }

    .tech-stack span {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: 999px;
      background: var(--primary-soft);
      color: var(--primary);
      font-size: 0.85rem;
      font-weight: 500;
    }

    .tech-stack img {
      width: 16px;
      height: 16px;
    }

    @media (min-width: 900px) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class ProjectsComponent {}
