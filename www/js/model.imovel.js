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
  var nome;
  var quantidadeDeComodos;
  var lat;
  var lng;
  var status = true;
  var tipo = 'imovel';

  /*
    PARA TRANSFORMAR UMA FUNÇÃO EM UM MÉTODO PÚBLICO DO OBJETO
    DEVE-SE COLOCAR UM THIS A FRENTE
    @filipe
  */
  this.setNome = setNome;
  this.setQtdComodos = setQuantidadeDeComodos;
  this.setLat = setLat;
  this.setLng = setLng;
  this.setStatus = setStatus;

  this.getNome = getNome;
  this.getQtdComodos = getQuantidadeDeComodos;
  this.getLat = getLat;
  this.getLng = getLng;
  this.getStatus = getStatus;
  this.getTipo = getTipo;

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

  function setStatus(_status) {
      status = _status;
  }

  function getNome(){
    return nome;
  }
   
  function getQuantidadeDeComodos(){
    return quantidadeDeComodos;
  }
   
  function getLat() {
    return lat;
  }
   
  function getLng() {
      return lng;
  }

  function getStatus() {
      return status;
  }

  function getTipo() {
      return tipo;
  }
}
