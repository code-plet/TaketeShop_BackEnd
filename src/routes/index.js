const userRoute = require('./userRouter.js')
const productRoute = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const addressRouter = require('./addressRouter')
const bannerRouter = require('./bannerRouter')
const discountRouter = require('./discountRouter')
const cartRouter = require('./cartRouter')
const commentRouter = require('./commentRouter')
const orderRouter = require('./orderRouter')
function route(app) {
    app.use('/user', userRoute)
    app.use('/product', productRoute)
    app.use('/address', addressRouter)
    app.use('/banner', bannerRouter)
    app.use('/discount', discountRouter)
    app.use('/category', categoryRouter)
    app.use('/cart', cartRouter)
    app.use('/comment', commentRouter)
    app.use('/order', orderRouter)
}
module.exports = route;