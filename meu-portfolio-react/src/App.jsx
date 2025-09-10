import React, { useEffect, useState } from "react";
import './assets/style.css';

function App() {
  const linhas = [
    "Olá, eu sou o Eduardo",
    "Seja bem vindo ao meu portfólio!",
  ];
  const [texto, setTexto] = useState("");
  const [linha, setLinha] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (linha < linhas.length) {
      if (char < linhas[linha].length) {
        const timeout = setTimeout(() => {
          setTexto((prev) =>
            prev.replace(/<span class="cursor"><\/span>$/, "") +
            linhas[linha][char] +
            '<span class="cursor"></span>'
          );
          setChar((c) => c + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTexto((prev) =>
            prev.replace(/<span class="cursor"><\/span>$/, "") + "<br>"
          );
          setLinha((l) => l + 1);
          setChar(0);
        }, 240);
        return () => clearTimeout(timeout);
      }
    }
  }, [linha, char, linhas]);

  return (
     <>
      <header>
        <div className="logo">Eduardo Dev</div>
        <nav>
          <ul>
            <li><a href="">Skills / Tecnologias</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Contato</a></li>
          </ul>
        </nav>
      </header>

      <div className="imagePerfil">
        <img src="/assets/perfil.jpg" alt="Perfil" />
      </div>

      <div
        id="welcome"
        dangerouslySetInnerHTML={{ __html: texto }}
      />
      <div className="AboutMe">
        <h1>Sobre mim</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lectus urna, in tempus felis
          malesuada vitae. Mauris ultricies mauris commodo semper tempor. Etiam posuere volutpat odio ac tincidunt.
          Aenean sed auctor felis, eget interdum magna. In cursus dictum neque, aliquet molestie ex ultrices ut.
          Curabitur rutrum nisi non turpis consectetur, ut placerat urna semper. Donec dui orci, porta vel dolor sed,
          suscipit feugiat neque. Fusce sed metus bibendum, volutpat mi sit amet, laoreet neque. Vivamus at felis
          vulputate, ultrices dolor at, porttitor felis. Suspendisse consectetur turpis quis venenatis pretium. Mauris
          vehicula pharetra ipsum. Phasellus luctus, quam et sollicitudin gravida, lectus lacus consequat tortor, et
          sollicitudin odio urna vel ligula. Quisque id viverra risus. Vestibulum et justo fringilla, rutrum nulla
          nec, aliquet leo. Duis condimentum augue lacus, ut facilisis urna vehicula nec.
        </p>
      </div>
      <h1>Skills / Tecnologias</h1>
      <div id="Skills">
        <img src="/assets/python-icon.svg" alt="Python Logo" />
        <img src="/assets/html5-icon.svg" alt="HTML Logo" />
        <img src="/assets/css3-icon.svg" alt="CSS Logo" />
        <img src="/assets/javascript-icon.svg" alt="JavaScript Logo" />
        <img src="/assets/mysql-icon.svg" alt="MySQL Logo" />
        <img src="/assets/git-icon.svg" alt="Git Logo" />
        <img src="/assets/nodejs-icon.svg" alt="Node Logo" />
        <img src="/assets/bootstrap-icon.svg" alt="Bootstrap Logo" />
      </div>
      <h1 id="title-projects">Projetos</h1>
    </>
  )
}
export default App
