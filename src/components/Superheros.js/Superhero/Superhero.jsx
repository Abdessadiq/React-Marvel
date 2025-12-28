import "./Superhero.css";
import { useState } from "react";
export default function Superhero({
  nom,
  description,
  films = ["Aucun filme pour ce superHero.."],
  image = "https://static.vecteezy.com/ti/vecteur-libre/p1/26530349-anonyme-la-personne-silhouette-icone-vecteur-vectoriel.jpg",
  details,
  ...props
}) {
  // console.log(props);
  // Les variables
  // UseState --- React Hook une fonctionnalité de react pour que souvgarder cetain information avec react  ..
  // let contenu = "";
  // State
  // const contenu = useState(VALEUR, MODEFIEUR)
  const [contenu, setContenu] = useState("");
  // console.log(contenu);

  return (
    // Un component ne s'éxécute qu'une seul fois : au début -> et en suite
    //  à chaque modification "Fonctionnalle" = c'est une modification qui a eu lieu et que
    // React est au courant ..et c'est pour ça que lorsque le component se charche la premiére fois
    // Meme lorsqu'on change la variable ne se passe rien et pour le faire on a besoin d'un state

   /**
    * - React Hooks Régles :
    *   - Toujours appeler les React Hooks Seulement dans un composant fonctionnel (pas au dessus..)
    *   - Tout le temps appeler les React Hooks avant le rest du code 
    */

    <div className="superhero">
      <img alt={`${nom} Photo`} src={image}></img>
      <h2>{nom}</h2>

      <p>{description} </p>
      {/* details */}
      <div className="more" onClick={() => setContenu(details)}>
        En savoir Plus
      </div>
      <div
        style={{
          whiteSpace: "pre-line",
        }}
      >
        {contenu}
      </div>
      {/* Films */}
      <div
        style={{
          marginTop: 10,
        }}
      >
        <b> Films : </b>
        <ul>
          {films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
