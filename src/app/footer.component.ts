import { Component } from '@angular/core';

@Component({
  selector: 'footer-cmp',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">

        <!-- Branding -->
        <div class="brand">
          <h3>Bipin Negi</h3>
          <p>Software Developer · Dehradun, India</p>

          <!-- Email -->
          <a
            class="email"
            href="mailto:bipinnegi2378@gmail.com"
          >
            bipinnegi2378&#64;gmail.com
          </a>
        </div>

        <!-- Actions -->
        <div class="actions">
          <a
            href="assets/resume/resume.pdf"
            download
            class="btn outline"
          >
            Download Resume
          </a>

          <div class="socials">
            <a
              href="https://github.com/bipinnegi"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <img src="assets/icons/github.svg" alt="GitHub" />
            </a>

            <a
              href="https://linkedin.com/in/bipinnegi"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <img src="assets/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <span>© {{ year }} Bipin Negi</span>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 120px;
      padding: 60px 20px 32px;
      border-top: 1px solid var(--border);
      background: var(--bg);
    }

    .footer-content {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
      flex-wrap: wrap;
    }

    .brand h3 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 700;
    }

    .brand p {
      margin: 6px 0 0;
      font-size: 0.9rem;
      color: var(--muted);
    }

    .email {
      display: inline-block;
      margin-top: 10px;
      font-size: 0.9rem;
      color: var(--primary);
      text-decoration: none;
      transition: opacity .2s ease;
    }

    .email:hover {
      opacity: 0.8;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .socials {
      display: flex;
      gap: 14px;
    }

    .socials a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--border);
      transition: background .25s ease, transform .25s ease;
    }

    .socials a:hover {
      background: var(--primary-soft);
      transform: translateY(-3px);
    }

    .socials img {
      width: 100%;
      height: 100%;
    }
    
    :host-context(.dark) img[src*="github.svg"] {
    filter: invert(1) brightness(1.1);
      }
    .footer-bottom {
      max-width: 1200px;
      margin: 28px auto 0;
      padding-top: 16px;
      border-top: 1px dashed var(--border);
      text-align: center;
      font-size: 0.85rem;
      color: var(--muted);
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
