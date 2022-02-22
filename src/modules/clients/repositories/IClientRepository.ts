import { Client } from '../models/Clients';

interface ICreateClientDTO {
  noCliente: string;
  statusCadastral: number;
  dtCadastro: Date;
  icExcluido: boolean;
}
interface IClientRepository {
  list(): Client[];
  create({ noCliente, statusCadastral, icExcluido }: ICreateClientDTO): void;
}
export { ICreateClientDTO, IClientRepository };
