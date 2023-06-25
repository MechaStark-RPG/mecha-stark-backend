import usersController from './controller/usersController.js';
import turnsController from './controller/turnsController.js';
import authController from './controller/authController.js';

const routes = route => {
  route.get('/', (request, response) => {
    response.send(`Api server in running (${new Date()})`);
  });

  
  route.route('/turns').get(turnsController.getAll).post(turnsController.create);

  route.route('/turns/:id').get(turnsController.getOne);

  route.route('/auth/getWebsocketIp').get(authController.getExternalIp);

  route.route('/auth/login').post(authController.login);

  route.route('/auth/verify').post(authController.verify);

  route.route('/users').get(usersController.getAll).post(usersController.create);

  route.route('/users/:id').get(usersController.getOne).put(usersController.update).delete(usersController.delete);
};

export default routes;
