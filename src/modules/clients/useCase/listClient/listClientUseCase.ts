import { Client } from '../../models/Clients';
import { IClientRepository } from '../../repositories/IClientRepository';

class ListClientUseCase {
  constructor(private clientsRepository: IClientRepository) {}

  execute(): Client[] {
    const clientes = this.clientsRepository.list();
    return clientes;
  }
}
export { ListClientUseCase };
