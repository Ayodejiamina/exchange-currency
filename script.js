let pick1 = document.getElementById('pick1');
let pick2 = document.getElementById('pick2');
let input1 =document.getElementById('conums1');
// let input2 =document.getElementById('conums2');

let rateEL = document.getElementById('rate');
let swap = document.getElementById('enter');
 
function calculate(){
    const select1 = pick1.value;
    const select2 = pick2.value
   fetch(' https://v6.exchangerate-api.com/v6/f4f585979e20c1b002a18e28/latest/'+pick1.value)
    .then(res => res.json())
    .then((data) =>{
        // 
        const rate = data.conversion_rates[select2]
        rateEL.innerHTML =`1 ${select1} = ${rate} ${select2}`;
        // input2.innerHTML = (input1.value * rate).toFixed(2);
        

});
}


pick1.addEventListener('change',calculate);
pick2.addEventListener('change',calculate);
input1.addEventListener('input',calculate);
// input2.addEventListener('input',calculate);

swap.addEventListener('click', () =>{
    const temp = pick1.value;
    pick1.value = pick2.value;
    pick2.value = temp;
    calculate();
})

calculate()









