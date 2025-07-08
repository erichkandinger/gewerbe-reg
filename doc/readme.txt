
Installation NodeJS und Git f. Versionsverwaltung

Entwicklerverzeichnis

CMD Anlegen einer neuen React-Typscript Applikation

  npm create vite@latest gewerbe-reg -- --template react-ts

  cd gewerbe-reg
  npm install
  npm run dev
  
Visual Studio Code öffnen und Ordner gewerbe-reg auswählen
Terminal öffnen 
  npm run dev
  
React Router installieren
  npm i -D react-router-dom@latest
  
Typescript Typings für React-Router-Dom in dev-dependencies hinzufügen
  "@types/react-router-dom"


Tanstack React Query installieren
  npm install react-query axios  (Fehler??)
  
Package.json
	dependencies
	"@tanstack/react-query": "^5.81.5",
  "@tanstack/react-query-devtools": "^5.81.5"
	
Tanstack React-Query bietet mehr Funktionalität (zB. Caching) gegenüber den neuen React 19 
Hooks (useActionState)


Hash Router mit ein paar Testseiten eingerichtet


KoliBri Public UI
npm i @public-ui/components @public-ui/themes @public-ui/react




