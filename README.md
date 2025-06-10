# Territory Constructor

Territory Constructor este o aplicație web full-stack ce permite utilizatorilor să creeze, vizualizeze și gestioneze teritorii geografice personalizate. Utilizatorii se pot înregistra, autentifica și apoi interacționa cu o hartă pentru a defini poligoane ce reprezintă teritorii, cărora le pot asocia diverse atribute.

Aplicația este construită cu React pentru frontend, Node.js/Express pentru backend și MongoDB ca bază de date.

**Aplicația live (Frontend):** https://teritory-builder.netlify.app/
**API Backend (Exemplu endpoint):** https://territory-constructor.onrender.com
## Cuprins

- [Caracteristici Principale](#caracteristici-principale)
- [Tehnologii Folosite](#tehnologii-folosite)
- [Structura Proiectului](#structura-proiectului)
- [Configurare și Rulare Locală](#configurare-și-rulare-locală)
  - [Cerințe preliminare](#cerințe-preliminare)
  - [Pași de configurare Backend](#pași-de-configurare-backend)
  - [Pași de configurare Frontend](#pași-de-configurare-frontend)
- [Variabile de Mediu (pentru Producție)](#variabile-de-mediu-pentru-producție)
- [Publicare (Deploy)](#publicare-deploy)
- [Contribuții](#contribuții)

## Caracteristici Principale

*   **Autentificare Utilizatori:** Înregistrare și login securizat pentru utilizatori.
*   **Creare Teritorii:** Interfață de desenare pe hartă (Leaflet) pentru a defini poligoane ce reprezintă teritorii.
*   **Vizualizare Teritorii:** Afișarea teritoriilor create pe o hartă interactivă.
*   **Management Teritorii (CRUD):** Utilizatorii autentificați își pot vizualiza, actualiza și șterge propriile teritorii.
*   **Protecție Rute:** Anumite acțiuni și rute sunt protejate și necesită autentificare.

## Tehnologii Folosite

**Frontend:**
*   React (folosind Create React App)
*   React Router (pentru rutare)
*   Axios (pentru cereri HTTP către backend)
*   Leaflet (pentru hărți interactive)
*   React Leaflet (integrare Leaflet în React)
*   React Leaflet Draw (pentru desenarea poligoanelor pe hartă)
*   CSS (pentru stilizare)

**Backend:**
*   Node.js
*   Express.js (framework web)
*   MongoDB (bază de date NoSQL)
*   Mongoose (ODM pentru MongoDB și Node.js)
*   JSON Web Tokens (JWT) (pentru autentificare și autorizare)
*   bcryptjs (pentru hash-uirea parolelor)
*   cors (pentru gestionarea Cross-Origin Resource Sharing)
*   dotenv (pentru încărcarea variabilelor de mediu din fișiere `.env`)

**Platforme de Deploy:**
*   **Frontend:** Netlify
*   **Backend:** Render
*   **Baza de Date:** MongoDB Atlas

## Structura Proiectului

Repository-ul conține două foldere principale:

*   `frontend/`: Aplicația client React.
*   `backend/`: Serverul API Node.js/Express.



