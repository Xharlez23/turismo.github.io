import { Route } from '@angular/router';
import { FormularioComponent } from './formulario.component';

export const FORMULARIO_ROUTE: Route = {
  path: '',
  component: FormularioComponent,
  data: {
    pageTitle: 'formulario.title',
  },
};
