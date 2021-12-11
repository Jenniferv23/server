const {gql} = require('apollo-server-express');

module.exports = gql `

type requerimiento {
    _id: ID!
    peso: String!
    cantidad: String
    vehiculo: String
    origen: String
    destino: String
    fecha: String
    hora: String
}


type Usuario {
  _id:ID!
  nombre: String!,
  idNit: String!
  celular: String
  direccion: String
  fechaNacimiento: String 
  
}

  type Query {
    solicitudes: [requerimiento!]!
        usuarios: [Usuario!]!
        
        }

#input
input solicitudInput {
  peso: String!
  cantidad: String
  vehiculo: String
  origen: String
  destino: String
  fecha: String
  hora: String

}

input UsuarioInput {
  nombre: String!,
  idNit: String!
  celular: String
  direccion: String
  fechaNacimiento: String 
 
}

#mutations
type Mutation {
  nuevaSolicitud(input:solicitudInput!):requerimiento
  nuevoUsuario(input:UsuarioInput!): Usuario!

}
`;