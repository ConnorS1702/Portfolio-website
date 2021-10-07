// Navbar JS
const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function() {
    links.classList.toggle("show-links")
})
// Navbar JS End
// Skills Slider Start
let skills = [
    {
        id: 1,
        title: "HTML & CSS",
        img: "https://res.cloudinary.com/dnwrs7jqf/image/upload/v1628637365/Portfolio%20Website%20Assets/html-css_fvaerq.png",
        quote: "My position in a web development team is absolute!",
        paragraph: "I learnt HTML and CSS first on my journey to become a web developer, I learnt how to do mobile first development as seen in this webpage and more!"
    },
    {
        id: 2,
        title: "Javascript",
        img: "https://res.cloudinary.com/dnwrs7jqf/image/upload/v1628608505/Portfolio%20Website%20Assets/Javascript_xt9imd.png",
        quote: "const connorsSuccess = 'Imminent'",
        paragraph: "I learnt JS after I leart HTML and CSS, I was a bit overwhelmed at first however I'm now feelng a lot more confident in how to implement and succeed in bringing a webpage to life!"
    },
    {
        id: 3,
        title: "JS Frameworks",
        img: "https://res.cloudinary.com/dnwrs7jqf/image/upload/v1628639305/Portfolio%20Website%20Assets/React_new_y9rjv5.png",
        quote: "I hope you vue this positively and react accordingly",
        paragraph: "After learning JS I plan on learning some JS frameworks. I have already started with react! Fingers crossed it won't be that long till I have work to show you!"
    },
    {
        id: 4,
        title: ".NET / C#",
        img: "https://res.cloudinary.com/dnwrs7jqf/image/upload/v1628609752/Portfolio%20Website%20Assets/NET_ngc2uh.png",
        quote: "I think I can NET a great skill here",
        paragraph: "After learning some frameworks I hope to better myself even further and move on to .NET development and learn C# and maybe even F#."
    }
]
// Selecting items for Skills slider
const img = document.querySelector("#skills-image")
const title = document.querySelector(".heading")
const quote = document.querySelector("#quote")
const info = document.querySelector("#info")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

// Set starting Item

let currentItem = 0

// Load starting item

window.addEventListener("DOMContentLoaded", function() {
    showSkill(currentItem)
})

// Showing skill based on current item

function showSkill(skill) {
    const item = skills[skill]
    img.src = item.img
    title.textContent = item.title
    quote.textContent = item.quote
    info.textContent = item.paragraph
}

// Next and previous buttons

nextBtn.addEventListener("click", function() {
    currentItem ++
    if (currentItem > skills.length - 1) {
        currentItem = 0
    }
    showSkill(currentItem)
})
prevBtn.addEventListener("click", function() {
    currentItem --
    if (currentItem < 0) {
        currentItem = skills.length -1
    }
    showSkill(currentItem)
})

// Image self moving

// let aboutSlider = [
//     "https://res.cloudinary.com/dnwrs7jqf/image/upload/v1628766307/Portfolio%20Website%20Assets/Ella2_dil10f.jpg", "https://res.cloudinary.com/dnwrs7jqf/image/upload/v1628766260/Portfolio%20Website%20Assets/about_js2lzg.jpg", "https://res.cloudinary.com/dnwrs7jqf/image/upload/v1628770385/Portfolio%20Website%20Assets/Space_yzm6ub.jpg"
// ]

// const img2 = document.querySelector("#about-image")

// let i = 0

// window.addEventListener("DOMContentLoaded", function() {
//     changeImage()
// })

// function changeImage() {
//     img2.src = aboutSlider[i]
//     if (i < aboutSlider.length - 1){
//         i++
//     } else {
//         i = 0
//     }
//     setTimeout("changeImage()", 5000)
// }
// window.onload = changeImage

// Scrolling from side on about and project sections landing page 

const faders = document.querySelectorAll(".fade-in")
const sliders = document.querySelectorAll(".slide-in")

const appearOptions = {
    threshold: 0.5,
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("appear")
            appearOnScroll.unobserve(entry.target)
        }
    }) 
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

// Timeline 

// Button 1

const modalBtn = document.querySelector(".center1")
const modal1 = document.querySelector(".number1")
const closeBtn = document.querySelector("close-btn")

modalBtn.addEventListener("click", function() {
    modal1.classList.add("open-modal")
})
closeBtn.addEventListener("click", function() {
    modal1.classList.remove("open-modal")
})

