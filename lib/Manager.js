const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber){
        super(name, email, id)

        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager"
    }

}

module.exports = Manager; 

