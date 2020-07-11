Antes de subir o emulador de Android / iOS, tenha o backend rodando:
```sh
$ docker-compose up
```

Agora suba o Emulador Android / iOS e depois rode os seguintes comandos:

```sh
yarn
react-native start
react-native run-android
```

### Debugging with Reactotron
```sh
# first open Reactotron
$ react-native start
$ react-native run-android
$ adb reverse tcp:9090 tcp:9090 # wait Android Emulator open before run this command
# kill "react-native start" and start again
$ react-native start
# now Reload app with "react-native start": press "r"
```

Now you should see device connected on Reactotron
REF: https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md

## :camera: Screenshots

<h1 align="center">
  <img src="../.github/login-mobile.png" />
  <img src="../.github/agendamentos-mobile.png" />
  <img src="../.github/prestadores.png" />
  <img src="../.github/horarios.png" />
  <img src="../.github/escolhendo-horario.png" />
  <img src="../.github/confirmacao.png" />
  <img src="../.github/perfil.png" />
  <img src="../.github/perfil2.png" />
</h1>
