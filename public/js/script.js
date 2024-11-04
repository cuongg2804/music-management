// APlayer
const aplayer = document.querySelector("#aplayer");
if(aplayer){
    let dataSinger = aplayer.getAttribute("data-singer");
dataSinger = JSON.parse(dataSinger);

let dataSong = aplayer.getAttribute("data-song");
dataSong = JSON.parse(dataSong);
const ap = new APlayer({

    container: aplayer,
    audio: [{
        name: dataSong.title,
        artist: dataSinger.fullName,
        url: dataSong.audio,
        cover: dataSong.avatar
    }],
    autoplay : true
});
const  avatar = document.querySelector(".singer-detail .inner-avatar ");
ap.on('play', function () {
    avatar.style.animationPlayState = "running";
});

ap.on('pause', function () {
    avatar.style.animationPlayState = "paused";
});


}
// End APlayer


//Like
const btnLike = document.querySelector("[button-like]");
if(btnLike){
    btnLike.addEventListener("click", () =>{
        const id = btnLike.getAttribute("button-like");

        const status = btnLike.classList.contains("liked") ? "unlike" : "liked";

        fetch(`/songs/${id}/${status}`,{
            method : "PATCH"
        })
        .then (res => res.json())
        .then(data =>{
            btnLike.classList.toggle("liked");
            const elementNumber = btnLike.querySelector(".inner-number");
            elementNumber.innerHTML = data.like;
        })
    })
}

//End like