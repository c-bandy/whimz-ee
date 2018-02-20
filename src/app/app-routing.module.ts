import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'ben aberg',
        override: true,
        description: 'web & ui design for the modern world'
      }
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'contact',
        description: 'get in touch with me'
      }
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'projects',
        description: 'stuff i made'
      }
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'not found',
        description: 'the page you\'ve requested for does not exist'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
