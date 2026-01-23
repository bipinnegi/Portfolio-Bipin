import { Component } from '@angular/core';

@Component({
  selector: 'about',
  standalone: true,
  template: `
    <section id="about">
      <h2>About Me</h2>

      <div class="about-layout">
        <p class="intro">
          I’m a <strong>B.Tech Computer Science & Engineering</strong> student
          at <strong>Graphic Era Hill University</strong>, graduating in 2026.
          I focus on building <strong>production-grade backend systems</strong>
          and modern frontend applications with a strong emphasis on
          <strong>security, scalability, and clean architecture</strong>.
        </p>

        <div class="highlights">
          <div class="card highlight-card">
            <h3>Backend Focus</h3>
            <p>
              Passionate about ASP.NET Core, REST APIs, JWT authentication,
              and designing secure, multi-tenant systems.
            </p>
          </div>

          <div class="card highlight-card">
            <h3>Frontend Craft</h3>
            <p>
              Building responsive, maintainable Angular applications
              with attention to UI clarity and user experience.
            </p>
          </div>

          <div class="card highlight-card">
            <h3>Cloud & Growth</h3>
            <p>
              Exploring Microsoft Azure, CI/CD pipelines, and cloud-native
              deployment practices to ship reliable software.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Layout */
    .about-layout {
      display: grid;
      gap: 56px;
      margin-top: 32px;
    }

    /* Intro paragraph */
    .intro {
      max-width: 780px;
      font-size: 1.08rem;
      line-height: 1.8;
      color: var(--fg);
      animation: fadeUp 0.6s ease forwards;
    }

    .intro strong {
      color: var(--primary);
      font-weight: 600;
    }

    /* Highlights grid */
    .highlights {
      display: grid;
      gap: 28px;
    }

    .highlight-card {
      position: relative;
      overflow: hidden;
      transition: transform .35s ease, box-shadow .35s ease;
    }

    /* Accent line */
    .highlight-card::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: var(--primary);
      opacity: 0;
      transition: opacity .35s ease;
    }

    .highlight-card:hover::before {
      opacity: 1;
    }

    .highlight-card:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-md);
    }

    .highlights h3 {
      margin: 0 0 10px;
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--fg);
    }

    .highlights p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--muted);
    }

    /* Responsive */
    @media (min-width: 900px) {
      .highlights {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    /* Subtle animation */
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(16px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class AboutComponent {}
