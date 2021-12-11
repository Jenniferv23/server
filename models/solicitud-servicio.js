const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const requerimientoSchema = new mongoose.Schema({
  peso:{
        type:String,
        require: true
    },
  
   cantidad:{
       type: String
   },
   vehiculo:{
       type: String
   },
   origen:{
    type: String
    },
    destino:{
        type: String
    },
    fecha:{
        type: String
    },
    hora:{
        type: String
    }
    
    }, {timestamps: true}
    
);

module.exports = mongoose.model('requerimiento', requerimientoSchema);
