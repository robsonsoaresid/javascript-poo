const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email,);
  },
};

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  nascimento: "2024-01-01",
  role: "admin",
  ativo: true,
  criarCurso: function () {
    console.log("curso criado");
  },
};

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//Durante nossos estudos de JavaScript é normal toparmos com os protótipos de duas formas diferentes, através da propriedade __proto__ ou do objeto prototype que vemos em todos os objetos. Afinal, qual a diferença entre eles e quando se usa cada um?

//Para entender melhor essa diferença, vamos testar alguns códigos:

let user1 = {
 perfil: 'estudante'
}

let estudante = {
 nome: 'juliana'
}

Object.setPrototypeOf(estudante, user1)

//No trecho acima, definimos dois objetos, com propriedades diferentes, e estabelecemos que o objeto user será usado como protótipo para o objeto estudante. Podemos testar esse código direto no terminal:

console.log(estudante.nome) //'Juliana'
console.log(estudante.perfil) // 'estudante'

//É possível acessar __proto__ de estudante, porém, para isso, devemos copiar o código acima e executá-lo no console do navegador, pois o módulo console do Node.js funciona de uma forma um pouco diferente e não vai acessar essa propriedade

// Em resumo:
// __proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido para aquele objeto

// prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos objetos.

//Você também pode ter notado que alguns objetos também possuem uma propriedade chamada [[Prototype]]. Esta é uma propriedade interna que cada instância de um objeto possui e que aponta (como um ponteiro) para a propriedade prototype da função que está sendo usada como protótipo. Quando criamos um novo objeto usando new, a propriedade prototype do construtor (como vimos acima) é “linkada” à essa propriedade [[Prototype]] da nova instância criada