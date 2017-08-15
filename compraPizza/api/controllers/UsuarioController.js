/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearUsuario: function (req,res){
    var parametros = req.allParams();
    var nuevoUsuario = {
      nombres: parametros.nombres,
      apellidos: parametros.apellidos,
      password: parametros.password,
      correo: parametros.correo,
      fechaNacimiento: parametros.fechaNacimiento
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
  },
  borrarUsuario: function (req, res) {
    var params = req.allParams();
    sails.log.info("Parametros", params);
    if (req.method == "POST" && params.id) {
      Usuario.destroy({
        id: params.id
      }).exec(function (err, usuarioBorrado) {
        if (err)
          return res.serverError(err);
        return res.redirect("/");
      });
    }
    else {
      return res.badRequest();
    }
  },
  editarUsuario: {},
  listarUsuario: {}
};

