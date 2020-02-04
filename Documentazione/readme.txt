Guida ufficiale: https://www.typescriptlang.org/

########## Install TypeScript global
npm i -g typescript

########## Install TypeScript local
npm i --save-dev typescript
 
########## inizializza il progetto con il package.json di default
npm init -y 

########## Compilazione globale
tsc <nomefile>.ts
tsc --watch <nomefile>.ts

########## Compilazione locale 
./node_modules/typescript/bin/tsc

########## Inizializza tsconfig.json
tsc --init

########## NVM 
windows:   https://github.com/coreybutler/nvm-windows 
linux/mac: https://www.udemy.com/course/corso-angular-5-typescript-laravel-5-guida-pratica-sviluppo-web/learn/lecture/13485026#announcements
nvm arch
nvm list
nvm install
nvm use

Linux:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

Codewars
https://www.codewars.com/

Stackblitz
https://stackblitz.com/

Angula CLI
https://cli.angular.io/

########## Installazione
npm install -g @angular/cli

ng version

########## Creare app helloworld
ng new helloworld

########## Lanciare ap helloworld
ng serve