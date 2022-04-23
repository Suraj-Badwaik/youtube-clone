// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf2&key=[YOUR_API_KEY] 

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf2&key=AIzaSyAe3s47S6xSutSEgZXgaO5B9I0GHCnNCvo


const API = `AIzaSyAe3s47S6xSutSEgZXgaO5B9I0GHCnNCvo`

const searchVideos = async() => {
    try{
        const q= document.getElementById('query').value;

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=${API}`)

        const data = await res.json()
        console.log('data:', data.items);
        append(data.items);
    }
    catch(err){
    console.log('err:', err)
    }
}


const append =(videos) =>{
    let box = document.getElementById('container');
    box.innerHTML=null;
    // let thumbnail = snippet.thumbnails.high;
    // console.log('thumbnail:', thumbnail)
    videos.forEach(({snippet:{thumbnails:{high:{url}}}, snippet :{title}, id :{videoId}})=>{
        let div = document.createElement('div')
        div.setAttribute('class','box')

        let thumbnail = document.createElement('img')
        thumbnail.setAttribute('class','thumbImg')
        thumbnail.src=`${url}`

        let Imgdiv = document.createElement('div')
        Imgdiv.setAttribute('class','ImgDiv')
        
        Imgdiv.append(thumbnail);
    
        let name = document.createElement('p')
        name.setAttribute('class','title')
        name.innerText = title;

        div.append(Imgdiv, name);

        let data={
            title,
            videoId,
        }
        box.append(div);

        div.onclick = () =>{
            showVideo(data)
        };


    });

};


let arr=[];
const showVideo =(x) =>{
    localStorage.removeItem('video')
    arr.push(x);
    window.location.href='video.html'
    localStorage.setItem('video', JSON.stringify(arr));
}









//POPULAR VIDEOS CODE BELOW//
//=========================================================//
//=========================================================//










const url1=`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=IN&key=${API}&part=snippet&maxResults=30`

console.log('url1:', url1)

fetch(url1)
.then(function(res){
   return res.json();
})
.then(function(res){
    console.log('res:', res.items)
    showPopularvideos(res.items)
})
.catch(function(err){
    console.log('err:', err)
})


function showPopularvideos(data){
  
    let box = document.getElementById('container');
    // box.innerHTML=null;
  
    data.forEach(({snippet:{thumbnails:{high:{url}}}, snippet :{title}, id})=>{
        let div = document.createElement('div')
        div.setAttribute('class','box')

        let thumbnail = document.createElement('img')
        thumbnail.setAttribute('class','thumbImg')
        thumbnail.src=`${url}`

        let Imgdiv = document.createElement('div')
        Imgdiv.setAttribute('class','ImgDiv')
        
        Imgdiv.append(thumbnail);
    
        let name = document.createElement('p')
        name.setAttribute('class','title')
        name.innerText = title;

        div.append(Imgdiv, name);

        let videoId=id;
        let data1={
            title,
            videoId,
        }
        box.append(div);

        div.onclick = () =>{
            showVideo(data1)
        };

    });   
}



// let arr2=[];
// const showVideo1 =(x1) =>{
//     localStorage.removeItem('video1')
//     arr2.push(x1);
//     window.location.href='video.html'
//     localStorage.setItem('video1', JSON.stringify(arr2));
// }




// let iframe = document.createElement('iframe');
//         iframe.src =`https://www.youtube.com/embed/${videoId}`
//         iframe.width = '100%';
//         iframe.height = '100%';
//         iframe.allow = 'fullscreen';
// id:{videoId}


//https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=IN&key=AIzaSyAe3s47S6xSutSEgZXgaO5B9I0GHCnNCvo&part=snippet&maxResults=30
