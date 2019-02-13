import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormInputDirective } from 'src/app/components/cmail-form-group/cmail-form-input.directive';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroRoutes } from './cadastro.routes';
@NgModule({
  declarations: [
    CadastroComponent,
    CmailFormGroupComponent,
    CmailFormInputDirective
  ],
  imports: [
    CommonModule, // Ele que traz o ngIf, for e os pipes default
    HttpClientModule,
    ReactiveFormsModule,
    CadastroRoutes
  ]
})
export class CadastroModule {}
