import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SoporteComponent } from './pages/soporte/soporte.component';

const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'productos', component: ProductosComponent },
{ path: 'soporte', component: SoporteComponent },
{ path: 'nosotros', component: NosotrosComponent },
{ path: 'contacto', component: ContactoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ProductosComponent, SoporteComponent]