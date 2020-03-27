const person = {
    name: 'Rob',
    age: 36,
    hobbies: ['Sports', 'Cooking']
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
};