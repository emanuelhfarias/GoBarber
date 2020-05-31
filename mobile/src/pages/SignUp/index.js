import React from 'react';
import { Image } from 'react-native';

import Logo from '../../assets/logo.png';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={Logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-email"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
          />

          <SubmitButton onPress={() => {}}>Criar Conta</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possui uma conta?</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
