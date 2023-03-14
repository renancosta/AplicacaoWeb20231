function aplicarEfeitos(corFundo,caminhoImagem){
    document.body.style.backgroundColor=corFundo;
    caminhoImagem = caminhoImagem.replace("C:\\fakepath\\","");
    document.images[0].src=caminhoImagem;
}