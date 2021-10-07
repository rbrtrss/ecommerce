import passport from 'passport';
import passportLocal from 'passport-local';
import Usuarios from '../models/usuario.model';

const LocalStrategy = passportLocal.Strategy;

const strategyOptions = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
};

const login = async (req, email, password, done) => {
  const usuario = await Usuarios.findOne(email);

  if (!usuario) {
    return done(null, false, { msg: 'No existe el usuario' });
  }

  if (!usuario.isValidPassword(password)) {
    return done(null, false, { msg: 'Password invalido' });
  }
  return done(null, usuario);
};

const signup = async (req, email, password, done) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return done(null, false);
    }
    const usuario = await Usuarios.findOne(email);
    if (usuario) {
      return done(null, false, { msg: 'Usuario ya Existente' });
    } else {
      const usuarioData = { email, password };
      const nuevoUsuario = await Usuarios.add(usuarioData);
      return done(null, nuevoUsuario);
    }
  } catch (error) {
    done(error);
  }
};

passport.use('login', new LocalStrategy(strategyOptions, login));
passport.use('signup', new LocalStrategy(strategyOptions, signup));

export default passport;
