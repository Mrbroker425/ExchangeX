const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".From select"),
toCurrency = document.querySelector(".To select"),
getButton = document.querySelector("form button");

for (let i=0; i < dropList.length; i++){
    for(currency_code in country_code ){
        //set default
        let selected;
        if(i == 0){
            selected = currency_code == "ZAR" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code == "USD" ? "selected" : "";
        }
        // creating option tag with passing currency codes as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`; 
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target);     
    });
}

function loadFlag(element){
    for (code in country_code){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/w20/${country_code[code]}.jpg`;
        }
    }
}

window.addEventListener("load", ()=>{
    getExchangeRate();
})
getButton.addEventListener("click", e=>{
    e.preventDefault();
    getExchangeRate();
})

const exchangeImg = document.querySelector(".drop-list .ExchangeArrow");
exchangeImg.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});

function getExchangeRate(){
    exchangeRateTxt = document.querySelector(".exchange-rate");
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if (amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/edb8b49f0e56171e782a1376/latest/${fromCurrency.value}`;
    //fetch api response and returning it with parsing into js obj and in another method receiving that obj
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    }).catch(() => {
        exchangeRateTxt.innerText = "Something went wrong";
    });
}