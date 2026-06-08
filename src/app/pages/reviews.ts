import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
  date: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="bg-travertine-50 pt-32 pb-24">
      
      <!-- PAGE HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 animate-fade-in">
        <div class="border-l-4 border-gold-500 pl-6 space-y-4">
          <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase">Testimonials</h2>
          <h1 class="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-wide">
            Client Reviews & Success Stories
          </h1>
        </div>
      </section>

      <!-- RATING HIGHLIGHT PANEL -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div class="bg-slate-900 text-white rounded-lg p-8 sm:p-10 border border-white/5 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="space-y-3 text-center md:text-left">
            <h3 class="text-2xl sm:text-3xl font-serif font-bold">15+ Years of Business Excellence</h3>
            <p class="text-xs text-slate-400 font-light max-w-xl">
              From our showroom near Pavamani Road, Puthiyara, Calicut, we have consistently provided top-tier tiling services to hundreds of residential and commercial projects.
            </p>
          </div>
          <!-- Star highlight -->
          <div class="flex flex-col items-center shrink-0 p-6 bg-slate-800 rounded-lg border border-white/10 text-center w-56">
            <span class="text-4xl font-bold font-serif text-white">4.4</span>
            <div class="flex items-center space-x-1 my-2">
              <svg *ngFor="let s of [1,2,3,4,5]" class="w-5 h-5 text-gold-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-[10px] text-slate-400 uppercase tracking-widest">250+ Verified Reviews</span>
          </div>
        </div>
      </section>

      <!-- REVIEW MASONRY GRID -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let rev of reviewsList()" class="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow animate-fade-in">
            <!-- Stars & Date -->
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-0.5">
                <svg *ngFor="let s of [1,2,3,4,5]" 
                     class="w-4 h-4" 
                     [ngClass]="s <= rev.rating ? 'text-gold-500 fill-current' : 'text-slate-300 fill-none'" 
                     viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span class="text-[10px] font-mono text-slate-400">{{ rev.date }}</span>
            </div>

            <!-- Review text -->
            <p class="text-xs sm:text-sm text-slate-700 italic font-light leading-relaxed">
              "{{ rev.text }}"
            </p>

            <!-- Grouting project & Client info -->
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <h4 class="font-serif font-bold text-slate-900">{{ rev.name }}</h4>
                <p class="text-[10px] text-slate-500">{{ rev.location }}</p>
              </div>
              <span class="px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold tracking-wide uppercase text-[9px] rounded">
                {{ rev.project }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- SUBMIT REVIEW FORM -->
      <section class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="bg-white rounded-lg border border-slate-200 shadow-xl p-8 sm:p-12 space-y-8">
          <div class="text-center space-y-2">
            <h3 class="text-2xl font-serif font-bold text-slate-900">Share Your Experience</h3>
            <p class="text-xs text-slate-500 font-light">
              Your feedback helps us maintain our benchmark standards across Calicut.
            </p>
          </div>

          <!-- Form markup -->
          <form (ngSubmit)="submitReview()" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Name -->
              <div class="flex flex-col">
                <label class="text-xs font-semibold text-slate-700 mb-1" for="revName">Full Name *</label>
                <input id="revName" type="text" [(ngModel)]="newReview.name" name="name" required
                       class="px-3 py-2 border border-slate-300 rounded focus:border-gold-500 focus:outline-none text-sm" />
              </div>
              <!-- Location -->
              <div class="flex flex-col">
                <label class="text-xs font-semibold text-slate-700 mb-1" for="revLoc">Location in Kerala (e.g. Chevayur) *</label>
                <input id="revLoc" type="text" [(ngModel)]="newReview.location" name="location" required
                       class="px-3 py-2 border border-slate-300 rounded focus:border-gold-500 focus:outline-none text-sm" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Project Scope -->
              <div class="flex flex-col">
                <label class="text-xs font-semibold text-slate-700 mb-1" for="revProject">Project Scope *</label>
                <select id="revProject" [(ngModel)]="newReview.project" name="project" required
                        class="px-3 py-2 border border-slate-300 rounded focus:border-gold-500 focus:outline-none text-sm">
                  <option value="Residential Flooring">Residential Flooring</option>
                  <option value="Bathroom Remodel">Bathroom Remodeling</option>
                  <option value="Commercial Grouting">Commercial Grouting</option>
                  <option value="Accent Backsplashes">Accent Backsplashes</option>
                  <option value="Interior Partition">Interior Divider Installation</option>
                </select>
              </div>
              <!-- Rating Selector -->
              <div class="flex flex-col">
                <label class="text-xs font-semibold text-slate-700 mb-1">Select Rating *</label>
                <div class="flex items-center space-x-2 py-1.5">
                  <button type="button" *ngFor="let s of [1,2,3,4,5]" 
                          (click)="newReview.rating = s"
                          class="focus:outline-none transition-transform active:scale-95" aria-label="Rate Star">
                    <svg class="w-7 h-7" 
                         [ngClass]="s <= newReview.rating ? 'text-gold-500 fill-current' : 'text-slate-300 fill-none'" 
                         viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Review Text -->
            <div class="flex flex-col">
              <label class="text-xs font-semibold text-slate-700 mb-1" for="revText">Detailed Experience *</label>
              <textarea id="revText" [(ngModel)]="newReview.text" name="text" rows="4" required
                        class="px-3 py-2 border border-slate-300 rounded focus:border-gold-500 focus:outline-none text-sm"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center pt-2">
              <button type="submit" 
                      class="px-8 py-3.5 bg-slate-900 hover:bg-gold-500 hover:text-slate-950 text-white font-bold uppercase tracking-wider text-xs rounded transition-colors duration-300 focus:outline-none active:scale-[0.98]">
                Publish Review
              </button>
            </div>
          </form>

          <!-- Success Alert -->
          <div *ngIf="showSuccess()" class="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-center text-xs font-semibold animate-fade-in">
            Thank you! Your review has been compiled and appended to our catalog.
          </div>
        </div>
      </section>

    </main>
  `
})
export class ReviewsComponent {
  showSuccess = signal<boolean>(false);

  reviewsList = signal<Review[]>([
    {
      id: 'rev_1',
      name: 'Dr. Ramesh Nair',
      location: 'Puthiyara, Kozhikode',
      rating: 5,
      text: 'Perfect Tile Works tiled our entire clinic near Baby Memorial Hospital. The leveling is flawless, and the Italian marble joints in the lobby are barely visible. Excellent work!',
      project: 'Commercial Flooring',
      date: 'May 12, 2026'
    },
    {
      id: 'rev_2',
      name: 'Fathima Zakariya',
      location: 'Chevayur, Calicut',
      rating: 5,
      text: 'We engaged them for our villa renovation. The bathroom waterproofing, custom wooden-framed partitions, and vitrified tile layout are outstanding. Truly 15 years of quality shows.',
      project: 'Bathroom Remodel',
      date: 'Apr 28, 2026'
    },
    {
      id: 'rev_3',
      name: 'Mr. Arun K. P.',
      location: 'Pavamani Road, Kozhikode',
      rating: 4,
      text: 'Prompt, neat, and highly professional layout installers. Their team cleaned up after finishing the grouting work. Highly recommended for premium kitchen backsplashes.',
      project: 'Accent Backsplashes',
      date: 'Mar 15, 2026'
    },
    {
      id: 'rev_4',
      name: 'Devadasan Pillai',
      location: 'Nallalam, Calicut',
      rating: 5,
      text: 'They handled the commercial scale flooring for our shop. Completed the 4500 square feet vitrified layout within the agreed 10 days. Zero hollow sounds, and laser straight alignment.',
      project: 'Commercial Flooring',
      date: 'Feb 10, 2026'
    },
    {
      id: 'rev_5',
      name: 'Ananya Mohan',
      location: 'Vazhakkad, Kerala',
      rating: 5,
      text: 'The geometric hexagon mosaic on our focal dining wall looks incredible. It receives compliments from everyone who visits. Kudos to the creative design suggestions by their manager.',
      project: 'Accent Backsplashes',
      date: 'Jan 22, 2026'
    }
  ]);

  newReview = {
    name: '',
    location: '',
    rating: 5,
    project: 'Residential Flooring',
    text: ''
  };

  submitReview() {
    if (!this.newReview.name || !this.newReview.location || !this.newReview.text) {
      return;
    }

    const compiledReview: Review = {
      id: `rev_${Date.now()}`,
      name: this.newReview.name,
      location: this.newReview.location + ', Kerala',
      rating: this.newReview.rating,
      project: this.newReview.project,
      text: this.newReview.text,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    // Prepend to list
    this.reviewsList.set([compiledReview, ...this.reviewsList()]);
    
    // Reset form
    this.newReview = {
      name: '',
      location: '',
      rating: 5,
      project: 'Residential Flooring',
      text: ''
    };

    this.showSuccess.set(true);
    setTimeout(() => {
      this.showSuccess.set(false);
    }, 4000);
  }
}
