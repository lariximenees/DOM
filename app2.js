
const users = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    password:"teste",
    age: 25,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password:"teste2",
    age: 32,
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    password:"teste3",
    age: 28,
    isActive: true,
  },
  {
    id: 4,
    name: "Diana Ross",
    email: "diana.ross@example.com",
    password:"teste4",
    age: 30,
    isActive: true,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    password:"teste5",
    age: 35,
    isActive: false,
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    email: "fiona.gallagher@example.com",
    password:"teste6",
    age: 29,
    isActive: true,
  },
  {
    id: 7,
    name: "George Michael",
    email: "george.michael@example.com",
    password:"teste7",
    age: 31,
    isActive: false,
  },
  {
    id: 8,
    name: "Hannah Baker",
    email: "hannah.baker@example.com",
    password:"teste8",
    age: 27,
    isActive: true,
  },
  {
    id: 9,
    name: "Ian Somerhalder",
    email: "ian.somerhalder@example.com",
    password:"teste9",
    age: 33,
    isActive: true,
  },
  {
    id: 10,  
    name: "Jane Doe",
    email: "jane.doe@example.com",
    password:"123bolinha4",
    age: 26,
    isActive: false,
  },
];
  
//let nome = document.querySelector("#name").value;

//let senha2 = document.querySelector("#password2").value;

function validarLogin(users) {
let email = document.querySelector("#email").value;
let senha = document.querySelector("#senha").value;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === senha && users[i].isActive) {
      window.location.href = "index3.html";
      return
    }
    else {
      alert("Usuário ou senha inválidos");
    }
  }
  
}


