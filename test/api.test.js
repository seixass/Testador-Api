// 1º metodo

const axios = require ('axios')

async function ApiDogs(){
    const response = await axios.get('link api')

    return response.data
}

test('Verificando se obtém os dados corretamente',async () =>{
    const dados = await ApiDogs();
    expect(dados).toBeDefined();
}) 

// 2º metodo

const axios = require('axios')

async function Absolutylb(){
    const response = await axios.get('link api')
   
    return response.data
}

test('Verifica se obtém os dados corretamento', async () => {
    const data = await Absolutylb();
    expect(data).toBeDefined();
})
