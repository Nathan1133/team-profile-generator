const Intern = require('../lib/Intern');

test('creates engineer object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

