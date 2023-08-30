let form=document.querySelector("form#form")
form.addEventListener('submit', handleSubmit)
let inputvalue=document.querySelector("input#value-mt")
let selectedCurrency=document.querySelector("select#currency")
let result=document.querySelector("h2#result")
let valueConverter=0
function handleSubmit(e){
    e.preventDefault()

    if(!inputvalue.value || inputvalue<0){
        alert("Escolha algum valor ou valores maiores que zero")
        return
    }
    else if(!selectedCurrency.value){
         alert("Escolha uma moeda")
         return
    }
    converter()
}
function converter(){
    if(selectedCurrency.value === "Euro"){
       valueConverter= inputvalue.value/69.11
       result.innerHTML=valueFormatter("pt","EUR")
    }
    if(selectedCurrency.value === "Dolar"){
        valueConverter= inputvalue.value/63.25
        result.innerHTML=valueFormatter("en-US","USD")
    }
    if(selectedCurrency.value === "Real"){
        valueConverter= inputvalue.value/13.01
        result.innerHTML=valueFormatter("pt-BR","REAL")
    }
    if(selectedCurrency.value === "Rublo"){
        valueConverter= inputvalue.value/0.66
        result.innerHTML=valueFormatter("RUS","RUB")
    }
    if(selectedCurrency.value === "Remimbi"){
        valueConverter= inputvalue.value/8.68
        result.innerHTML=valueFormatter("CNY","RMB")

    }
    inputvalue.value=''

    animateResult()
}
function valueFormatter(locale,currency){
    const value=valueConverter.toLocaleString(`${locale}`, {style:"currency", currency: `${currency}`})
    return `<span>💲</span> ${value} <span>💲</span>` 
    
    animateResult()
}
function animateResult(){
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(-150px)'}    
    ], {duration: 800})
}