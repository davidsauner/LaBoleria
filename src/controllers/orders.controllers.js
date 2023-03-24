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