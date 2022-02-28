import { Client } from '../models/Client';

interface ICreateClientDTO {
  noCliente: string;
  statusCadastral: number;
  icExcluido: boolean;
}
interface IClientRepository {
  findByname(noCliente: string): Client;
  update(noCliente: string): void;
  list(): Client[];
  create({ noCliente, statusCadastral, icExcluido }: ICreateClientDTO): void;
}
export { ICreateClientDTO, IClientRepository };
