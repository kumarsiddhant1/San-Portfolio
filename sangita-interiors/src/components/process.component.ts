import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-process',
  standalone: true,
  template: `
    <section id="process" class="py-16 px-6 md:px-12 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-serif text-stone-900 dark:text-white mb-12">{{ ts.t().process.title }}</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
           <!-- Step 1 -->
           <div class="group cursor-pointer">
              <div class="border-t-2 border-stone-200 dark:border-stone-800 pt-6 mb-6 group-hover:border-stone-900 dark:group-hover:border-white transition-colors duration-300">
                <span class="text-xs font-bold text-stone-400 dark:text-stone-600 mb-2 block group-hover:text-stone-900 dark:group-hover:text-white transition-colors">01</span>
                <h3 class="text-xl font-serif text-stone-900 dark:text-white mb-3">{{ ts.t().process.steps[0].title }}</h3>
                <p class="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6">
                  {{ ts.t().process.steps[0].desc }}
                </p>
                <div class="overflow-hidden rounded-2xl h-[300px]">
                   <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
              </div>
           </div>

           <!-- Step 2 -->
           <div class="group cursor-pointer">
              <div class="border-t-2 border-stone-900 dark:border-white pt-6 mb-6 transition-colors duration-300">
                <span class="text-xs font-bold text-stone-900 dark:text-white mb-2 block">02</span>
                <h3 class="text-xl font-serif text-stone-900 dark:text-white mb-3">{{ ts.t().process.steps[1].title }}</h3>
                <p class="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6">
                  {{ ts.t().process.steps[1].desc }}
                </p>
                <div class="overflow-hidden rounded-2xl h-[300px]">
                   <img src="https://images.unsplash.com/photo-1600585152915-d208bec86d24?q=80&w=2548&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
              </div>
           </div>

           <!-- Step 3 -->
           <div class="group cursor-pointer">
              <div class="border-t-2 border-stone-200 dark:border-stone-800 pt-6 mb-6 group-hover:border-stone-900 dark:group-hover:border-white transition-colors duration-300">
                <span class="text-xs font-bold text-stone-400 dark:text-stone-600 mb-2 block group-hover:text-stone-900 dark:group-hover:text-white transition-colors">03</span>
                <h3 class="text-xl font-serif text-stone-900 dark:text-white mb-3">{{ ts.t().process.steps[2].title }}</h3>
                <p class="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6">
                  {{ ts.t().process.steps[2].desc }}
                </p>
                <div class="overflow-hidden rounded-2xl h-[300px]">
                   <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  `
})
export class ProcessComponent {
  ts = inject(TranslationService);
}