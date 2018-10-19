const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    const Produto = require('../api/produto/produtoService')
    Produto.register(router, '/produto')

    const Categoria = require('../api/categoria/categoriaService')
    Categoria.register(router, '/categoria')
}