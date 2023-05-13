import {getConnection} from "./../database/database";
const getStudents= async (req, res)=> {
    try{
        const connection= await getConnection();
        const result = await connection.query("SELECT * FROM student;");      
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const getStudent= async (req, res)=> {
    try{
        console.log(req.params);
        const {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT * FROM student WHERE id = ?;",id);      
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const addStudents = async (req, res)=> {
    try{
        
        const { id, name, lastname, brithdate, career, avarage } = req.body;
        if(id == undefined || name==undefined || lastname==undefined || brithdate==undefined || career==undefined || avarage==undefined){
            res.status(400).json({message:"Bad Request. Please fill all field."});
        }
        const students = { id, name, lastname, brithdate, career, avarage };
        const connection= await getConnection();
        const result = await connection.query("INSERT INTO student SET ?",students);
        res.json({message: "Student Added"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const deleteStudents= async (req, res)=> {
    try{
        console.log(req.params);
        const {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM student WHERE id = ?;",id);    
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const updateStudents= async (req, res)=> {
    try{
        const {id} = req.params;
        const { name, lastname, brithdate, career, avarage } = req.body;
        if(id == undefined || name==undefined || lastname==undefined || brithdate==undefined || career==undefined || avarage==undefined){
            res.status(400).json({message:"Bad Request. Please fill all field."});
        }
        const student = { id, name, lastname, brithdate, career, avarage };
        const connection= await getConnection();
        const result = await connection.query("UPDATE student SET ? WHERE id = ?;",[student, id]);    
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const methods={
    getStudents,
    getStudent,
    addStudents,
    updateStudents,
    deleteStudents
};
