import { Router } from 'express';
import { clientsRoutes } from './clientes.routes';

const router = Router();
router.use('/clients', clientsRoutes);
export { router };
