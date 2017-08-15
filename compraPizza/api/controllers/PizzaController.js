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
      nombre: parametros.nombre,
      tamanio: parametros.tamanio,
      id_Usuario: parametros.id_Usuario
    };
    Usuario.create(nuevaPizza)
      .exec(function (error, pizzaCreada) {
        if (error) {
          return res.serverError(error);
        }
        else {
          return res.redirect("/");
        }
      });
  }
};

