
function queryStringFilter(queryString) {
  let paramsFiltered = {};

  if (typeof queryString == 'string' && queryString.indexOf('?') != -1) {
    let params = queryString.slice(queryString.indexOf('?') + 1);
    params = params.split('&');

    let chave;
    let valor;
    if (params && params.length >= 1) {
      for (let i in params) {
        if (params[i].split('=') && params[i].split('=').length == 2) {
          chave = params[i].split('=')[0];
          valor = params[i].split('=')[1];

          if (chave && chave != '' && valor && valor != '') {
            paramsFiltered[chave] = valor
          }
        }
      }
    }
  }

  return paramsFiltered;
}

module.exports = queryStringFilter;