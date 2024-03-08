import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ola! Eu sou Leandresson </h1>
        <p className={styles.description}>
          Iniciei em 2018 minha carreira em programação e ao longo dessa
          jornada, tenho prestado mentoria, ministrado palestras, participado
          efetivamente de resultados positivos nas empresas que passei, bem como
          me desenvolvendo constantemente com cursos, eventos, bootcamps,
          hackatons e projetos Open Source.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contato
        </a>
      </div>
      <img
        src={getImageUrl("hero/perfilLeo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
