# Developer Shop
## Objetivo

Criar um carrinho de compras de uma loja que vende desenvolvedores baseado no exemplo fornecido.
![Imgur](http://i.imgur.com/8NPz67T.png)

## Tarefas e priorização

Priorize a lista de tarefas abaixo explicando os motivos da priorização de cada uma delas. Então, escolha de três a seis tarefas para implementar.

* 1) Popular a lista de desenvolvedores a partir de uma organização do GitHub.
    - Tarefa primordial e requisito primário para o funcionamento da aplicação.
* 2) Determinar o preço do desenvolvedor a partir de informações do seu perfil do GitHub, como por exemplo: followers, repos, stars, commits, etc.
    - Tarefa primordial e requisito primário para o funcionamento da aplicação.
* 3) Substituir os inputs de texto por uma lista de desenvolvedores com nome, foto, preço e um botão de "Adicionar ao carrinho".
    - Após concluídas as tarefas acima, a lista de desenvolvedores está pronta para ser apresentada ao usuário.
* 4) Melhorar a visualização do desenvolvedor no carrinho mostrando mais informações.
    - Seguindo a sequência de passos do usuário no fluxo principal (Adicionar o desenvolvedor ao carrinho de compras -> Visualizar o desenvolvedor no carrinho de compras), apresentar o carrinho de compras com informações relevantes do desenvolvedor.
* 5) Permitir a escolha de quantidade de horas contratadas de cada desenvolvedor.
    - Seguindo a sequência de passos do usuário no fluxo principal, é necessário possibilitar a escolha da quantidade de horas contratadas.
* 6) Adicionar um botão de "comprar" que leva o usuário a uma página de pedido confirmado.
    - Seguindo a sequência de passos do usuário no fluxo principal, é o botão de compra para finalizar o fluxo e confirmar a compra.
* 7) Criar paginação para a lista de desenvolvedores.
    - Tarefa do fluxo secundário, onde será util em casos de uma grande lista de desenvolvedores.
* 8) Permitir a adição de um cupom de desconto que altera o preço total da compra. Utilize o código "SHIPIT".
    - Tarefa do fluxo secundário, onde será utilizado somente quando o usuário possuir cupom de desconto.

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
