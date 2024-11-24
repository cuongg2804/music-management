//Preview_Image
const uploadImage = document.querySelector("[upload-image]");
if(uploadImage){
    const uploadImage_input = uploadImage.querySelector("[upload-image-input]");
    const img = uploadImage.querySelector("[upload-image-preview]");

    uploadImage_input.addEventListener("change", () => {
        const file = uploadImage_input.files[0] ;
        if(file){
            img.src = URL.createObjectURL(file);
        }
    })
}
//End Preview_Image


//Preview_Audio
const uploadAudio = document.querySelector("[upload-audio]");
if(uploadAudio){
    const uploadAudio_input = uploadAudio.querySelector("[upload-audio-input]");
    const uploadAudio_play = uploadAudio.querySelector("[upload-audio-play]");
    const source = uploadAudio_play.querySelector("source");

    uploadAudio_input.addEventListener("change", () => {
        const file = uploadAudio_input.files[0];
        if(file){
            source.src = URL.createObjectURL(file);
            uploadAudio_play.load();
        }
    })
    
}
//End Preview_Audio