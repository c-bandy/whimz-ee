import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.AppendPageTitle,
    pageTitleSeparator: ' / ',
    applicationName: 'ben aberg',
    defaults: {
      title: 'ben aberg',
      description: 'ux design for the modern world',
      'og:image': 'https://www.whimz.ee/assets/opengraph-graphic.png',
      'og:image:height': '1200',
      'og:image:width': '1200',
      'og:type': 'website'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'whimz-ee-site' }),
    AppRoutingModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
