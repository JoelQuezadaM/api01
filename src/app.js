import express from "express";
import { pool } from "./db.js";

const app=express();
 app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Respuesta desde el inicio')
})

app.get('/mostrar',async(req,res)=>{
    // res.send('estamos en mostrar')
    const [result]=await pool.query('select * from clientes')
    res.send(result)
})
app.get('/mostrar/:id',async(req,res)=>{
    const { id }=req.params;
    // res.send('estamos en mostrar')
    console.log(req.params)
    const [result]=await pool.query('select * from clientes where idclientes =?',[id])
    res.send(result)
})

app.post('/usarios:id',(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    res.send('dentro de indentificar usuario')
})

app.listen(2000)
console.log('servidor iniciado en el puerto 2000')