import Cropper from 'cropperjs';
const input = document.querySelector("#input") as HTMLInputElement;
const image = document.querySelector("#image") as HTMLImageElement;
const file = document.querySelector('input[type=file]')! as HTMLInputElement;
const download = document.querySelector('#download')! as HTMLAnchorElement;
input.addEventListener('change', (e) => {
    e.preventDefault();
    console.log(input.value.slice(12,));
    const reader = new FileReader();
    reader.addEventListener("loadend", (e) => {
        e.preventDefault();
        image.setAttribute("src", `${reader.result}`);
        const myCropper = new Cropper(image);
        myCropper.enable();
        download.addEventListener('click', (e) => {
            e.preventDefault();
            let imgSrc = myCropper
                .getCroppedCanvas({})
                .toDataURL();
            download.download = `${imgSrc}`;
            download.href = `${imgSrc}`;
            console.log(download.href);
        })


    })
    if (file.files) {
        reader.readAsDataURL(file.files[0]);
    }
})
