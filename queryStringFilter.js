
function queryStringFilter(queryString) {
  let paramsFiltered = {};

  if (queryString.indexOf('?') != -1 && typeof queryString == 'string') {
    let params = queryString.slice(queryString.indexOf('?') + 1);
    params = params.split('&');

    for (let i in params) {
      paramsFiltered[`${params[i].split('=')[0]}`] = params[i].split('=')[1]
    }
  }

  return paramsFiltered;
}

module.exports = queryStringFilter;