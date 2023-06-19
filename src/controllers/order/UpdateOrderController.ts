import {Request, Response} from 'express';
import UpdadeOrderService from '../../services/order/UpdateOrderService';

class UpdateOrderController{
    async handle(req: Request, res: Response){
        const {id_pedido} = req.body;

        const updateOrderService = new UpdadeOrderService();

        const pedido = await updateOrderService.execute({id_pedido})
        return res.json(pedido);
    }
}
export default UpdateOrderController;