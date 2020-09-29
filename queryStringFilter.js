
function queryStringFilter(queryString) {
  let paramsFiltered = {};

  if (typeof queryString == 'string' && queryString.indexOf('?') != -1) {
    let params = queryString.slice(queryString.indexOf('?') + 1);
    params = params.split('&');

    let key;
    let value;
    if (params && params.length >= 1) {
      for (let i in params) {
        if (params[i].split('=') && params[i].split('=').length == 2) {
          key = params[i].split('=')[0];
          value = params[i].split('=')[1];

          if (key && key != '' && value && value != '') {
            paramsFiltered[key] = key;
          }
        }
      }
    }
  }

  return paramsFiltered;
}

module.exports = queryStringFilter;