import { IClientRepository } from '../../repositories/IClientRepository';

class UpdateClientUseCase {
  constructor(private clientsRepository: IClientRepository) {}

  execute({ noCliente }): Client[] {
    const upclients = this.clientsRepository.updade(noCliente);
    return upclients;
  }
}
export { UpdateClientUseCase };
