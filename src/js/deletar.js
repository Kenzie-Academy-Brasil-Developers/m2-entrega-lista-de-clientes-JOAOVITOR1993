import Api from "./api.js"

class Deletar{

    static listarClientes(array){
        const selectClientes = document.querySelector("select")

        array.forEach(cliente =>{
            const card = Deletar.criarCard(cliente)
            selectClientes.append(card)
        })   
    }

    static criarCard(cliente){
        const optionCliente = document.createElement("option")

        optionCliente.value = cliente.id
        optionCliente.innerText = cliente.nome

        return optionCliente
    }

    static deletarClientes(){
        const formBuscar = document.getElementById("buscar")
        const select = document.querySelector("select")

        formBuscar.addEventListener("submit", async (event) =>{
            event.preventDefault()
            const clienteId = select.value
            
            const retorno = await Api.deletarCliente(clienteId)
            window.location.assign("../../index.html")
        })  
    }

}

Deletar.listarClientes(await Api.listarClientes())

Deletar.deletarClientes()

export default Deletar