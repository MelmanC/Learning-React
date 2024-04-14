import React, { useState } from 'react';
import './App.css';

function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nom || !prenom || !email) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    alert(`Nom: ${nom}, Prénom: ${prenom}, Email: ${email}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" name="nom" value={nom} onChange={(event) => setNom(event.target.value)} />
        </label>
        <label>
          Prénom:
          <input type="text" name="prenom" value={prenom} onChange={(event) => setPrenom(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App;