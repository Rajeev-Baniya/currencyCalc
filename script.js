const c1= document.getElementById("currency-one");
const a1= document.getElementById("amount-one");
const c2= document.getElementById("currency-two");
const a2= document.getElementById("amount-two");

const rate1 = document.getElementById("rate");
const swap= document.getElementById("swap");

//fetch exchane rates and update the dom
function calculate(){
    const currency_one = c1.value;
    const currency_two = c2.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rate = data.rates[currency_two];
        // console.log(rate);
        rate1.innerText = `1 ${currency_one} = ${rate} ${currency_two} `;
        a2.value = (a1.value*rate).toFixed(2);
    })
}

//add Event Listeners
c1.addEventListener("change", calculate);
a1.addEventListener("input", calculate);
c2.addEventListener("change", calculate);
a2.addEventListener("input", calculate);

//swapping
swap.addEventListener("click", () => {
    const temp= c1.value;
    c1.value = c2.value;
    c2.value = temp;
    calculate();
})



calculate();






//9b6dad9fd56a61a5c8d237d7
//https://v6.exchangerate-api.com/v6/9b6dad9fd56a61a5c8d237d7/latest/USD