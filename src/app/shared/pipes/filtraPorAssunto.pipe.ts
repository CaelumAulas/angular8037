import { Pipe, PipeTransform } from "@angular/core";

// [ FAZ O IMPORT NO APP.MODULE.TS (na parte de declarations) ]
@Pipe({
  name: 'filtraPorAssunto',
})
export class FiltraPorAssuntoPipe implements PipeTransform {
  transform(emails, value) {
    const listaAtualizada = emails.filter((emailAtual) => {
      const valorDigitadoPeloUsuario: string = value.toLowerCase();
      const assuntoDoEmailAtual: string = emailAtual.assunto.toLowerCase();

      return assuntoDoEmailAtual.includes(valorDigitadoPeloUsuario);
    });

    return listaAtualizada;
  }
}
