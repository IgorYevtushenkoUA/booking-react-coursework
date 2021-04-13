const Router = require('express');
const router= new Router();
const flatRouter = require('./route/flatRouter');
const userRouter = require('./route/userRouter');
const typeRouter = require('./route/typeRouter');


router.use('/flats', flatRouter);
router.use('/user', userRouter);
router.use('/type', typeRouter);

module.exports = router;


// route.use('/login')
// route.use('/registration')
// route.use('/flats')
// route.use('/flats/:id')
// route.use('/client/:id')
// route.use('/client/:id/edit')
// route.use('/client/:id/liked-flats')
//
// route.use('/admin/:id')
//
// route.use('/owner/:id')
// route.use('/owner/:id/edit')
// route.use('/owner/:id/flats')
// route.use('/owner/:id/flats/:id')
// route.use('/owner/:id/flats/:id/edit')

