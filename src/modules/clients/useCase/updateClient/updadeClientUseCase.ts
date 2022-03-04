import { Client } from '../../models/Client';
import { IClientRepository } from '../../repositories/IClientRepository';

interface IRequest {
  client_id: string;
}
class UpdateClientUseCase {
  constructor(private clientsRepository: IClientRepository) {}

  execute({ client_id }: IRequest): Client {
    const client = this.clientsRepository.findById(client_id);
    this.clientsRepository.update(client);
    return client;
  }
}
export { UpdateClientUseCase };
