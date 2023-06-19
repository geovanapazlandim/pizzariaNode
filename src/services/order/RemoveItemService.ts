import prismaClient from "../../prisma";

interface ItemRequest{
    id_item: string;
}
class RemoveItemService{
    async execute({id_item}:ItemRequest){
        const item = await prismaClient.item.findUnique({
            where:{
                id: id_item
            },
            select:{
                id: true,
                pedido: true,
                produto: true
            }
        })
        if(item.pedido.rascunho !== true){
            throw new Error("Pedido já iniciado, não pode remover itens.")
        }
        const itemRemove = await prismaClient.item.delete({
            where: {id: item.id}
        })
        return itemRemove;
    }
}
export default RemoveItemService;