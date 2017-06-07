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
  var id;
  var nome;
  var qtdComodos;
  var endereco;
  var lat;
  var lng;
  var status = true;
  var tipo = 'imovel';

  /*
    PARA TRANSFORMAR UMA FUNÇÃO EM UM MÉTODO PÚBLICO DO OBJETO
    DEVE-SE COLOCAR UM THIS A FRENTE
    @filipe
  */
  this.setId = setId;
  this.setNome = setNome;
  this.setQtdComodos = setQtdComodos;
  this.setEndereco = setEndereco;
  this.setLat = setLat;
  this.setLng = setLng;
  this.setStatus = setStatus;
  this.setJson = setJson;

  this.getId = getId;
  this.getNome = getNome;
  this.getQtdComodos = getQtdComodos;
  this.getEndereco = getEndereco;
  this.getLat = getLat;
  this.getLng = getLng;
  this.getStatus = getStatus;
  this.getTipo = getTipo;
  this.getJson = getJson;

  function setId(_id){
    id = _id;
  }

  function setNome(_nome){
    nome = _nome;
  }
   
  function setQtdComodos(_qtd){
    qtdComodos = _qtd;
  }
  
  function setEndereco(_endereco) {
    endereco = _endereco;
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

  function setJson(_json){
    id = _json.id;
    nome = _json.nome;
    qtdComodos = _json.qtdComodos;
    endereco = _json.endereco;
    lat = _json.lat;
    lng = _json.lng;
    status = _json.status;
  }

  function getId(){
    return id;
  }

  function getNome(){
    return nome;
  }
   
  function getQtdComodos(){
    return qtdComodos;
  }
  
  function getEndereco() {
    return endereco;
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
  function getJson(callback){
    imovel = {};
    imovel.id = id;
    imovel.nome = nome;
    imovel.qtdComodos = qtdComodos;
    imovel.endereco = endereco;
    imovel.lat = lat;
    imovel.lng = lng;
    imovel.status = status;
    imovel.tipo = tipo;
    if(callback){
      callback.call(null, imovel);
    }else{
      return imovel;
    }
  }
}

imoveis = [];
imovelASerEditado = '';
imovelASerDeletado = '';
imovelASerSolicitado = '';