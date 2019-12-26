const gitHubBtn = document.querySelector("#gitHubBtn");

gitHubBtn.addEventListener("click", (e) => {
    window.location.href = "https://github.com/AlmoGSIntel"
})

const InfoBoxes = document.querySelectorAll('.Info');


InfoBoxes.forEach((info)=>{
    info.parentElement.addEventListener("mouseenter", (e) => {
        info.classList.add('moveUp');
    });
    info.parentElement.addEventListener("mouseleave", (e) => {
        info.classList.remove('moveUp');

    });

})
