const axios = require ('axios')

async function ApiDogs(){
    const response = await axios.get('https://fakestoreapi.com/products')

    return response.data
}

test('Verificando se obtém os dados corretamente',async () =>{
    const dados = await ApiDogs();
    expect(dados).toBeDefined();
}) 