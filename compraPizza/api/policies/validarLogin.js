module.exports = function(req, res, next) {
  if(req.session.usuarioSeguro){
    return next() //Tienes permiso
  }else{
    return res.forbidden("Acceso Denegado") //Redirigirle al error 403!
  }

};
