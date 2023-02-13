
let listaDeEstudantes = [
  {
      nomeDoEstudante: 'Murilo',
      primeiraNota: 6,
      segundaNota: 9,
      terceiranota: 8
  },

  {
      nomeDoEstudante: 'Evaldo',
      primeiraNota: 5,
      segundaNota: 3,
      terceiranota: 6
  },

  {
      nomeDoEstudante: 'Raphael',
      primeiraNota: 8,
      segundaNota: 8,
      terceiranota: 9
  }        
]

function calculaMedia(primeiraNota,segundaNota,terceiranota) {
let media = (primeiraNota + segundaNota + terceiranota) / 3
return media
}
 

for(let estudante of listaDeEstudantes){
  mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota, estudante.terceiranota)
  let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

  alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
${aprovadoOuNao}`)
}       