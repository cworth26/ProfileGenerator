const Employee = require("./Employee");

class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    super();
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
  }
//need to override to return Manager
  getRole() {
    return this.role
};

}

module.exports = Manager;
