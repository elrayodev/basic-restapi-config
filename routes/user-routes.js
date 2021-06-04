const { Router } = require( 'express' );
const { usersGet, 
        usersPut, 
        usersPost, 
        usersDelete, 
        usersPatch } = require( '../controllers/user-controllers' );

const router = Router();

router.get( '/', usersGet );

// :algo express automaticamente carga dicho param  como propiedad al objeto req
router.put('/:id', usersPut );

router.post('/', usersPost);

router.delete('/', usersDelete );

router.patch('/', usersPatch );

module.exports = router;