import { Router } from 'express';
import { UniqueConstraintError } from 'sequelize';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Emanuel',
      email: 'teste@teste.com',
      password_hash: 'asdasd',
    });
    res.json(user);
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      return res.status(400).send('Usuário já cadastrado.');
    }
    throw error;
  }
});

export default routes;
