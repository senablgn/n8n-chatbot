class Course {
    constructor(id,courseName,contactEmail,contactPhoneNumber,branchCity) {
        this.id = id;
        this.courseName = courseName;
        this.contactEmail = contactEmail;
        this.contactPhoneNumber = contactPhoneNumber;
        this.branchCity = branchCity;
    }
    getCourseName() {
        return this.courseName;
    }
    getContactEmail() {
        return this.contactEmail;
    }
    getContacthoneNumber() {
        return this.contactPhoneNumber;
    }
    getBranchCity() {
        return this.branchCity;
    }
}
module.exports = Course;