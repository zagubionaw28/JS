// Utwórz klasę UserService operującą na liście użytkowników users. W tym celu utwórz interface User posiadający poniższe pola wraz z odpowiednimi typami (pamiętaj, aby znakiem "?" oznaczyć, które pola są opcjonalne):

//     Id (wartość wygenerowana za pomocą crypto.randomUUID())
//     Imię i nazwisko
//     Numer telefonu (opcjonalny)
//     Adres e-mail (opcjonalny)
//     Płeć (kobieta / mężczyzna – wartość enum)
//     Flagę "deleted" (true / false) wskazującą, czy użytkownik został usunięty (nie usuwamy go faktycznie z tablicy użytkowników)

// Klasa powinna zawierającą metody:

//     getUsers – zwracająca listę wszystkich użytkowników
//     getActiveUsers – zwracająca listę aktywnych użytkowników (flaga deleted ustawiona na false)
//     getUserById(id) – zwracająca użytkownika o podanym id
//     createUser(user) – przyjmująca obiekt user i dodająca go do listy użytkowników
//         Imię i nazwisko oraz płeć są wymagane
//         Id powinno zostać wygenerowane (zostaje nadane przy tworzeniu obiektu i nie może być nadpisane)
//         Flaga deleted ustawiona na false
//         Jeżeli nie podamy numeru telefonu lub adresu e-mail, to wartości powinny być ustawione na null
//     updateUser(id, user) – przujmująca id edytowanego obiektu i nowy obiekt, a następnie aktualizująca wszystkie wartości. Walidacja:
//         Jeżeli nie podamy numeru telefonu lub adresu e-mail, to wartości powinny być ustawione na null
//         Nie możemy nadpisać wartości id i deleted (możemy je podać w obiekcie, jednak wartości te powinny zostać zignorowane)
//         Pamiętaj, aby sprawdzić, czy wartości wymagane faktycznie zostały podane
//         Nie możemy zmienić danych usuniętego użytkownika
//         Pamiętaj, aby zwracać stosowne komunikaty
//     deleteUser(id) – przyjmująca id użytownika, którego flagę deleted przestawiamy na true

const interfaceUser = require('./interfaceUser.js').interfaceUser;

class UserService {
  constructor(usersArray) {
    this.usersArray = usersArray;
  }

  getUsers() {
    return this.usersArray;
  }

  getActiveUsers() {
    return this.usersArray.reduce((acc, curr) => {
      if (curr.deleted !== true) {
        return [...acc, curr];
      } return acc;
    }, []);
  }

  getUserById(id) {
    return this.usersArray.reduce((acc, curr) => {
      return id === curr.id ? curr : acc;
    }, {});
  }

  createUser(user) {
    this.usersArray.push(this.usersArray.reduce((acc2) => {
      acc2["id"] = crypto.randomUUID();
      acc2['name'] = user.name;
      acc2['surname'] = user.surname;
      acc2["telephone"] = user.telephone === undefined ? null : user.telephone;
      acc2["mail"] = user.mail === undefined ? null : user.mail;
      acc2['gender'] = user.gender;
      acc2['deleted'] = false;
      return acc2;
    }, {}));
    return this.usersArray;
  }

  updateUser(id, user) {
    if (id === undefined || user.name === undefined || user.surname === undefined || user.gender === undefined) {
      return `Nie mamy wszystkich danych żeby zamienić użytkownika ${id} ${user.name} ${user.surname} ${user.gender}`;
    } else {
      this.usersArray = this.usersArray.reduce((acc, curr) => {
        if (curr.id === id) {
          return [...acc, this.usersArray.reduce((acc2) => {
            acc2["id"] = id;
            acc2['name'] = user.name;
            acc2['surname'] = user.surname;
            acc2["telephone"] = user.telephone === undefined ? null : user.telephone;
            acc2["mail"] = user.mail === undefined ? null : user.mail;
            acc2['gender'] = user.gender;
            acc2['deleted'] = false;
            return acc2;
          }, {})];
        } else return [...acc, curr];
      }, []);
      return this.usersArray;
    }
  }

  deleteUser(id) {
    this.usersArray = this.usersArray.reduce((acc, curr) => {
      return id === curr.id ? [...acc, {
        id: curr.id,
        name: curr.name,
        surname: curr.surname,
        telephone: curr.telephone,
        mail: curr.mail,
        gender: curr.gender,
        deleted: true
      }] : [...acc, curr];
    }, []);
    return this.usersArray;
  }
}

const service = new UserService(interfaceUser);
// console.log(service.getUsers());
// console.log(service.getActiveUsers());
// console.log(service.getUserById(4));

const newUser = {
  name: "Sara",
  surname: "Jakubowska",
  mail: "sara.jakubowska@gmail.com",
  gender: "Kobieta"
};

// console.log(service.createUser(newUser));
console.log(service.updateUser(1, newUser));
console.log(service.deleteUser(1));