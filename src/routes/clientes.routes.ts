import { Router } from 'express';
import { createClienteController } from '../modules/clients/useCase/createClient';
import { listClienteController } from '../modules/clients/useCase/listClient';

export const clientsRoutes = Router();

clientsRoutes.post('/', (request, response) => {
  return createClienteController.handle(request, response);
});

clientsRoutes.get('/', (request, response) => {
  return listClienteController.handle(request, response);
});
