//funções nomeadas
function logar(usuario, senha) {
    alert('logado com a função nomeada!')
    alert('Olá,' + usuario)

}
logar("Kabral", 4002)











//funções anônimas
const conectar = function(usuario, senha){
    alert('Logado com a função anônima!')
    alert('Olá,' + usuario)
}
conectar("joilson", "bah1319")





//arrow functions ou funções flecha

const colorir = () => {
    alert("função flecha em ação!")
}
colorir()// execução da flecha 