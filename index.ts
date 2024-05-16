#! /usr/bin/env node
import inquirer from "inquirer";

//inquirer install
//array banana h
//function creat
//operators run key


let todos: string[] = ["shampoo", "oil", "soap", "cream", "powder"];

async function addTodo() {
    let addTodos = await inquirer.prompt({
        type: "input",
        message: "add items in the list",
        name: "todo",
    });
    todos.push(addTodos.todo);
    console.log("Added:", addTodos.todo);
    await createTodo();
}

async function updateTodo() {
    let updateTodo = await inquirer.prompt({
        type: "list",
        message: "update items in the list",
        name: "todo",
        choices: todos,
    });
    let newTodo = await inquirer.prompt({
        type: "input",
        message: "Enter updated item",
        name: "todo",
    });
    todos[todos.indexOf(updateTodo.todo)] = newTodo.todo;
    console.log("Updated:", newTodo.todo);
    await createTodo();
}

function viewTodo() {
    console.log("*** TO DO LIST ***");
    console.log(todos);
    console.log("$$$$$$$$$$$$$$$$$$$$$$$");
    createTodo();
}

async function deleteTodo() {
    let deleteTodo = await inquirer.prompt({
        type: "list",
        message: "delete items from the list",
        name: "todo",
        choices: todos,
    });
    todos = todos.filter(item => item !== deleteTodo.todo);
    console.log("Deleted:", deleteTodo.todo);
    await createTodo();
}

async function createTodo() {
    let ans = await inquirer.prompt({
        type: "list",
        message: "select an operation",
        name: "todo",
        choices: ["add", "update", "view", "delete", "exit"],
    });

    if (ans.todo === "add") {
        await addTodo();
    } else if (ans.todo === "update") {
        await updateTodo();
    } else if (ans.todo === "view") {
        viewTodo();
    } else if (ans.todo === "delete") {
        await deleteTodo();
    } else if (ans.todo === "exit") {
        console.log("Exiting...");
        return;
    }
}

createTodo();