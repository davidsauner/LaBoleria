import {db} from '../config/data.js'
export async function createCakes(req,res){
    const {name, price, description, image} = req.body

    try {
        console.log("entrou post cakes")

        const cakename = await db.query(`SELECT * FROM cakes WHERE name = '${name}'`)

        if (cakename.rowCount > 0) return res.sendStatus(409)


        await db.query(`INSERT INTO  public.cakes (name, price, description, image) VALUES ($1, $2, $3,$4)`,
        [name, price, description, image]);
        
        res.sendStatus(201)
    } catch (error) {
        console.log("deu erro aqui")
        
        return res.status(500).send(error.message);
      }
}