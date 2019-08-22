import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesshowPosterComponent } from './slidesshow-poster/slidesshow-poster.component';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlidesshowPosterComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlidesshowPosterComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    IonicModule
  ]
})
export class ComponentsModule { }
