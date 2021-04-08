// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//    Exercise 5 – Classes
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈
// Objectives:
// • Create classes with typed properties and methods
// • Add access modifiers to class members
var Exercise5 = function () {
    // ======== Exercise 5.1 ========
    // Goals:
    // • Add explicit parameter type to the greet method
    // • Add explicit return type to the greet method
    var MC = /** @class */ (function () {
        function MC() {
        }
        MC.prototype.greet = function (event) {
            if (event === void 0) { event = 'party'; }
            return "Welcome to the " + event;
        };
        return MC;
    }());
    var mc = new MC();
    console.log('[Exercise 5.1]', mc.greet('show'));
    // ======== Exercise 5.2 ========
    // Goals:
    // • Add explicit parameter types to constructor
    // • Add typed parameters for storing values
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var jane = new Person('Jane', 31);
    console.log('[Exercise 5.2]', "The new person's name is " + jane.name + ".");
    // ======== Exercise 5.3 ========
    // Goals:
    // • Explicitly make the title and salary properties publicly available
    // • Reduce class to three lines of code while maintaining functionality
    var Employee = /** @class */ (function () {
        function Employee(title, salary) {
            this.title = title;
            this.salary = salary;
            this.title = title;
            this.salary = salary;
        }
        return Employee;
    }());
    var employee = new Employee('Engineer', 100000);
    console.log('[Exercise 5.3]', "The new employee's title is " + employee.title + " and they earn $ " + employee.salary + ".");
};
Exercise5();
