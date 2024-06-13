class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(department) {
        this.departments.push(department);
        console.log(`${department} добавлен.`);
    }

    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
            console.log(`${department} удален.`);
        } else {
            console.log(`${department} не найден.`);
        }
    }

    displayDepartments() {
        console.log(`Факультеты университета ${this.name}:`);
        if (this.departments.length > 0) {
            this.departments.forEach(department => console.log(department));
        } else {
            console.log("Нет факультетов.");
        }
    }
}


const myUniversity = new University("ПГУ");

myUniversity.addDepartment("Факультет Информационных Технологий");
myUniversity.addDepartment("Гуманитарный факультет");
myUniversity.displayDepartments();
myUniversity.removeDepartment("Гуманитарный факультет");
myUniversity.displayDepartments();
myUniversity.removeDepartment("Гуманитарный факультет");
