# Query String Filter

## Instalar pacote
```npm
npm i @mergulhao/query_string_filter
```

## Implantação

```js
const queryStringFilter = require('query_string_filter');

let queryString = 'teste.com.br?p1=1&p2=2';

console.log(queryStringFilter(queryString))
//Output: {"p1": "1", "p2":"2"}
```