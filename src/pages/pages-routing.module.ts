import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    /**
     * Storage the children modules and views
     */
    children: [
      {
        path: "",
        redirectTo: "home", //Main module to redirect in pages
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'taxes',
        loadChildren: () =>
        import("./taxes/taxes.module").then(
          (m) => m.TaxesModule
        )
      },
      {
        path: 'catasig',
        loadChildren: () =>
        import('./catasig/catasig.module').then(
          (m)=> m.CatasigModule
        )
      }
    ]
  }, 
  /* Path to handle the page errors */
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
