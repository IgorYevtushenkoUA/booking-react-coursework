const Router = require('express');
const router= new Router();
const flatRouter = require('./flatRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');


router.use('/flats', flatRouter);
router.use('/user', userRouter);
router.use('/type', typeRouter);

module.exports = router;


// router.use('/login')
// router.use('/registration')
// router.use('/flats')
// router.use('/flats/:id')
// router.use('/client/:id')
// router.use('/client/:id/edit')
// router.use('/client/:id/liked-flats')
//
// router.use('/admin/:id')
//
// router.use('/owner/:id')
// router.use('/owner/:id/edit')
// router.use('/owner/:id/flats')
// router.use('/owner/:id/flats/:id')
// router.use('/owner/:id/flats/:id/edit')

