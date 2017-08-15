/**
 * Pizza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tipo: {
      type: "string",
      enum: ["delgada", "gruesa"],
      defaultsTo: "delgada"
    },
    tamanio: {
      type: "string",
      enum: ["mediana", "personal", "familiar"],
      defaultsTo: "personal"
    }
    ,
    ingrediente1: {
      type: "string"
    },
    ingrediente2: {
      type: "string"
    },
    ingredienteEspecial: {
      type: "string"
    },
    precio: {
      type: "float"
    }
    ,
    id_Usuario: {
      model: "Usuario",
      required: true
    }
  }
}
;

