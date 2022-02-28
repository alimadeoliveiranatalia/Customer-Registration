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

  update(noCliente: string): Client {
    const clientIndex = this.clients.findIndex(client => client.id);
    const updadteItem = {
      ...this.clients[clientIndex],
      noCliente,
    };
    this.clients[clientIndex] = updadteItem;
    return updadteItem;
  }

  findByname(noCliente: string): Client {
    const nameClient = this.clients.find((client)=>client.noCliente===noCliente);
    return nameClient;
  }
}
export { ClientRepository };
