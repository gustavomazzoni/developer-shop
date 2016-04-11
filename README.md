# Developer Shop
## Goal

Create a REST API that pulls the Apple App Store top lists from US and provides additional metadata information for each of the ids returned via Apple lookup API together with a simple aggregation functionality.

## User Stories

* As a user I want to provide category id and monetization(Free, Paid, Grossing) as an input value and receive top 200 apps ordered by rank position together with the metadata information as a json result (Metadata infor described in Apple Lookup API section)
* As a user I want to input category id, monetization and rank position and receive app data for single application together with the metadata as json result
* As a user I want to provide category id, monetization and receive top publishers rank by the amount of apps available in the top list as a json result. (publisher id, publisher name, rank, number of apps, app names in array)
* As a user I want to be able to access the resources mentioned in points above via REST API

## Guidelines

* Rspec to Test the application (Rspec)
* Minimize the http request calls to api where possible
* Consider as many possible inputs as possible and test for edge cases
* Develop the application using the best software development practices Quality of the code is the key.

## Solução

Para a solução, foi criado uma single page application em [React](https://facebook.github.io/react/) no "client side" chamando o "server side", desenvolvido em [Node](https://nodejs.org/), através de API REST por Ajax e guardando os dados no banco de dados [MongoDB](https://www.mongodb.org/).

Ao iniciar o server side application, é carregada a lista de desenvolvedores a partir de membros de uma Organização do GitHub (neste caso a organização Pinterest), determinado o preço de cada desenvolvedor com cálculo baseado em informações do seu perfil (regra adotada: peso 1 para número de repos, peso 2 para número de followers e peso 3 para número de stars e forks recebidos em seus forks) e finalmente é salvo esta lista de desenvolvedores com seus respectivos preços no banco de dados. Desta forma, as chamadas ao GitHub são feitas uma única vez, desonerando a rede e o processamento do server.

No client side, ao carregar os componentes React é feita uma única chamada ao server para carregar a lista de desenvolvedores e popular os componentes da view. A partir deste momento, a maior parte das interações na tela são feitas no client side sem comunicação com o server (adicionar e remover desenvolvedor do carrinho, escolher quantidade de horas a ser contratada para cada desenvolvedor). Sendo assim, o estado do carrinho é guardado no client side, mais especificamente no local storage (browser do usuário).

Esta solução foi adotada, pois a lista de membros de uma organização do github é alterada com baixa frequência, da mesma forma as informações do perfil de cada membro. Portanto, seria desnecessário uma solução mais pesada com comunicações frequêntes ao GitHub para carregar tais informações e processar o cálculo para determinar o preço de cada desenvolvedor.

Foi optado por manter o estado do carrinho de compras no client side, pois o usuário não está logado no sistema sendo inviável guardar o carrinho do usuário para acessos em diferentes browsers. Desta forma, é mantido do lado do cliente novamente desonerando o servidor e fazendo com que a interação seja mais rápida.

Módulo utilizados no client side:
* React
* React-DOM
* Babel
* Webpack

Módulo utilizados no server side:
* NodeJS
* ExpressJS
* MongoDB
* Mongoose

## Próximas versões
* Criação de Testes automatizados.
* Mover lógicas de negócio dos componentes React utilizando arquitetura [Flux](https://facebook.github.io/flux/docs/overview.html)
* Criação de configuração para recarregar lista de membros do GitHub em determinada frequência e atualizar no banco de dados da aplicação.

## Executando a aplicação localmente
### Install
Install MongoDB
```sh
$ brew install mongodb
```
Run mongo db server
```sh
$ mongod
```
Install project dependencies
```sh
$ npm install
```
### Run
Then build and start the project
```sh
$ npm build
$ npm start
```

Open on your browser:
http://localhost:8080/

## Demo
To see the project running on production (Heroku and MongoDB Labs), go to this link:
http://mazzoni-developer-shop.herokuapp.com/
