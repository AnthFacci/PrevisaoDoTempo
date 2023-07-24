//API 
const apiKey =  "4f377bbd4e0b762a45111b2baf916666"
const apiContryUrl = "https://flagsapi.com/"

//VARIÁVEIS 
 const digitedCity = document.getElementById('digitedCity')
 const btnSearch = document.getElementById('btnSearch')
 const city = document.getElementById('city')
 const temperatura = document.getElementById('C')
 const condicao = document.getElementById('condicao')
 const umidade = document.getElementById('umidade')
 const vento = document.getElementById('vento')
 const iconCondition = document.getElementById('iconCondition')
 const flagIcon = document.getElementById('band')
 const secondDisplay = document.getElementById('secondDisplay')

//Funçoes
const consultarAPI =  async (cidadeDigitada) => {
 
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeDigitada}&units=metric&appid=${apiKey}&lang=pt_br`
    
    const res = await fetch(apiLink)
    const data = await res.json()

    console.log(data)
    return data
}


const mostrarTempo = async(cidadeDigitada) =>{
    const info = await consultarAPI(cidadeDigitada)
    city.innerHTML = info.name
    temperatura.innerHTML = parseInt(info.main.temp);
    flagIcon.setAttribute("src", `https://flagsapi.com/${info.sys.country}/flat/64.png`);
    umidade.innerHTML = info.main.humidity
    vento.innerHTML = info.wind.speed
    condicao.innerHTML = info.weather[0].description
    iconCondition.setAttribute("src", `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`);
    console.log(iconCondition)
    console.log(flagIcon)
    
}




 //Eventos
 btnSearch.addEventListener('click', (cidadeDigitada) =>{
    cidadeDigitada.preventDefault()
    const pesquisar = digitedCity.value     
     cidadeDigitada = pesquisar
     secondDisplay.classList.remove('hide')
     mostrarTempo(cidadeDigitada)

 })




 