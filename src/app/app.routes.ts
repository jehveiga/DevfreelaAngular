import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: "",
    pathMatch: "full",
    redirectTo: "register",
  },
  {
    path: "register",
    loadChildren: () => import("./pages/register/register.module").then(m => m.RegisterModule)
  },
  {
    path: "list",
    loadChildren: () => import("./pages/list/list.module").then(m => m.ListModule)
  }
];

