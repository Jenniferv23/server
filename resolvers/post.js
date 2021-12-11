const requerimiento = require('../models/solicitud-servicio')

// querys

const nuevaSolicitud = async (_, args) => {
    console.log(args, 'mutation');
 if(args.input.peso.trim === '') throw new Error('diner is required')
    // create the dish object
    const solicitudNueva  =  await new requerimiento({
        ...args.input

    }).save()
 
    return solicitudNueva
};

const solicitudes = async (_, args) => {
  
    return await requerimiento.find({
})
}

module.exports = {
    Query:{
        solicitudes
    },

    Mutation:{
        nuevaSolicitud
    }
};