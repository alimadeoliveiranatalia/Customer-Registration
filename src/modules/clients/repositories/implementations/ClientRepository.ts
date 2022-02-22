import { Client } from '../../models/Clients';
import { IClientRepository, ICreateClientDTO } from '../IClientRepository';

class ClientRepository implements IClientRepository {
  private clients: Client[];

  private constructor() {
    this.clients = [];
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
}
export default ClientRepository;
