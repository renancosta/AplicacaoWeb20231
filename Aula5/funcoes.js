function aplicarEfeitos(corFundo,caminhoImagem){
    document.bgColor=corFundo;
    caminhoImagem = caminhoImagem.replace("C:\\fakepath\\","");
    document.images[0].src=caminhoImagem;
}