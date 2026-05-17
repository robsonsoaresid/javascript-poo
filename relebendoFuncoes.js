// Relenbrando tipos de função
// A primeira versão, mais "clássica", é muito parecida com outras linguagens:
function soma(num1, num2) {
 return num1 + num2;
}
// É a chamada "declaração de função".

// A segunda forma atribui a função a uma variável, funcionalidade que não é tão comum em outras linguagens:
const soma = function(num1, num2) {
 return num1 + num2;
}
// Chamamos essa forma de "expressão de função".

// A terceira e última forma é a arrow fuction ou "função de seta", caracteriazada pelo operador => :
const soma = (num1, num2) => {
 return num1 + num2;
}
// Ou no caso de blocos de código com apenas uma linha, podemos omitir o 'return' e as chaves {} :
const soma = (num1, num2) => num1 + num2;
// Bem mais curto

// E quais são as diferenças entre elas, alé do thia?
// A primeira diferença entre as três formas é um pouco mais tórica. Função criadas como declaração recebem um idetificador (ou seja. um nome), e funções criada como expressão são consideradas anônimas-estas funções são atribuidas a varáveis e é através dssas variáveis que conseguimos chama-las.

//Na prática, a diferença se dá no contexto do carregamento do código. Declarações de função têm seu código lido antes da execução de qualquer instrução, pois o interpretador “puxa” para as primeiras linhas do arquivo todas as variáveis e todas as declarações de função, deixando seus códigos e dados “carregados” para, aí sim, começar a executar os códigos. A esta ação se dá o nome de ”hoisting”, que significa algo como “içar”, pois as funções e variáveis são “içadas” para o topo do arquivo e lidas primeiro.

//Já as expressões de função, que são anônimas, não passam pelo processo de hoisting e têm seu conteúdo interpretado apenas no momento da execução. Assim, o interpretador (seja o Node.js ou um navegador) não consegue executar a função sem ter lido seu conteúdo antes.

//Por exemplo, o código abaixo (uma declaração de função) executa normalmente:
console.log(soma(1, 1)) //2

//é possível executar a função antes de declará-la no código
function soma(num1, num2) {
 return num1 + num2;
}

//Porém o código abaixo (uma expressão de função) não executa:

console.log(soma(1, 1)) //erro

//ReferenceError: Cannot access 'soma' before initialization
const soma = function(num1, num2) {
 return num1 + num2;
}