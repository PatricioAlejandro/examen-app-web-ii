/**
 * Pizza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:"string"
    },
    tamanio:{
      type:"string",
      enum:["mediana","personal","familiar"],
      defaultsTo:"personal"
    },precio:{
        type:"float"
    },
    id_Usuario:{
      model:"Usuario",
      required:true
    },
    ingredientes:{
      collection:"Ingrediente",
      via:"id_Pizza"
    }


  }
};

