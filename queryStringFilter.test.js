const queryStringFilter = require('./queryStringFilter');

test('Query string com 1 parametro válido', () =>{
    expect(queryStringFilter('teste.com.br?p1=1')).toStrictEqual({"p1": "1"})
});

test('Query string com 2 parametros válidos', () =>{
    expect(queryStringFilter('teste.com.br?p1=1&p2=2')).toStrictEqual({"p1": "1", "p2":"2"})
});

test('Query string sem parametro', () =>{
    expect(queryStringFilter('teste.com.br')).toStrictEqual({})
});

test('Query string com "?" mas sem parametros', () =>{
    expect(queryStringFilter('teste.com.br?')).toStrictEqual({})
});

test('Query string com parametros nulos', () =>{
    expect(queryStringFilter('teste.com.br?p1=&p2=')).toStrictEqual({})
});

test('Query string com parametros nulos e sem "="', () =>{
    expect(queryStringFilter('teste.com.br?p1&p2')).toStrictEqual({})
});

test('Query string com primeiro parametro válido e segundo nulo', () =>{
    expect(queryStringFilter('teste.com.br?p1=1&p2')).toStrictEqual({"p1": "1"})
});

test('Query string com primeiro parametro nulo e segundo válido', () =>{
    expect(queryStringFilter('teste.com.br?p1&p2=2')).toStrictEqual({"p2": "2"})
});


test('Query string com caractere "&" porem com nenhum parametro seguido por ele', () =>{
    expect(queryStringFilter('teste.com.br?p1=1&')).toStrictEqual({"p1": "1"})
});

test('String vazia', () =>{
    expect(queryStringFilter('')).toStrictEqual({})
});

test('Valor inteiro', () =>{
    expect(queryStringFilter(1)).toStrictEqual({})
});

test('Valor Array', () =>{
    expect(queryStringFilter([])).toStrictEqual({})
});

test('Valor Objeto', () =>{
    expect(queryStringFilter([])).toStrictEqual({})
});