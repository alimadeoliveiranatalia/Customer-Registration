import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  handle(request: Request, response: Response): Response {
    const { noCliente } = request.body;

    const user = this.createClientUseCase.execute({
      noCliente,
    });

    return response.status(201).json(user);
  }
}
export { CreateClientController };
