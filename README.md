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


## Install
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
Then build and start the project
```sh
$ npm build
$ npm start
```

Open on your browser:
http://localhost:8080/

## Demo
To see the project running on production, go to this link:
http://mazzoni-developer-shop.herokuapp.com/
