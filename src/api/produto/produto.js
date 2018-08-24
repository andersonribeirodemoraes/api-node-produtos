const restful = require('node-restful')
const mongoose = restful.mongoose

const produtoSchema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, min:0, require: true }
})

module.exports = restful.model('Produto', produtoSchema)