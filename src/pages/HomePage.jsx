import { useState } from "react";
import { useDataContext } from "../context/dataContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import DuckCard from "../components/DuckCard";

export default function HomePage() {
  const { sectionRefs } = useDataContext();
  const {
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
    section6Ref,
  } = sectionRefs;

  const mostVisReviews = [
    {
      description: `"La paperella di gomma è diventata il mio strumento di debugging
            preferito. Spiegare i problemi al mio 'assistente' silenzioso mi ha
            aiutato a risolvere bug che altrimenti mi avrebbero fatto impazzire.
            È anche un ottimo antistress nelle giornate difficili!"`,
      author: "David William",
      date: "Feb 22, 2023",
      vote: 5,
    },
    {
      description: `"Non pensavo che un oggetto così semplice potesse aiutarmi tanto.
        Parlare alla paperella mi aiuta a mettere ordine nei pensieri e spesso mi fa scoprire bug nascosti."`,
      author: "Chiara Lombardi",
      date: "Mar 10, 2024",
      vote: 5,
    },
    {
      description: `"La tecnica è buffa, ma funziona. Quando mi blocco, spiego il problema
        alla paperella e puntualmente riesco a vedere le cose da un'altra prospettiva."`,
      author: "Luca Ferri",
      date: "Jun 2, 2023",
      vote: 4,
    },
    {
      description: `"All'inizio sembrava solo un trucco simpatico, ma dopo averlo provato ho capito
        quanto sia potente. Mi aiuta a spiegarmi le cose e spesso trovo la soluzione da solo."`,
      author: "Giulia Fontana",
      date: "Apr 22, 2024",
      vote: 5,
    },
  ];

  const ducksCollection = [
    {
      name: "Cool-duck",
      price: 15,
      vote: 5,
      image: "img/product-item1.png",
    },
    {
      name: "Classic-duck",
      price: 29,
      vote: 5,
      image: "img/product-item2.png",
    },
    {
      name: "Bat-duck",
      price: 69,
      vote: 5,
      image: "img/product-item3.png",
    },
  ];

  const faqsQuestions = [
    {
      question: "Come posso utilizzare la paperella di gomma per il debugging?",
      answer:
        "Il rubber duck debugging è semplice: spiega il tuo codice alla paperella di gomma come se fosse un collega. Descrivendo ogni passo, potresti individuare errori o capire meglio il problema. La paperella non risponde, ma ti aiuta a chiarire i tuoi pensieri.",
    },
    {
      question:
        "Quali sono i vantaggi di usare una paperella di gomma per i programmatori?",
      answer:
        "Il rubber duck debugging è semplice: spiega il tuo codice alla paperella di gomma come se fosse un collega. Descrivendo ogni passo, potresti individuare errori o capire meglio il problema. La paperella non risponde, ma ti aiuta a chiarire i tuoi pensieri.",
    },
    {
      question:
        "Posso usare la paperella di gomma indipendentemente dal linguaggio di programmazione che utilizzo?",
      answer:
        "Il rubber duck debugging è semplice: spiega il tuo codice alla paperella di gomma come se fosse un collega. Descrivendo ogni passo, potresti individuare errori o capire meglio il problema. La paperella non risponde, ma ti aiuta a chiarire i tuoi pensieri.",
    },
    {
      question:
        "Quanto dettagliatamente devo spiegare il mio codice alla paperella di gomma?",
      answer:
        "Il rubber duck debugging è semplice: spiega il tuo codice alla paperella di gomma come se fosse un collega. Descrivendo ogni passo, potresti individuare errori o capire meglio il problema. La paperella non risponde, ma ti aiuta a chiarire i tuoi pensieri.",
    },
  ];

  const [isFaqOpen, setIsFaqOpen] = useState(() =>
    faqsQuestions.map((q) => false)
  );

  return (
    <>
      <main>
        <section id="hero-section" ref={section1Ref}>
          <div className="banner-img-container">
            <img src="img/banner-image.png" alt="" />
          </div>
          <div className="banner-content-container txt-center">
            <h1 className="hero-section-title">Rubber Duck Debuggings</h1>
            <p className="hero-section-content">
              Spiegare il codice a una paperella di <br />
              gomma aiuta i programmatori a <br />
              chiarire il pensiero e individuare <br />
              errori nascosti.
            </p>

            <div>
              <button className="hero-section-btn">ACQUISTALA SUBITO!</button>
            </div>
          </div>
        </section>

        {/* STRENGTH POINTS SECTION */}
        <section
          id="ducks-description-section"
          className="txt-center"
          ref={section2Ref}
        >
          <div className="ducks-descriptions-group">
            <div className="ducks-description">
              <h3>Lunga Durata della Batteria</h3>
              <p>
                Goditi ore di assistenza continua nella risoluzione dei bug
                grazie alla lunga durata della "batteria" (ovvero, la tua
                pazienza) della paperella di gomma.
              </p>
            </div>
            <div className="ducks-description">
              <h3>Compatibilità Universale</h3>
              <p>
                Funziona con tutti i linguaggi di programmazione e sistemi
                operativi, la paperella di gomma è l'unico strumento di
                debugging che non necessita di aggiornamenti.
              </p>
            </div>
            <div className="ducks-description">
              <h3>Design Elegante</h3>
              <p>
                Mostra con orgoglio il design elegante e raffinato della tua
                paperella di gomma, disponibile in vari colori per abbinarsi al
                tuo stile di programmatore.
              </p>
            </div>
          </div>
          <div id="ducks-description-img">
            <img src="img/invisible.png" alt="" />
          </div>
          <div className="ducks-descriptions-group">
            <div className="ducks-description">
              <h3>Resistenza agli Spruzzi</h3>
              <p>
                Perfetta per resistere ai piccoli incidenti con caffè e bevande,
                la tua paperella di gomma non teme schizzi, mantenendoti sempre
                pronto per il debugging.
              </p>
            </div>
            <div className="ducks-description">
              <h3>Portabilità</h3>
              <p>
                Leggera e facile da trasportare, la paperella di gomma può
                essere il tuo compagno di lavoro ovunque tu vada. Portala con te
                per un supporto costante.
              </p>
            </div>
            <div className="ducks-description">
              <h3>Promemoria Anti-Stress</h3>
              <p>
                Quando lo stress del codice diventa troppo, spremi la tua
                paperella di gomma per un rapido sollievo anti-stress, senza
                bisogno di software complicati.
              </p>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section id="reviews-section" className="txt-center" ref={section3Ref}>
          <h2>Cosa ne pensano i nostri sviluppatori</h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
          >
            {mostVisReviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="review">
                  <div className="review-content">
                    <p>{r.description}</p>
                  </div>
                  <div className="vote">
                    <span>
                      {[...Array(r.vote)].map((_, index) => (
                        <i key={index} className="fa-solid fa-star"></i>
                      ))}
                    </span>
                  </div>
                  <div className="author-date">
                    <span>
                      {r.author} - {r.date}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Contenitore per la paginazione di Swiper */}
          <div className="swiper-pagination"></div>
        </section>

        {/* DUCKS COLLECTION */}
        <section
          id="ducks-collection-section"
          className="txt-center"
          ref={section4Ref}
        >
          <h2>La collezione di paperelle</h2>
          <p>Una paperella per ogni stile di programmazione</p>

          <div className="ducks-list">
            {ducksCollection.map((d, i) => (
              <DuckCard key={i} duck={d} />
            ))}
          </div>
        </section>

        {/* FAQS */}
        <section id="faqs-section" ref={section5Ref}>
          <div id="faqs-img">
            <img src="img/single-image2.png" alt="single image" />
          </div>
          <div id="faqs-content">
            <h2>FAQs</h2>

            {faqsQuestions.map((q, i) => (
              <div key={i} className="faq-item">
                <div
                  className="summary-content"
                  onClick={() =>
                    setIsFaqOpen((currVal) => {
                      const newValue = [...currVal];
                      newValue[i] = !newValue[i];
                      return newValue;
                    })
                  }
                >
                  <h3 className="question-content">{q.question}</h3>
                  <span className="icon">
                    {isFaqOpen[i] ? (
                      <i className="fa-solid fa-minus"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </span>
                </div>
                <div className={`answer-wrapper ${isFaqOpen[i] ? "open" : ""}`}>
                  <p>{q.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GENERAL INFORMATIONS */}
        <section id="general-informations-section" className="txt-center">
          <div className="info">
            <div>
              <i className="fa-solid fa-ranking-star fa-2xl"></i>
            </div>
            <h3>100% Prodotto Di Qualità</h3>
            <p>
              Abbiamo anche la possibilità di ritiro direttamente dallo stagno
            </p>
          </div>

          <div className="info">
            <div>
              <i className="fa-solid fa-cart-flatbed-suitcase fa-2xl"></i>
            </div>
            <h3>Spedizione Gratuita</h3>
            <p>Dal magazzino alla scrivania</p>
          </div>

          <div className="info">
            <div>
              <i className="fa-solid fa-shield-heart fa-2xl"></i>
            </div>
            <h3>Rimborso Garantito</h3>
            <p>Ti rimborsiamo se la paperella fa quack</p>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section
          id="newsletter-section"
          className="txt-center"
          ref={section6Ref}
        >
          <h2>Iscriviti per rimanere aggiornato</h2>
          <p>
            Iscriviti alla nostra newsletter per rimanere aggiornato su sconti e
            novità
          </p>

          <div className="subscribe-newsletter">
            <input
              type="text"
              id="send-mail-input"
              placeholder="Lascia la tua email qui..."
            />
            <button id="send-mail-btn">
              <i className="fa-solid fa-paper-plane fa-2xl"></i>
            </button>
          </div>

          <div className="social-list">
            <button className="social-btn">
              <i className="fa-brands fa-facebook-f fa-xl"></i>
            </button>
            <button className="social-btn">
              <i className="fa-brands fa-twitter fa-xl"></i>
            </button>
            <button className="social-btn">
              <i className="fa-brands fa-youtube fa-xl"></i>
            </button>
            <button className="social-btn">
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </button>
            <button className="social-btn">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </button>
          </div>
        </section>

        <section className="txt-center">
          <p>© 2024 BooLanding Product. Designed by Boolean</p>
        </section>
      </main>
    </>
  );
}
