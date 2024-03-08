import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/leoSentado.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/logoBack (2).png")}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                No Frontend sou capaz de desenvolver landing pages responsivas,
                sites profissionais e desingners de sistemas.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/logoBack (2).png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Já na parte de Backend tenho mais de 2 anos de estudos e
                desenvolvimento de APIs, Microserviços, estruturas funcionais,
                DDD, SOLID e Clean Code.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/logoBack (2).png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                Esse é o conjunto completo da obra. Frontend, Backend e Mobile.
                Aqui, posso garantir conhecimentos que me levam a construção
                completa de uma solução.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
