import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// imports user defined
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { UsersModule } from './modules/users/users.module';
import { AddOrUpdateEmployeeComponent } from './shared/components/add-or-update-employee/add-or-update-employee.component';
import { SharedModule } from './shared/shared.module';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AlbumsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    UsersModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddOrUpdateEmployeeComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    // matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    // Or whatever path you placed mdi.svg at
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('https://edricchan03.github.io/res/mdi.svg'));
    // matIconRegistry.addSvgIconInNamespace('extra', 'thumb_up', domSanitizer.bypassSecurityTrustResourceUrl('https://chan4077.github.io/res/thumbup_icon.svg'));
  }
}
