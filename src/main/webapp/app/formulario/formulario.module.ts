import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { FormularioComponent } from './formulario.component';
import { FORMULARIO_ROUTE } from './formulario.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([FORMULARIO_ROUTE])],
  declarations: [FormularioComponent],
})
export class FormularioModule {}
