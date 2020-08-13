import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://lh3.googleusercontent.com/a-/AOh14GgR7ZlmZpOPi_7HEjixEu29DlMmnG2Jq-qKHL5mK6U=s28-c-k-no" />
        <div>
          <strong>Teresa Cristina</strong>
          <br />
          <span>Desenvolvimento WEB</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias para desenvolvimento.
        <br />
        <br />
        Apaixonada pelo que faz o tempo todo e em todo lugar.
      </p>
      <footer>
        <p>
          Preco/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
