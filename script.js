const upload = document.querySelector("input");

const image = document.querySelector(".img img");

const close = document.querySelector(".icon .close");

upload.addEventListener('change', () => {
    uploadfile(event);
});

function uploadfile(event) {
    image.classList.add("active");
    image.classList.add("exit");

    image.src = URL.createObjectURL(event.target.files[0]);


    close.addEventListener('click', () => {
        image.classList.toggle('active');
        close.classList.toggle('exit');
    })
}