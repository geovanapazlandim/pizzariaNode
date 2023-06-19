import prismaClient from "../../prisma";

interface OrderRequest{
    id_pedido: string;
}

class UpdadeOrderService{
    async execute({id_pedido}:OrderRequest){
        const pedido = await prismaClient.pedido.update({
            where:{
                id: id_pedido
            },
            data:{
                rascunho: false,
                status: true
            }
        })
        return pedido;
    }
}

export default UpdadeOrderService;