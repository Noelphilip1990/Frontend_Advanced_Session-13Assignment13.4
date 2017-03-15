import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.homeComponent';
import { AboutComponent } from './app.aboutComponent';

//Routing stuff
import { routing } from './app.Routes';
import { UserDetails } from './userDetails';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        routing
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        UserDetails
    ],
    bootstrap: [AppComponent]

})
export class AppModule {
}