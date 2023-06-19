import { Response, Request } from "express";
import { EndOrderService } from "../../services/order/EndOrderService";

class EndOrderController {
  async handle(req: Request, res: Response) {
    const id_pedido = req.query.id_pedido as string;
    const endOrderService = new EndOrderService();
    const order = await endOrderService.execute({ id_pedido });
    return res.json(order);
  }
}

export { EndOrderController };