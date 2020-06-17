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
  <img src=".github/login.png" height="300px" />
  <img src=".github/agendamentos.png" height="300px" />
  <img src=".github/mobile.png" height="238px" />
</h1>

### Running

```sh
docker-compose up
```

Abra em seu navegador: `localhost:3000`  
email: `barbeiro@teste.com`  
senha: `123456`  

Se preferir subir o projeto sem o docker-compose, siga o [tutorial da wiki](https://github.com/emanuelhfarias/GoBarber/wiki/Instala%C3%A7%C3%A3o).

### Algumas __features__
* Agendamento de clientes com prestadores de serviços
* Envio de email de cancelamento de um agendamento
* Sistema de notificação para os prestadores de serviços informando sobre os novos agendamentos.
* Horários disponíveis de um prestador de serviço.
* Autenticação (JWT) de clientes e prestadores de serviços.
* Upload de avatar

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
