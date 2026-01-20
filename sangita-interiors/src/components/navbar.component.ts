import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-6"
         [class.bg-white/70]="isScrolled()"
         [class.dark:bg-stone-900/80]="isScrolled()"
         [class.backdrop-blur-xl]="isScrolled()"
         [class.border-b]="isScrolled()"
         [class.border-white/20]="isScrolled()"
         [class.dark:border-stone-800]="isScrolled()"
         [class.shadow-sm]="isScrolled()"
         [class.bg-transparent]="!isScrolled()">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-10 h-10 border-2 border-stone-900 dark:border-white flex items-center justify-center rounded-tl-2xl rounded-br-2xl transition-all duration-300 group-hover:bg-stone-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-stone-900">
             <span class="font-serif font-bold text-xl">S</span>
          </div>
          <span class="text-2xl font-serif font-bold text-stone-900 dark:text-white tracking-wide">Sangita</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 bg-white/60 dark:bg-stone-900/60 backdrop-blur-md px-8 py-3 rounded-full border border-stone-100/50 dark:border-stone-800 shadow-sm hover:bg-white/80 dark:hover:bg-stone-900/80 transition-all">
          <a href="#" class="text-sm font-medium text-stone-900 dark:text-stone-200 hover:text-orange-800 dark:hover:text-orange-400 transition-colors">{{ ts.t().nav.home }}</a>
          <a href="#features" class="text-sm font-medium text-stone-900 dark:text-stone-200 hover:text-orange-800 dark:hover:text-orange-400 transition-colors">{{ ts.t().nav.catalogue }}</a>
          <a href="#transformation" class="text-sm font-medium text-stone-900 dark:text-stone-200 hover:text-orange-800 dark:hover:text-orange-400 transition-colors">{{ ts.t().nav.projects }}</a>
          <a href="#process" class="text-sm font-medium text-stone-900 dark:text-stone-200 hover:text-orange-800 dark:hover:text-orange-400 transition-colors">{{ ts.t().nav.process }}</a>
          <a href="#contact" class="text-sm font-medium text-stone-900 dark:text-stone-200 hover:text-orange-800 dark:hover:text-orange-400 transition-colors">{{ ts.t().nav.contact }}</a>
        </div>

        <!-- Right Side: CTA & Theme Toggle -->
        <div class="flex items-center gap-3">
          <!-- Language Toggle -->
          <div class="relative group">
             <select #langSelect (change)="changeLang(langSelect.value)" 
                     class="appearance-none bg-white/50 dark:bg-stone-800/50 backdrop-blur-md border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs font-medium py-2 pl-3 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-400 cursor-pointer">
               <option value="en" [selected]="ts.currentLang() === 'en'">English</option>
               <option value="hi" [selected]="ts.currentLang() === 'hi'">हिंदी</option>
               <option value="mr" [selected]="ts.currentLang() === 'mr'">मराठी</option>
             </select>
             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-700 dark:text-stone-300">
               <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
             </div>
          </div>

          <!-- Theme Toggle Button -->
          <button (click)="toggleTheme()" 
                  class="p-2.5 rounded-full bg-white/50 dark:bg-stone-800/50 backdrop-blur-md border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800 transition-all focus:outline-none"
                  [attr.aria-label]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
            @if (isDarkMode()) {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            }
          </button>

          <!-- CTA -->
          <button class="hidden md:block bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-lg hover:shadow-xl">
            {{ ts.t().nav.cta }}
          </button>

          <!-- Mobile Menu Button -->
          <button class="md:hidden p-2 text-stone-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  ts = inject(TranslationService);
  isScrolled = signal(false);
  isDarkMode = signal(false);

  constructor() {
    window.addEventListener('scroll', () => {
      this.isScrolled.set(window.scrollY > 50);
    });

    const storedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemDark)) {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  toggleTheme() {
    if (this.isDarkMode()) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  changeLang(lang: string) {
    this.ts.setLanguage(lang as Language);
  }

  private enableDarkMode() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.isDarkMode.set(true);
  }

  private enableLightMode() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.isDarkMode.set(false);
  }
}