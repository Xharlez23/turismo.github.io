import { Route } from '@angular/router';
import { DestinosComponent } from './destinos.component';

export const DESTINOS_ROUTE: Route = {
  path: '',
  component: DestinosComponent,
  data: {
    pageTitle: 'destinos.title',
  },
};
