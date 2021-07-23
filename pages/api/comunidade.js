import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequest(request, response) {
    const token = "1322edd827ba14699fc83cbb408c10"
    const client = new SiteClient(token);

    if(request.method === 'POST') {

        const registroCriado = await client.item.create({
            itemType: "980928", // ID do Model, Comunnities fornecida pelo "Dato"
            ...request.body,
        })

        response.json({
            dados: 'Registro criado',
            registroCriado: registroCriado
        
        })
        return;
    } 

    if(request.method === 'GET') {
        const allrecords = await client.items.all({
            itemType: "980928",
            query: `{ allcommunities }`

        })

        response.json({
            dados: 'Getting items from CMS Dato',
            records: allrecords
        })
        return 
    }

  
    response.status(404).json({
        message: 'Ainda não temos nada no GET, só no POST'
    })

}