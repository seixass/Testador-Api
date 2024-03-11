// 1º metodo

const axios = require ('axios')

async function ApiDogs(){
    const response = await axios.get('https://fakestoreapi.com/products')

    return response.data
}

test('Verificando se obtém os dados corretamente',async () =>{
    const dados = await ApiDogs();
    expect(dados).toBeDefined();
}) 

// 2º metodo

const axios = require('axios')

async function Absolutylb(){
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=maceio&units=metric&appid=8c21584a19c15bb0b57fccb61795c2c1&lang=pt_br')
   
    return response.data
}

test('Verifica se obtém os dados corretamento', async () => {
    const data = await Absolutylb();
    expect(data).toBeDefined();
})
