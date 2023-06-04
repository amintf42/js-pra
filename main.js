// global variables
let tableroot = document.getElementById("table-root");
let modal = new bootstrap.Modal(document.getElementById('addStudentForm'));
let modalLable = document.getElementById("staticBackdropLabel");
let addBtn = document.getElementById("add-button");


let STUDENTSLIST = [
    {
        "id": 1,
        "name": "sana",
        "last": "samin",
        "email": "sana@samin.com",
        "course": "REACT",
        "score": "90",
    }
];

let inputs = {
    name: document.querySelector("input[name=firstName]"),
    last: document.querySelector("input[name=lastName]"),
    email: document.querySelector("input[name=email]"),
    course: document.querySelector("select[name=course]"),
    score: document.querySelector("input[name=score]"),
}

// DATA
function AddStudent() {
    let student = {
        id: STUDENTSLIST.length + 1,
        name: inputs.name.value,
        last : inputs.last.value,
        email: inputs.email.value,
        course: inputs.course.value,
        score: inputs.score.value
    }
    STUDENTLIST.push(student);
    render(STUDENTLIST);
    modal.hide();


}


function render(studentlist){
    tableroot.innerHTML = "";
    studentlist.forEach(element , index => {
        let template = `
        <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element.name}</td>
                    <td>${element.last}</td>
                    <td>${element.email}</td>
                    <td>${element.course}</td>
                    <td>${element.score}</td>
                </tr>
        `;
        tableroot.innerHTML += template;
    });
}