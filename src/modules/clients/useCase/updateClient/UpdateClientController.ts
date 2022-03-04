import { Request, Response } from 'express';
import { UpdateClientUseCase } from './updadeClientUseCase';

class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const client = this.updateClientUseCase.execute(id);
    return response.json(client);
  }
}
export { UpdateClientController };
