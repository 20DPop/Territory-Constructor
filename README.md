# Territory Constructor

Territory Constructor este o aplicație web full-stack ce gestioneze teritorii geografice personalizate. Utilizatorii se pot înregistra, autentifica și apoi interacționa cu permite utilizatorilor să creeze, vizualizeze, și gestioneze teritorii geografice pe o hartă interactivă. Utilizatorii se pot înregistra, autentifica, și apoi pot defini teritorii folosind unelte deSig o hartă pentru a defini și analiza diverse regiuni.

## Cuprins

- [Funcționalități Che desenare.

## Cuprins

- [Caracteristici Principale](#caracteristici-principale)
-ur, iată o propunere de fișier `README.md` pentruie](#funcționalități-cheie)
- [Tehnologii Folosite](#tehnologii-folosite)Sig [Tehnologii Folosite](#tehnologii-folosite)
- [Structura Proiectului](#structura-proiectului)
- [Configurare și Rulare Locală](#configurare-și-rulare-locală aplicația ta "Territory Constructor". Poți să-l personalizezi și să adaugi mai multe detalii după cum consideri necesar.

```markdown
# Territory Constructor

Territory Constructor este o aplicație web full-stack ce
- [Structura Proiectului](#structura-proiectului)
- [Cerințe Preliminare](#cerințe-preliminare)
- [Instalare și Rulare Locală](#instalare-și-ur, iată o propunere de `README.md` pentru aplicația ta)
  - [Cerințe preliminare](#cerințe-preliminare)
  - [Pa permite utilizatorilor să creeze, vizualizeze, și gestioneze teritorii geografice definite customizat. Aplicația este compusă dintr-un frontend interactiv construit cu React și un backend robust Node.js/Express cerulare-locală)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Variabile de Mediu](#variabile-de-mediu)
- [Deploy](#deploy)
- [Contribuții "Territory Constructor". Poți să o personalizezi și să adaugi mai multe detalii specifice.

```markdown
# Territory Constructor

Territory Constructor este o aplicație web full-stack ce permite utilizatorilor să creeze, vizualizeze și gestioneze teritorii geografice personalizate. Utilizatorii se pot înregistra, autentifica și apoi interacționa cu o hartă pentru a defini poligoane ce reprezintă teritorii,și de configurare Backend](#pași-de-configurare-backend)
  - [Pași de configurare Frontend](#pași-de-configurare-frontend)
- [Variabile de Mediu](#variabile-de-mediu)
- [Publicare (Deploy)](#publicare-deploy)
- [Contribuții](#contribuții)
- [Licență](#licență)

## Caracteristici Principale

*   ** gestionează datele și logica de business, cu o bază de date MongoDB.

## Cuprins

](#contribuții)
- [Licență](#licență)

## Funcționalități Cheie

*   **Autentificare Utilizatori:** Înregistrare și login securizat pentru utilizatori.
*   **Creare Teritorii:** Interfață cu hartă (probabil Leaflet) pentru a desena și defini poligoane reprezentând teritorii.
*   **Vizualizare Teritorii:** Afișarea teritoriilor create pe o hartă interactivă.
*   **Gestionare Teritorii (CRUD):** Utilizatorii își pot vizualiza, actual cărora le pot asocia diverse atribute.

## Cuprins

- [Tehnologii Folosite](#tehnologii-folosite)
- [Funcționalități](#funcționalități)
- [Configurare Proiect Local](#configurare-proiect-local)
  - [Cerințe preliminare](#cerințe-preliminare)
  - [Clonare Repository](#clonare-repository)
  - [Configurare Backend](#configurare-backend)
  - [Configurare Frontend](#configurare-frontend)
  - [Rulare Locală](#rulare-locală)
- [Structura Proiectului](#structura-proiectAutentificare Utilizatori:** Înregistrare și login securizat pentru utilizatori.
*   **Creare Teritorii:** Interfață de desenare pe hartă pentru a defini poligoane ce reprezintă teritorii.
*   **Vizualizare Teritorii:** Afișarea teritoriilor create pe o hartă interactivă.
*   **Management Teritorii (CRUD):** Utilizatorii autentificați își pot vizualiza, actualiza și șterge propriile teritorii.
*   **Protecție Rute:** Anumite ac- [Caracteristici Principale](#caracteristici-principale)
- [Arhitectură](#arhitectură)
- [Tehnologii Folosite](#tehnologii-folosite)
- [Configurare și Rulare Locală](#configurare-și-rulare-locală)
  - [Cerințe preliminare](#cerințe-preliminare)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Variabile de Mediu](#variabile-de-mediu)
- [Deploy](#deploy)
- [Contribuții](#contribuții)
- [Licență](#licență)

## Caracteristici Principale

*   **Autentificare Utilizatori:** Înregistrare și login securizat pentru utilizatori.
*   **Creare Teritorii:** Utilizatorii pot defini poligoane pe o hartă interactivă pentruiza și șterge propriile teritorii.
*   **(Opțional - adaugă dacă ai)** Calcularea automată a ariei, perimetrului sau alte analize pentru teritoriile definite.
*   **(Opțional - adaugă dacă ai)** Posibilitatea de a adăuga atribute/note la teritorii.

## Tehnologii Folosite

### Backend
*   **Node.js:** Mediu de rulare JavaScript.
*   **Express.js:** Framework web pentru Node.js, folosit pentru a construi API-ul RESTful.
*   **MongoDB:** Bază de date NoSQL pentru stocarea datelor utilizatorilor și teritoriilor.
    *   **Mongoose:** ODM (Object Data Modeling) pentru MongoDB și Node.js.
*   **JSON Web Tokens (JWT):** Pentru autentificarea și autorizarea utilizatorilor.
*   **bcryptjs:** Pentru hash-uirea parolelor.
*   **dotenv:** Pentru gestionarea variabilelor de mediu.
*   **cors:** Pentru gestionarea Cross-Origin Resource Sharing.

### Frontend
*   **React:** Bibliotecă JavaScript pentru construirea interfețelor utilizator.
    *   **(Probabil)** Create React App pentruului)
- [Deploy](#deploy)
- [Contribuții](#contribuții)
- [Licență](#licență)

## Tehnologii Folosite

**Frontend:**
*   React.js
*   Axios (pentru cereri HTTP)
*   Leaflet (pentru hărți interactive)
*   React Leaflet (integrare Leaflet în React)
*   React Leaflet Draw (pentru desenarea poligoanelor)
*   (Adaugă alte biblioteci majore de frontend pe care le folosești, ex: Redux, Material-UI, etc.)

**Backend:**
*   Node.js
*   Express.js (framework web)
*   MongoDB (bază de date NoSQL)
*   Mongoose (ODM pentru MongoDB)
*   JSON Web Tokens (JWT) (pentru autentificare)
*   bcryptjs (pentru hash-uirea parolelor)
*   cors (pentru gestionarea Cross-Origin Resource Sharingțiuni și rute sunt protejate și necesită autentificare.
*   **Interfață Prietenoasă:** Design intuitiv și responsiv.

## Tehnologii Folosite

**Frontend:**

*   **React:** Bibliotecă JavaScript pentru construirea interfețelor utilizator.
*   **Leaflet & React-Leaflet:** Pentru afișarea și interacțiunea cu hărțile.
*   **React-Leaflet-Draw:** Pentru funcționalitatea de desenare a poligoanelor pe hartă.
*   **Axios:** Pentru efectuarea cererilor HTTP către backend.
*   **React Router:** Pentru rutarea pe partea de client.
*   **(Opțional: Adaugă alte librării importante, ex: Redux, Material-UI, etc.)**
*   CSS / SCSS (sau ce ai folosit pentru stilizare)

**Backend:**

*   **Node. a crea teritorii.
*   **Vizualizare Teritorii:** Afișarea teritoriilor create pe hartă.
*   **Listare Teritorii:** Vizualizarea unei liste cu toate teritoriile create de utilizatorul autentificat.
*   **Operații CRUD:** Utilizatorii pot crea, citi, actualiza și șterge propriile teritorii.
*   **Protecție Rute:** Anumite acțiuni și rute sunt protejate și necesită autentificare.

## Arhitectură

Aplicația este împărțită în două componente principale:

*   **Frontend:** O aplicație Single Page Application (SPA) construită cu React, responsabilă pentru interfața cu utilizatorul și interacțiunea cu harta. Comunică cu backend-ul prin cereri API REST.
*   **Backend:** Un server API REST construit cu Node.js și Express, responsabil pentru logica de business, autentificare și interacțiunea cu baza de date MongoDB.

## Tehnologii Folosite

**Frontend:**

*   React
*   React Router (pentru rutare)
*   Axios (pentru cereri HTTP)
*    inițializarea proiectului.
*   **React Router:** Pentru rutarea pe partea de client.
*   **Axios:** Client HTTP bazat pe Promise-uri pentru a face cereri către API-ul backend.
*   **Leaflet & React-Leaflet:** Biblioteci pentru hărți interactive.
    *   **(Probabil)** `react-leaflet-draw` pentru funcționalitatea de desenare.
*   **(Opțional - adaugă dacă ai)** Redux, Zustand sau altă bibliotecă de state management.
*   **(Opțional - adaugă dacă ai)** Material-UI, Tailwind CSS, Bootstrap sau altă bibliotecă UI.

### Platforme de Deploy
*   **Backend:** Publicat pe [Render](https://render.com/).
*   **Frontend:** Publicat pe [Netlify](https://www.netlify.com/).
*   **Baza de Date:** Găzduită pe [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Structura Proiectului

Repository-ul este structurat într-un monorepo simplu, cu foldere separate pentru backend și frontend:
Use code with caution.
Markdown
Territory-Constructor/
├── backend/
│ ├── config/
│ │ └── db.js # Configurația conexiunii la MongoDB
│ ├── controllers/ # Logica pentru gestionarea cererilor)
dotenv (pentru gestionarea variabilelor de mediu)
Platforme de Deploy:
Frontend: Netlify
Backend: Render
Baza de date: MongoDB Atlas
Funcționalități
Autentificare Utilizator:
Înregistrare utilizator nou.
Login utilizator existent.
Protejarea rutelor backend folosind JWT.
Managementul Teritoriilor:
Crearea de noi teritorii prin desenarea poligoanelor pe o hartă interactivă.
Vizualizarea teritoriilor existente pe hartă.
Editarea detaliilor și geometriei unui teritoriu existent.
Ștergerea teritoriilor.
Listarea tuturor teritoriilor pentru utilizatorul autentificat.
Interfață Hartă:
Afișarea unei hărți de bază (de ex., OpenStreetMap).
Instrumente de desen pentru a crea poligoane.
Afișarea poligoanelor salvate pe hartă.
Configurare Proiect Local
Urmează acești pași pentru a rula aplicația pe mașina ta locală pentru dezvoltare și testare.
Cerințe preliminare
Node.js (versiunea 18.x sau mai recentă recomandată)
npm (Node Package Manager) saujs:** Mediu de rulare JavaScript server-side.
Express.js: Framework web pentru Node.js, folosit pentru a construi API-ul REST.
MongoDB: Bază de date NoSQL pentru stocarea datelor utilizatorilor și a teritoriilor.
Mongoose: ODM (Object Data Modeling) pentru MongoDB și Node.js.
JSON Web Tokens (JWT): Pentru autentificare și autorizare.
bcryptjs: Pentru hash-uirea parolelor.
cors: Pentru gestionarea Cross-Origin Resource Sharing.
dotenv: Pentru încărcarea variabilelor de mediu din fișiere .env.
Platforme de Deploy:
Frontend: Netlify
Backend: Render
Baza de Date: MongoDB Atlas
Structura Proiectului
Proiectul este împărțit în două foldere principale:
frontend/: Conține codul sursă pentru aplicația React (client-side).
backend/: Conține codul sursă pentru serverul Node.js/Express și API-ul (server-side).
Configurare și Rulare Locală
Cerințe preliminare
Node.js (include npm) - versiunea 18.x sau mai recentă recomandată.
MongoDB instalat local SAU un cont pe MongoDB Atlas pentru o bază de date cloud.
(Opțional) Git pentru versionarea codului.
Pași de configurare Backend
Clonează repository-ul (dacă nu ai făcut-o deja):
git clone https://github.com/20DPop/Territory-Constructor.git
cd Territory-Constructor/backend
Use code with caution.
Bash
Instalează dependențele:
npm install
Use code with caution.
Bash
Configurează Variabilele de Mediu:
Creează un fișier .env în folderul backend/.
Adaugă următoarele variabile (adaptează valorile):
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/territory-constructor # Sau string-ul de conexiune de la MongoDB Atlas
JWT_SECRET=cheiaTaSecretaPentruJWT
Use code with caution.
Env
Pornește serverul de backend:
npm start
Use code with caution.
Bash
Serverul ar trebui să ruleze pe http://localhost:5000 (sau portul specificat).
Pași de configurare Frontend
Navighează în folderul frontend:
(Presupunând că ești în rădăcina Territory-Constructor)
cd frontend
Use code with caution.
Bash
Instalează dependențele:
npm install
Use code with caution.
Bash
Configurează Variabilele de Mediu (Opțional, pentru dezvoltare locală):
Dacă vrei ca frontend-ul local să comunice cu backend-ul local, creează un fișier .env în folderul frontend/.
Leaflet & React-Leaflet (pentru afișarea hărților și interacțiune)
React-Leaflet-Draw (pentru desenarea poligoanelor)
Material-UI (sau altă bibliotecă UI, dacă este cazul)
CSS / SCSS
Backend:
Node.js
Express.js
MongoDB (cu Mongoose ODM)
JSON Web Tokens (JWT) (pentru autentificare)
bcryptjs (pentru hash-uirea parolelor)
cors (pentru gestionarea Cross-Origin Resource Sharing)
dotenv (pentru gestionarea variabilelor de mediu)
Platforme de Deploy:
Frontend: Netlify
Backend: Render
Baza de Date: MongoDB Atlas
Configurare și Rulare Locală
Cerințe preliminare
Node.js și npm (sau Yarn) instalate
MongoDB instalat local sau un cont MongoDB Atlas
Backend
Clonează repository-ul:
git clone https://github.com/20DPop/Territory-Constructor.git
cd Territory-Constructor/backend
Use code with caution.
Bash
Instalează dependențele:
npm install
# sau
# yarn install
Use code with caution.
Bash
Configurează variabilele de mediu:
Creează un fișier .env în directorul backend/.
Adaugă următoarele variabile (adaptează valorile):
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/territoryconstructor_dev  # Sau string-ul de conexiune Atlas
JWT_SECRET=cheiaTaSecretaPentruJWT
Use code with caution.
Env
Pornește serverul de backend:
npm start
# sau
# yarn start
# sau, dacă vrei rulare cu nodemon (dacă e configurat în package.json)
# npm run server
Use code with caution.
Bash
Serverul ar trebui să ruleze pe http://localhost:5000 (sau portul specificat).
Frontend
Navighează la directorul frontend:
cd ../frontend 
# sau dintr-o nouă fereastră de terminal:
# cd cale/catre/Territory-Constructor/frontend
Use code with caution.
Bash
Instalează dependențele:
npm install
# sau
# yarn install
Use code with caution.
Bash
Configurează variabilele de mediu (opțional, pentru dezvoltare locală):
Poți crea un fișier .env în directorul frontend/.
Adaugă următoarea vari
│ │ ├── territoryController.js
│ │ └── userController.js
│ ├── middleware/
│ │ └── authMiddleware.js # Middleware pentru protejarea rutelor
│ ├── models/ # Schemele Mongoose pentru MongoDB
│ │ ├── Territory.js
│ │ └── User.js
│ ├── routes/ # Definirea rutelor API
│ │ ├── territoryRoutes.js
│ │ └── userRoutes.js
│ ├── .env.example # Exemplu de fișier pentru variabile de mediu
│ ├── package.json
│ └── server.js # Fișierul principal de pornire al serverului backend
│
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ └── _redirects # Regula de redirectare pentru Netlify SPA
│ ├── src/
│ │ ├── api/
│ │ │ └── api.js # Configurația Axios și funcțiile API
│ │ ├── components/ # Componente React reutilizabile
│ │ ├── pages/ # Componente React pentru fiecare pagină/rută
│ │ ├── App.js
│ │ ├── index.js
│ │ └── ...
│ ├── .env.example # Exemplu pentru variabilele de mediu React
│ └── package.json
│
├── .gitignore
└── README.md
## Cerințe Preliminare

*   [Node.js](https://nodejs.org/) (versiunea 18.x sau mai recentă recomandată)
*   npm (Node Package Manager) sau Yarn
*   Un cont MongoDB Atlas pentru baza de date
*   (Opțional) Conturi pe Render și Netlify pentru deploy

## Instalare și Rulare Locală

1.  **Clonează repository-ul:**
     Yarn
*   MongoDB instalat local SAU un cont MongoDB Atlas pentru o bază de date cloud.
*   Git

### Clonare Repository
```bash
git clone https://github.com/20DPop/Territory-Constructor.git
cd Territory-Constructor
Use code with caution.
Configurare Backend
Navighează în directorul backend:
cd backend
Use code with caution.
Bash
Instalează dependențele:
npm install
# sau
# yarn install
Use code with caution.
Bash
Creează un fișier .env în directorul backend/. Acesta va conține variabilele de mediu.
Adaugă următoarele variabile și completează-le cu valorile tale:
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/territory-constructor # Sau URI-ul tău de la MongoDB Atlas
JWT_SECRET=cheiaTaSecretaPentruJWT
Use code with caution.
Env
Pentru MONGODB_URI, dacă folosești Atlas, înlocuiește cu connection string-ul tău.
Pentru JWT_SECRET, alege un string aleatoriu și complex.
Configurare Frontend
Navighează în directorul frontend (dintr-un nou terminal sau cd ../frontend):
cd frontend
Use code with caution.
Bash
Instalează dependențele:
npm install
# sau
# yarn install
Use code with caution.
Bash
(Opțional) Creează un fișier .env în directorul frontend/ pentru a specifica URL-ul backend-ului local:
REACT_APP_API_URL=http://localhost:5000
Use code with caution.
Env
Acesta va fi folosit de process.env.REACT_APP_API_URL în dezvoltare locală. Dacă nu creezi acest fișier, aplicația frontend va folosi fallback-ul definit în src/api.js (care este probabil tot http://localhost:5000).
Rulare Locală
Pornește Backend-ul:
În terminalul din directorul backend/, rulează:
npm start
Use code with caution.
Bash
Serverul backend ar trebui să ruleze pe http://localhost:5000 (sau portul specificat în .env).
Pornește Frontend-ul:
Într-un nou terminal, din directorul frontend/, rulează:
npm start
Use code with caution.
Bash
Aplicația React ar trebui să se deschidă automat în browser, de obicei la http://localhost:3000.
Acum ar trebui să poți interacționa cu aplicația local.
Structura Proiectului
Territory-Constructor/
├── backend/
│   ├── config/             # Configurare (ex: db.js)
│   ├── controllers/        # Logica pentru rute (ex: userController.js, territoryController.js)
│   ├── middleware/         # Middleware-uri Express (ex: authMiddleware.js)
│   ├── models/             # Scheme Mongoose (ex: User.js, Territory.js)
│   ├── routes/             # Definiții rute Express (ex: userRoutes.js, territoryRoutes.js)
│   ├── .env                # Variabile de mediu (NU SE URCA PE GIT)
│   ├── package.json
│   └── server.js           # Fișierul principal al serverului
├── frontend/
│   ├── public/             # Fișiere statice (ex: index.html, _redirects)
│   ├── src/
│   │   ├── components/     # Componente React reutilizabile
│   │   ├── pages/          # Componente React pentru pagini (ex: LoginPage.js, MapPage.js)
│   │   ├── services/       # Servicii (ex: api.js pentru cereri HTTP)
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── .env                # Variabile de mediu pentru frontend local (NU SE URCA PE GIT)
│   └── package.json
├── .gitignore              # Fișiere și foldere ignorate de Git
└── README.md
Use code with caution.
Deploy
Frontend-ul este publicat pe Netlify. Orice push pe ramura main declanșează un nou build și deploy. Variabilele de mediu (cum ar fi REACT_APP_API_URL pentru adresa backend-ului) sunt configurate în interfața Netlify.
Backend-ul este publicat pe Render. Orice push pe ramura main declanșează un nou build și deploy. Variabilele de mediu (cum ar fi MONGODB_URI, JWT_SECRET, PORT) sunt configurate în interfața Render.
Baza de date este găzduită pe MongoDB Atlas. Este necesară configurarea IP Whitelist în Atlas pentru a permite conexiuni de la serverele Render.
Contribuții
Contribuțiile sunt binevenite! Te rog să deschizi un issue mai întâi pentru a discuta ce ai dori să schimbi. Asigură-te că actualizezi testele corespunzător.
(Opțional: Adaugă ghid de contribuție mai detaliat dacă este cazul).
Licență
Acest proiect este licențiat sub Licența MIT - vezi fișierul LICENSE (dacă adaugi unul) pentru detalii.
**Ce ar trebui să personalizezi/adaugi:**

*   **Tehnologii Folosite:** Completează cu orice alte biblioteci sau unelte importante pe care le-ai folosit.
*   **Funcționalități:** Adaugabilă dacă vrei să specifici URL-ul backend-ului local:
        ```env
        REACT_APP_API_URL=http://localhost:5000 
        ```
        (Dacă nu specifici, codul din `api.js` va folosi `http://localhost:5000` ca fallback).

4.  **Pornește serverul de dezvoltare frontend:**
    ```bash
    npm start
    # sau
    # yarn start
    ```
    Aplicația frontend ar trebui să se deschidă în browser, de obicei la `http://localhost:3000`.

## Variabile de Mediu (pentru Producție)

Asigură-te că următoarele variabile de mediu sunt configurate pe platformele de deploy:

**Backend (pe Render):**

*   `NODE_ENV=production`
*   `PORT` (setat automat de Render)
*   `MONGODB_URI` (string-ul de conexiune la clusterul tău MongoDB Atlas de producție)
*   `JWT_SECRET` (o cheie secretă puternică și unică)

**Frontend (pe Netlify):**

*   `REACT_APP_API_URL` (URL-ul public al backend-ului tău de pe Render, de ex., `https://territory-constructor.onrender.com`)

## Deploy

*   **Backend-ul** este publicat pe **Render**. Se face auto-deploy la fiecare push pe ramura `main`.
*   **Frontend-ul** este publicat pe **Netlify**. Se face auto-deploy la fiecare push pe ramura `main`, cu build-ul configurat corespunzător. Este necesar un fișier `_redirects` în directorul de publicare al frontend-ului cu conținutul `/* /index.html 200` pentru a gestiona corect rutarea SPA.

## Contribuții

Contribuțiile sunt binevenite! Te rog să deschizi un issue pentru a discuta despre modificările pe care ai dori să le faci sau să faci un Pull Request.

## Licență

Acest proiect este licențiat sub [NUME_LICENȚĂ] (de ex., MIT, Apache 2.0). Vezi fișierul `LICENSE` pentru detalii. (Dacă nu ai un fișier `LICENSE`, ar fi bine să adaugi unul).
