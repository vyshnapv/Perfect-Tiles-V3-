import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  details: string[];
  image: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <main class="bg-travertine-50 pt-32 pb-24">
      
      <!-- PAGE HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 animate-fade-in">
        <div class="border-l-4 border-gold-500 pl-6 space-y-4">
          <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase">Expertise & Solutions</h2>
          <h1 class="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-wide">
            Our Premium Contracting Services
          </h1>
        </div>
      </section>

      <!-- SERVICES CARD GRID -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let s of services" class="group relative bg-white rounded-lg border border-slate-200 shadow hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <!-- Image Header with Hover Accent -->
            <div class="relative h-56 overflow-hidden bg-slate-900 shrink-0">
              <img [src]="s.image" [alt]="s.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              <!-- Floating Icon -->
              <div class="absolute top-4 left-4 p-2 bg-gold-500 text-slate-950 rounded shadow">
                <svg *ngIf="s.icon === 'grid'" class="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                <svg *ngIf="s.icon === 'gem'" class="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path d="M6 3h12l4 6-10 13L2 9z" />
                  <path d="M11 3l-4 6 5 13 5-13-4-6" />
                  <path d="M2 9h20" />
                </svg>
                <svg *ngIf="s.icon === 'wall'" class="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="8" rx="1" />
                  <rect x="6" y="10" width="12" height="8" rx="1" />
                  <path d="M2 10h4M18 10h4M2 18h20" />
                </svg>
                <svg *ngIf="s.icon === 'droplet'" class="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path d="M12 22a7 7 0 007-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 007 7z" />
                </svg>
                <svg *ngIf="s.icon === 'columns'" class="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <line x1="5" y1="5" x2="5" y2="19" />
                  <line x1="19" y1="5" x2="19" y2="19" />
                </svg>
                <svg *ngIf="s.icon === 'building'" class="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="22" x2="9" y2="16" />
                  <line x1="15" y1="22" x2="15" y2="16" />
                  <line x1="9" y1="16" x2="15" y2="16" />
                  <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" />
                </svg>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 space-y-4 flex-grow">
              <h3 class="text-xl font-serif font-bold text-slate-900 group-hover:text-gold-600 transition-colors">
                {{ s.title }}
              </h3>
              <p class="text-xs text-slate-600 font-light leading-relaxed">
                {{ s.desc }}
              </p>
              
              <!-- Features -->
              <ul class="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li *ngFor="let item of s.details" class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Footer CTA Link -->
            <div class="px-6 pb-6 pt-2">
              <a routerLink="/contact" class="text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-gold-600 transition-colors flex items-center space-x-1">
                <span>Request details</span>
                <svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE BUDGET CALCULATOR WIDGET -->
      <section class="bg-slate-900 text-white py-20 border-y border-white/5 mb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <!-- Left: Intro & Widget -->
            <div class="lg:col-span-5 space-y-6">
              <h2 class="text-xs font-semibold tracking-widest text-gold-400 uppercase">Interactive Tool</h2>
              <h3 class="text-3xl font-serif font-bold">Tile Budget Calculator</h3>
              <p class="text-xs text-slate-400 font-light leading-relaxed">
                Enter your layout dimensions and target tile configurations to generate a material estimate. We incorporate a standard 10% wastage margin to account for angular corner cuts and threshold trims.
              </p>

              <!-- Inputs Panel -->
              <div class="p-6 bg-slate-800 border border-white/5 rounded-lg space-y-4">
                <!-- Length -->
                <div class="flex flex-col">
                  <label class="text-xs font-semibold text-slate-300 mb-1" for="calcLength">Room Length (Feet)</label>
                  <input id="calcLength" type="number" [(ngModel)]="roomLength" 
                         class="px-3 py-2 bg-slate-950 border border-white/10 rounded focus:border-gold-500 focus:outline-none text-sm" />
                </div>
                <!-- Width -->
                <div class="flex flex-col">
                  <label class="text-xs font-semibold text-slate-300 mb-1" for="calcWidth">Room Width (Feet)</label>
                  <input id="calcWidth" type="number" [(ngModel)]="roomWidth" 
                         class="px-3 py-2 bg-slate-950 border border-white/10 rounded focus:border-gold-500 focus:outline-none text-sm" />
                </div>
                <!-- Tile Size -->
                <div class="flex flex-col">
                  <label class="text-xs font-semibold text-slate-300 mb-1" for="calcSize">Select Tile Dimension</label>
                  <select id="calcSize" [(ngModel)]="selectedTileSize" 
                          class="px-3 py-2 bg-slate-950 border border-white/10 rounded focus:border-gold-500 focus:outline-none text-sm text-white">
                    <option *ngFor="let opt of tileSizes" [value]="opt.value">{{ opt.label }}</option>
                  </select>
                </div>
                <!-- Margin -->
                <div class="flex flex-col">
                  <label class="text-xs font-semibold text-slate-300 mb-1" for="calcMargin">Wastage Buffer (%)</label>
                  <select id="calcMargin" [(ngModel)]="wastagePercent" 
                          class="px-3 py-2 bg-slate-950 border border-white/10 rounded focus:border-gold-500 focus:outline-none text-sm text-white">
                    <option [value]="5">5% (Minimal adjustments)</option>
                    <option [value]="10">10% (Standard Layouts)</option>
                    <option [value]="15">15% (Diagonal/Herringbone)</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Right: Calculation Outputs -->
            <div class="lg:col-span-7 bg-slate-950 border border-white/10 p-8 rounded-lg space-y-8">
              <h4 class="text-lg font-serif font-semibold text-white border-b border-white/5 pb-2">Material Calculation Sheet</h4>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p class="text-xs text-slate-400">Total Carpet Area</p>
                  <p class="text-3xl font-serif font-bold text-white mt-1">{{ totalArea() | number:'1.2-2' }} <span class="text-sm font-sans text-slate-400">sq.ft</span></p>
                </div>
                <div>
                  <p class="text-xs text-slate-400">Net Tile Pieces Needed</p>
                  <p class="text-3xl font-serif font-bold text-white mt-1">{{ baseTileCount() | number:'1.0-0' }} <span class="text-sm font-sans text-slate-400">units</span></p>
                </div>
                <div>
                  <p class="text-xs text-slate-400">Wastage Buffer Tiles ({{ wastagePercent() }}%)</p>
                  <p class="text-2xl font-serif font-bold text-gold-400 mt-1">{{ bufferTiles() | number:'1.0-0' }} <span class="text-xs font-sans text-slate-400">units</span></p>
                </div>
                <div>
                  <p class="text-xs text-slate-400">Total Order Quantity</p>
                  <p class="text-3xl font-serif font-bold text-gold-500 mt-1">{{ totalTileCount() | number:'1.0-0' }} <span class="text-sm font-sans text-slate-400">units</span></p>
                </div>
              </div>

              <!-- Recommendation Banner -->
              <div class="p-4 bg-gold-500/10 border border-gold-500/20 rounded text-xs text-slate-300 leading-relaxed">
                <strong class="text-gold-400 block mb-1">Contractor Note:</strong>
                Calculations are based on selected sizes. Diagonal, Chevron, or Herringbone layouts will require a 15% wastage buffer to accommodate corner angle cuts. We recommend retaining 1 box of tiles post-installation for future repair matches.
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- TECHNICAL MATERIAL SPECIFICATIONS SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">Material Matrix</h2>
          <h3 class="text-3xl font-serif font-bold text-slate-900">Technical Specifications</h3>
        </div>

        <div class="overflow-x-auto border border-slate-200 rounded-lg shadow bg-white">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <th class="p-4 font-semibold">Material Class</th>
                <th class="p-4 font-semibold">Typical Applications</th>
                <th class="p-4 font-semibold">Adhesive Grade Recommended</th>
                <th class="p-4 font-semibold">Porosity Rate</th>
                <th class="p-4 font-semibold">Joint Spacer Width</th>
              </tr>
            </thead>
            <tbody class="text-xs sm:text-sm text-slate-700 divide-y divide-slate-100">
              <tr>
                <td class="p-4 font-bold text-slate-900">Vitrified Slabs</td>
                <td class="p-4">Living rooms, heavy-duty hallways</td>
                <td class="p-4">C2TE Type 2 Polymer Mortar</td>
                <td class="p-4">&lt; 0.05% (Extremely dense)</td>
                <td class="p-4">2.0mm - 3.0mm</td>
              </tr>
              <tr class="bg-slate-50/50">
                <td class="p-4 font-bold text-slate-900">Italian Marble</td>
                <td class="p-4">Luxury entrance lobbys, focal floors</td>
                <td class="p-4">White Cement base C2S1 flexible adhesive</td>
                <td class="p-4">0.15% - 0.20% (Porous - needs sealer)</td>
                <td class="p-4">Paper-joint or 1.0mm</td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-slate-900">Ceramic / Glazed</td>
                <td class="p-4">Bathroom walls, backsplash bands</td>
                <td class="p-4">C1T Standard cement mortar</td>
                <td class="p-4">3.0% - 10.0% (High absorption)</td>
                <td class="p-4">3.0mm - 4.0mm</td>
              </tr>
              <tr class="bg-slate-50/50">
                <td class="p-4 font-bold text-slate-900">Granite Slabs</td>
                <td class="p-4">Kitchen worktops, external staircases</td>
                <td class="p-4">Heavy structural epoxy base adhesive</td>
                <td class="p-4">0.08% (Highly durable)</td>
                <td class="p-4">1.5mm - 2.0mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>
  `
})
export class ServicesComponent {
  roomLength = signal<number>(12);
  roomWidth = signal<number>(10);
  selectedTileSize = signal<number>(4); // default to 2x2 = 4 sqft
  wastagePercent = signal<number>(10);

  tileSizes = [
    { label: '1x1 Feet (1.0 sq.ft)', value: 1 },
    { label: '2x2 Feet (4.0 sq.ft)', value: 4 },
    { label: '2x4 Feet (8.0 sq.ft)', value: 8 },
    { label: '3x3 Feet (9.0 sq.ft)', value: 9 },
  ];

  totalArea = computed(() => {
    const l = this.roomLength() || 0;
    const w = this.roomWidth() || 0;
    return l * w;
  });

  baseTileCount = computed(() => {
    const area = this.totalArea();
    const size = this.selectedTileSize();
    return size > 0 ? area / size : 0;
  });

  bufferTiles = computed(() => {
    return this.baseTileCount() * (this.wastagePercent() / 100);
  });

  totalTileCount = computed(() => {
    return Math.ceil(this.baseTileCount() + this.bufferTiles());
  });

  services: ServiceItem[] = [
    {
      id: 'ser_1',
      title: 'Ceramic & Vitrified Laying',
      desc: 'Expert layout design and alignment for premium ceramic and vitrified tiles. Ideal for standard bedrooms, drawing halls, and utility balconies.',
      details: [
        'Laser-guided joint alignment',
        'Lippage-free surface finish',
        'Stain resistant epoxy grouting',
        'Vitrified large slab specialists'
      ],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600',
      icon: 'grid'
    },
    {
      id: 'ser_2',
      title: 'Luxury Marble & Granite',
      desc: 'Sourcing, matching, dry-laying, laying, mirror polishing, and breathing seal treatments for exotic Italian marbles, Indian marbles, and granite blocks.',
      details: [
        'Stone vein-matching dry runs',
        'White cement backing treatments',
        'Diamond grinding and mirror-glaze',
        'Anti-stain sealer application'
      ],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600',
      icon: 'gem'
    },
    {
      id: 'ser_3',
      title: 'Kitchen Backsplashes & Accents',
      desc: 'High-aesthetic tile arrangements, mosaic layouts, glass tiles, subway profiles, and custom geometric highlights to make work zones stand out.',
      details: [
        'Subway, Chevron and Herringbone setups',
        'Outlet cut-out precision trims',
        'Mildew-proof corner caulking',
        'High temperature adhesive mixes'
      ],
      image: 'https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?q=80&w=600',
      icon: 'wall'
    },
    {
      id: 'ser_4',
      title: 'Bathroom & Wetroom Waterproofing',
      desc: 'End-to-end waterproofing membranes, floor slopes, drain alignments, and complete moisture barrier tiles for long-lasting damp-proof restrooms.',
      details: [
        'Slope corrections towards drains',
        'Curing of cementitious base barriers',
        'Flood tests prior to final tiling',
        'Fungus-resistant joint compounds'
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600',
      icon: 'droplet'
    },
    {
      id: 'ser_5',
      title: 'Wooden & Modern Partitions',
      desc: 'Beautiful interior partitions, geometric dividers, and wooden style frame setups that split drawing and dining areas elegantly (inspired by classic Kerala-modern decors).',
      details: [
        'Teak and engineered wood frameworks',
        'Laser vertical plumb alignments',
        'Seamless integration with wall tiling',
        'Integrated ambient lighting setups'
      ],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600',
      icon: 'columns'
    },
    {
      id: 'ser_6',
      title: 'Commercial Scale Flooring',
      desc: 'Speedy, high-precision laying for large workspaces, hospitals, retail showrooms, and hotel lobbies, adhering strictly to commercial grade tolerances.',
      details: [
        'Heavy traffic vitrified tiles',
        'Rapid-curing adhesive mortars',
        'Structural movement joint spacing',
        'Night-shift operation compatibility'
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600',
      icon: 'building'
    }
  ];
}
