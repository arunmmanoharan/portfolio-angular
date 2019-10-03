import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import {AppNavbarComponent} from './components/app-navbar/app-navbar.component';
import { AppNavlinkComponent } from './components/app-navbar/app-navlink/app-navlink.component';

import {ApiService} from './services/api.service';
import {DataService} from './services/data.service';
import {AppBannerComponent} from './components/app-banner/app-banner.component';
import {AppSocialMediaComponent} from './components/app-banner/app-social-media/app-social-media.component';
import {AppScrollDownComponent} from './components/app-scroll-down/app-scroll-down.component';
import {AppSectionComponent} from './components/app-section/app-section.component';
import {AppAboutComponent} from './components/app-section/app-about/app-about.component';
import {AppWorkComponent} from './components/app-section/app-work/app-work.component';
import {AppEntryWorkComponent} from './components/app-section/app-work/app-entry-work/app-entry-work.component';
import {AppBulletpointsComponent} from './components/app-section/app-work/app-entry-work/app-bulletpoints/app-bulletpoints.component';
import {AppEducationComponent} from './components/app-section/app-education/app-education.component';
import {AppEntryEducationComponent} from './components/app-section/app-education/app-entry-education/app-entry-education.component';
import {AppSkillsComponent} from './components/app-section/app-skills/app-skills.component';
import {AppSkillComponent} from './components/app-section/app-skills/app-skill/app-skill.component';
import {AppEntrySkillComponent} from './components/app-section/app-skills/app-skill/app-entry-skill/app-entry-skill.component';
import {AppPortfolioComponent} from './components/app-section/app-portfolio/app-portfolio.component';
import {AppEntryPortfolioComponent} from './components/app-section/app-portfolio/app-entry-portfolio/app-entry-portfolio.component';
import {AppReferencesComponent} from './components/app-section/app-references/app-references.component';
import {AppEntryReferencesComponent} from './components/app-section/app-references/app-entry-references/app-entry-references.component';
import {AppFooterComponent} from './components/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavbarComponent,
    AppNavlinkComponent,
    AppBannerComponent,
    AppSocialMediaComponent,
    AppScrollDownComponent,
    AppSectionComponent,
    AppAboutComponent,
    AppWorkComponent,
    AppEntryWorkComponent,
    AppBulletpointsComponent,
    AppEntryWorkComponent,
    AppEducationComponent,
    AppEntryEducationComponent,
    AppSkillsComponent,
    AppSkillComponent,
    AppEntrySkillComponent,
    AppPortfolioComponent,
    AppEntryPortfolioComponent,
    AppReferencesComponent,
    AppEntryReferencesComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [ApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
