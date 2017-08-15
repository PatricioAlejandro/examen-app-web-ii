/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: "string",
      unique:true
    },
    apellido: {
      type: "string"
    },
    password: {
      type: "string"
    },
    pizzas:{
      collection:"Pizza",
      via:"id_Usuario"
    }
  }
};

