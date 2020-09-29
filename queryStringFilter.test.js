const queryStringFilter = require('./queryStringFilter');

test('Query string com parametros válidos', () =>{
    expect(queryStringFilter('teste.com.br?p1=1&p2=2')).toStrictEqual({"p1": "1", "p2":"2"})
});

test('Query string sem parametro', () =>{
    expect(queryStringFilter('teste.com.br')).toStrictEqual({})
});