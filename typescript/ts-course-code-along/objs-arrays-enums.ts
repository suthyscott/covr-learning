// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Scott',
//     age: 24
// }
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Scott',
//     age: 24,
//     hobbies: ['sports', 'cooking'], 
//     role: [2, 'author']
// }

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person= {
    name: 'Scott',
    age: 24,
    hobbies: ['sports', 'cooking'], 
    role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10

// person.role = [0, 'admin', 'user']



let favoriteActivites: string[] // specifying favoriteActivities as an array of strings.
favoriteActivites = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if(person.role === Role.AUTHOR){
    console.log('hi author')
}