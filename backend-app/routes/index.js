const Router = require('express');
const router= new Router();
const flatRouter = require('./route/flatRouter');
const userRouter = require('./route/userRouter');
const typeRouter = require('./route/typeRouter');


router.use('/flats', flatRouter);
router.use('/user', userRouter);
router.use('/type', typeRouter);


module.exports = router;


// router.use('/login')
// router.use('/registration')
// router.use('/flats')
// router.use('/flats/:id')
// router.use('/account/:id')
// router.use('/account/:id/edit')
// router.use('/account/:id/liked-flats')
//
// router.use('/admin/:id')
//
// router.use('/owner/:id')
// router.use('/owner/:id/edit')
// router.use('/owner/:id/flats')
// router.use('/owner/:id/flats/:id')
// router.use('/owner/:id/flats/:id/edit')

