interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}


interface Directors extends Teacher {
  numberOfReports: number;
}


const teacher: Teacher = {
  firstName: "Kweku",
  lastName: "Asante",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};


const director: Directors = {
  firstName: "Simon",
  lastName: "Oduro",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
  contract: true,
};