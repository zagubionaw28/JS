// Dokończ poniższy fragment kodu opisujący flow pobierania danych dla zalogowanego użytkownika (posiadającego losowo wygenerowane id po zalogowaniu):
const axios = require("axios");

class AccountService {
  authenticated = false;

  idUser = Math.floor(Math.random() * 10);

  user = null;

  alreadyTold = false;

  constructor() {}

  // Pobieranie liczby sekund, po jakiej użytkownik powinien zostać zalogowany
  getRandomLoginTime() {
    return (Math.floor(Math.random() * 10) % 5) + 5;
  }

  isAuthorizated() {
    setTimeout(() => {
      if (this.alreadyTold) {
        this.alreadyTold = true;
      } else if (this.authenticated) {
        console.log("Użytkownik jest zalogowany");
        this.alreadyTold = true;
        this.getUserDetails();
      } else console.log("Użytkownik nie jest zalogowany");
    }, 1000);
  }

  checkIsUserLogin() {
    const interval = setInterval(() => {
      if (this.authenticated) {
        clearInterval(interval);
        this.isAuthorizated();
      } else {
        this.isAuthorizated();
      }
    }, 1000);
  }

  loginUser() {
    setTimeout(() => {
      this.authenticated = true;
      // this.+();
    }, 5000 ); //this.getRandomLoginTime()
  }

  getUserDetails() {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.idUser}`)
    .then((res) => {
      this.user = res.data.name;
      console.log(`Zostałeś zalogowany jako: ${res.data.name}`);
      this.getData();
    });
  }

  getData() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((_) => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.idUser}/comments`)
      .then((_) => {
        console.log(`Pobrano wpisy i komentarze użytkownika: ${this.user}`);
      });
    });
  }

  start() {
    this.isAuthorizated();
    this.checkIsUserLogin();
    this.loginUser();
  }
}

// tak, aby spełniał poniższe wymagania:

//     +Funkcja isAuthorizated powinna po upływie jednej sekundy "zwracać" informację, czy użytkownik jest aktualnie zalogowany (czy nie) – flaga authenticated.
//     +Funkcja checkIsUserLogin powinna, co sekundę sprawdzać (do momentu, aż uzyska informacje pozytywną), czy użytkownik jest zalogowany. W zależności od rezultatu powinien zostać wyświetlony odpowiedni komunikat: "Użytkownik nie jest zalogowany" / "Użytkownik jest zalogowany". (Funkcja zostaje wywołana na samym początku działania programu, wykorzystuje implementacje isAuthorizated).
//     +Funkcja loginUser po upływie getRandomLoginTime() sekund powinna zmieniać status użytkownika na zalogowany (authenticated). Po zmianie statusu powinien zostać wyświetlony w konsoli komunikat "Użytkownik został zalogowany".
//     +Funkcja getUserDetails – w momencie, kiedy dostaniemy informacje, że użytkownik jest zalogowany, pobieramy informacje o zalogowanym użytkowniku

//     GET https://jsonplaceholder.typicode.com/users/{idUser}

//     Po pobraniu danych powinna zostać wyświetlona w konsoli informacja o zalogowanym użytkowniku: "Zostałeś zalogowany jako: { name }"
//     +Funkcja getData pobierze wszystkie posty

//     GET https://jsonplaceholder.typicode.com/posts

//     a następnie tylko dla postów zalogowanego użytkownika

//     GET https://jsonplaceholder.typicode.com/posts/{idPost}/comments

//     pobierze "równolegle" wszystkie komentarze do pobranych postów. Kiedy wszystkie komentarze zostaną pobrane, powinien zostać wyświetlony komunikat w konsoli "Pobrano wpisy i komentarze użytkownika: { name }"
//     Cały program powinien się wykonać (zalogowanie, pobieranie danych użytkownika) po wywołaniu funkcji start (zachowując wyżej opisane flow).

// // Wynik w konsoli, po wywołaniu funkcji start

// Użytkownik nie jest zalogowany
// Użytkownik nie jest zalogowany
// Użytkownik nie jest zalogowany
// Użytkownik nie jest zalogowany
// Użytkownik został zalogowany
// Użytkownik jest zalogowany
// Zostałeś zalogowany jako: Leanne Graham
// Pobrano wpisy i komentarze użytkownika: Leanne Graham

const newUser = new AccountService;
newUser.start();
