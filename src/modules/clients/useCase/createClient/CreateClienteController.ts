import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  handle(request: Request, response: Response): Response {
    const { noCliente, statusCadastral, icExcluido } = request.body;

    this.createClientUseCase.execute({
      noCliente,
      icExcluido,
      statusCadastral,
    });

    return response.status(201).send();
  }
}
export default CreateClientController;
