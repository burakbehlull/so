const { ipcRenderer } = require('electron')


const closeBtn = document.getElementById('close')
closeBtn.addEventListener('click', ()=>{
    ipcRenderer.send('close')
})