const helloWorld = require('./index');

test('returns "hola mundo!"', () => {
    expect(helloWorld()).toBe("hola mundo!");
});
