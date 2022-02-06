const Manager = require('../lib/Manager');

test('creates engineer object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

