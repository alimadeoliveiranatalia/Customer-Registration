import { IClientRepository } from '../../repositories/IClientRepository';

class UpdateClientUseCase {
  constructor(private clientsRepository: IClientRepository) {}

  execute(noCliente: string): void {
    const nameAlreadyExist = this.clientsRepository.findByname(noCliente);
    if (!nameAlreadyExist) {
      throw new Error('Client not found!');
    }
    this.clientsRepository.update(noCliente);
  }
}
export { UpdateClientUseCase };
