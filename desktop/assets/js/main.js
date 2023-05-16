const { ipcRenderer } = require('electron')


const closeBtn = document.getElementById('close')
closeBtn.addEventListener('click', ()=>{
    ipcRenderer.send('close')
})

fetch('http://localhost/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for(let item of data){
            const posts = document.getElementById('posts')

            let MasterTag = document.createElement('li')
            let DateTag = document.createElement('span')
            let LinkTag = document.createElement('a')

            posts.appendChild(MasterTag)
            DateTag.innerHTML = item.date
            LinkTag.innerHTML = item.text
            LinkTag.href = item.url
            MasterTag.appendChild(DateTag)
            MasterTag.appendChild(LinkTag)
        }
    })

    .catch(error => {
        console.error('Veri alma hatası:', error);
    });


