/*
  OBJETO DOS IMÓVEIS
  @filipe
*/

function Faxineira()
{
  /*
    PARA MANTER OS ATRIBUTOS PRIVADOS NÃO SE COLOCA O THIS A FRENTE
    @filipe
  */
  var id;
  var nome;
  var cpf;
  var sexo;
  var email;
  var fone;
  var endereco;
  var qualificacao;
  var lat;
  var lng;
  var status = true;
  var tipo = 'faxineira';

  /*
    PARA TRANSFORMAR UMA FUNÇÃO EM UM MÉTODO PÚBLICO DO OBJETO
    DEVE-SE COLOCAR UM THIS A FRENTE
    @filipe
  */
  this.setId = setId;
  this.setNome = setNome;
  this.setCpf = setCpf;
  this.setSexo = setSexo;
  this.setEmail = setEmail;
  this.setFone = setFone;
  this.setEndereco = setEndereco;
  this.setQualificacao = setQualificacao;
  this.setLat = setLat;
  this.setLng = setLng;
  this.setStatus = setStatus;
  this.setJson = setJson;

  this.getId = getId;
  this.getNome = getNome;
  this.getCpf = getCpf;
  this.getSexo = getSexo;
  this.getEmail = getEmail;
  this.getFone = getFone;
  this.getEndereco = getEndereco;
  this.getQualificacao = getQualificacao;
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
   
  function setCpf(_cpf){
    cpf = _cpf;
  }
   
 function setSexo(_sexo) {
    sexo = _sexo;
  }
   
 function setEmail(_email) {
      email = _email;
  }

 function setFone(_fone) {
      fone = _fone;
  }
  
  function setEndereco(_endereco) {
    endereco = _endereco;
  }
  function setQualificacao(_qualificacao) {
    qualificacao = _qualificacao;
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
    cpf = _json.cpf;
    sexo = _json.sexo;
    email = _json.email;
    fone = _json.fone;
    endereco = _json.endereco;
    qualificacao = _json.qualificacao;
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
   
  function getCpf(){
    return cpf;
  }
   
 function getSexo() {
    return sexo;
  }
   
 function getEmail() {
      return email;
  }

 function getFone() {
      return fone;
  }
  
  function getEndereco() {
    return endereco;
  }
  function getQualificacao() {
    return qualificacao;
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
    jsonUser.cpf = cpf;
    jsonUser.sexo = sexo;
    jsonUser.email = email;
    jsonUser.fone = fone;
    imovel.endereco = endereco;
    imovel.qualificacao = qualificacao;
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

faxineiras = [];
faxineiraASerCompartilhada = '';
faxineiraASerSolicitada = '';
var distanciaF, tempoF;