import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

interface TransformationProject {
  category: string;
  beforeImg: string;
  afterImg: string;
  designer: string;
  designerImg: string;
}

@Component({
  selector: 'app-transformation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="transformation" class="py-16 px-6 md:px-12 bg-white dark:bg-stone-950 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div class="max-w-xl">
             <h2 class="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white mb-6 leading-tight">
               {{ ts.t().transformation.title }}
             </h2>
             
             <!-- Tabs (Indicators) -->
             <div class="flex flex-wrap gap-2">
               @for (cat of ts.t().transformation.categories; track cat; let i = $index) {
                 <button 
                   (click)="activeIndex.set(i); showAfter.set(true)"
                   [class]="activeIndex() === i 
                     ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900' 
                     : 'bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700'"
                   class="px-5 py-2 rounded-full text-sm font-medium transition-colors">
                   {{ cat }}
                 </button>
               }
             </div>
          </div>
          
          <button class="hidden md:flex items-center gap-2 text-stone-900 dark:text-stone-100 font-medium hover:opacity-70 transition-opacity">
            {{ ts.t().transformation.explore }}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
               <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        <!-- Content Area -->
        <div class="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl bg-stone-100 dark:bg-stone-900 group">
           
           <!-- Image Display -->
           <div class="w-full h-full relative">
             @if (showAfter()) {
               <img [src]="currentProject().afterImg" class="w-full h-full object-cover animate-fade-in" alt="After Transformation">
             } @else {
               <img [src]="currentProject().beforeImg" class="w-full h-full object-cover animate-fade-in" alt="Before Transformation">
             }
           </div>

           <!-- Overlay Card (Designer Quote) - Only show on After view -->
           @if (showAfter()) {
             <div class="absolute bottom-8 right-8 bg-white/90 dark:bg-stone-900/90 backdrop-blur p-6 rounded-2xl max-w-sm shadow-lg hidden md:block animate-slide-up">
                <div class="flex items-center gap-3 mb-3">
                   <img [src]="currentProject().designerImg" class="w-8 h-8 rounded-full">
                   <span class="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide">{{ ts.t().transformation.designedBy }} {{ currentProject().designer }}</span>
                </div>
                <p class="text-stone-800 dark:text-stone-200 font-serif text-lg leading-snug">
                  "{{ ts.t().transformation.projects[activeIndex()].quote }}"
                </p>
             </div>
           }
           
           <!-- Before/After Toggle Buttons -->
           <div class="absolute bottom-8 left-8 flex gap-4 z-20">
              <button 
                (click)="showAfter.set(false)"
                [class]="!showAfter() ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900' : 'bg-white/90 text-stone-900 hover:bg-white dark:bg-black/60 dark:text-white dark:hover:bg-black/80'"
                class="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg cursor-pointer backdrop-blur-sm">
                {{ ts.t().transformation.before }}
              </button>
              <button 
                (click)="showAfter.set(true)"
                [class]="showAfter() ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900' : 'bg-white/90 text-stone-900 hover:bg-white dark:bg-black/60 dark:text-white dark:hover:bg-black/80'"
                class="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg cursor-pointer backdrop-blur-sm">
                {{ ts.t().transformation.after }}
              </button>
           </div>

           <!-- Carousel Navigation Arrows -->
           <button (click)="prev()" class="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
           </button>
           <button (click)="next()" class="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
           </button>

        </div>
        
        <!-- Pagination Numbers -->
        <div class="flex justify-center items-center gap-8 mt-10">
           @for (project of projects; track project.category; let i = $index) {
             <button 
               (click)="activeIndex.set(i); showAfter.set(true)"
               class="group relative flex flex-col items-center gap-2 outline-none"
               [attr.aria-label]="'Go to project ' + (i + 1)">
               
               <span class="text-xl font-serif transition-colors duration-300"
                     [class]="activeIndex() === i ? 'text-stone-900 dark:text-white font-bold' : 'text-stone-300 dark:text-stone-700 font-normal group-hover:text-stone-500 dark:group-hover:text-stone-500'">
                 0{{ i + 1 }}
               </span>
               
               <!-- Active Indicator Line -->
               <span class="block h-[3px] bg-stone-900 dark:bg-white transition-all duration-300 rounded-full"
                     [class]="activeIndex() === i ? 'w-full opacity-100' : 'w-0 opacity-0'">
               </span>
             </button>
           }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.4s ease-out forwards;
    }
    .animate-slide-up {
      animation: slideUp 0.5s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(1.02); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class TransformationComponent {
  ts = inject(TranslationService);
  
  projects: TransformationProject[] = [
    {
      category: 'Living Room',
      afterImg: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop',
      beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop',
      designer: 'Kate Graham',
      designerImg: 'https://i.pravatar.cc/100?img=32'
    },
    {
      category: 'Bedroom',
      afterImg: 'https://images.unsplash.com/photo-1616594039964-40891a913161?q=80&w=2600&auto=format&fit=crop',
      beforeImg: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2574&auto=format&fit=crop',
      designer: 'Marcus Reid',
      designerImg: 'https://i.pravatar.cc/100?img=11'
    },
    {
      category: 'Office Workspace',
      afterImg: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2600&auto=format&fit=crop',
      beforeImg: 'https://images.unsplash.com/photo-1589825917102-2a2f31b7d973?q=80&w=2574&auto=format&fit=crop',
      designer: 'Sarah Jenkins',
      designerImg: 'https://i.pravatar.cc/100?img=5'
    }
  ];

  activeIndex = signal(0);
  showAfter = signal(true);
  
  currentProject = computed(() => this.projects[this.activeIndex()]);

  next() {
    this.activeIndex.update(i => (i + 1) % this.projects.length);
    this.showAfter.set(true);
  }

  prev() {
    this.activeIndex.update(i => (i - 1 + this.projects.length) % this.projects.length);
    this.showAfter.set(true);
  }
}