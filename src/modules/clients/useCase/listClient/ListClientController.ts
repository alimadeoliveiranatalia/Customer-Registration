import { Request, Response } from 'express';
import { ListClientUseCase } from './listClientUseCase';

class ListClientController {
  constructor(private listClientUseCase: ListClientUseCase) {}

  handle(request: Request, response: Response): Response {
    const allClients = this.listClientUseCase.execute();
    return response.json(allClients);
  }
}
export { ListClientController };
