const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const usuarioSchema = new mongoose.Schema({
   
  nombre:{
        type:String,
        require: true
    },
  
    idNit:{
       type: String
   },
   celular:{
       type: String
   },
   direccion:{
    type: String
    },
    
    }, {timestamps: true}
    
);

module.exports = mongoose.model('usuario', usuarioSchema);
