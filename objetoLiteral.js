const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);
  },
};

//user.exibirInfos()

//const exibir = user.exibirInfos
///exibir()

const exibir = function () {
  console.log(this.nome, this.email);
};

const exibirNome = exibir.bind(user)
exibirNome()

                const numeros = [1, ,2, 3,] // aqui é arrow faction
                numeros.forEach((numero) => {
                  console.log(numero)
                })
