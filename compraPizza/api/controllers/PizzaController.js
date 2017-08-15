/**
 * PizzaController
 *
 * @description :: Server-side logic for managing Pizzas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearPizza: function (req, res) {
    var parametros = req.allParams();
    var nuevaPizza = {
      tipo: parametros.tipo,
      tamanio: parametros.tamanio,
      ingrediente1: parametros.ingrediente1,
      ingrediente2: parametros.ingrediente2,
      ingredienteEspecial: parametros.ingredienteEspecial,
      precio: parametros.precio,
      id_Usuario: parametros.id_Usuario
    };
    Pizza.create(nuevaPizza)
      .exec(function (error, pizzaCreada) {
        if (error) {
          return res.serverError(error);
        }
        else {
          Usuario.find().populate('pizzas').exec(function (error, usuariosEncontrados) {
            if (error) {
              return res.serverError(error);
            } else {
              return res.view("resumen",{pizza:pizzaCreada});
            }
          })
        }
      });
  }
};

