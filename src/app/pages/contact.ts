import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <main class="bg-travertine-50 pt-32 pb-24">
      
      <!-- PAGE HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 animate-fade-in">
        <div class="border-l-4 border-gold-500 pl-6 space-y-4">
          <h2 class="text-xs font-semibold tracking-widest text-gold-600 uppercase">Connect With Us</h2>
          <h1 class="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-wide">
            Request a Free Consultation
          </h1>
        </div>
      </section>

      <!-- SPLIT LAYOUT -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          <!-- LEFT SCREEN: REACTIVE CONTACT FORM -->
          <div class="lg:col-span-7 bg-white rounded-lg border border-slate-200 shadow-xl p-8 sm:p-12 flex flex-col justify-between">
            <div class="space-y-2 mb-8">
              <h3 class="text-2xl font-serif font-bold text-slate-900">Inquiry Sheet</h3>
              <p class="text-xs text-slate-500 font-light">
                Fill in the details below. Our technical estimator will review your dimensions and get in touch with you.
              </p>
            </div>

            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              
              <!-- Full Name -->
              <div class="flex flex-col">
                <label class="text-xs font-semibold text-slate-700 mb-1" for="name">Full Name *</label>
                <input id="name" type="text" formControlName="name"
                       class="px-3 py-2 border rounded text-sm focus:outline-none transition-colors"
                       [ngClass]="{'border-red-500 bg-red-50/10 focus:border-red-500': isFieldInvalid('name'), 'border-slate-300 focus:border-gold-500': !isFieldInvalid('name')}" />
                <span *ngIf="isFieldInvalid('name')" class="text-[10px] text-red-500 mt-1">
                  Name must contain at least 3 alphabetical characters.
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- Phone -->
                <div class="flex flex-col">
                  <label class="text-xs font-semibold text-slate-700 mb-1" for="phone">Phone Number *</label>
                  <input id="phone" type="tel" formControlName="phone" placeholder="e.g., 08460204779"
                         class="px-3 py-2 border rounded text-sm focus:outline-none transition-colors"
                         [ngClass]="{'border-red-500 bg-red-50/10 focus:border-red-500': isFieldInvalid('phone'), 'border-slate-300 focus:border-gold-500': !isFieldInvalid('phone')}" />
                  <span *ngIf="isFieldInvalid('phone')" class="text-[10px] text-red-500 mt-1">
                    Please provide a valid 10-digit phone number.
                  </span>
                </div>

                <!-- Email -->
                <div class="flex flex-col">
                  <label class="text-xs font-semibold text-slate-700 mb-1" for="email">Email Address *</label>
                  <input id="email" type="email" formControlName="email" placeholder="name@domain.com"
                         class="px-3 py-2 border rounded text-sm focus:outline-none transition-colors"
                         [ngClass]="{'border-red-500 bg-red-50/10 focus:border-red-500': isFieldInvalid('email'), 'border-slate-300 focus:border-gold-500': !isFieldInvalid('email')}" />
                  <span *ngIf="isFieldInvalid('email')" class="text-[10px] text-red-500 mt-1">
                    Please provide a valid email address structure.
                  </span>
                </div>
              </div>

              <!-- Service Selection -->
              <div class="flex flex-col">
                <label class="text-xs font-semibold text-slate-700 mb-1" for="service">Select Service *</label>
                <select id="service" formControlName="service"
                        class="px-3 py-2 border rounded text-sm focus:outline-none focus:border-gold-500 text-slate-700">
                  <option value="vitrified">Premium Ceramic & Vitrified Laying</option>
                  <option value="marble">Luxury Marble & Granite Flooring</option>
                  <option value="backsplash">Kitchen Backsplash & Accent Walls</option>
                  <option value="waterproofing">Bathroom Waterproof Tiling</option>
                  <option value="partitions">Wooden Partitions & Modulations</option>
                  <option value="commercial">Commercial Scale Installations</option>
                </select>
              </div>

              <!-- Project Description -->
              <div class="flex flex-col">
                <label class="text-xs font-semibold text-slate-700 mb-1" for="message">Project Description *</label>
                <textarea id="message" formControlName="message" rows="5" placeholder="Specify dimensions, tile configurations, and room details..."
                          class="px-3 py-2 border rounded text-sm focus:outline-none transition-colors"
                          [ngClass]="{'border-red-500 bg-red-50/10 focus:border-red-500': isFieldInvalid('message'), 'border-slate-300 focus:border-gold-500': !isFieldInvalid('message')}"></textarea>
                <span *ngIf="isFieldInvalid('message')" class="text-[10px] text-red-500 mt-1">
                  Please provide a detailed description (minimum 10 characters).
                </span>
              </div>

              <!-- Submit Button -->
              <div>
                <button type="submit" [disabled]="contactForm.invalid"
                        class="w-full py-4 bg-slate-900 hover:bg-gold-500 hover:text-slate-950 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wider text-xs rounded transition-colors duration-300">
                  Send Estimation Request
                </button>
              </div>

            </form>

            <!-- Success message -->
            <div *ngIf="showSuccess()" class="mt-6 p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-center text-xs font-semibold animate-fade-in">
              Thank you! Your estimate request has been submitted successfully. A supervisor from Kozhikode will reach out to you within 24 hours.
            </div>
          </div>

          <!-- RIGHT SCREEN: CONTACT INFO & CREDENTIALS -->
          <div class="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            <!-- Credentials Block -->
            <div class="bg-slate-900 text-white rounded-lg p-8 sm:p-10 border border-white/5 shadow-xl space-y-8">
              <h3 class="text-2xl font-serif font-bold text-white border-b border-white/5 pb-2">Business Details</h3>
              
              <div class="space-y-6">
                <!-- Address -->
                <div class="flex items-start space-x-4">
                  <div class="p-2 bg-gold-500/20 text-gold-500 rounded shrink-0">
                    <svg class="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-semibold text-slate-400 uppercase">Calicut Showroom</h4>
                    <p class="text-sm font-medium text-white leading-relaxed mt-1">
                      Near Baby Memorial Hospital,<br>
                      Pavamani Road, Puthiyara,<br>
                      Kozhikode - 673004, Kerala
                    </p>
                  </div>
                </div>

                <!-- Phone Link -->
                <div class="flex items-start space-x-4">
                  <div class="p-2 bg-gold-500/20 text-gold-500 rounded shrink-0">
                    <svg class="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-semibold text-slate-400 uppercase">Call to Inquire</h4>
                    <p class="mt-1">
                      <a href="tel:08460204779" class="text-lg font-bold text-gold-400 hover:text-gold-300 transition-colors">
                        08460204779
                      </a>
                    </p>
                  </div>
                </div>

                <!-- WhatsApp Button Link -->
                <div class="flex items-start space-x-4">
                  <div class="p-2 bg-emerald-500/20 text-emerald-400 rounded shrink-0">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.37 5.084L2 22l5.094-1.33a9.96 9.96 0 004.912 1.306h.004c5.505 0 9.99-4.478 9.99-9.988 0-2.667-1.04-5.176-2.927-7.062A9.927 9.927 0 0012.012 2zm5.794 14.153c-.253.715-1.47 1.39-2.022 1.488-.5.088-1.15.158-3.36-.757-2.825-1.168-4.647-4.04-4.788-4.23-.14-.19-1.13-1.503-1.13-2.868 0-1.365.714-2.035.968-2.316.254-.28.55-.35.733-.35h.523c.168 0 .39.063.597.568.207.506.713 1.74.776 1.867.062.126.103.273.018.441-.084.168-.126.273-.253.42l-.382.464c-.126.147-.258.307-.11.562.146.252.654 1.077 1.4 1.743.96.857 1.77 1.122 2.022 1.248.253.126.398.105.546-.063.148-.168.63-.736.8-1.01.17-.274.338-.23.568-.147.23.084 1.46.687 1.713.813.253.126.42.19.484.3.063.11.063.633-.19 1.348z"/>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h4 class="text-xs font-semibold text-slate-400 uppercase mb-2">Direct Message</h4>
                    <a href="https://wa.me/918460204779" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors duration-300">
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <!-- Stylized Interactive Map Placeholder -->
            <div class="relative w-full aspect-video rounded-lg overflow-hidden border border-slate-200 shadow-md bg-white flex flex-col justify-between">
              <!-- Map Background Mocking Kozhikode Coordinates -->
              <div class="absolute inset-0 bg-slate-100 flex items-center justify-center p-6 text-center select-none pointer-events-none">
                <!-- Stretched custom paths layout mocking local maps -->
                <div class="absolute inset-0 opacity-15 overflow-hidden">
                  <div class="absolute w-[800px] h-[2px] bg-slate-900 rotate-12 top-12 left-0"></div>
                  <div class="absolute w-[800px] h-[2px] bg-slate-900 -rotate-45 top-24 left-0"></div>
                  <div class="absolute w-[800px] h-[3px] bg-slate-900 rotate-90 left-[40%] top-0"></div>
                  <div class="absolute w-[800px] h-[2px] bg-slate-900 top-1/2 left-0"></div>
                  <!-- River Calicut mock -->
                  <div class="absolute inset-x-0 bottom-4 h-8 bg-blue-500/20 rounded-full blur"></div>
                </div>

                <div class="relative z-10 space-y-2">
                  <!-- Red Pin Icon -->
                  <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg mx-auto animate-bounce">
                    <svg class="w-5 h-5 text-white stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                      <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"/>
                    </svg>
                  </div>
                  <h4 class="font-serif font-bold text-slate-800 text-sm">Perfect Tile Works</h4>
                  <p class="text-[10px] text-slate-500 leading-tight">Pavamani Rd, Puthiyara, Calicut.<br>Next to Baby Memorial Hospital</p>
                </div>
              </div>

              <!-- Map Overlay Trigger -->
              <a href="https://maps.google.com/?q=Baby+Memorial+Hospital+Pavamani+Road+Puthiyara+Kozhikode" target="_blank" rel="noopener noreferrer"
                 class="relative z-10 m-3 px-4 py-2 bg-slate-900/90 text-gold-400 border border-white/10 hover:bg-gold-500 hover:text-slate-950 text-[10px] font-bold tracking-wider uppercase rounded shadow text-center transition-colors">
                Open in Google Maps
              </a>
            </div>

          </div>

        </div>
      </section>

    </main>
  `
})
export class ContactComponent {
  showSuccess = signal<boolean>(false);

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    service: new FormControl('vitrified', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    // Process inquiry
    console.log('Inquiry Data:', this.contactForm.value);

    // Reset Form
    this.contactForm.reset({
      name: '',
      phone: '',
      email: '',
      service: 'vitrified',
      message: ''
    });

    this.showSuccess.set(true);
    setTimeout(() => {
      this.showSuccess.set(false);
    }, 5000);
  }
}
