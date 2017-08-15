/**
 * Created by patriciochavez on 8/14/17.
 */
module.exports = {
  login: function (req, res) {
    var parametros = req.allParams();
    var pruebaUsuario = {
      nombre: parametros.nombre
    };
    Usuario.find(pruebaUsuario).exec(function (err, usuarioEncontrado) {
      if (err)
        return res.badRequest();
      if (usuarioEncontrado){
        if(parametros.password == usuarioEncontrado.password){
          req.session.usuario = usuarioEncontrado
          return res.ok();
        }else{
          return res.badRequest();
        }
      }

    })
  }
}
