const employee = require('../lib/Employee')

test("employee ", () => {
    expect(employee.name).toequal("Nate");
    expect(employee.email).toequal("fake@test.com");
    expect(employee.id).toequal("2");

})