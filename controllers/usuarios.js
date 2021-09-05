const {response,request} = require('express');

const usuariosGet = (req = request, res = response)  => {
   
    const query = req.query;

    res.json({
        nombre: 'API get controller',
        query
    } );
};

const usuariosPut = (req, res = response)  => {
    
    res.json({
        nombre: 'API put controller'
    } );
};

const usuariosPost = (req, res = response)  => {

    const {nombre, edad} = req.body;

    res.json({
        detalle: 'API post controller',
        nombre,
        edad
    } );
};

const usuariosDelete = (req, res = response)  => {
    res.json({
        nombre: 'API delete controller'
    } );
};

const usuariosPatch = (req, res = response)  => {
    res.json({
        nombre: 'API patcj controller'
    } );
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}