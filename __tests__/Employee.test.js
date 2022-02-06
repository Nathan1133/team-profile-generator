
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

















// const employee = require('../lib/Employee')

// test("employee ", () => {

//     const employee = new employee("Nate","fake@test.com","2");
    
//     expect(employee.name).toequal("Nate");
//     expect(employee.email).toequal("fake@test.com");
//     expect(employee.id).toequal("2");

// })