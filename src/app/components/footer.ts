import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="bg-slate-900 border-t border-white/5 text-travertine-300 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <!-- Company Info -->
          <div class="space-y-4">
            <a routerLink="/" class="flex flex-col">
              <span class="font-serif text-2xl font-bold tracking-wider text-white">
                PERFECT <span class="text-gold-500">TILE</span>
              </span>
              <span class="text-[9px] tracking-[0.25em] text-travertine-200 uppercase font-sans -mt-1">
                Works & Interior Design
              </span>
            </a>
            <p class="text-sm text-slate-400 font-light leading-relaxed">
              For over 15 years, we have set the benchmark in premium ceramic, vitrified, and natural stone installations across Kozhikode. Our passion is precision, and our signature is perfection.
            </p>
            <div class="flex items-center space-x-4 pt-2">
              <a href="tel:08460204779" class="p-2 bg-slate-800 hover:bg-gold-500 hover:text-slate-950 text-gold-500 rounded transition-colors duration-300" aria-label="Call Us">
                <svg class="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="https://wa.me/918460204779" target="_blank" rel="noopener noreferrer" class="p-2 bg-slate-800 hover:bg-emerald-500 hover:text-white text-emerald-400 rounded transition-colors duration-300" aria-label="WhatsApp Us">
                <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.37 5.084L2 22l5.094-1.33a9.96 9.96 0 004.912 1.306h.004c5.505 0 9.99-4.478 9.99-9.988 0-2.667-1.04-5.176-2.927-7.062A9.927 9.927 0 0012.012 2zm5.794 14.153c-.253.715-1.47 1.39-2.022 1.488-.5.088-1.15.158-3.36-.757-2.825-1.168-4.647-4.04-4.788-4.23-.14-.19-1.13-1.503-1.13-2.868 0-1.365.714-2.035.968-2.316.254-.28.55-.35.733-.35h.523c.168 0 .39.063.597.568.207.506.713 1.74.776 1.867.062.126.103.273.018.441-.084.168-.126.273-.253.42l-.382.464c-.126.147-.258.307-.11.562.146.252.654 1.077 1.4 1.743.96.857 1.77 1.122 2.022 1.248.253.126.398.105.546-.063.148-.168.63-.736.8-1.01.17-.274.338-.23.568-.147.23.084 1.46.687 1.713.813.253.126.42.19.484.3.063.11.063.633-.19 1.348z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Services Links -->
          <div class="space-y-4">
            <h4 class="text-white font-serif text-lg font-semibold tracking-wide border-b border-gold-500/20 pb-2">Our Services</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a routerLink="/services" class="hover:text-gold-500 transition-colors duration-300">Premium Tile Installation</a></li>
              <li><a routerLink="/services" class="hover:text-gold-500 transition-colors duration-300">Luxury Marble & Granite</a></li>
              <li><a routerLink="/services" class="hover:text-gold-500 transition-colors duration-300">Backsplashes & Accent Walls</a></li>
              <li><a routerLink="/services" class="hover:text-gold-500 transition-colors duration-300">Bathroom & Wetroom Waterproofing</a></li>
              <li><a routerLink="/services" class="hover:text-gold-500 transition-colors duration-300">Interior Partitions & Dividers</a></li>
              <li><a routerLink="/services" class="hover:text-gold-500 transition-colors duration-300">Commercial Projects</a></li>
            </ul>
          </div>

          <!-- Quick Navigation -->
          <div class="space-y-4">
            <h4 class="text-white font-serif text-lg font-semibold tracking-wide border-b border-gold-500/20 pb-2">Quick Links</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a routerLink="/about" class="hover:text-gold-500 transition-colors duration-300">Our Story</a></li>
              <li><a routerLink="/portfolio" class="hover:text-gold-500 transition-colors duration-300">Project Gallery</a></li>
              <li><a routerLink="/catalogue" class="hover:text-gold-500 transition-colors duration-300">Materials Catalogue</a></li>
              <li><a routerLink="/reviews" class="hover:text-gold-500 transition-colors duration-300">Client Reviews</a></li>
              <li><a routerLink="/contact" class="hover:text-gold-500 transition-colors duration-300">Get a Free Quote</a></li>
            </ul>
          </div>

          <!-- Contact Details -->
          <div class="space-y-4">
            <h4 class="text-white font-serif text-lg font-semibold tracking-wide border-b border-gold-500/20 pb-2">Kozhikode Showroom</h4>
            <ul class="space-y-3 text-sm text-slate-400">
              <li class="flex items-start space-x-2">
                <svg class="h-5 w-5 text-gold-500 shrink-0 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                  <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="leading-relaxed">
                  Near Baby Memorial Hospital,<br>
                  Pavamani Road, Puthiyara,<br>
                  Kozhikode - 673004, Kerala
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="h-5 w-5 text-gold-500 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a href="tel:08460204779" class="hover:text-gold-500 transition-colors duration-300">08460204779</a>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="h-5 w-5 text-gold-500 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>info&#64;perfecttileworks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright Info -->
        <div class="pt-8 border-t border-white/5 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p>&copy; {{ currentYear }} Perfect Tile Works. All Rights Reserved. Crafted with passion in Kozhikode.</p>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
