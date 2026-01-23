import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  template: `
    <header [class.scrolled]="scrolled">
      <nav class="nav">
        <div class="brand">
         Bipin<span>.</span>
        </div>

        <ul class="links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
        </ul>

        <!-- Theme toggle using SVG assets -->
        <button
          class="theme-toggle"
          (click)="toggleTheme()"
          [attr.aria-label]="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <img
            [src]="isDark ? 'assets/icons/light.svg' : 'assets/icons/dark.svg'"
            [alt]="isDark ? 'Light mode' : 'Dark mode'"
          />
        </button>
      </nav>
    </header>
  `,
  styles: [`
    header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg);
      transition: box-shadow .3s ease, backdrop-filter .3s ease;
    }

    header.scrolled {
      box-shadow: var(--shadow-sm);
      backdrop-filter: blur(8px);
    }

    .nav {
      max-width: 1200px;
      margin: auto;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .brand {
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .brand span {
      color: var(--primary);
    }

    .links {
      display: flex;
      gap: 28px;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .links a {
      position: relative;
      text-decoration: none;
      color: var(--fg);
      font-weight: 500;
      padding: 4px 0;
    }

    .links a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: width .25s ease;
    }

    .links a:hover::after {
      width: 100%;
    }

    /* Theme toggle button */
    .theme-toggle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: var(--card);
      cursor: pointer;
      display: grid;
      place-items: center;
      transition:
        transform .25s ease,
        background .25s ease;
    }

    .theme-toggle:hover {
      transform: translateY(-2px) rotate(8deg);
      background: var(--primary-soft);
    }

    .theme-toggle img {
      width: 18px;
      height: 18px;
      transition: transform .3s ease, opacity .3s ease;
    }

    @media (max-width: 768px) {
      .links {
        gap: 18px;
        font-size: 0.95rem;
      }
    }

    /* Theme toggle icon */
.theme-toggle img {
  width: 18px;
  height: 18px;
  transition: filter .3s ease, transform .3s ease;
}

/* Dark mode: make light icon visible */
:host-context(.dark) .theme-toggle img {
  filter: invert(1) brightness(1.2);
}

  `]
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  isDark = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    document.body.classList.toggle('dark', this.isDark);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }
}
