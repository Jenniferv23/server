const usuario = require('../models/usuario')

// querys

const nuevoUsuario = async (_, args) => {
    console.log(args, 'mutation');
 if(args.input.nombre.trim === '') throw new Error('diner is required')
    // create the dish object
    const usuarioNuevo  =  await new usuario({
        ...args.input

    }).save()
 
    return usuarioNuevo
};

const usuarios = async (_, args) => {
  
    return await Usuario.find({
})
}

module.exports = {
    Query:{
        usuarios
    },

    Mutation:{
        nuevoUsuario
    }
};