import { useState } from "react";
import "./index.css";

const WHATSAPP_URL =
  "https://wa.me/5511991542711?text=Ol%C3%A1%21%20Vim%20pelo%20Instagram%2FWhatsApp%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20churrasqueiro%20a%20domic%C3%ADlio.";

const INSTAGRAM_URL = "https://www.instagram.com/brasaemkaza";
const SITE_URL = "https://brasaemkaza.com/";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="page">
      <header className="header">
        <div className="container header-content">
          <a href="#inicio" className="brand">
            <div className="brand-icon">🔥</div>
            <div>
              <strong>Brasa em Kaza</strong>
              <span>Churrasco de A a Z</span>
            </div>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? "✕" : "☰"}
          </button>

          <nav className={menuAberto ? "nav nav-open" : "nav"}>
            <a href="#servicos" onClick={() => setMenuAberto(false)}>
              Serviços
            </a>
            <a href="#como-funciona" onClick={() => setMenuAberto(false)}>
              Como funciona
            </a>
            <a href="#cardapio" onClick={() => setMenuAberto(false)}>
              Sugestões
            </a>
            <a href="#orcamento" onClick={() => setMenuAberto(false)}>
              Orçamento
            </a>
          </nav>

          <a className="btn btn-primary header-cta" href={WHATSAPP_URL} target="_blank">
            Chamar no WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-bg hero-bg-one"></div>
          <div className="hero-bg hero-bg-two"></div>

          <div className="container hero-grid">
            <div className="hero-text">
              <div className="badge">⭐ Churrasqueiro a domicílio</div>

              <h1>
                Seu churrasco completo, no conforto da sua casa.
              </h1>

              <p>
                A Brasa em Kaza cuida da brasa, do preparo e do serviço para
                você aproveitar o evento sem preocupação.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank">
                  💬 Fazer orçamento
                </a>

                <a className="btn btn-secondary" href={INSTAGRAM_URL} target="_blank">
                  📷 Ver Instagram
                </a>
              </div>

              <div className="hero-cards">
                <div>✅ Atendimento personalizado</div>
                <div>✅ Serviço por 4 horas</div>
                <div>✅ Guarnições opcionais</div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <span className="panel-label">Experiência premium</span>
                <h2>Brasa acesa. Mesa servida.</h2>

                <div className="panel-list">
                  <div>
                    <strong>🥩 Assar e servir</strong>
                    <p>Cortes preparados no ponto ideal e servidos aos convidados.</p>
                  </div>

                  <div>
                    <strong>🛒 Compra assistida</strong>
                    <p>Opção de supermercado e açougue para facilitar o evento.</p>
                  </div>

                  <div>
                    <strong>🎉 Eventos sob medida</strong>
                    <p>Família, confraternização, aniversário e eventos corporativos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section light">
          <div className="container">
            <div className="section-title">
              <span>Serviços</span>
              <h2>Você recebe os convidados. A gente cuida do churrasco.</h2>
              <p>
                Ideal para divulgar no WhatsApp, Instagram e apresentar o serviço
                de forma simples, bonita e direta.
              </p>
            </div>

            <div className="cards three">
              <div className="card">
                <div className="card-icon">🔥</div>
                <h3>Churrasqueiro a domicílio</h3>
                <p>
                  Preparo, controle da brasa, cortes e serviço durante o evento.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">🍽️</div>
                <h3>Guarnições</h3>
                <p>
                  Arroz, farofa, vinagrete, saladas e acompanhamentos conforme
                  sua preferência.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">🛒</div>
                <h3>Açougue e supermercado</h3>
                <p>
                  Serviços opcionais para compra dos itens e montagem de uma
                  experiência completa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section dark">
          <div className="container">
            <div className="section-title white">
              <span>Como funciona</span>
              <h2>Do orçamento ao churrasco servido</h2>
              <p>
                Um fluxo simples para transformar uma conversa no WhatsApp em
                evento fechado.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <strong>01</strong>
                <h3>Você chama no WhatsApp</h3>
                <p>Informe data, local, quantidade de pessoas e estilo do evento.</p>
              </div>

              <div className="step">
                <strong>02</strong>
                <h3>Montamos a melhor opção</h3>
                <p>Ajustamos serviço, carnes, guarnições e compras conforme sua necessidade.</p>
              </div>

              <div className="step">
                <strong>03</strong>
                <h3>Chegamos e resolvemos</h3>
                <p>A brasa, o preparo e o atendimento ficam por nossa conta.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cardapio" className="section light">
          <div className="container">
            <div className="section-title">
              <span>Sugestões</span>
              <h2>Cortes e acompanhamentos para montar do seu jeito</h2>
              <p>
                A proposta pode ser ajustada conforme quantidade de convidados,
                perfil do evento e orçamento.
              </p>
            </div>

            <div className="menu-grid">
              <div>🥩 Picanha</div>
              <div>🥩 Fraldinha</div>
              <div>🌭 Linguiça artesanal</div>
              <div>🍗 Coração</div>
              <div>🧄 Pão de alho</div>
              <div>🍛 Arroz carreteiro</div>
              <div>🥘 Farofa tradicional</div>
              <div>🍅 Vinagrete</div>
              <div>🥗 Salada de maionese</div>
              <div>🍍 Abacaxi na brasa</div>
              <div>🍌 Banana da terra</div>
              <div>🥬 Legumes assados</div>
            </div>
          </div>
        </section>

        <section className="section gray">
          <div className="container split">
            <div>
              <span className="eyebrow">Por que contratar?</span>
              <h2>Mais presença na festa. Menos preocupação com a churrasqueira.</h2>
              <p>
                Ideal para quem quer receber bem sem ficar preso na grelha.
                A Brasa em Kaza entrega uma experiência prática, organizada e
                com atendimento próximo.
              </p>
            </div>

            <div className="benefits">
              <div>
                <strong>⏱️ Economia de tempo</strong>
                <p>Você evita correria com preparo, ponto da carne e reposição.</p>
              </div>
              <div>
                <strong>👥 Convidados bem servidos</strong>
                <p>Serviço contínuo para a mesa e para o evento fluir melhor.</p>
              </div>
              <div>
                <strong>🔥 Brasa no ponto</strong>
                <p>Controle do fogo e do preparo durante o atendimento.</p>
              </div>
              <div>
                <strong>⭐ Experiência completa</strong>
                <p>Possibilidade de incluir guarnições, compras e sugestões de menu.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="orcamento" className="final-cta">
          <div className="container">
            <span>Orçamento rápido</span>
            <h2>Quer levar a Brasa em Kaza para o seu evento?</h2>
            <p>
              Clique no botão abaixo e envie data, bairro/cidade e quantidade
              aproximada de convidados.
            </p>

            <div className="hero-actions center">
              <a className="btn btn-white" href={WHATSAPP_URL} target="_blank">
                💬 Chamar no WhatsApp
              </a>
              <a className="btn btn-white" href={INSTAGRAM_URL} target="_blank">
                📷 Seguir no Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <strong>Brasa em Kaza</strong>
            <p>Churrasqueiro a domicílio • Atendimento de A a Z</p>
          </div>

          <div className="footer-links">
            <a href={SITE_URL} target="_blank">Site oficial</a>
            <a href={INSTAGRAM_URL} target="_blank">@brasaemkaza</a>
          </div>
        </div>
      </footer>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank">
        💬 WhatsApp
      </a>
    </div>
  );
}

export default App;