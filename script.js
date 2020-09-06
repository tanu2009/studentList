console.log('hi');
const students = [
    {
        name:"John",
        regNo:54,
        courses:['math','physics','kannada','biology']
    },
    {
        name:"Nick",
        regNo:35,
        courses:['math','chemistry','english','physics']
    },
    {
        name:"Rose",
        regNo:24,
        courses:['math','biology','kannada','chemistry']
    }
]

const studentDiv = document.getElementById('students-div');
for(var i=0; i<students.length; i++){
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card');
    mainDiv.classList.add('mt-3');
    mainDiv.classList.add('p-3');
    mainDiv.classList.add('bg-secondary');
    const nameTitle = document.createElement('h2');
    nameTitle.textContent="Name";
    const nameElem = document.createElement('h3');
    const regNoTitle = document.createElement('h4');
    regNoTitle.textContent="RegNo";
    const regNo = document.createElement('h5');
    nameElem.textContent = students[i].name;
    regNo.textContent = students[i].regNo;
    mainDiv.appendChild(nameTitle);
    mainDiv.appendChild(nameElem);
    mainDiv.appendChild(regNoTitle)
    mainDiv.appendChild(regNo);
    studentDiv.appendChild(mainDiv);
    const coursesTitle = document.createElement('h4');
    coursesTitle.textContent="Courses";
    const courses= students[i].courses;
    const ulElem = document.createElement('ul');
    for(var j=0;j<courses.length;j++){
        const liElem = document.createElement('li');
        liElem.textContent =courses[j];
        ulElem.appendChild(liElem);
    }
    mainDiv.appendChild(coursesTitle)
    mainDiv.appendChild(ulElem);
}