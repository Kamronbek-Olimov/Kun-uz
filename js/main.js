document.querySelector(".menu-btn").addEventListener("click", ()=>{
    document.querySelector(".menu-links").classList.toggle("active")    
})
document.querySelector(".search-btn").addEventListener("click", ()=>{
    document.querySelector(".search-input").classList.add("active")
})
document.querySelector(".remove-search").addEventListener("click", ()=>{
    document.querySelector(".search-input").classList.remove("active")
})
document.addEventListener("DOMContentLoaded", function () {
    const selectBtn = document.querySelector(".select-bar .select-btn");
    const langs = document.querySelector(".select-bar .langs");
    const currentLang = selectBtn.querySelector("span")
    selectBtn.addEventListener("click", function (e) {
        e.stopPropagation()
        langs.classList.toggle("active");
    })
    langs.querySelectorAll("span").forEach(function (langOption) {
        langOption.addEventListener("click", function (e) {
            currentLang.textContent = this.textContent;
            langs.classList.remove("active");
        });
    })
    document.addEventListener("click", function (e) {
        if (!document.querySelector(".select-bar").contains(e.target)) {
            langs.classList.remove("active");
        }
    });
})