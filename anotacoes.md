## Por que angular?
- React (Facebook) vs Angular (Google)
    - TypeScript 
    - Componentes
    - Organização obrigada
    - Focar em trabalhar pensando em dados
    - 2010 
- Gmail (GDK)
- 

## O que vocês esperam ver no angular?
- Integração com APIs
- Formulários Dinamicos
- Autenticação
- Cmail
    - Gmail(SPA)
    - Instagram/fake/meio triste 
- (ScriptCase)


## Extras
- MM: https://www.amazon.com.br/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=go_1494986073_58431735035_285514469186_pla-485032980911_c_
- Gerar PDF: https://community.jaspersoft.com/project/jasperreports-library
- Solução de gráficos nivel 1: https://www.chartjs.org/
- PrimeNG: https://www.primefaces.org/primeng/#/
- Solução gráficos 2:  https://www.elastic.co/
    - Kibana: https://www.elastic.co/products/kibana
- Linguagem let const (BabelJS)
- Polyfill de Funcionalidade (funções de array)
    - https://www.polyfill.io/

 
## Performance
- https://kraken.io/
- https://tinypng.com/

- Faz as magicas gerais de performance no angular
  - https://webpack.js.org/

## Deploy
- Pegar o projeto
- Rodar um npm install
- npm run build (gera a pasta dist)
- Pega a pasta dist e coloca em produção
- Se for apache
  - Cria um .htaccess que aponta os requests para o index.html da pasta dist
- Se for qualquer outra coisa
  - Pega qualquer request e responde com o index.html

- Modelinho:
```js
const express = require('express')
const app = new express()
// Mapear os arquivos
app.use(express.static('./cmail-front'))

app.get('*', function(req, res) {
  res.sendFile('./cmail-front/index.html')
})

app.listen(4000)
```

## Testes
- e2e
  - https://www.cypress.io/

## Links Uteis
- https://novatec.com.br/livros/nodejs-2ed/
- https://pt.coursera.org/learn/aprender
- https://www.casadocodigo.com.br/products/livro-oo-solid
- https://angular.io/guide/architecture
- https://www.agiliq.com/blog/2017/04/how-script-ordering-works-angular-app/
- A Dimensão do TEMPO para Iniciantes em Programação | Série "Começando aos 40": https://www.youtube.com/watch?v=Qb5b8ZE9tIY
- Pixelpipeline e o real problema ques os frameworks tentam resolver: https://developers.google.com/web/fundamentals/performance/rendering/#o_funil_de_pixels
- Parentesco de formularios do Angular no mundo React: https://github.com/jaredpalmer/formik
- Desafios para converter de JS Puro para Angulers: https://javascript30.com/
- Paga: https://www.alura.com.br/curso-online-git
- 0800: https://www.udemy.com/git-e-github-para-iniciantes/
- Libs para manipular dados: https://lodash.com/docs/4.17.11#mergeWith
- Collabcode pare de chutar css: https://www.youtube.com/watch?v=5PS6ku8NzIE&list=PLirko8T4cEmx5eBb1-9j6T6Gl4aBtZ_5x
- Curso HTML CSS Alura: https://www.alura.com.br/curso-online-introducao-html-css
- 0800 Apostila caelum: https://www.caelum.com.br/apostila-html-css-javascript/
- JavaScript: https://www.caelum.com.br/curso-javascript-jquery
- JavaScript gratuito: https://www.youtube.com/watch?v=093dIOCNeIc&index=1&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc
- Serie clean code do felipe deschamps:   
  - https://www.youtube.com/watch?v=9w3o9NHXqu0
  - Livro até o capitulo 4
  - https://www.casadocodigo.com.br/products/livro-oo-solid
    - Começa do capitulo sobre criar classes
- Por onde eu comecei com angular:
  - https://angular.io/tutorial/toh-pt1
  - https://www.hackerrank.com/

- Estruturas de dados
  - https://www.youtube.com/watch?v=HCjDjsHPOco
  - https://www.hackerrank.com

## Bagulhos Anguleiros
- Angular quer se modular
  - 

## Dicionariozinho dos Frontistas
- handle: função que você passa quando tem um escutador de eventos
- is: é alguma coisa
- has: tem alguma coisa
- toggle: Ato de ativar uma coisa/desativar em um código só

==========

- Dando vida para o menu


## Usuario
- Usuario clica no botão
  - Espera que o menu abra

## Dev
- Colocar um onclick
  - chamar o menu via css
  - javascript + css
  - Só css puro

