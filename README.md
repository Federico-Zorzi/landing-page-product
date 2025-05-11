## nome repo: `landing-page-product`

# 🐥 Rubber Duck Landing Page

Una landing page reattiva e moderna realizzata con **React**, pensata per promuovere le paperelle di gomma per il debugging. La pagina è composta da più sezioni scorrevoli in un’unica **Homepage**, pensata per un’esperienza utente fluida e coinvolgente.

<!-- ## 🚀 Live Demo

🔗 [Link alla demo](https://tuosito.vercel.app) *(opzionale se deployata)*
 -->

---

## 📌 Sezioni principali

La pagina è strutturata come **Single Page Application (SPA)** con scroll fluido tra le seguenti sezioni:

- **🏠 Home** – Hero section con immagine, testo introduttivo e call to action.
- **⭐️ Punti di Forza** – Elenco dei motivi per cui usare la paperella per il debugging.
- **🗣️ Recensioni** – Sezione con slider SwiperJS per mostrare le opinioni dei clienti.
- **🦆 Lista Paperelle** – Elenco delle paperelle maggiormente vendute.
- **❓ FAQS** – Le domande più frequenti riguardo all'uso e all'acquisto delle paperelle.
- **📬 Newsletter** – Form per iscrizione alla Newsletter.

---

## 🛠️ Tecnologie Utilizzate

- **React** – Libreria principale per la costruzione dell'interfaccia.
- **React Context API** – Per la gestione dei riferimenti tra sezioni e scroll dinamico.
- **SwiperJS** – Per lo slider delle recensioni.
- **CSS** – Per lo styling responsive.
<!-- - **Mailchimp API** – Per la gestione della newsletter (facoltativo). -->

---

---

## 🔄 Navigazione tra le sezioni

L'app utilizza **`useRef` + Context API** per permettere lo scroll fluido alle sezioni dalla navbar.

---

<!-- ## 📧 Newsletter

L’iscrizione alla newsletter è integrata tramite Mailchimp usando un form custom.

--- -->

## 📱 Responsive Design

Il layout è completamente responsive:

- ✅ Mobile-first
- ✅ Adattamento fluido fino a desktop
- ✅ Slider e pulsanti ottimizzati per il tocco
