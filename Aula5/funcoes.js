function aplicarEfeitos(corFundo,caminhoImagem){
    document.bgColor=corFundo;
    alert(caminhoImagem);
    document.images[0].src=caminhoImagem;
}