class Contact{
    constructor(name, age, phoneNumber){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
    printAll(){
        console.log("Priniting : ",this.name, this.age, this.phoneNumber);
    }
    call(){
        if(this.phoneNumber){
            console.log("Calling " + this.name + " at "+ this.phoneNumber);
        }
        else{
            console.log("No phone number exist for " + this.name);
        }
    }
}

module.exports = Contact;