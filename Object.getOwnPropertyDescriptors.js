const student = {
    firstName : 'Mohtashim',
    lastName: 'Mohammad',
    get fullName(){
       return this.firstName + ':'+ this.lastName
    }
 }
 console.log(Object.getOwnPropertyDescriptors(student))