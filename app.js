// someone else's code
class Person {
    firstName =  'Kamleshwar';
    greet() {
        return `Hi ${this.firstName}`
    }
}



// my code
let kammy = new Person();
kammy.greet = function() {
    return `Hello ${this.firstName}`
}
// or
kammy.__proto__.greet = function() {
    return `Hello ${this.firstName}`
}

console.log(kammy.greet());  // Hello Kamleshwar instead of Hi Kamleshwar. expectation: my code should not accidently overvide someone else code.

/**
 * 
 */
