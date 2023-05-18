const frm = document.querySelector("form")
const resp = document.querySelector('h3')


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const temperatura = Number(frm.inTemperatura.value)
    const tempConhecida = frm.inTempConhecida.value
    const converterPara = frm.inConverterPara.value

    let resultadoTemperatura

    if (tempConhecida === 'celsius'){ //if para o primeiro select (temperatura conhecida)
        if (converterPara === 'fahrenheit'){ //if para o segundo select (converter para)

          //condição se o resultado der em fahrenheit
            resultadoTemperatura = (temperatura * 9/5) + 32
            if (resultadoTemperatura < 71.60){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá bem fresquim!`
            }
            else if (resultadoTemperatura >= 71.60 && resultadoTemperatura <= 82.40){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá um sereno só o mi!`
            }
            else if (resultadoTemperatura > 82.40 && resultadoTemperatura <= 91.40){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá queimando o quengo!`
            }
            else if (resultadoTemperatura >91.40){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá pegando fogo!`
            }

            //condição se o resultado der em kelvin
        }else if (converterPara === 'kelvin'){//if para o segundo select (converter para)
            resultadoTemperatura = temperatura + -273.15

            if (resultadoTemperatura < -251.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá bem fresquim!`
            }
            else if (resultadoTemperatura >= -251.15 && resultadoTemperatura <= -245.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá um sereno só o mi!`
            }
            else if (resultadoTemperatura > -245.15 && resultadoTemperatura <=-240.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá queimando o quengo!`
            }
            else if (resultadoTemperatura >-240.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá pegando fogo!`
            }

            //condição se o resultado der em celsius
        }else{
            resultadoTemperatura = temperatura //condição se os dois select forem o mesmo valor
            if (resultadoTemperatura < 22){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá bem fresquim!`
            }
            else if (resultadoTemperatura >= 22 && resultadoTemperatura <= 28){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá um sereno só o mi!`
            }
            else if (resultadoTemperatura > 28 && resultadoTemperatura <= 33){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá queimando o quengo!`
            }
            else if (resultadoTemperatura > 33){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá pegando fogo!`
            }
        }

    }else if (tempConhecida === 'fahrenheit'){//if para o primeiro select (temperatura conhecida)
        if (converterPara === 'celsius'){//if para o segundo select (converter para)

          
            resultadoTemperatura = (temperatura - 32) * 5/9
            if (resultadoTemperatura < 22){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá bem fresquim!`
            }
            else if (resultadoTemperatura >= 22 && resultadoTemperatura <= 28){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá um sereno só o mi!`
            }
            else if (resultadoTemperatura > 28 && resultadoTemperatura <= 33){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá queimando o quengo!`
            }
            else if (resultadoTemperatura > 33){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá pegando fogo!`
            }


        }else if (converterPara === 'kelvin'){
            resultadoTemperatura = (temperatura - 32) * 5/9 + 273.15
            if (resultadoTemperatura < -251.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá bem fresquim!`
            }
            else if (resultadoTemperatura >= -251.15 && resultadoTemperatura <= -245.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá um sereno só o mi!`
            }
            else if (resultadoTemperatura > -245.15 && resultadoTemperatura <=-240.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá queimando o quengo!`
            }
            else if (resultadoTemperatura >-240.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá pegando fogo!`
            }
        }else{
            resultadoTemperatura = temperatura
            if (resultadoTemperatura < 71.60){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá bem fresquim!`
            }
            else if (resultadoTemperatura >= 71.60 && resultadoTemperatura <= 82.40){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá um sereno só o mi!`
            }
            else if (resultadoTemperatura > 82.40 && resultadoTemperatura <= 91.40){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá queimando o quengo!`
            }
            else if (resultadoTemperatura >91.40){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá pegando fogo!`
            }
            
        }

    }else{
        if (converterPara === 'celsius'){
            resultadoTemperatura = temperatura - 273.15

            if (resultadoTemperatura < 22){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá bem fresquim!`
            }
            else if (resultadoTemperatura >= 22 && resultadoTemperatura <= 28){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá um sereno só o mi!`
            }
            else if (resultadoTemperatura > 28 && resultadoTemperatura <= 33){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá queimando o quengo!`
            }
            else if (resultadoTemperatura > 33){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá pegando fogo!`
            }
        }else if (converterPara === 'fahrenheit'){
            resultadoTemperatura = (temperatura - 273.15) * 9/5 +32

            if (resultadoTemperatura < 71.60){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá bem fresquim!`
            }
            else if (resultadoTemperatura >= 71.60 && resultadoTemperatura <= 82.40){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá um sereno só o mi!`
            }
            else if (resultadoTemperatura > 82.40 && resultadoTemperatura <= 91.40){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá queimando o quengo!`
            }
            else if (resultadoTemperatura >91.40){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá pegando fogo!`
            }
        }else{
            resultadoTemperatura = temperatura

            if (resultadoTemperatura < -251.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá bem fresquim!`
            }
            else if (resultadoTemperatura >= -251.15 && resultadoTemperatura <= -245.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá um sereno só o mi!`
            }
            else if (resultadoTemperatura > -245.15 && resultadoTemperatura <=-240.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá queimando o quengo!`
            }
            else if (resultadoTemperatura >-240.15){
              resp.innerText =`${resultadoTemperatura.toFixed(2)}°F\nTá pegando fogo!`
            }
        }
    }

    //resp.innerText = `${resultadoTemperatura.toFixed(2)}`//

})
