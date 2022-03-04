import { Client } from '../models/Client';

interface ICreateClientDTO {
  noCliente: string;
}
interface IClientRepository {
  update(receivedCliente: Client): Client;
  findById(id: string): Client | undefined;
  findByName(name: string): Client | undefined;
  list(): Client[];
  create({ noCliente }: ICreateClientDTO): Client;
}
export { ICreateClientDTO, IClientRepository };
