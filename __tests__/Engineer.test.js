const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

