import { Client } from '../../models/Client';
import { IClientRepository } from '../../repositories/IClientRepository';

interface IRequest {
  noCliente: string;
}
class CreateClientUseCase {
  constructor(private clientsRepository: IClientRepository) {}

  execute({ noCliente }: IRequest): Client {
    const user = this.clientsRepository.create({
      noCliente,
    });
    return user;
  }
}
export { CreateClientUseCase };
