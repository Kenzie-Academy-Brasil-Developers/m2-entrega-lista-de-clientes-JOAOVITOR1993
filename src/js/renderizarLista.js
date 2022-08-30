import Api from "./api.js"

class RenderizarListaClientes{
   
    static renderizar(array){
        const ul = document.querySelector(".container")

        array.forEach(cliente => {
            const card = RenderizarListaClientes.criarCard(cliente) 
            ul.append(card)
        })
    }

    static criarCard(cliente){
        const li = document.createElement("li")
        const h2 = document.createElement("h2")
        const divDados = document.createElement("div")
        const h3DadosPessoais = document.createElement("h3")
        const pEmail = document.createElement("p")
        const pIdade = document.createElement("p")
        const pCpf = document.createElement("p")
        const pSexo = document.createElement("p")
        const divEndereco = document.createElement("div")
        
        li.className = "card"
        h2.innerText = cliente.nome
        h3DadosPessoais.innerText = "Dados Pessoais"
        pEmail.innerText = cliente.email
        pIdade.innerText = cliente.idade
        pCpf.innerText = cliente.cpf 
        pSexo.innerText = cliente.sexo

        const h3Endereco = document.createElement("h3")
        const pCep = document.createElement("p")
        const pEstado = document.createElement("p")
        const pCidade = document.createElement("p")
        const pBairro = document.createElement("p")
        const pRua = document.createElement("p")
        const pNumero = document.createElement("p")
        
        h3Endereco.innerText = "Endereço"
        pCep.innerText = cliente.endereco.cep
        pEstado.innerText = cliente.endereco.estado
        pCidade.innerText = cliente.endereco.cidade
        pBairro.innerText = cliente.endereco.bairro
        pRua.innerText = cliente.endereco.rua
        pNumero.innerText = cliente.endereco.numero

        divEndereco.append(h3Endereco, pCep, pEstado, pCidade, pBairro, pRua, pNumero)
        divDados.append(h3DadosPessoais, pEmail, pIdade, pCpf, pSexo)
        
        li.append(h2, divDados, divEndereco)

        return li
    }
}
RenderizarListaClientes.renderizar(await Api.listarClientes())

export default RenderizarListaClientes
































