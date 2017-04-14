/*
  OBJETO DOS IMÓVEIS
  @filipe
*/

function Imovel()
{
  /*
    PARA MANTER OS ATRIBUTOS PRIVADOS NÃO SE COLOCA O THIS A FRENTE
    @filipe
  */
  var nome = "";
  var quantidadeDeComodos = "";
  var lat;
  var lng;

  /*
    PARA TRANSFORMAR UMA FUNÇÃO EM UM MÉTODO PÚBLICO DO OBJETO
    DEVE-SE COLOCAR UM THIS A FRENTE
    @filipe
  */
  this.setNome = setNome;
  this.setQtdComodos = setQuantidadeDeComodos;
  this.setLat = setLat;
  this.setLng = setLng;

  this.getNome = getNome;
  this.getQtdComodos = getQuantidadeDeComodos;
  this.getLat = getLat;
  this.getLng = getLng;

  function setNome(_nome){
    nome = _nome;
  }
   
  function setQuantidadeDeComodos(_qtd){
    quantidadeDeComodos = _qtd;
  }
   
  function setLat(_lat) {
    lat = _lat;
  }
   
  function setLng(_lng) {
      lng = _lng;
  }

  function getNome(_nome){
    return nome;
  }
   
  function getQuantidadeDeComodos(_qtd){
    return quantidadeDeComodos;
  }
   
  function getLat(_lat) {
    return lat;
  }
   
  function getLng(_lng) {
      return lng;
  }
}
