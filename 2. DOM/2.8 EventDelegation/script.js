// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function(event){
//         event.target.style.color = 'blue'
//     })
// }

document.getElementById('wrapper').addEventListener('click', function(event) {
    var tagNam = event.target.tagName.toLowerCase()

    if (tagNam === 'p') {
        event.target.style.color = 'blue'
    }

    if(event.target.classList.contains('color')) {
        event.target.style.color = 'red'
    }
})

