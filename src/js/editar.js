import Api from "./api.js"

class Editar{

    static listarClientes(array){
        const selectClientes = document.querySelector("select")

        array.forEach(cliente =>{
            const card = Editar.criarCard(cliente)
            selectClientes.append(card)
        })   
    }

    static criarCard(cliente){
        const optionCliente = document.createElement("option")

        optionCliente.value = cliente.id
        optionCliente.innerText = cliente.nome

        return optionCliente
    }

    static buscarClientes(){
        const formBuscar = document.getElementById("formBuscar")
        const select = document.querySelector("select")

        formBuscar.addEventListener("submit", async (event) =>{
            event.preventDefault()
            const clienteId = select.value
        const retorno = await Api.pesquisarClientes(clienteId)
        Editar.listarClientePesquisado(retorno)
        })  
    }
    
    static listarClientePesquisado(objCliente){
        const inputNome = document.querySelector(".nome")
        const inputEmail = document.querySelector(".email")
        const inputIdade = document.querySelector(".idade")
        const inputCpf = document.querySelector(".cpf")
        const inputSexo = document.querySelector(".sexo")
        const inputCep = document.querySelector(".cep")
        const inputRua = document.querySelector(".rua")
        const inputNumero = document.querySelector(".numero")
        const inputBairro = document.querySelector(".bairro")
        const inputCidade = document.querySelector(".cidade")
        const inputEstado = document.querySelector(".estado")

        inputNome.value = objCliente.nome
        inputEmail.value = objCliente.email
        inputIdade.value = objCliente.idade
        inputCpf.value = objCliente.cpf
        inputSexo.value = objCliente.sexo
        inputCep.value = objCliente.endereco.cep
        inputRua.value = objCliente.endereco.rua
        inputNumero.value = objCliente.endereco.numero
        inputBairro.value = objCliente.endereco.bairro
        inputCidade.value = objCliente.endereco.cidade
        inputEstado.value = objCliente.endereco.estado
    }

    static capturarAlteracoes(){
        const select = document.querySelector("select")
        const form = document.getElementById("formEditar")
        const inputNome = document.querySelector(".nome")
        const inputEmail = document.querySelector(".email")
        const inputIdade = document.querySelector(".idade")
        const inputCpf = document.querySelector(".cpf")
        const inputSexo = document.querySelector(".sexo")
        const inputCep = document.querySelector(".cep")
        const inputRua = document.querySelector(".rua")
        const inputNumero = document.querySelector(".numero")
        const inputBairro = document.querySelector(".bairro")
        const inputCidade = document.querySelector(".cidade")
        const inputEstado = document.querySelector(".estado")

        form.addEventListener("submit", async (event) =>{
            event.preventDefault()
            const clienteId = select.value
            const data = {
                "nome": inputNome.value,
                "email": inputEmail.value,
                "idade": inputIdade.value,
                "cpf": inputCpf.value,
                "sexo": inputSexo.value,
                "endereco": {
                "cep": inputCep.value,
                "rua": inputRua.value,
                "numero": inputNumero.value,
                "bairro": inputBairro.value,
                "cidade": inputCidade.value,
                "estado": inputEstado.value, 
            }
          
        } 
        const retorno = await Api.editarCliente(clienteId,data)
        })
    }
    }
   

Editar.listarClientes(await Api.listarClientes())

Editar.buscarClientes()

Editar.capturarAlteracoes()

export default Editar
