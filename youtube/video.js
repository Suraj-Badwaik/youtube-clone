let video = JSON.parse(localStorage.getItem('video')) || [];
console.log('video:', video)

video.map(function(el){
    let box = document.getElementById('container');
    box.innerHTML=null;
    let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${el.videoId}`
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.allow = 'fullscreen';
        

    let name = document.createElement('p')
    name.setAttribute('class','title')
    name.innerText = el.title;


    box.append(iframe,name);


})


// let video1 = JSON.parse(localStorage.getItem('video1')) || [];
// console.log('video1:', video1)

// video1.map(function(el){
//     let box = document.getElementById('container');
//     box.innerHTML=null;
//     let iframe = document.createElement('iframe');
//         iframe.src = `https://www.youtube.com/embed/${el.id}`
//         iframe.width = '100%';
//         iframe.height = '100%';
//         iframe.allow = 'fullscreen';
        

//     let name = document.createElement('p')
//     name.setAttribute('class','title')
//     name.innerText = el.title;


//     box.append(iframe,name);


// })

    
