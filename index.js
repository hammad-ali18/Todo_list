import inquirer from "inquirer";
const todos = [];
let AddMore = true;
while (AddMore) {
    const answers = await inquirer.prompt([
        {
            type: 'string',
            name: 'todo',
            message: 'Enter your Todo'
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Enter your Todo',
            default: false
        }
    ]);
    const { todo, addMore } = answers;
    AddMore = addMore;
    if (answers.todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly write any input");
    }
}
if (todos.length > 0) {
    console.log("Your todo list: ");
    todos.forEach((t) => console.info(t));
}
else {
    console.log("No todos in the list");
}
