// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(officeNumber) {

        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getRole() {
        return this.role;
    }
}