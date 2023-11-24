import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: '',
        component:HomeComponent
    },
    {
        path:'table',
        component:TableComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }