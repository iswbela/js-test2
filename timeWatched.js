var assinante = [true,false]
var minutosAssistidos = [60,120]

var totalAssinantes = assinante.length

const usuarios = []
var actualWatchedMin = []

//se assinante for true minutos assistidos *2
for(var i = 0; i<totalAssinantes; i++){
  usuarios.push([assinante[i],Math.ceil(minutosAssistidos[i]/60)]) // /60 pois sao em horas
  
  
  if(usuarios[i].includes(true)===true){
    actualWatchedMin.push(usuarios[i][1]*2)
  }else{
    actualWatchedMin.push(usuarios[i][1])
  }
}
//soma de todos os valores
const sum = actualWatchedMin.reduce((partialSum, a) => partialSum + a, 0);

var porcentagem = []
for(var i = 0; i < totalAssinantes; i++){
  porcentagem.push(Math.round(((actualWatchedMin[i]/sum)*100)))
}
//sum = 240
//120/240=0.5*100=50%
console.log(porcentagem)
