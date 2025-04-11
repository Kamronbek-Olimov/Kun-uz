document.querySelector(".menu-btn").addEventListener("click", ()=>{
    document.querySelector(".menu-links").classList.toggle("active")    
})
document.querySelector(".search-btn").addEventListener("click", ()=>{
    document.querySelector(".search-input").classList.add("active")
})
document.querySelector(".remove-search").addEventListener("click", ()=>{
    document.querySelector(".search-input").classList.remove("active")
})