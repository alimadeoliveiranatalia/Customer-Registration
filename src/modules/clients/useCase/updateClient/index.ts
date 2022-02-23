import { ClientRepository } from '../../repositories/implementations/ClientRepository';
import { UpdateClientUseCase } from './updadeClientUseCase';
import { UpdateClientController } from './UpdateClientController';

const clientsRepository = ClientRepository.getInstance();
const updateClienteUseCase = new UpdateClientUseCase(clientsRepository);
const updateClientecontroller = new UpdateClientController(
  updateClienteUseCase,
);
export { updateClientecontroller, updateClienteUseCase };
