import {Request, Response} from 'express'
import {RemoveItemService} from '../../services/order/RemoveItemService'


class RemoveItemController{
    async handle (req: Request, res: Response){
        
        const itemRemover = req.query.item as string;

        const removeItem = new RemoveItemService();

        const itemPedido = await removeItem.execute({itemRemover});

        return res.json(itemPedido);
    }
    }


export {RemoveItemController}