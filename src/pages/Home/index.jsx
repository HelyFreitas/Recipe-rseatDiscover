import Foto from "../../assets/receita.webp";
import "./styles.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="recipes-container">
        <header>
          <h1>Waffle Clássico!</h1>
        </header>

        <main>
          <div className="recipe-image">
            <img src={Foto} />
            <p className="recipe-image">Receita de waffle clássico</p>
          </div>

          <section className="ingredientes">
            <h2>Ingredientes</h2>
            <ul>
              <li>2 xícaras (chá) de farinha de trigo</li>
              <li>2 colher (sofá) de açúcar</li>
              <li>2 colheres (chá) de fermento sem pó</li>
              <li>1/2 colher (chá) de sal</li>
              <li>2 colheres amido de milho</li>
              <li>
                3 ovos batidos4 colheres (sopa) de manteiga sem sal derretida
              </li>
              <li>1 e 3/4 de xícara (chá) de leite</li>
              <li>1 colher (sopa) de essência de baunilha</li>
            </ul>
          </section>
          <section className="modo-preparo">
            <h2>Modo de preparo</h2>
            <p>
              1. Peneire em um recipiente a farinha de trigo, o açúcar, o amido,
              o fermento e o sal. Reserve
            </p>
            <p>
              2. Em outro recipiente misture os ovos batidos com o leite, a
              manteiga derretida e a essência de baunilha
            </p>
            <p>
              3. Despeje sobre a mistura de farinha e rapidamente icorpore o os
              ingredientes
            </p>
            <p>
              4. Aqueça o aparelho para Waffles. Coloque uma concha rasa de
              massa e espalhe até cobrir o molde do aparelho, feche a tampa e
              deixe assar até a massa ficar bem dourada
            </p>
            <p>
              5. Retire com espátulas de silicone. Sirva com mel, frutas ou
              geleia.
            </p>
          </section>
        </main>

        <section className="informacoes">
          <h2>Informações adcionais</h2>
          <p>Você poderá servir estes Waffles no café da manhã com geleia.</p>
        </section>
      </div>
      <footer>
        <p>
          Feito com 💜 por <a href="#">Rocketseat</a>
        </p>
      </footer>
    </div>
  );
};
