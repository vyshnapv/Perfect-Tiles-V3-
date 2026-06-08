import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 py-3 bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-white/5 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <!-- Logo / Brand -->
          <a routerLink="/" class="flex flex-col">
            <span class="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white">
              PERFECT <span class="text-gold-500">TILE</span>
            </span>
            <span class="text-[9px] tracking-[0.25em] text-travertine-200 uppercase font-sans -mt-1">
              Works & Interior Design
            </span>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden lg:flex items-center space-x-8">
            <a *ngFor="let link of navLinks" 
               [routerLink]="link.path" 
               routerLinkActive="text-gold-500 after:w-full" 
               [routerLinkActiveOptions]="{exact: link.exact}"
               class="relative text-sm font-medium tracking-wide text-travertine-100 hover:text-gold-500 transition-colors duration-300 py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300">
              {{ link.label }}
            </a>
          </nav>

          <!-- Desktop CTA -->
          <div class="hidden lg:flex items-center">
            <a routerLink="/contact" class="px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-slate-950 text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 active:scale-[0.98]">
              Get Free Quote
            </a>
          </div>

          <!-- Mobile Burger Menu Toggle -->
          <button (click)="toggleMenu()" class="lg:hidden p-2 rounded-md bg-slate-800 border border-white/10 text-travertine-100 hover:text-gold-500 hover:border-gold-500/40 focus:outline-none transition-all duration-200" aria-label="Toggle Navigation">
            <svg class="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path *ngIf="!isMenuOpen()" d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" />
              <path *ngIf="isMenuOpen()" d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="absolute top-full right-0 z-40 lg:hidden transform transition-all duration-300 ease-in-out origin-top-right"
           [ngClass]="isMenuOpen() ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'">
        <div class="mr-3 mt-1 mb-3 w-52 rounded-xl bg-slate-900 border border-white/10 shadow-2xl shadow-black/60 overflow-hidden">
          <!-- Nav Links -->
          <div class="flex flex-col py-1.5">
            <a *ngFor="let link of navLinks" 
               [routerLink]="link.path" 
               routerLinkActive="text-gold-400 border-l-2 border-gold-500 bg-white/5"
               [routerLinkActiveOptions]="{exact: link.exact}"
               (click)="closeMenu()"
               class="text-xs font-medium tracking-wide text-slate-300 hover:text-gold-400 hover:bg-white/5 px-4 py-2.5 border-l-2 border-transparent transition-all duration-200">
              {{ link.label }}
            </a>
          </div>
          <!-- Mobile CTA -->
          <div class="px-3 py-2.5 border-t border-white/10">
            <a routerLink="/contact" 
               (click)="closeMenu()"
               class="block w-full text-center py-2 bg-gold-500 hover:bg-gold-600 text-slate-950 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors duration-200">
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  navLinks = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About Us', path: '/about', exact: false },
    { label: 'Services', path: '/services', exact: false },
    { label: 'Portfolio', path: '/portfolio', exact: false },
    { label: 'Catalogue', path: '/catalogue', exact: false },
    { label: 'Reviews', path: '/reviews', exact: false },
    { label: 'Contact Us', path: '/contact', exact: false },
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 50);
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
