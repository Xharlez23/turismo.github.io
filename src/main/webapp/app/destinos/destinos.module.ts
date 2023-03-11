import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { DESTINOS_ROUTE } from './destinos.route';
import { DestinosComponent } from './destinos.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([DESTINOS_ROUTE])],
  declarations: [DestinosComponent],
})
export class DestinosModule {}
