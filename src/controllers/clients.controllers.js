import {db} from '../config/data.js'
export async function createClient(req,res){
    const {name,address,phone} = req.body
    
    try{
        await db.query(`INSERT INTO clients (name,address,phone) VALUES($1,$2,$3)`
        ,[name,address,phone])

        res.sendStatus(201)
    }catch (error) {
        
        return res.status(500).send(error.message);
      }

}

export async function  getClientOrder(req, res){
    const id = req.params.id

    try{
       const order = await db.query(
            `SELECT orders.id AS "orderId", "createdAt", quantity, "totalPrice", cakes.name AS "cakeName"
            FROM orders JOIN cakes ON orders."cakeId" = cakes.id 
              WHERE orders."clientId" = ${id};`,  
          );

          if(order.rows.length === 0) return res.sendStatus(404)

        res.status(201).send(order)
    }catch (error) {
        
        return res.status(500).send(error.message);
      }
}