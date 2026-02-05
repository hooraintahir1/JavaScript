console.log(2<1)
console.log(2==1)
console.log(2!=1)

console.log(null == 0)
console.log(null >= 0)
console.log(null < 0) // comparison of null with equality operator converts null to 0 but just the 
// comparison of null with no equality operator does not convert null to 0 and gives false.

//=== is a strict checker

//arrays,objects,functions are non-primitive data types


//STACK (primitive data types) and HEAP (non-primitive data types) memory allocation

let name = "hoorain"
let other = name
other = "tahir"
console.log(other);
console.log(name);

let userone = {
    email : "user@gmail.com"
}

let usertwo = userone
usertwo.email = "hoorain@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

