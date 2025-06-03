import './App.css';
import Bienvenue from './Bienvenue';
import Compteur from './Compteur';
import Form from './Form';
import ListeFruit from './ListeFruit';
import ListeUtilisateur from './ListeUtilisateurs';
import ListeUserApi from './ListUserApi';
import User from './my-user';


function App() {
  return (
    <div>
      <p>Compteur</p>
    <Compteur />
    <p>Form</p>
    <Form />
    <p>Bienvenue</p>
    <Bienvenue nom="Meryem" />
    <p>ListeFruit</p>
    <ListeFruit />
    <p>ListeUtilisateur</p>
    <ListeUtilisateur />
    <p>User</p>
    <User />
    <ListeUserApi />
    </div>

  );
}

export default App;
