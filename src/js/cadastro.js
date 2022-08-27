import Api from "./api.js"

class Cadastrar{

    static cadastroCliente(){

        const form = document.getElementById("form")
        if(form){
            const inputNome = document.querySelector(".nome")
            const inputEmail = document.querySelector(".email")
            const inputSexo = document.querySelector(".sexo")
            const inputIdade = document.querySelector(".idade")
            const inputCpf = document.querySelector(".cpf")
            const inputCep = document.querySelector(".cep")
            const inputRua = document.querySelector(".rua")
            const inputNumero = document.querySelector(".numero")
            const inputBairro = document.querySelector(".bairro")
            const inputCidade = document.querySelector(".cidade")
            const inputEstado = document.querySelector(".estado")
        
            form.addEventListener("submit", async (event) =>{
                event.preventDefault()
                const data = {
                    "nome": inputNome.value,
                    "email": inputEmail.value,
                    "sexo": inputSexo.value,
                    "idade": inputIdade.value,
                    "cpf": inputCpf.value,
                    "endereco": {
                    "estado": inputEstado.value,
                    "cidade": inputCidade.value,
                    "bairro": inputBairro.value,
                    "numero": inputNumero.value,
                    "rua": inputRua.value,
                    "cep": inputCep.value
                }
            }
        
          const retorno = await Api.cadastrarCliente(data)
            })
        }
       
    }
    
}
Cadastrar.cadastroCliente()

export default Cadastrar


