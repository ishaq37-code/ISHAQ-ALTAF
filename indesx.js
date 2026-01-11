const reumeBtn = document.querySelectorAll(".resume-btn")

reumeBtn.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        const resumeDetails = document.querySelectorAll(".resume-details");

        reumeBtn.forEach(btn => {
            btn.classList.remove("active");
        });
        btn.classList.add("active")
        resumeDetails.forEach(deatils => {
            deatils.classList.remove("active");
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowLeft = document.querySelector(".protfolio-box .navgation .left");
const arrowRight = document.querySelector(".protfolio-box .navgation .right");

let index = 0;

const activeProtfolio = () => {
    const imageSlide = document.querySelector('.image-carasoul .image-slide');
    const protFolio=document.querySelectorAll('.protfolio-details')
    imageSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
 

 protFolio.forEach(details=>{
   details.classList.remove("active")
 });
 protFolio[index].classList.add("active")
};
arrowRight.addEventListener('click', () => {
    if (index < 2) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 2;
        arrowRight.classList.add('disabled')
    }
    activeProtfolio()
})
arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled')
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
        
    }
    activeProtfolio()
})
