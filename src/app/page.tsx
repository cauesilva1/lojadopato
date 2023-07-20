"use client";

import styles from "./page.module.css";
import Header from "./components/Header";
import Image from "next/image";
import { Dropdown } from "@nextui-org/react";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.conteudoDaStore}>
          <div className={styles.horario}>
            <h5>loja aberta</h5>
          </div>

          <div>
            <h5>Entrega gratis: Apartir de R$: 15,00 </h5>
          </div>

          <div>
            <Dropdown>
              <Dropdown.Button color="warning" flat>
                Horario de funcionamento
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new" color="error">
                  Domingo : fechado
                </Dropdown.Item>
                <Dropdown.Item key="new" color="success">
                  Segunda : aberta
                </Dropdown.Item>
                <Dropdown.Item key="new" color="success">
                  Terça : aberta
                </Dropdown.Item>
                <Dropdown.Item key="new" color="success">
                  Quarta : aberta
                </Dropdown.Item>
                <Dropdown.Item key="new" color="success">
                  Quinta : aberta
                </Dropdown.Item>
                <Dropdown.Item key="new" color="success">
                  Sexta : aberta
                </Dropdown.Item>
                <Dropdown.Item key="new" color="success">
                  Sabado : aberta
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className={styles.backgroundImg}>
          <img
            src="banner.png"
            alt="imagem principal"
            className={styles.bannerImage}
          />
        </div>

        <div className={styles.estilocategorias}>
          <ul className={styles.categorias}>
            <li>
              <a className={styles.navcategorias} href="#hamburguer">
                Hamburguer
              </a>
            </li>
            <li>
              <a className={styles.navcategorias} href="#Pizza">
                Pizza
              </a>
            </li>
            <li>
              <a className={styles.navcategorias} href="#Bebidas">
                Bebidas
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.prodcategoria}>
          <h2>Hamburguer</h2>
          </div>

        <div id="hamburguer" className={styles.prod}>
          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="combo1.jpg" alt="Combo 1" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Combo 01</h4>
              <div className={styles.infprod}>
                <p>
                  X-tudo com hamburguer artesanal com uma batata media e uma
                  coca lata
                </p>

                <p>R$: 20,00</p>
              </div>
              <button className={styles.button}> Comprar </button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="combo1.jpg" alt="Combo 1" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Combo 01</h4>
              <div className={styles.infprod}>
                <p>
                  X-tudo com hamburguer artesanal com uma batata media e uma
                  coca lata
                </p>

                <p>R$: 20,00</p>
              </div>
              <button className={styles.button}> Comprar </button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="combo1.jpg" alt="Combo 1" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Combo 01</h4>
              <div className={styles.infprod}>
                <p>
                  X-tudo com hamburguer artesanal com uma batata media e uma
                  coca lata
                </p>

                <p>R$: 20,00</p>
              </div>
              <button className={styles.button}> Comprar </button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="combo1.jpg" alt="Combo 1" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Combo 01</h4>
              <div className={styles.infprod}>
                <p>
                  X-tudo com hamburguer artesanal com uma batata media e uma
                  coca lata
                </p>

                <p>R$: 20,00</p>
              </div>
              <button className={styles.button}> Comprar </button>
            </div>
          </div>
        </div>


        <div className={styles.prodcategoria}>
            <h2>Pizza</h2>
          </div>

        <div id="Pizza" className={styles.prod}>
          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="pizza.jpg" alt="pizza" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Pizza</h4>
              <div className={styles.infprod}>
                <p>Pizza de algum sabor</p>

                <p>R$: 30,00</p>
              </div>
              <div className={styles.estilobutton}>
                <button className={styles.button}> Comprar </button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="pizza.jpg" alt="pizza" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Pizza</h4>
              <div className={styles.infprod}>
                <p>Pizza de algum sabor</p>

                <p>R$: 30,00</p>
              </div>
              <div className={styles.estilobutton}>
                <button className={styles.button}> Comprar </button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="pizza.jpg" alt="pizza" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Pizza</h4>
              <div className={styles.infprod}>
                <p>Pizza de algum sabor</p>

                <p>R$: 30,00</p>
              </div>
              <div className={styles.estilobutton}>
                <button className={styles.button}> Comprar </button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="pizza.jpg" alt="pizza" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Pizza</h4>
              <div className={styles.infprod}>
                <p>Pizza de algum sabor</p>

                <p>R$: 30,00</p>
              </div>
              <div className={styles.estilobutton}>
                <button className={styles.button}> Comprar </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.prodcategoria}>
            <h2>Bebidas</h2>
          </div>

          <div id="Bebidas" className={styles.prod}>
          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="coca.jpg" alt="pizza" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Pizza</h4>
              <div className={styles.infprod}>
                <p>Pizza de algum sabor</p>

                <p>R$: 5,00</p>
              </div>
                <button className={styles.button}> Comprar </button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="coca.jpg" alt="pizza" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Pizza</h4>
              <div className={styles.infprod}>
                <p>Pizza de algum sabor</p>

                <p>R$: 5,00</p>
              </div>
                <button className={styles.button}> Comprar </button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="coca.jpg" alt="pizza" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Pizza</h4>
              <div className={styles.infprod}>
                <p>Pizza de algum sabor</p>

                <p>R$: 5,00</p>
              </div>
                <button className={styles.button}> Comprar </button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardimg}>
              <img src="coca.jpg" alt="pizza" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>Pizza</h4>
              <div className={styles.infprod}>
                <p>Coca-Cola</p>

                <p>R$: 5,00</p>
              </div>
                <button className={styles.button}> Comprar </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
