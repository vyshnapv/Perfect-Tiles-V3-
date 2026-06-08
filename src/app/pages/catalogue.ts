import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CatalogItem {
  id: string;
  name: string;
  collection: string; // 'porcelain', 'stone', 'mosaic'
  texture: 'Matte' | 'Glossy' | 'Satin' | 'Rustic';
  size: string; // e.g., '600x600mm', '800x1600mm', '300x300mm'
  sizeCategory: 'standard' | 'slab' | 'mosaic';
  image: string;
  desc: string;
  spec: string;
}

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main class="bg-travertine-50 pt-32 pb-24">
      
      <!-- PAGE HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 animate-fade-in">
        <div class="border-l-4 border-gold-500 pl-6 space-y-4">
          <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase">Material Digital Showroom</h2>
          <h1 class="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-wide">
            Tiles & Materials Catalogue
          </h1>
        </div>
      </section>

      <!-- FILTER CONTROLS BAR -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-6">
          
          <!-- Row 1: Collections -->
          <div>
            <h4 class="text-xs font-bold font-sans uppercase tracking-wider text-slate-400 mb-3">Filter by Collection</h4>
            <div class="flex flex-wrap gap-2">
              <button *ngFor="let col of collectionFilters"
                      (click)="activeCollection.set(col.value)"
                      class="px-4 py-2 rounded text-xs font-semibold tracking-wide uppercase transition-colors"
                      [ngClass]="activeCollection() === col.value ? 'bg-slate-900 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'">
                {{ col.label }}
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <!-- Row 2: Texture Filters -->
            <div>
              <h4 class="text-xs font-bold font-sans uppercase tracking-wider text-slate-400 mb-3">Filter by Texture</h4>
              <div class="flex flex-wrap gap-2">
                <button *ngFor="let text of textureFilters"
                        (click)="activeTexture.set(text.value)"
                        class="px-3 py-1.5 rounded text-xs font-medium transition-colors"
                        [ngClass]="activeTexture() === text.value ? 'bg-gold-500 text-slate-950 font-semibold' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'">
                  {{ text.label }}
                </button>
              </div>
            </div>

            <!-- Row 3: Size Filters -->
            <div>
              <h4 class="text-xs font-bold font-sans uppercase tracking-wider text-slate-400 mb-3">Filter by Dimension</h4>
              <div class="flex flex-wrap gap-2">
                <button *ngFor="let sz of sizeFilters"
                        (click)="activeSize.set(sz.value)"
                        class="px-3 py-1.5 rounded text-xs font-medium transition-colors"
                        [ngClass]="activeSize() === sz.value ? 'bg-gold-500 text-slate-950 font-semibold' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'">
                  {{ sz.label }}
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- CATALOG GRID -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Result count -->
        <div class="text-xs text-slate-500 mb-6 font-mono">
          Showing {{ filteredItems().length }} results matching selection
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let item of filteredItems()" class="group relative bg-white border border-slate-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <!-- Material Image -->
            <div class="relative aspect-square bg-slate-950 overflow-hidden shrink-0">
              <img [src]="item.image" [alt]="item.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90" />
              <!-- Collection tag -->
              <span class="absolute top-4 left-4 px-2.5 py-1 bg-slate-900/90 text-gold-400 border border-white/10 text-[9px] font-bold tracking-widest uppercase rounded">
                {{ item.collection }}
              </span>
            </div>

            <!-- Material Details -->
            <div class="p-6 space-y-4 flex-grow">
              <h3 class="text-lg font-serif font-bold text-slate-900 group-hover:text-gold-600 transition-colors">
                {{ item.name }}
              </h3>
              <p class="text-xs text-slate-600 font-light leading-relaxed">
                {{ item.desc }}
              </p>
              
              <!-- Specs list -->
              <div class="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600 font-mono">
                <div class="flex justify-between">
                  <span class="font-light">Finish:</span>
                  <span class="font-medium text-slate-800">{{ item.texture }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-light">Sizing:</span>
                  <span class="font-medium text-slate-800">{{ item.size }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-light">Water Absorption:</span>
                  <span class="font-medium text-slate-800">{{ item.spec }}</span>
                </div>
              </div>
            </div>

            <!-- Action footer -->
            <div class="px-6 pb-6 pt-2">
              <a routerLink="/contact" class="w-full text-center py-2.5 bg-slate-100 hover:bg-gold-500 hover:text-slate-950 text-slate-700 text-xs font-semibold uppercase tracking-wider rounded transition-colors duration-300 block">
                Inquire About Material
              </a>
            </div>
          </div>
        </div>

        <!-- No Results Fallback -->
        <div *ngIf="filteredItems().length === 0" class="text-center py-16 bg-white border border-slate-200 rounded-lg shadow-sm">
          <svg class="w-12 h-12 text-slate-300 mx-auto mb-4 stroke-current fill-none stroke-1" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="9" y1="9" x2="15" y2="15" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="15" y1="9" x2="9" y2="15" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h4 class="font-serif text-lg font-bold text-slate-900">No Materials Match Filters</h4>
          <p class="text-xs text-slate-500 font-light mt-1">Try resetting texture or sizing options to explore other products.</p>
        </div>
      </section>

    </main>
  `
})
export class CatalogueComponent {
  activeCollection = signal<string>('all');
  activeTexture = signal<string>('all');
  activeSize = signal<string>('all');

  collectionFilters = [
    { label: 'All Collections', value: 'all' },
    { label: 'Porcelain & Ceramic', value: 'porcelain' },
    { label: 'Natural Stone', value: 'stone' },
    { label: 'Mosaic & Accent', value: 'mosaic' },
  ];

  textureFilters = [
    { label: 'All Textures', value: 'all' },
    { label: 'Matte Finish', value: 'Matte' },
    { label: 'Glossy Finish', value: 'Glossy' },
    { label: 'Satin Finish', value: 'Satin' },
    { label: 'Rustic Finish', value: 'Rustic' },
  ];

  sizeFilters = [
    { label: 'All Sizes', value: 'all' },
    { label: 'Standard Tiles (600x600)', value: 'standard' },
    { label: 'Large Slabs (800x1600)', value: 'slab' },
    { label: 'Mosaic Accents (300x300)', value: 'mosaic' },
  ];

  catalogItems: CatalogItem[] = [
    {
      id: 'cat_1',
      name: 'Statuario Royal Slabs',
      collection: 'stone',
      texture: 'Glossy',
      size: '800x1600mm',
      sizeCategory: 'slab',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400',
      desc: 'Elegant natural stone quarried with premium white base and clean vein formations. Replicates classical Italian marble architecture.',
      spec: '< 0.15%'
    },
    {
      id: 'cat_2',
      name: 'Nero Marquina Black',
      collection: 'stone',
      texture: 'Glossy',
      size: '800x1600mm',
      sizeCategory: 'slab',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400',
      desc: 'Bold black natural stone layered with delicate crystalline white lines. Highly recommended for premium drawing room panels.',
      spec: '< 0.12%'
    },
    {
      id: 'cat_3',
      name: 'Caramel Travertine Matt',
      collection: 'stone',
      texture: 'Matte',
      size: '600x600mm',
      sizeCategory: 'standard',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=300',
      desc: 'Classic travertine stone style offering warmth, anti-skid friction, and natural textures. Perfect for outdoor walkways and bathrooms.',
      spec: '< 0.20%'
    },
    {
      id: 'cat_4',
      name: 'Glazed Crema Vitrified',
      collection: 'porcelain',
      texture: 'Satin',
      size: '600x600mm',
      sizeCategory: 'standard',
      image: 'https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?q=80&w=400',
      desc: 'Double-charged, low porosity porcelain featuring warm cream tones. Delivers a soft, highly reflective mirror-like finish under spotlights.',
      spec: '< 0.05%'
    },
    {
      id: 'cat_5',
      name: 'Geometric Hex Gold',
      collection: 'mosaic',
      texture: 'Glossy',
      size: '300x300mm',
      sizeCategory: 'mosaic',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400',
      desc: 'Elegant mosaic accents featuring alternating brushed gold and dark gray hexagonal segments. Great for focal shower wall designs.',
      spec: '< 0.02%'
    },
    {
      id: 'cat_6',
      name: 'Terracotta Handcrafted Rustic',
      collection: 'porcelain',
      texture: 'Rustic',
      size: '300x300mm',
      sizeCategory: 'standard',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400',
      desc: 'Warm earthy tiles inspired by traditional Kerala tile setups. Rough texture delivers rustic aesthetics and superior grip.',
      spec: '< 3.5%'
    }
  ];

  filteredItems = computed(() => {
    const col = this.activeCollection();
    const txt = this.activeTexture();
    const sz = this.activeSize();

    return this.catalogItems.filter(item => {
      const colMatch = (col === 'all' || item.collection === col);
      const txtMatch = (txt === 'all' || item.texture === txt);
      const szMatch = (sz === 'all' || item.sizeCategory === sz);
      return colMatch && txtMatch && szMatch;
    });
  });
}
