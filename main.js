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
        last: inputs.last.value,
        email: inputs.email.value,
        course: inputs.course.value,
        score: inputs.score.value
    }
    STUDENTSLIST.push(student);
    render(STUDENTSLIST);
    modal.hide();


}
function EditStudent(StudentID) {
    let index = STUDENTSLIST.findIndex(std => std.id === StudentID);
    let student = {
        id: STUDENTSLIST.length + 1,
        name: inputs.name.value,
        last: inputs.last.value,
        email: inputs.email.value,
        course: inputs.course.value,
        score: inputs.score.value
    }
    STUDENTSLIST.splice(index , 1 , student);
    render(STUDENTSLIST);
   
}



function render(studentlist) {
    tableroot.innerHTML = "";
    studentlist.forEach((element, index) => {
        let template = `
        <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element.name}</td>
                    <td>${element.last}</td>
                    <td>${element.email}</td>
                    <td>${element.course}</td>
                    <td>${element.score}</td>
                    <td>
                    <button class="btn btn-danger" onclick="DeleteStudent(${element.id})">Delete</button>
                    <button class="btn btn-info" onclick="openEditStudent(${element.id})">Edit</button>
                    </td>
                </tr>
        `;
        tableroot.innerHTML += template;
    });

}