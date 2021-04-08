class Employees {
    constructor(name, id, email) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    };

    getID() {
        return this.id
    };

    getEmail() {
        return this.email
    };

    getRole() {
        return this.role
    };

}

module.exports = Employees;

