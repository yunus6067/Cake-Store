document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab-video");
    const iframe = document.getElementById("videoFrame");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            // schimbă video
            const videoURL = this.getAttribute("href");
            iframe.src = videoURL;

            // elimină clasa active de la toate
            tabs.forEach(t => t.classList.remove("active"));

            // adaugă pe cel curent
            this.classList.add("active");
        });
    });

});