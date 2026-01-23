import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'theme';

  initTheme() {
    const saved = localStorage.getItem(this.STORAGE_KEY);

    if (saved) {
      document.body.classList.toggle('dark', saved === 'dark');
      return;
    }

    // system preference (first visit)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark', prefersDark);
  }

  toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem(this.STORAGE_KEY, isDark ? 'dark' : 'light');
    return isDark;
  }

  isDark() {
    return document.body.classList.contains('dark');
  }
}
