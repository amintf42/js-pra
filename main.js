// global variables
let tableroot = document.getElementById("table-root");
let modal = new bootstrap.Modal(document.getElementById("addStudentForm"));
let modalLable = document.getElementById("staticBackdropLabel");
let addBtn = document.getElementById("add-button");


let STUDENTLIST = [
    {
        "id": 1,
        "name":"sana",
        "last":"samin",
        "email":"sana@samin.com",
        "course":"REACT",
        "score":"90",
    }
];

let inputs ={
    name: document.querySelector("input[name=firstName]"),
    last: document.querySelector("input[name=lastName]"),
    email: document.querySelector("input[name=email]"),
    course : document.querySelector("input[name=course]"),
    score: document.querySelector("input[name=score]"),
}

// DATA
