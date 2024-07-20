import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
  { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TaskListComponent },
  // Add other routes for future components here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutes = routes;
