var data =
[
    {
        "id":1,
        "title" : "Mohamed",
        "url" : "9.jpeg"
    },
    
    {
        "id":2,
        "title" : "Aya",
        "url" : "2.jpeg"
    },
    
    {
        "id":3,
        "title" : "Heba",
        "url" : "3.jpeg"
    },
    
    {
        "id":4,
        "title" : "Manar",
        "url" : "4.jpeg"
    },
    
    {
        "id":5,
        "title" : "Esraa",
        "url" : "13.jpeg"
    },
    
    {
        "id":6,
        "title" : "Ahmed",
        "url" : "6.jpeg"
    },
    
    {
        "id":7,
        "title" : "Ali",
        "url" : "7.jpeg"
    },
    
    {
        "id":8,
        "title" : "Omar",
        "url" : "10.jpeg"
    },
    
]

var wrapper = "";
for (var item of data){
    wrapper+=`
    <div class="item">
        <h4>${item.id}</h4>
        <img src="${item.url}">
        <p>${item.title}</p>
    </div>
    `
}
document.getElementById('cont').innerHTML= wrapper


function getStudent(){
    var random=[
        {
            "id":1,
            "title" : "Mohamed",
            "url" : "9.jpeg"
        },
        
        {
            "id":2,
            "title" : "Aya",
            "url" : "2.jpeg"
        },
        
        {
            "id":3,
            "title" : "Heba",
            "url" : "3.jpeg"
        },
        
        {
            "id":4,
            "title" : "Manar",
            "url" : "4.jpeg"
        },
        
        {
            "id":5,
            "title" : "Esraa",
            "url" : "13.jpeg"
        },
        
        {
            "id":6,
            "title" : "Ahmed",
            "url" : "6.jpeg"
        },
        
        {
            "id":7,
            "title" : "Ali",
            "url" : "7.jpeg"
        },
        
        {
            "id":8,
            "title" : "Omar",
            "url" : "10.jpeg"
        },
        
    ]
    var choose = Math.floor(Math.random()*random.length);
    document.getElementById('result').innerHTML =`
    <div class="item">
        <h4>${random[choose].id}</h4>
        <img src="${random[choose].url}">
        <p>${random[choose].title}</p>
    </div>
`
}
