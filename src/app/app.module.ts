import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { GuardService } from './services/guard.service';
import { NewsService } from './services/news.service';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LatestNewsareaComponent } from './latest-newsarea/latest-newsarea.component';
import { ThumbnailSliderAreaComponent } from './thumbnail-slider-area/thumbnail-slider-area.component';
import { ContentbodyComponent } from './contentbody/contentbody.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { SubcontentComponent } from './subcontent/subcontent.component';

const approutes : Routes= [
  {
     path : '' , 
     component : LoginComponent
  },
  {
       path : 'dashboard',
       component : DashboardComponent,
       canActivate : [GuardService]
  },
  {
    path : 'register',
    component: RegisterComponent
  }
      ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LatestNewsareaComponent,
    ThumbnailSliderAreaComponent,
    ContentbodyComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent,
    SubcontentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
