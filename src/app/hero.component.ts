import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="content">
        <span class="badge">Software Developer</span>

        <h1>
          Hi, I’m <br />
          <strong>Bipin Negi</strong>
        </h1>

        <p>
          B.Tech Computer Science & Engineering student (2026) focused on building
          <strong>secure backend systems</strong>, scalable APIs, and clean
          frontend experiences using <strong>ASP.NET Core</strong>,
          <strong>Angular</strong>, and <strong>Azure</strong>.
        </p>

        <div class="actions">
          <a href="#projects" class="btn primary">View Projects</a>
          <a href="assets/resume/resume.pdf" download class="btn outline">
            Download Resume
          </a>
        </div>
      </div>

      <div class="image">
        <img src="assets/images/profile-pic.jpg" alt="Profile photo" />
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 90vh;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      align-items: center;
      gap: 64px;
      padding: 120px 20px 80px;
      max-width: 1200px;
      margin: auto;
    }

    .content {
      animation: fadeUp .8s ease forwards;
    }

    .badge {
      display: inline-block;
      background: var(--primary-soft);
      color: var(--primary);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 500;
      margin-bottom: 18px;
    }

    h1 {
      font-size: 3.2rem;
      margin: 0;
      letter-spacing: -1px;
    }

    h1 strong {
      color: var(--primary);
    }

    p {
      max-width: 560px;
      margin: 24px 0 36px;
      font-size: 1.05rem;
    }

    .actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .image {
      display: flex;
      justify-content: center;
      animation: fadeIn .9s ease forwards;
    }

    .image img {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: var(--shadow-md);
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(24px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @media (max-width: 900px) {
      .hero {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .actions {
        justify-content: center;
      }

      .image {
        order: -1;
      }
    }
  `]
})
export class HeroComponent {}
