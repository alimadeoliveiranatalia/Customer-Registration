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

  create({ noCliente }: ICreateClientDTO): Client {
    const client = new Client();
    Object.assign(client, {
      noCliente,
      statusCadastral: 1,
      dtCadastro: new Date(),
      icExcluido: false,
    });
    this.clients.push(client);
    return client;
  }

  list(): Client[] {
    return this.clients;
  }

  static update(receivedCliente: Client): Client {
    const client = receivedCliente;
    client.noCliente = 'new name';
    return client;
  }

  findById(id: string): Client | undefined {
    const Id = this.clients.find(client => client.id === id);
    return Id;
  }

  findByName(name: string): Client | undefined {
    const Name = this.clients.find(client => client.noCliente === name);
    return Name;
  }
}
export { ClientRepository };
