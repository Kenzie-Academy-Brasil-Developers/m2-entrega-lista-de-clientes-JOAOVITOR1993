
class Api {
    
    static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes"
    static headers = {"Content-Type": "application/json"}

    static async listarClientes(){
        const data = await fetch(this.baseUrl, {
            method:"GET",
            headers: this.headers
        })
        .then(resp=> resp.json())
        .then(resp => resp)
        .catch(err => console.log(err))

        return data
    }
  
    static async cadastrarCliente(data){
        const novoCliente = await fetch(this.baseUrl, {
            method:"POST",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(resp=> resp.json())
        .then(resp => {
            window.location.assign("../../index.html")
            return resp
        })
        .catch(err => console.log(err))

        return novoCliente
    }

    static async pesquisarClientes(id){
        const pesquisa = await fetch(`${this.baseUrl}/${id}`, {
            method:"GET",
            headers: this.headers
        })
        .then(resp=> resp.json())
        .then(resp => resp)
        .catch(err => console.log(err))

        return pesquisa
    }

    static async editarCliente(id, data){
        const editar = await fetch(`${this.baseUrl}/${id}`, {
            method:"PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(resp=> resp.json())
        .then(resp => {
            window.location.assign("../../index.html")
            return resp
        })
        .catch(err => console.log(err))

        return editar
    }

    static async deletarCliente(id){
        const deletar = await fetch(`${this.baseUrl}/${id}`, {
            method:"DELETE",
            headers: this.headers
        })
        .then(resp=> resp.json())
        .then(resp => resp)
        .catch(err => console.log(err))

        return deletar
    }

}

export default Api
