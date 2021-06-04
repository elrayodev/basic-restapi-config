const { response, request } = require( 'express' );
const res = response;
const req = request;

const usersGet = ( req, res ) => {

    const query = req.query;

    res.json({
        msg: 'get API - controller',
        query
    });
};

const usersPut = ( req, res ) => {

    const { id } = req.params.id;

    if( res.status(400) ) {
        res.json({
            msg: 'CLIENT ERRROR'
        });
    } else {
        res.json({
            msg: 'put API - controller'
        });
    }

};

const usersPost = ( req, res ) => {

    const body = req.body;

    res.json({
        msg: 'post API - controller',
        body
    });
};

const usersDelete = ( req, res ) => {
    res.json({
        msg: 'delete API - controller'
    });
};

const usersPatch = ( req, res ) => {
    res.json({
        msg: 'patch API - controller'
    });
};

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}