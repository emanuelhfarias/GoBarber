<h1 align="center">
  <img alt="GoBarber" title="GoBarber" src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67" width="123px" />
</h1>


<h3 align="center">
  :rocket: [Bootcamp GoStack#10] GoBarber
</h3>

## Projeto
GoBarber é um projeto desenvolvido durante o Bootcamp GoStack#10 da RocketSeat. Tem como objetivo a criação de uma aplicação para a gestão de um salão de beleza.

## Screenshots
<h1 align="center">
  <img src=".github/login.png" height="400px" />
  <img src=".github/agendamentos.png" height="400px" />
</h1>

### Algumas __features__
* Agendamento de clientes com prestadores de serviços
* Envio de email de cancelamento de um agendamento
* Sistema de notificação para os prestadores de serviços informando sobre os novos agendamentos.
* Horários disponíveis de um prestador de serviço.
* Autenticação (JWT) de clientes e prestadores de serviços.
* Upload de avatar

### 1) Instalando Dependências
```sh
git clone ...
cd GoBarber
yarn
```

### 2) Variáveis de ambiente
```
cp .env.example .env
```

### 3) Subindo dependências com Docker
Sobe Postgres, Mongo, Redis e BeeQueue
```sh
mkdir db
sh dependencies.sh
```

### 4) Rodando migração e criando usuário Admin
```sh
yarn sequelize db:migrate
yarn sequelize db:seed:all
```

### 5) Subindo a aplicação
```sh
yarn dev
```

### Algumas tecnologias utilizadas:
* Sistema de notificações com MongoDB
* Envio de email usando Filas com Redis
* Error Tracking com Sentry
* PostgresQL
* Express
* BeeQueue

### TODO
* Colocar _insomnia button_ no README
* Uma wiki no GitHub explicando as rotas
