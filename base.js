let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
    logoSpan.forEach((span,idx) => {
      setTimeout(()=>{
        span.classList.add('active')
        }, 700+(idx+1)*200);
    });

    setTimeout(()=>{
    logoSpan.forEach((span,idx)=>{
        setTimeout(()=>{
        span.classList.remove('active');
        span.classList.add('fade');
            }, (idx+1)*50)
        })
    },2800);
    //   setTimeout(() => {
    //     intro.style.top= '-100vh'
        
    //     },3000);
    })
})

// for MORTAL
let logoM = document.querySelector('.logo-header')
let logo_span = document.querySelectorAll('.logoM')
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
    logo_span.forEach((span,idx) => {
      setTimeout(()=>{
        span.classList.add('activeM')
        }, (idx+1)*100);
    });

    setTimeout(()=>{
    logo_span.forEach((span,idx)=>{
        setTimeout(()=>{
        span.classList.remove('activeM');
        span.classList.add('fade');
            }, (idx+1)*50)
        })
    },3000);
    })
})
let counter = document.querySelector('h3');
let count = 1;
 setInterval( () =>{
    counter.innerText = count;
    count ++
 },1000)
