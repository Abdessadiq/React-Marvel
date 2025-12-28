import "./App.css";
import Superhero from "./components/Superheros.js/Superhero/Superhero";
import Superheros from "./components/Superheros.js/Superheros";
import captainamerica from "./assets/captinamerica.jpg";
export default function App() {
  return (
    <main>
      <h1>Marvel</h1>
      <Superheros>
        {/* SuperHero Numéro 1 */}
        <Superhero
          nom="Iron man"
          description="Anthony « Tony » Stark, alias Iron Man ( litt. « l'Homme de fer ») est
        un super-héros évoluant dans l'univers Marvel de la maison d'édition
        Marvel Comics."
          details="Iron Man est le super-héros milliardaire inventeur Tony Stark, qui utilise des armures high-tech propulsées par un réacteur Arc pour voler, combattre, et protéger le monde, doté d'une force surhumaine, de répulseurs, et d'une intelligence scientifique inégalée, créant des versions d'armure toujours plus puissantes. Il est célèbre pour son humour, son côté playboy, et sa transformation d'un fabricant d'armes à un défenseur de la justice après avoir été capturé en Afghanistan."
          films={["Iron man 1", "Iron man 2", "Iron man 3"]}
          image="./ironman.jpg"
        />
        {/* SuperHero Numéro 2 */}
        <Superhero
          nom="Loki"
          description="Loki tient le rôle du pire ennemi de son demi-frère Thor. À la base
            un super-vilain, il est parfois dépeint comme un anti-héros. Dieu de
            la tromperie et ..."
          details="Loki est le Dieu de la malice, fils adoptif d'Odin et frère de Thor, connu pour sa magie, sa ruse et sa quête d'approbation, étant en réalité un Géant des Glaces de Jotunheim qui se sent étranger à Asgard. Il possède une force surhumaine, une durabilité accrue, et des pouvoirs illusoires, de métamorphose et de manipulation magique. Bien que souvent un super-vilain, notamment dans les films Marvel, son évolution le montre capable d'actions héroïques, devenant le Dieu des Histoires et protégeant le Multivers, incarnant une dualité fascinante. "
          image="https://queenstudios.shop/cdn/shop/products/loki-quarter-statue_620x.jpg?v=1648552182"
        />

        {/* SuperHero Numéro 3 */}
        <Superhero
          nom="Captin America"
          description="Captain America · Stratège et tacticien militaire accompli · Expert
            au combat à mains nues, au combat au bouclier et en acrobatie."
          details="Captain America, de son vrai nom Steve Rogers, est un super-soldat américain né frêle à Brooklyn, transformé par un sérum durant la Seconde Guerre mondiale en icône de justice et leader des Avengers, doté de force, vitesse et agilité surhumaines, manié son emblématique bouclier en vibranium, et symbolise les valeurs patriotiques tout en luttant pour la liberté et la justice, même face à son gouvernement. "
          image={captainamerica}
        />
      </Superheros>
    </main>
  );
  //retourn du JSX
}
