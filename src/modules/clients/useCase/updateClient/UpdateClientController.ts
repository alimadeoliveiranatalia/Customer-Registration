import { Request, Response } from 'express';
import { UpdateClientUseCase } from './updadeClientUseCase';

class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}

  handle(request: Request, response: Response): Response {
    const { noCliente } = request.params;
    const upClient = this.updateClientUseCase.execute(noCliente);
    return response.json(upClient);
  }
}
export { UpdateClientController };
