import { Router } from 'express';
import { createClienteController } from '../modules/clients/useCase/createClient';
import { listClienteController } from '../modules/clients/useCase/listClient';
import { updateClientecontroller } from '../modules/clients/useCase/updateClient';

const clientsRoutes = Router();

clientsRoutes.post('/', (request, response) => {
  return createClienteController.handle(request, response);
});

clientsRoutes.get('/', (request, response) => {
  return listClienteController.handle(request, response);
});

clientsRoutes.put('/', (request, response) => {
  return updateClientecontroller.handle(request, response);
});
export { clientsRoutes };
