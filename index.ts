import inquirer from "inquirer"

interface Answers{
    todo: string,//name
    addMore: boolean//name
}

const todos :string[]=[]   
let AddMore:boolean = true;

while(AddMore){
    const answers:Answers = await inquirer.prompt([
    {
        type:'string',
        name:'todo',
        message:'Enter your Todo'

    },
    {
        type:'confirm',
        name:'addMore',
        message:'Enter your Todo',
        default:false
    }]);

    const{todo, addMore} =answers;
    AddMore =addMore;
    if(answers.todo){
        todos.push(todo)
    }else{
        console.log("Kindly write any input");
        
    }
}
    if(todos.length >0){
        console.log("Your todo list: ");
        todos.forEach((t)=>console.info(t));
        }else{
            console.log("No todos in the list");
            
         }
