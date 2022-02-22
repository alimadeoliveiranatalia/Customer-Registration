import { v4 as uuidv4 } from 'uuid';

class Client {
  id?: string;

  statusCadastral!: number;

  noCliente!: string;

  dtCadastro!: Date;

  icExcluido!: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
export default Client;
