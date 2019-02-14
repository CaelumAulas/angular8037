import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { SharedThingsModule } from 'src/app/shared/shared-things.module';
import { LoginRoutes } from './login.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedThingsModule,
    LoginRoutes,
    FormsModule,
    HttpClientModule
  ],
  exports: []
})
export class LoginModule {}
