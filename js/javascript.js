function setimage_path() {
    document.querySelectorAll('img').forEach(img => {
        console.log("Running: Default image path check");
        img.onerror = function () {
            this.onerror = null;

            console.log("Path is establishing");

            defaultImage = new Image();
            defaultImage.src = 'images/general/petinder_icon.png';

            defaultImage.onload = () => {
                this.src = defaultImage.src;
                console.log("Default image success");
            };

            this.alt = "placeholder image";
        };
    });
};


setimage_path();
