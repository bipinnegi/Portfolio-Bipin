import { Component } from '@angular/core';

@Component({
  selector: 'education',
  standalone: true,
  template: `
    <section id="education">
      <h2>Education & Achievements</h2>

      <div class="edu-wrapper">

        <div class="edu-card">
          <div class="marker"></div>

          <div class="content">
            <h3>B.Tech Computer Science & Engineering</h3>
            <p class="subtitle">Graphic Era Hill University</p>
            <span class="meta">2022 – 2026</span>

            <p class="description">
              Pursuing a strong foundation in computer science with a focus on
              software engineering principles, system design, and modern
              development practices.
            </p>
          </div>
        </div>

        <div class="edu-card highlight">
          <div class="marker"></div>

          <div class="content">
            <h3>Adobe India Hackathon</h3>
            <p class="subtitle">Participant · Unstop</p>
            <span class="meta">National Level Hackathon</span>

            <p class="description">
              Collaborated in a competitive environment to design and present
              innovative solutions under real-world constraints, strengthening
              problem-solving and teamwork skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .edu-wrapper {
      margin-top: 56px;
      display: flex;
      flex-direction: column;
      gap: 48px;
      position: relative;
    }

    .edu-wrapper::before {
      content: '';
      position: absolute;
      left: 18px;
      top: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent,
        var(--primary),
        transparent
      );
      opacity: 0.35;
    }

    .edu-card {
      position: relative;
      padding-left: 72px;
    }

    .marker {
      position: absolute;
      left: 9px;
      top: 30px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--bg);
      border: 4px solid var(--primary);
      box-shadow: 0 0 0 6px rgba(37,99,235,.18);
      z-index: 2;
    }

    .edu-card.highlight .marker {
      background: var(--primary);
    }

    /* =========================
       CARD BASE (LIGHT MODE)
    ========================= */
    .content {
      position: relative;
      background: linear-gradient(
        180deg,
        rgba(255,255,255,0.94),
        rgba(255,255,255,1)
      );
      border-radius: 18px;
      padding: 28px 32px;
      box-shadow: 0 16px 36px rgba(0,0,0,.10);
      transition:
        transform .35s ease,
        box-shadow .35s ease;
      overflow: hidden;
    }

    /* =========================
       CARD BASE (DARK MODE)
    ========================= */
    :host-context(.dark) .content {
      background: linear-gradient(
        180deg,
        rgba(15,23,42,0.96),
        rgba(2,6,23,1)
      );
      box-shadow: 0 18px 44px rgba(0,0,0,.65);
    }

    /* =========================
       HOVER EFFECT (BOTH MODES)
    ========================= */
    .content:hover {
      transform: translateY(-10px);
      box-shadow: 0 32px 64px rgba(0,0,0,.25);
    }

    /* glow layer */
    .content::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 18px;
      background: linear-gradient(
        120deg,
        transparent 30%,
        rgba(37,99,235,.22),
        transparent 70%
      );
      opacity: 0;
      transition: opacity .35s ease;
      pointer-events: none;
    }

    .content:hover::before {
      opacity: 1;
    }

    /* =========================
       TYPOGRAPHY
    ========================= */
    h3 {
      margin: 0;
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--fg);
    }

    :host-context(.dark) h3 {
      color: #e5e7eb;
    }

    .subtitle {
      margin: 8px 0 4px;
      font-size: 1rem;
      font-weight: 600;
      color: var(--primary);
    }

    .meta {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--muted);
      margin-bottom: 14px;
      display: inline-block;
    }

    .description {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--muted);
      max-width: 90%;
    }

    :host-context(.dark) .meta,
    :host-context(.dark) .description {
      color: #94a3b8;
    }

    @media (max-width: 720px) {
      .edu-card {
        padding-left: 56px;
      }

      .content {
        padding: 22px 24px;
      }

      .description {
        max-width: 100%;
      }
    }
  `]
})
export class EducationComponent {}
