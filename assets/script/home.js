'use strict';
const url = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';

const options = {
    method: 'GET',
    mode: 'cors'
};

const users = document.querySelector('.users');
const paragraph = document.querySelector('.paragraph')
window.addEventListener('load', () => {

   

})
    
const arr =[]
async function getMovies() {
    try{
     const result = await fetch(url, options)
     
     if(result.status >= 200 && result.status < 400){
        const data = await result.json();
        const title = data.results;
        console.log(title)
         // console.log(movies[0].title)
        for(let i=0; i<title.length; i++){
           
            const getName = (`${title[i].name.first} ${title[i].name.last} `);
             const city = title[i].location.city;
             const picture = title[i].picture.medium
             const url2 = picture
            //  console.log(city)
            // console.log(getName) 
            // arr.push(getName)
            const div = document.createElement('div');
            const para = document.createElement('p');
            const second = document.createElement('div')
            const third = document.createElement('div')
            const para2 = document.createElement('p')
           // users.appendChild(second)
                   users.appendChild(div)
                   div.classList.add('flexbox2')
                   //users.appendChild(para)
                
                 div.appendChild(second);
                 second.classList.add('pic')
                   second.style.background = `#000 url(${url2})  center center / cover no-repeat`;

                   div.appendChild(third)
                   third.appendChild(para)
                   third.appendChild(para2)
               
                   para.classList.add('para')
                  para.innerText = `${getName}`
                 para2.classList.add('span')
                  para2.innerText = city
        }
       
       
     }
    } catch(error){
        console.log(error)
    }
}

console.log(arr)
getMovies();

// function data(){
//     for(let i=0; i<10;  i++){
//       //  const div = document.createElement('div');
//         // div.classList.add("shapes");
         
//        // div.appendChild(para)
//           para.innerText = arr[i]
//     }

// }
