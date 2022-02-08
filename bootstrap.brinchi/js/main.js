let mass = [
    {
        title: 'Apple',
        price: '2030',
        img: 'http://www.richard-newton.co.uk/wp-content/uploads/2021/07/photo-1486312338219-ce68d2c6f44d.jpeg',
    },
    {
        title: 'Samsung',
        price: '2030',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
    },
    {
        title: 'Honor',
        price: '2030',
        img: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
        title: 'Lg',
        price: '2030',
        img: 'https://icsb.org/wp-content/uploads/2020/04/Canva-Person-Typing-on-Laptop-Computer-Near-Mug-on-Glass-Table-scaled.jpg',
    },
    {
        title: 'Realmi',
        price: '2030',
        img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
        title: 'Acer',
        price: '2030',
        img: 'https://media.istockphoto.com/vectors/black-and-white-cartoon-desktop-computer-vector-id518177588',
    },
    {
        title: 'Lenovo',
        price: '2030',
        img: 'https://thumbs.dreamstime.com/z/desktop-computer-vector-illustration-2077210.jpg',
    },
    {
        title: 'Asus',
        price: '2030',
        img: 'https://media.istockphoto.com/vectors/personal-computer-home-office-vector-id1222488124?k=20&m=1222488124&s=170667a&w=0&h=g-9RPyi3ykt_Gmy6wIzrbx0k3whOJ42m2Mqt4lJyCyc=',
    },
    {
        title: 'Macbook',
        price: '2030',
        img: 'https://thumbs.dreamstime.com/z/desktop-computer-vector-illustration-2077210.jpg',
    },
    {
        title: 'Epson',
        price: '2030',
        img: 'https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2019/06/handWristPain-939030682-770x553-650x428.jpg',
    },
]
let divv = document.getElementById('divv')
function d() {
    mass.map(function (a) {
        divv.innerHTML += `<div class="card m-2" style="width: 15rem;">
            <img class = "fff" src="${a.img}" class="card-img-top" alt="...">
            <div class="card-body align-self-center">
            <h5 class="card-title">${a.title}</h5>
            <p class="card-text">${a.price}</p>
            </div>
            <button class="btn btn-primary" onclick="may()">Go somewhere</button>
            </div>`
    });

}
d()



let inp_text = ''
let array_tex = ''
let inp1 = document.getElementById('inp1')
let div2 = document.getElementById('div2')
let btn_s = document.getElementById('btn_s')
btn_s.onclick = () => {
    divv.innerHTML = ''
    mass.map(r => {
        inp_text = inp1.value.toLocaleLowerCase().trim();
        array_tex = r.title.toLocaleLowerCase();
        if (array_tex.includes(inp_text)) {
            divv.innerHTML += `<div class="card m-2" style="width: 15rem;">
            <img class = "fff" src="${r.img}" class="card-img-top" alt="...">
            <div class="card-body align-self-center">
            <h5 class="card-title">${r.title}</h5>
            <p class="card-text">${r.price}</p>
            </div>
            <i class="bi bi-suit-heart"></i>
            <button class="btn btn-primary" onclick="may()">Go somewhere</button>
            </div>`
        }
    })
    inp1.value = ''
}
let i = 0
let cor = document.getElementById('corz')
function may() {
    i++
    cor.innerHTML = i
}