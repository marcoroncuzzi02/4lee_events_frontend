1. installo il progetto da terminale con il comando `npm create vite@latest . -- --template react`
2. faccio `npm i` e `npm run dev`
3. pulisco il progetto dagli svg nella cartella `public` e negli `assets`
4. elimino il css e svuoto il file `App.jsx`
5. installo bootstrap con `npm i bootstrap` e lo importo globalmente nel main con `import 'bootstrap/dist/css/bootstrap.min.css'`
6. per la gestione delle rotte in React installo il pacchetto `npm i react-router-dom`
7. creo la cartella components per andarci poi a inserire i componenti
8. creo il file `Header.jsx` e lo inserisco dentro a components
9. scrivo l'header, in export default function header
10. importo l'header in app.jsx
11. scrivo il css per l'header e creo la cartella css in src
12. nell'`Header.jsx` importo `NavLink` da `react-router-dom`
13. metto un `<NavLink to={'/'}>` che contiene il tag `<a></a>`
14. creo la caartella `layouts` in `src` 
15. creo dentro a `layouts` il file `DefaultLayout.jsx` 
16. scrivo la funzione `export default function DeaultLayout()` dentro a `DefaultLayout.jsx` 
17. importo `Header` da `components` e `Outlet` da `reacrt-router-dom`
18. nel `return` della funzione importo `Header` e metto `Outlet` dentro al tag `<main></main>` 
19. creo la cartella `pages` in `src`
20. creo `HomePage.jsx` e `EventPage.Jsx`
21. in entrambe creo la `export default function()`
22. per il momento nel `return` scrivo solamente `<h1> Home Page </h1>` e `<h1> Event Page </h1>`
23. in `App.jsx` importo `HomePage` e `EventPage`
24. importo `{Routes, Route, BrowserRouter}` da `'react-router-dom'`
25. dentro al return di App metto il `BrowserRouter` che contiene le `Routes` che contiene le singole `Route`
26. dentro un' unica `route` con `element={ <DefaultLayout/> }` metto `<HomePage/>` e `<EventPage/>` dentro due `route` distinte
27. dentro a `HomePage` uso la `path='/'` e dentro `EventPage` uso la `path='/event/:id'` 
28. 