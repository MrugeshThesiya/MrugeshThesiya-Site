const form = document.querySelector('form')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<div>BMI : ${bmi}</div>`
    if(bmi < 18.6)
    {
        results.appendChild(document.createTextNode("You are Under Weight."))
    }
    else if (bmi < 24.9)
    {
        results.appendChild(document.createTextNode("You are in the Normal Range."))
    }
    else{
        results.appendChild(document.createTextNode("You are Overweight ."))
    }
})