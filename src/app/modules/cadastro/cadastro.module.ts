import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroRoutes } from './cadastro.routes';
import { SharedThingsModule } from 'src/app/shared/shared-things.module';

@NgModule({
  declarations: [// Todos os componentes acessíveis entre os componentes desse módulo
    CadastroComponent,
  ],
  imports: [
    CommonModule, // Ele que traz o ngIf, for e os pipes default
    HttpClientModule,
    ReactiveFormsModule,
    SharedThingsModule,
    CadastroRoutes
  ]
})
export class CadastroModule {}
