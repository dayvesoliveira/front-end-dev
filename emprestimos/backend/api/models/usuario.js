import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

let UsuarioSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false,
      match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    }
});

UsuarioSchema.pre('save', function(next) {
  let user = this;
  
  if (!user.isModified('password')) {
      return next();
  }
  bcrypt.genSalt(5, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, null, (err, hash) => {
          if (err) return next(err);
          user.password = hash;
          next();
      });
  });
});


UsuarioSchema.methods.verificaSenha = (password, next) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) return next(err);
        next(isMatch);
    });
};

let UsuarioModel;
try {
    UsuarioModel = mongoose.model('Usuario', UsuarioSchema);
} catch(e){
    UsuarioModel = mongoose.model('Usuario');
}



export default UsuarioModel;