import { ClientRepository } from '../../repositories/implementations/ClientRepository';
import { CreateClientController } from './CreateClienteController';
import { CreateClientUseCase } from './CreateClientUseCase';

const clientsRepository = new ClientRepository();
const createClientUseCase = new CreateClientUseCase(clientsRepository);
const createClienteController = new CreateClientController(createClientUseCase);
export { createClienteController, createClientUseCase };
