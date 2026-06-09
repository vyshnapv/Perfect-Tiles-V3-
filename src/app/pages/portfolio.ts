import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PortfolioItem {
  id: string;
  title: string;
  category: string; // 'living', 'bathroom', 'kitchen', 'commercial'
  image: string;
  scope: string;
  materials: string;
  size: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="bg-travertine-50 pt-32 pb-24">
      
      <!-- PAGE HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 animate-fade-in">
        <div class="border-l-4 border-gold-500 pl-6 space-y-4">
          <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase">Our Works</h2>
          <h1 class="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-wide">
            Portfolio & Case Studies
          </h1>
        </div>
      </section>

      <!-- INTERACTIVE BEFORE/AFTER SLIDER WIDGET -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="bg-slate-900 text-white rounded-lg overflow-hidden border border-white/5 shadow-2xl">
          <div class="grid grid-cols-1 lg:grid-cols-12">
            
            <!-- Left Info Panel -->
            <div class="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div class="space-y-4">
                <span class="inline-block px-3 py-1 bg-gold-500 text-slate-950 text-[10px] font-bold tracking-wider uppercase rounded">
                  Featured Case Study
                </span>
                <h3 class="text-2xl sm:text-3xl font-serif font-bold leading-snug">
                  Modern Villa Renovation in Chevayur
                </h3>
                <p class="text-xs text-slate-400 font-light leading-relaxed">
                  A comprehensive kitchen remodeling project. We removed uneven granite surfaces, corrected floor slopes, and installed custom vitrified slabs alongside matching mosaic backsplashes.
                </p>
              </div>

              <!-- Case Details -->
              <div class="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div class="flex justify-between">
                  <span class="text-slate-400">Project Type</span>
                  <span class="font-semibold text-white">Residential Tiling</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Materials Used</span>
                  <span class="font-semibold text-gold-400">800x1600mm Glazed Vitrified Slabs</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Joint Layout</span>
                  <span class="font-semibold text-white">2.0mm Spacer, Light-Grey Epoxy Grout</span>
                </div>
              </div>

              <div class="text-slate-500 text-[10px] italic">
                * Slide or drag the handle on the right image panel to inspect before vs after results.
              </div>
            </div>

            <!-- Right Interactive Slider -->
            <div class="lg:col-span-7 relative aspect-video md:aspect-[4/3] lg:aspect-auto min-h-96 bg-slate-950 overflow-hidden select-none">
              <!-- Before Image (Full Width Background) -->
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800" 
                   alt="Kitchen Before" 
                   class="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              <!-- Label Before -->
              <div class="absolute left-4 top-4 bg-black/60 border border-white/10 px-2.5 py-1 text-[10px] font-bold text-white uppercase rounded z-20">
                Before (Uneven Screed)
              </div>

              <!-- After Image (Width controlled by range input) -->
              <div class="absolute inset-y-0 left-0 overflow-hidden z-10 pointer-events-none" 
                   [style.width.%]="sliderVal()">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200" 
                     alt="Kitchen After" 
                     class="absolute inset-y-0 left-0 h-full object-cover pointer-events-none"
                     [style.width.px]="containerWidth()" />
              </div>
              <!-- Label After -->
              <div class="absolute right-4 top-4 bg-gold-500 text-slate-950 px-2.5 py-1 text-[10px] font-bold uppercase rounded z-20">
                After (Perfect Finish)
              </div>

              <!-- Divider Line & Circle Handle -->
              <div class="absolute inset-y-0 z-20 pointer-events-none" [style.left.%]="sliderVal()">
                <div class="w-[2px] h-full bg-gold-500 relative">
                  <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-gold-500 text-slate-950 rounded-full flex items-center justify-center border-2 border-white shadow-2xl">
                    <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Hidden Range Input for Drag Behavior -->
              <input type="range" min="0" max="100" [(ngModel)]="sliderInput" (input)="onSliderInput($event)"
                     class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
            </div>

          </div>
        </div>
      </section>

      <!-- DYNAMIC CATEGORIZED PORTFOLIO -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-slate-200 pb-6">
          <button *ngFor="let cat of filterCategories"
                  (click)="activeCategory.set(cat.value)"
                  class="px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none"
                  [ngClass]="activeCategory() === cat.value ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'">
            {{ cat.label }}
          </button>
        </div>

        <!-- Image Grid (Pinterest / Architectural Digest Inspired) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let item of filteredItems()" class="group relative bg-white border border-slate-200 rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div class="relative overflow-hidden aspect-[4/3] bg-slate-950 shrink-0">
              <img [src]="item.image" [alt]="item.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
            </div>
            
            <div class="p-6 flex-grow space-y-3">
              <span class="text-[10px] font-bold text-gold-600 uppercase tracking-widest">{{ item.category | uppercase }} PROJECT</span>
              <h4 class="text-lg font-serif font-bold text-slate-900">{{ item.title }}</h4>
              
              <div class="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div class="flex justify-between">
                  <span class="font-light">Scope:</span>
                  <span class="font-medium text-slate-800">{{ item.scope }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-light">Material:</span>
                  <span class="font-medium text-slate-800">{{ item.materials }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-light">Dimension:</span>
                  <span class="font-medium text-slate-800">{{ item.size }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  `
})
export class PortfolioComponent {
  sliderVal = signal<number>(50);
  sliderInput = 50;
  containerWidth = signal<number>(600); // base fallback width
  activeCategory = signal<string>('all');

  filterCategories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Living Rooms', value: 'living' },
    { label: 'Luxury Bathrooms', value: 'bathroom' },
    { label: 'Modern Kitchens', value: 'kitchen' },
    { label: 'Commercial Projects', value: 'commercial' }
  ];

  portfolioItems: PortfolioItem[] = [
    {
      id: 'port_1',
      title: 'Modern Living Hall, Kozhikode',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
      scope: 'Full Flooring & Border Highlights',
      materials: 'Polished Italian Travertine Marble',
      size: '2200 sq.ft'
    },
    {
      id: 'port_2',
      title: 'Monsoon-Protected Wetroom, Calicut',
      category: 'bathroom',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
      scope: 'Shower Floor Slope & Wall Grouting',
      materials: 'Matt Ceramic Non-slip Slabs',
      size: '180 sq.ft'
    },
    {
      id: 'port_3',
      title: 'Executive Office Lobby, Puthiyara',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800',
      scope: 'Zero-lippage Floor Overlay',
      materials: '800x1600 Double Charged Vitrified',
      size: '4500 sq.ft'
    },
    {
      id: 'port_4',
      title: 'Luxury Kitchen Splendour, Chevayur',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
      scope: 'Countertop Grout and Backsplash Accent',
      materials: 'Porcelain Mosaic Geometric Tiles',
      size: '280 sq.ft'
    },
    {
      id: 'port_5',
      title: 'Vocal Room Divider Layout, Kozhikode',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600',
      scope: 'Teak Wooden Divider and Vitrified Flooring',
      materials: 'Wood Ceramic Comb & Matt Tile',
      size: '1400 sq.ft'
    },
    {
      id: 'port_6',
      title: 'Showroom Floor Layout, Pavamani Road',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600',
      scope: 'Heavy Traffic Commercial Flooring',
      materials: 'Quartzite Slabs with Expansion joint',
      size: '3800 sq.ft'
    }
  ];

  filteredItems = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === cat);
  });

  constructor() {
    if (typeof window !== 'undefined') {
      // Set responsive container width for the slider
      this.updateWidth();
      window.addEventListener('resize', () => this.updateWidth());
    }
  }

  updateWidth() {
    if (typeof window !== 'undefined') {
      // Approximate container width based on viewport
      const width = window.innerWidth;
      if (width >= 1024) {
        this.containerWidth.set(Math.min(740, width * 0.58));
      } else {
        this.containerWidth.set(width - 32);
      }
    }
  }

  onSliderInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.sliderVal.set(Number(val));
  }
}
