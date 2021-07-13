import expressAsyncHandler from "express-async-handler"


export const addToCart = expressAsyncHandler(async (req, res) => {
    const addTo = Cart.find()
})

export const getCart = (req, res) => {
    res.send("hello")
    console.log("hello")
}