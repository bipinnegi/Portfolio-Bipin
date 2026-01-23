import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  template: `
    <header [class.scrolled]="scrolled">
      <nav class="nav">

        <!-- Brand -->
        <div class="brand">
          Bipin<span>.</span>
        </div>

        <!-- Desktop Links -->
        <ul class="links desktop">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
        </ul>

        <!-- Actions -->
        <div class="actions">
          <!-- Theme toggle -->
          <button
            class="theme-toggle"
            (click)="toggleTheme()"
            aria-label="Toggle theme"
          >
            <img
              [src]="isDark ? 'assets/icons/light.svg' : 'assets/icons/dark.svg'"
              alt="theme"
            />
          </button>

          <!-- Mobile menu button -->
          <button
            class="menu-toggle mobile"
            (click)="menuOpen = !menuOpen"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div class="mobile-menu" [class.open]="menuOpen">
        <a href="#about" (click)="closeMenu()">About</a>
        <a href="#skills" (click)="closeMenu()">Skills</a>
        <a href="#projects" (click)="closeMenu()">Projects</a>
        <a href="#education" (click)="closeMenu()">Education</a>
      </div>
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
      backdrop-filter: blur(10px);
    }

    .nav {
      max-width: 1200px;
      margin: auto;
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .brand {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: .5px;
    }

    .brand span {
      color: var(--primary);
    }

    /* Desktop links */
    .links {
      list-style: none;
      display: flex;
      gap: 28px;
      margin: 0;
      padding: 0;
    }

    .links a {
      text-decoration: none;
      color: var(--fg);
      font-weight: 500;
      position: relative;
    }

    .links a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: width .25s ease;
    }

    .links a:hover::after {
      width: 100%;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    /* Theme toggle */
    .theme-toggle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: var(--card);
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: transform .25s ease, background .25s ease;
    }

    .theme-toggle:hover {
      transform: translateY(-2px);
      background: var(--primary-soft);
    }

    .theme-toggle img {
      width: 18px;
      height: 18px;
    }

    :host-context(.dark) .theme-toggle img {
      filter: invert(1) brightness(1.2);
    }

    /* Hamburger */
    .menu-toggle {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--card);
  cursor: pointer;

  display: none; /*hidden by default */

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}


    .menu-toggle span {
  width: 18px;
  height: 2px;
  background: var(--fg);
  border-radius: 2px;
  display: block;
}


    /* Mobile menu */
    .mobile-menu {
      display: none;
      flex-direction: column;
      background: var(--bg);
      border-top: 1px solid var(--border);
      padding: 12px 20px 20px;
      animation: slideDown .35s ease forwards;
    }

    .mobile-menu a {
      padding: 14px 0;
      text-decoration: none;
      color: var(--fg);
      font-size: 1rem;
      font-weight: 500;
    }

    .mobile-menu a:not(:last-child) {
      border-bottom: 1px solid var(--border);
    }

    .mobile-menu.open {
      display: flex;
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive */
    @media (max-width: 900px) {
      .desktop {
        display: none;
      }

      .menu-toggle {
        display: flex;
      }
    }
  `]
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  isDark = false;
  menuOpen = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDark = savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    document.body.classList.toggle('dark', this.isDark);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }
}
