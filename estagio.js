console.log('---------------PRIMEIRA QUESTÃO---------------')
//PRIMEIRA QUESTÃO
function loop() {
  let indice = 13
  let soma = 0
  let k = 0
  
  while (k < indice) {
    k += 1
    soma += k
  }
  
  console.log(`O valor da variável soma é: ${soma}` )
}

loop()

console.log('---------------SEGUNDA QUESTÃO---------------')

// SEGUNDA QUESTÃO
function fibonacci(number) {
  let sequencia = [0, 1]

  for (let index = 0; index < 10; index++) {
    let ultimo = sequencia[sequencia.length - 1]
    let penultimo = sequencia[sequencia.length - 2]
    let proximo = ultimo + penultimo
    sequencia.push(proximo)
  }

  console.log(sequencia)

  if (sequencia.includes(number)) {
    return `O número informado ${number} foi encontrado.`
  } else {
    return `O número informado ${number} não foi encontrado.`
  }
}

console.log(fibonacci(30))

console.log('---------------TERCEIRA QUESTÃO---------------')

// TERCEIRA QUESTÃO
console.log("Não encontrei o arquivo JSON...")

console.log('---------------QUARTA QUESTÃO---------------')

// QUARTA QUESTÃO
function faturamento(){
  let sp = 6783643
  let rj = 3667866
  let mg = 2922988
  let es = 2716548
  let outros = 1984953

  let total = sp+rj+mg+es+outros

  let spPorcentagem = ((sp * 100) / total).toFixed(1)
  let rjPorcentagem = ((rj * 100) / total).toFixed(1)
  let mgPorcentagem = ((mg * 100) / total).toFixed(1)
  let esPorcentagem = ((es * 100) / total).toFixed(1)
  let outrosPorcentagem = ((outros * 100) / total).toFixed(1)
  console.log(`SP porcentagem: `, spPorcentagem + '%')
  console.log(`RJ porcentagem: `, rjPorcentagem + '%')
  console.log(`MG porcentagem: `, mgPorcentagem + '%')
  console.log(`ES porcentagem: `, esPorcentagem + '%')
  console.log(`OUTROS porcentagem: `, outrosPorcentagem + '%')

  console.log(`TOTAL: `, new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total))
}

faturamento()

console.log('---------------QUINTA QUESTÃO---------------')

// QUINTA QUESTÃO
function reverter(palavra){
  let inverso = ''
  
  for (let index = palavra.length - 1; index >= 0; index--) {
    inverso += palavra[index]
  }

  console.log(`O inverso de "${palavra}" é "${inverso}"`)
}

reverter('Hoje é Terça Feira, 03 de Setembro de 2024')