import { contentChild, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { NgIconsModule } from '@ng-icons/core';
import { simpleLinkedin, simpleGithub } from '@ng-icons/simple-icons';

const approutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "about", component: AboutComponent}
]

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ContentComponent,
    RouterModule.forRoot(approutes),
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    NgIconsModule.withIcons({ simpleLinkedin, simpleGithub })
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('linkedin60.svg')
    );
  }
 }
