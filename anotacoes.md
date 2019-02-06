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

