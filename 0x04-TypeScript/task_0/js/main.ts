interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const firstStudent: Student = {
    firstName: "Akosua",
    lastName: "Addo",
    age: 32,
    location: "Kumasi",
};

const secondStudent: Student = {
    firstName: "Kwame", 
    lastName: "Nkrumah",
    age: 56,
    location: "Takoradi", 
};

const studentsList: Student[] = [firstStudent, secondStudent];


const table = document.createElement('table');


const headerRow = table.insertRow();
headerRow.insertCell().textContent = 'First Name';
headerRow.insertCell().textContent = 'Location';

studentsList.forEach(student => {
    const row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
});

document.body.appendChild(table);