import { Client } from '../../models/Client';
import { IClientRepository, ICreateClientDTO } from '../IClientRepository';

class ClientRepository implements IClientRepository {
  private clients: Client[];

  private static INSTANCE: ClientRepository;

  private constructor() {
    this.clients = [];
  }

  public static getInstance(): ClientRepository {
    if (!ClientRepository.INSTANCE) {
      ClientRepository.INSTANCE = new ClientRepository();
    }
    return ClientRepository.INSTANCE;
  }

  create({ noCliente, statusCadastral, icExcluido }: ICreateClientDTO): void {
    const client = new Client();
    Object.assign(client, {
      noCliente,
      statusCadastral,
      dtCadastro: new Date(),
      icExcluido,
    });
    this.clients.push(client);
  }

  list(): Client[] {
    return this.clients;
  }

  update({ noCliente }: Client[]) {
    const nameAlreadyExist = this.clients.find(
      client => client.noCliente === noCliente,
    );

    if (!nameAlreadyExist) {
      return 'Client not found!';
    }
    this.clients.noClient = noCliente;
    return this.clients;
  }
}
export { ClientRepository };
