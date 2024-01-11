import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header class="bg-white shadow">
      <div class="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{title}}</h1>
      </div>
    </header>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TitleComponent{

@Input({required:true}) public title?: string

}
