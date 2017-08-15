/**
 * VistaController
 *
 * @description :: Server-side logic for managing Vistas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearUsuario: function (req, res) {
    return res.view('crearusuario');
  },
  comprarPizza: function (req, res) {
    return res.view('comprarpizza');
  }
};

