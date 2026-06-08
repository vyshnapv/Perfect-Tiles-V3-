import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <main class="relative min-h-screen bg-travertine-50">
      
      <!-- HERO SECTION -->
      <section class="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920" 
               alt="Luxury Tiled Interior" 
               class="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-10000 ease-out" 
               style="transform: scale(1.03);" />
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Hero Text Content -->
            <div class="lg:col-span-7 space-y-8 animate-fade-in">
              <div class="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span class="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                <span class="text-[10px] sm:text-xs font-semibold tracking-widest text-gold-400 uppercase">Premium Contracting in Kerala</span>
              </div>
              
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-wide">
                Crafting Perfection <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300">
                  in Every Square Inch
                </span>
              </h1>
              
              <p class="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
                For over 15 years, Perfect Tile Works has delivered exquisite tile installations, marble layouts, and luxury interior design enhancements to residences and commercial spaces across Kozhikode.
              </p>
              
              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a routerLink="/contact" class="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-slate-950 text-center font-bold uppercase tracking-wider text-xs rounded transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 active:scale-[0.98]">
                  Get a Free Quote
                </a>
                <a routerLink="/portfolio" class="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-center font-bold uppercase tracking-wider text-xs rounded transition-all duration-300 active:scale-[0.98]">
                  Explore Our Gallery
                </a>
              </div>
            </div>

            <!-- Hero Image Layer / Interactive Badges -->
            <div class="lg:col-span-5 relative hidden lg:block">
              <div class="relative w-full aspect-square max-w-[420px] mx-auto">
                <div class="absolute inset-0 border-2 border-gold-500/30 translate-x-4 translate-y-4 rounded-lg"></div>
                <div class="absolute inset-0 bg-slate-900 rounded-lg overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800" 
                       alt="Craftsmanship Excellence" 
                       class="w-full h-full object-cover" />
                </div>
                <!-- Interactive Badge 1 -->
                <div class="absolute -left-8 top-12 p-4 bg-slate-900/90 border border-white/10 backdrop-blur-md rounded shadow-2xl flex items-center space-x-3 animate-bounce" style="animation-duration: 4s;">
                  <div class="p-2 bg-gold-500/20 text-gold-500 rounded">
                    <svg class="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white font-sans">4.4★ Rated</h4>
                    <p class="text-[10px] text-slate-400">Trusted Contractor</p>
                  </div>
                </div>
                <!-- Interactive Badge 2 -->
                <div class="absolute -right-6 bottom-16 p-4 bg-slate-900/90 border border-white/10 backdrop-blur-md rounded shadow-2xl flex items-center space-x-3 animate-bounce" style="animation-duration: 5s;">
                  <div class="p-2 bg-gold-500/20 text-gold-500 rounded">
                    <svg class="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 8v4l3 3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white font-sans">15+ Years</h4>
                    <p class="text-[10px] text-slate-400">Business Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <!-- TRUST BAR -->
      <section class="bg-slate-900 border-y border-white/5 py-8 relative z-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 class="text-2xl sm:text-3xl font-bold text-gold-500 font-serif">15+</h3>
              <p class="text-xs sm:text-sm text-slate-400 font-light mt-1">Years of Legacy</p>
            </div>
            <div>
              <h3 class="text-2xl sm:text-3xl font-bold text-gold-500 font-serif">500+</h3>
              <p class="text-xs sm:text-sm text-slate-400 font-light mt-1">Projects Completed</p>
            </div>
            <div>
              <h3 class="text-2xl sm:text-3xl font-bold text-gold-500 font-serif">4.4★</h3>
              <p class="text-xs sm:text-sm text-slate-400 font-light mt-1">Client Rating</p>
            </div>
            <div>
              <h3 class="text-2xl sm:text-3xl font-bold text-gold-500 font-serif">100%</h3>
              <p class="text-xs sm:text-sm text-slate-400 font-light mt-1">Material Integrity</p>
            </div>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE 3D LAYERED TEXTURE GRID -->
      <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">Premium Collections</h2>
          <h3 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
            Explore Handpicked Textures
          </h3>
          <p class="text-sm text-slate-600 font-light mt-4 leading-relaxed">
            Hover over each element to inspect the unique textures, reflections, and composition details. We source only the finest materials from trusted global suppliers.
          </p>
        </div>

        <!-- 3D Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let item of textures; let idx = index" 
               (mouseenter)="hoveredIdx.set(idx)"
               (mouseleave)="hoveredIdx.set(-1)"
               class="group relative h-96 bg-slate-900 rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform border border-slate-800 hover:-translate-y-2 hover:shadow-2xl">
            <!-- Background Image -->
            <img [src]="item.image" 
                 [alt]="item.title" 
                 class="w-full h-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            <!-- Floating texture description tags -->
            <div class="absolute inset-x-6 bottom-6 space-y-3 z-10">
              <span class="inline-block px-3 py-1 bg-gold-500 text-slate-950 text-[10px] font-bold tracking-wider uppercase rounded">
                {{ item.category }}
              </span>
              <h4 class="text-xl font-bold text-white font-serif">{{ item.title }}</h4>
              <p class="text-xs text-slate-300 font-light line-clamp-2 transition-all duration-300" 
                 [ngClass]="hoveredIdx() === idx ? 'opacity-100 max-h-16' : 'opacity-80'">
                {{ item.desc }}
              </p>
            </div>
            
            <!-- Texture Specifications Overlay -->
            <div class="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm border border-white/10 rounded px-2.5 py-1 text-[10px] text-gold-400 font-mono tracking-wider">
              {{ item.spec }}
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT US PREVIEW SECTION (LOCALIZED) -->
      <section class="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div class="absolute right-0 top-0 w-1/3 h-full opacity-10 hidden lg:block pointer-events-none">
          <!-- Geometric background styling -->
          <div class="w-full h-full border-l border-t border-gold-500/20 rotate-45 transform origin-top-right"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="relative aspect-video lg:aspect-square rounded-lg overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" 
                   alt="Perfect Tile Works Showroom Kozhikode" 
                   class="w-full h-full object-cover" />
              <!-- Small Badge -->
              <div class="absolute bottom-6 left-6 p-4 bg-slate-950/90 border border-gold-500/30 rounded shadow-lg max-w-xs backdrop-blur-sm">
                <p class="text-xs text-gold-400 font-semibold uppercase tracking-wider">Showroom Location</p>
                <p class="text-xs text-slate-300 mt-1 font-light leading-relaxed">
                  Pavamani Road, Puthiyara, Kozhikode. Near Baby Memorial Hospital.
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <h2 class="text-xs font-semibold tracking-widest text-gold-500 uppercase">Local Expertise</h2>
              <h3 class="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Deep Roots in Kozhikode's Interior Design Legacy
              </h3>
              <p class="text-sm text-slate-300 font-light leading-relaxed">
                Operating from the heart of Calicut, Perfect Tile Works has been a trusted installation partner for prominent builders, interior decorators, and discerning homeowners. We understand local climates, moisture sealing needs, and structural patterns, offering tailored tiling layouts that stand the test of monsoon cycles and high humidity.
              </p>
              
              <div class="space-y-4 pt-2">
                <div class="flex items-start space-x-3">
                  <div class="p-1 bg-gold-500/20 text-gold-500 rounded mt-1">
                    <svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-semibold text-white font-sans">15+ Years of Proven Business Operations</h4>
                    <p class="text-xs text-slate-400 font-light mt-0.5">Continuous professional service with an unblemished reputation.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="p-1 bg-gold-500/20 text-gold-500 rounded mt-1">
                    <svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-semibold text-white font-sans">Precision Leveling & Laser-guided Alignments</h4>
                    <p class="text-xs text-slate-400 font-light mt-0.5">We utilize specialized systems to ensure flat, lippage-free floor finishes.</p>
                  </div>
                </div>
              </div>

              <div class="pt-4">
                <a routerLink="/about" class="inline-flex items-center space-x-2 text-gold-500 hover:text-gold-400 text-xs font-semibold tracking-wider uppercase transition-colors">
                  <span>Learn More About Our Story</span>
                  <svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIAL SLIDER & QUICK CONTACT -->
      <section class="py-24 bg-travertine-100 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <!-- Left: Slider -->
            <div class="lg:col-span-7 space-y-8">
              <div>
                <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">Client Reviews</h2>
                <h3 class="text-3xl font-serif font-bold text-slate-900">What Our Clients in Calicut Say</h3>
              </div>

              <!-- Testimonial Card Slider Wrapper -->
              <div class="relative bg-white p-8 sm:p-10 rounded-lg shadow-md border border-slate-200/50 min-h-64 flex flex-col justify-between overflow-hidden">
                <div class="absolute top-4 right-6 text-gold-500/10 text-8xl font-serif pointer-events-none select-none">“</div>
                
                <div class="space-y-4 relative z-10">
                  <!-- Star Rating -->
                  <div class="flex items-center space-x-1">
                    <svg *ngFor="let s of [1,2,3,4,5]" 
                         class="w-5 h-5" 
                         [ngClass]="s <= currentTestimonial.rating ? 'text-gold-500 fill-current' : 'text-slate-300 fill-none'" 
                         viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <!-- Content -->
                  <p class="text-slate-700 italic font-light leading-relaxed text-sm sm:text-base">
                    "{{ currentTestimonial.text }}"
                  </p>
                </div>

                <!-- Client Info & Controls -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-100 gap-4 mt-6">
                  <div>
                    <h4 class="font-serif font-bold text-slate-900">{{ currentTestimonial.name }}</h4>
                    <p class="text-xs text-slate-500">{{ currentTestimonial.project }} — {{ currentTestimonial.location }}</p>
                  </div>
                  <!-- Control Buttons -->
                  <div class="flex items-center space-x-2">
                    <button (click)="prevTestimonial()" class="p-2 border border-slate-200 rounded hover:bg-slate-50 text-slate-600 transition-colors" aria-label="Previous Testimonial">
                      <svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <button (click)="nextTestimonial()" class="p-2 border border-slate-200 rounded hover:bg-slate-50 text-slate-600 transition-colors" aria-label="Next Testimonial">
                      <svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7 7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Quick Contact -->
            <div class="lg:col-span-5 bg-slate-900 text-white rounded-lg p-8 sm:p-10 border border-white/5 shadow-xl flex flex-col justify-between">
              <div class="space-y-4">
                <h3 class="text-2xl font-serif font-bold">Have a Project in Mind?</h3>
                <p class="text-xs text-slate-400 font-light leading-relaxed">
                  Tell us about your layouts, timeline, or interior concepts. We will get back to you within 24 hours with professional recommendations.
                </p>
              </div>

              <!-- Quick details -->
              <div class="space-y-4 my-6">
                <a href="tel:08460204779" class="flex items-center space-x-3 p-3 bg-white/5 hover:bg-white/10 rounded border border-white/5 transition-colors">
                  <div class="p-2 bg-gold-500/20 text-gold-500 rounded">
                    <svg class="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Quick Call</p>
                    <p class="text-sm font-bold text-gold-400">08460204779</p>
                  </div>
                </a>
                
                <a href="https://wa.me/918460204779" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 p-3 bg-emerald-500/10 hover:bg-emerald-500/20 rounded border border-emerald-500/25 transition-colors">
                  <div class="p-2 bg-emerald-500/20 text-emerald-400 rounded">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.37 5.084L2 22l5.094-1.33a9.96 9.96 0 004.912 1.306h.004c5.505 0 9.99-4.478 9.99-9.988 0-2.667-1.04-5.176-2.927-7.062A9.927 9.927 0 0012.012 2zm5.794 14.153c-.253.715-1.47 1.39-2.022 1.488-.5.088-1.15.158-3.36-.757-2.825-1.168-4.647-4.04-4.788-4.23-.14-.19-1.13-1.503-1.13-2.868 0-1.365.714-2.035.968-2.316.254-.28.55-.35.733-.35h.523c.168 0 .39.063.597.568.207.506.713 1.74.776 1.867.062.126.103.273.018.441-.084.168-.126.273-.253.42l-.382.464c-.126.147-.258.307-.11.562.146.252.654 1.077 1.4 1.743.96.857 1.77 1.122 2.022 1.248.253.126.398.105.546-.063.148-.168.63-.736.8-1.01.17-.274.338-.23.568-.147.23.084 1.46.687 1.713.813.253.126.42.19.484.3.063.11.063.633-.19 1.348z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Chat on WhatsApp</p>
                    <p class="text-sm font-bold text-emerald-400">Direct Message Link</p>
                  </div>
                </a>
              </div>

              <a routerLink="/contact" class="w-full text-center py-4 bg-gold-500 hover:bg-gold-600 text-slate-950 font-bold uppercase tracking-wider text-xs rounded transition-colors duration-300">
                Go to Inquiry Form
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  `
})
export class HomeComponent {
  hoveredIdx = signal<number>(-1);
  currentIdx = signal<number>(0);

  textures = [
    {
      title: 'Premium Italian Marble',
      category: 'Natural Stone',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600',
      desc: 'Seamless, highly polished slabs featuring striking grey veining. Perfect for premium drawing rooms and luxury entrance foyers.',
      spec: 'Thickness: 18-20mm'
    },
    {
      title: 'Custom Ceramic Mosaic',
      category: 'Accent Walls',
      image: 'https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?q=80&w=600',
      desc: 'Intricate glazed structures with artistic layouts. Highly resistant to water, ideal for kitchen backsplashes and bathroom highlight bands.',
      spec: 'Tile size: 300x300mm'
    },
    {
      title: 'Polished Vitrified Tile',
      category: 'Flooring Slabs',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600',
      desc: 'Double-charged, low porosity flooring with mirror finishes. Exceptionally durable for heavy footfalls in large commercial or residential halls.',
      spec: 'Size: 800x1600mm'
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Dr. Ramesh Nair',
      location: 'Puthiyara, Kozhikode',
      rating: 5,
      text: 'Perfect Tile Works tiled our entire clinic near Baby Memorial Hospital. The leveling is flawless, and the Italian marble joints in the lobby are barely visible. Excellent work!',
      project: 'Commercial Flooring'
    },
    {
      name: 'Fathima Zakariya',
      location: 'Chevayur, Calicut',
      rating: 5,
      text: 'We engaged them for our villa renovation. The bathroom waterproofing, custom wooden-framed partitions, and vitrified tile layout are outstanding. Truly 15 years of quality shows.',
      project: 'Villa Flooring & Partitioning'
    },
    {
      name: 'Mr. Arun K. P.',
      location: 'Pavamani Road, Kozhikode',
      rating: 4,
      text: 'Prompt, neat, and highly professional layout installers. Their team cleaned up after finishing the grouting work. Highly recommended for premium kitchen backsplashes.',
      project: 'Kitchen Accent Tiling'
    }
  ];

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIdx()];
  }

  nextTestimonial() {
    this.currentIdx.set((this.currentIdx() + 1) % this.testimonials.length);
  }

  prevTestimonial() {
    this.currentIdx.set((this.currentIdx() - 1 + this.testimonials.length) % this.testimonials.length);
  }
}
