/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearUsuario: function (req, res) {
    var parametros = req.allParams();
    var nuevoUsuario = {
      nombre: parametros.nombre,
      apellido: parametros.apellido,
      password: parametros.password
    };
    Usuario.create(nuevoUsuario)
      .exec(function (error, usuarioCreado) {
        if (error) {
          return res.serverError(error);
        }
        else {
          return res.redirect("/");
        }
      });
  }
};

