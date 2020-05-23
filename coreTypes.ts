

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: "John",
    age: "24",
    hobbies: ["sports", "coding"],
    role: Role.ADMIN
};

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());    
}

if (person.role === Role.ADMIN) {
    console.log('is Admin');
    
}
