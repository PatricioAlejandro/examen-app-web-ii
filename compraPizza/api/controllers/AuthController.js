/**
 * Created by patriciochavez on 8/14/17.
 */
module.exports = {
  login: function (req, res) {
    var parametros = req.allParams();
    var pruebaUsuario = {
      nombre: parametros.nombre
    };
    Usuario.findOne(pruebaUsuario).exec(function (err, usuarioEncontrado) {
      if (err)
        return res.serverError(err);
      if (usuarioEncontrado){
        if(parametros.password === usuarioEncontrado.password){
          req.session.usuarioSeguro = usuarioEncontrado
          return res.view("comprarpizza",{user:usuarioEncontrado});
        }else{
          return res.serverError(err);
        }
      }

    })
  },
  logout: function (req, res) {
    req.session.usuarioSeguro = undefined;
    return res.view('homepage');
  }
};
