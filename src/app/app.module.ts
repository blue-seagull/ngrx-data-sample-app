import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {entityConfig} from './entity-metadata';
import {EntityDataModule} from '@ngrx/data';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import { HeroesComponent } from './hero/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
