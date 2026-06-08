import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="bg-travertine-50 pt-32 pb-24">
      
      <!-- PAGE HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 animate-fade-in">
        <div class="border-l-4 border-gold-500 pl-6 space-y-4">
          <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase">Our Story</h2>
          <h1 class="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-wide">
            15 Years of Crafting Luxury Interiors in Kozhikode
          </h1>
        </div>
      </section>

      <!-- COMPANY STORY NARRATIVE -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
        <!-- Story text -->
        <div class="lg:col-span-7 space-y-6 text-slate-700 font-light leading-relaxed text-sm sm:text-base">
          <p>
            Established in 2011, **Perfect Tile Works** began as a small group of passionate tiling artisans in Calicut. Over the last 15 years, our relentless focus on layout precision, flat alignment, and waterproofing integrity has built our reputation as Kozhikode's premier tile and stone installation contractor.
          </p>
          <p>
            Operating out of our central location near Baby Memorial Hospital, Pavamani Road, Puthiyara, we have had the privilege to style luxury villas, large corporate offices, premium commercial showrooms, and intimate modern apartments. 
          </p>
          <p>
            We believe that tiling is not simply laying blocks; it is an architectural art form that integrates lines, light reflections, material thresholds, and moisture defense. By blending traditional Keralite architectural elements with sleek, modern European patterns, we deliver flooring and wall enhancements that remain flawless across seasons.
          </p>
          
          <div class="pt-4">
            <blockquote class="border-l-2 border-gold-500 pl-4 italic text-slate-500 text-xs sm:text-sm">
              "A millimeter of misalignment ruins the reflection of a whole room. We install with a zero-lippage tolerance because we respect your investment."
              <span class="block mt-2 font-serif font-bold text-slate-900 not-italic">— Founder, Perfect Tile Works</span>
            </blockquote>
          </div>
        </div>

        <!-- Story Image Panel -->
        <div class="lg:col-span-5 relative">
          <div class="relative w-full aspect-[4/5] max-w-sm mx-auto">
            <div class="absolute inset-0 border-2 border-gold-500/30 -translate-x-4 -translate-y-4 rounded-lg"></div>
            <div class="absolute inset-0 bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800" 
                   alt="Artisan at work" 
                   class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <!-- CORE VALUES GRID -->
      <section class="bg-slate-900 py-24 border-y border-white/5 mb-24 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-xs font-semibold tracking-widest text-gold-500 uppercase mb-3">Our Core Values</h2>
            <h3 class="text-3xl font-serif font-bold">The Pillars of Our Craft</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div *ngFor="let val of values" class="p-8 bg-slate-800/50 border border-white/5 hover:border-gold-500/30 rounded transition-all duration-300">
              <div class="p-3 bg-gold-500/10 text-gold-500 rounded w-fit mb-6">
                <!-- SVG Icon depending on index -->
                <svg *ngIf="val.icon === 'ruler'" class="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19 7h-4M19 11h-2M19 15h-4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg *ngIf="val.icon === 'shield'" class="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg *ngIf="val.icon === 'clock'" class="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 6v6l4 2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg *ngIf="val.icon === 'tag'" class="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="7" y1="7" x2="7.01" y2="7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h4 class="text-lg font-serif font-bold mb-3">{{ val.title }}</h4>
              <p class="text-xs text-slate-400 font-light leading-relaxed">{{ val.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- THE CRAFTSMANSHIP PROCESS (INTERACTIVE TIMELINE) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">Our Work Ethic</h2>
          <h3 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            The Craftsmanship Process
          </h3>
          <p class="text-sm text-slate-600 font-light mt-4">
            Click on each step below to inspect how we take a project from concept to final sparkling completion.
          </p>
        </div>

        <!-- Interactive Steps Navigation -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <button *ngFor="let step of steps; let i = index" 
                  (click)="activeStepIdx.set(i)"
                  class="flex items-center space-x-3 p-4 rounded border text-left transition-all duration-300 focus:outline-none"
                  [ngClass]="activeStepIdx() === i ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'">
            <span class="text-2xl font-serif font-bold" [ngClass]="activeStepIdx() === i ? 'text-gold-500' : 'text-slate-400'">
              {{ step.step }}
            </span>
            <div>
              <p class="text-xs font-bold font-sans uppercase tracking-wider">{{ step.title }}</p>
            </div>
          </button>
        </div>

        <!-- Selected Step Detail Panel -->
        <div class="bg-white rounded-lg border border-slate-200 shadow-lg overflow-hidden transition-all duration-500 animate-fade-in">
          <div class="grid grid-cols-1 lg:grid-cols-12">
            <!-- Left description -->
            <div class="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <span class="text-xs font-mono font-semibold text-gold-600 tracking-wider uppercase">
                Step {{ currentStep.step }} — {{ currentStep.subtitle }}
              </span>
              <h4 class="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                {{ currentStep.title }}
              </h4>
              <p class="text-sm text-slate-600 leading-relaxed font-light">
                {{ currentStep.description }}
              </p>
              
              <!-- Check points -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div *ngFor="let detail of currentStep.details" class="flex items-center space-x-2 text-xs text-slate-700">
                  <svg class="w-4 h-4 text-emerald-500 shrink-0 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{ detail }}</span>
                </div>
              </div>
            </div>

            <!-- Right Visual decoration -->
            <div class="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-10 font-serif text-[180px] font-bold select-none pointer-events-none -bottom-16 -right-8">
                {{ currentStep.step }}
              </div>
              <div class="relative z-10 space-y-4">
                <h5 class="text-xs font-mono tracking-widest text-gold-400 uppercase">Quality Milestone</h5>
                <p class="text-sm italic font-serif text-slate-300">
                  "This phase ensures the integrity of the layers, so that water cannot seep and tiles never sound hollow."
                </p>
                <div class="w-12 h-1 bg-gold-500"></div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  `
})
export class AboutComponent {
  activeStepIdx = signal<number>(0);

  values = [
    {
      title: 'Precision Layouts',
      desc: 'We map joints and cuts using laser measurement systems to minimize waste and align perfectly with architectural thresholds.',
      icon: 'ruler'
    },
    {
      title: 'Material Integrity',
      desc: 'We never compromise on mortar formulas, epoxy grout grades, or sealer compounds, ensuring years of structural endurance.',
      icon: 'shield'
    },
    {
      title: 'On-Time Completion',
      desc: 'We work on strict milestone timelines, respecting client schedules, especially for commercial launch dates.',
      icon: 'clock'
    },
    {
      title: 'Transparent Pricing',
      desc: 'Our estimations break down tile numbers, adhesive bags, and manual labor with absolute clarity. Zero surprise charges.',
      icon: 'tag'
    }
  ];

  steps: TimelineStep[] = [
    {
      step: '01',
      title: 'Layout Design',
      subtitle: 'Conceptual planning & mockups',
      description: 'We measure the entire surface using laser tools, then generate layout proposals. This stage determines where joint thresholds lie, where cuts are positioned to avoid slim, unsightly pieces, and how tile directions accent the incoming natural light.',
      details: [
        'Laser level survey',
        'Cut planning to minimize waste',
        'Client pattern approval',
        'Expansion joint allocation'
      ]
    },
    {
      step: '02',
      title: 'Surface Prep',
      subtitle: 'Screeding & waterproofing',
      description: 'The foundation determines the lifespan of the tile. We strip previous adhesives, repair plaster cracks, check floor slopes for proper water runoffs (especially in bathrooms and wetrooms), and apply top-tier cementitious waterproofing coatings.',
      details: [
        'Slope checking & leveling',
        'Cracks & void repairs',
        'Screed bed cure validation',
        'Multi-coat waterproofing barrier'
      ]
    },
    {
      step: '03',
      title: 'Precision Laying',
      subtitle: 'Adhesive application & leveling',
      description: 'We mix grade-appropriate thin-set mortars matching the tiles (porcelain, heavy marble, etc.). Using precise notched trowels, we secure full contact behind each slab and apply leveling spacers to prevent any vertical lippage.',
      details: [
        'Back-buttering heavy slabs',
        'Lippage control spacer clips',
        'Zero-hollow checks',
        'Adhesive cure monitoring'
      ]
    },
    {
      step: '04',
      title: 'Finishing Touch',
      subtitle: 'Epoxy grouting & sealing',
      description: 'Once cured, we clear joint lines and apply custom color-matched epoxy grouts, which are stain-resistant and waterproof. Finally, natural stones are polished and treated with breathable penetrating sealers to safeguard their natural color.',
      details: [
        'Epoxy grout application',
        'Joint cleaning & scraping',
        'Polishing & stone sealing',
        'Final quality walkthrough'
      ]
    }
  ];

  get currentStep(): TimelineStep {
    return this.steps[this.activeStepIdx()];
  }
}
