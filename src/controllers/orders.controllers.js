import {db} from "../config/data.js"
export async function createOrders(req,res){

    const {clientId,cakeId,quantity,totalPrice} = req.body
 const createdAt = new Date()
    try{    

        const clientexists = await db.query(`SELECT * FROM clients WHERE id = '${clientId}'`)
        
        const cakeexists = await db.query(`SELECT * FROM cakes WHERE id = '${cakeId}'`)
        
        if(!cakeexists || !clientexists) res.sendStatus(404)


        await db.query(
    `INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice","createdAt") VALUES($1, $2, $3, $4,$5)`,
    [clientId, cakeId, quantity, totalPrice, createdAt]
  );

        res.sendStatus(201)

    }catch (error) {
        
        return res.status(500).send(error.message);
      }

}

export async function getOrders(req,res){
    try{   
        const order = await db.query( `SELECT json_agg(clients) AS client, json_agg(cakes) AS cake, orders.id AS "orderId", "createdAt", quantity, "totalPrice" 
        FROM orders JOIN clients ON orders."clientId" = clients.id 
        JOIN cakes ON orders."cakeId" = cakes.id GROUP BY orders.id`)

        if(order.rows.length === 0) return res.sendStatus(404)



        res.status(200).send(order)
    }catch (error) {
        
        return res.status(500).send(error.message);
      }
}

export async function getOrdersById(req,res){
        const id = req.params.id

    try {

        const order = await db.query( `SELECT json_agg(clients) AS client, json_agg(cakes) AS cake, orders.id AS "orderId", "createdAt", quantity, "totalPrice" 
        FROM orders JOIN clients ON orders."clientId" = clients.id 
        JOIN cakes ON orders."cakeId" = cakes.id WHERE orders.id = ${id} GROUP BY orders.id`)

        if(order.rows.length === 0) return res.sendStatus(404)



        res.status(200).send(order)




    }catch (error) {
        
        return res.status(500).send(error.message);
      }

}