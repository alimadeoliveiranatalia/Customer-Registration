import { Client } from '../models/Client';

interface ICreateClientDTO {
  noCliente: string;
  statusCadastral: number;
  dtCadastro: Date;
  icExcluido: boolean;
}
interface IClientRepository {
  updade({ noCliente }: Client[]): void;
  list(): Client[];
  create({ noCliente, statusCadastral, icExcluido }: ICreateClientDTO): void;
}
export { ICreateClientDTO, IClientRepository };
