import { ClientRepository } from '../../repositories/implementations/ClientRepository';
import { ListClientController } from './ListClientController';
import { ListClientUseCase } from './listClientUseCase';

const clientsRepository = ClientRepository.getInstance();
const listClientUseCase = new ListClientUseCase(clientsRepository);
const listClienteController = new ListClientController(listClientUseCase);
export { listClienteController, listClientUseCase };
