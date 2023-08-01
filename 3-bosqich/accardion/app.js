const steps = document.querySelectorAll(".step");
const description = document.querySelectorAll(".description")
for(let i=0; i < steps.length; i++){
    steps[i].addEventListener('click',function () {
        for(let i=0; i < steps.length; i++){
            steps[i].classList.remove("active")
            description[i].classList.remove("active")
        }
        steps[i].classList.add("active")
        description[i].classList.add("active")
        steps[i].addEventListener('click',function () {
            for(let i=0; i < steps.length; i++){
                steps[i].classList.remove("active")
                description[i].classList.remove("active")
            }
        })
        steps[i].classList.add("active")
        description[i].classList.add("active")
    })
}