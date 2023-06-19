import prismaClient from "../../prisma";
import {CreateProductController} from '../../controllers/product/CreateProductController'


interface OrderRequest{
    itemRemover: string;
}

class RemoveItemService{
    
        async execute({itemRemover}:OrderRequest){
    
            const itemPedido = await prismaClient.item.delete({
                where:{
                    id:itemRemover
                }
            })
            return itemPedido;
        }
    
}
export {RemoveItemService}