interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}

const teacher: Teacher = {
  firstName: "Kweku",
  lastName: "Asante",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};
