import { IClientRepository } from '../../repositories/IClientRepository';

interface IRequest {
  noCliente: string;
  statusCadastral: number;
  icExcluido: boolean;
}
class CreateClientUseCase {
  constructor(private clientsRepository: IClientRepository) {}

  execute({ noCliente, statusCadastral, icExcluido }: IRequest): void {
    this.clientsRepository.create({
      noCliente,
      statusCadastral,
      icExcluido,
    });
  }

  doSomethig() {
    return '';
  }
}
export { CreateClientUseCase };
