console.log('%c HI', 'color: firebrick')
const init = () => {
    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json =>{
        json.message.forEach(function(element){
            const img = document.createElement('img');
            img.src = element;
            document.querySelector("#dog-image-container").append(img);            
        })
    })
    fetch ("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(json =>{
        for(const element in json.message){
            const li = document.createElement('li')
            li.textContent = element
            document.querySelector("#dog-breeds").append(li)
            li.addEventListener('click', function (){
                this.style.color = "#FF0000";
            })
        }
    
        
    })

}

document.addEventListener('DOMContentLoaded', init);
