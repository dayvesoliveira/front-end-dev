import jwt from 'jwt-simple';
import moment  from 'moment';

import UsuarioModel from '../models/usuario';

const segredo = 'seusegredodetoken';

export default class LoginController {


    login(req, res) {
        var username = req.body.usuario || '';
        var password = req.body.senha || '';
        if (username == '' || password == '') {
            return res.status(400).send("You must send the username and the password");
        }
        
        UsuarioModel.findOne({username: username}, function (error, user) {
            var that = this;
            if (error) {
                console.log("Attempt failed to login with " + user.username);
                return res.status(401);
            }
            
            user.verificaSenha( req.body.senha, function( isMatch ) {
                if (!isMatch) {
                    console.log("Attempt failed to login with " + user.username);
                    return res.status(401);
                }
                let expires = moment().add(7,'days').valueOf();
                let token = jwt.encode({ iss: user.id, exp: expires }, segredo);
                console.log(token);
                return res.json({ token : token, expires: expires, user: user.toJSON() });
            });

        });
    }

    validarToken(req, res, next) {
        var token = (req.body && req.body.access_token) 
                     || (req.query && req.query.access_token) 
                     ||  req.headers['x-access-token'];
        //console.log(req.body, req.headers['x-access-token'])
        if (token) {
            try {
                var decoded = jwt.decode(token, segredo);
                    console.log('decodando ' + decoded);
                if (decoded.exp <= Date.now()) {
                    res.status(400).json({error: 'Acesso Expirado, faça login novamente'});
                }
                
                UsuarioModel.findOne({ _id: decoded.iss }, function(err, user) {
                    if(err) res.status(500).json({message: "erro ao procurar usuario do token."})
                    req.user = user;
                    console.log('achei usuario ' + req.user)
                    return next();
                });
                
            } catch (err) {
                return res.status(401).json({message: 'Erro: Seu token é inválido'});
            }
        } else {
            res.status(401).json({message: 'Token não encontrado ou informado'})
        }
    }

}