function setimage_path() {
    document.querySelectorAll('img').forEach(img => {
        console.log("Running: Default image path check");
        img.onerror = function () {
            console.log("Path is establishing");

            defaultImage = new Image();
            defaultImage.src = 'images/general/placeholder.png';

            defaultImage.onload = () => {
                this.src = defaultImage.src;
                console.log("Default image success");
            };

            this.alt = "placeholder image";
        };
    });
};

function setColorScheme() {
    lightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (lightMode) {
        document.body.className = 'light-mode';
        console.log("Color scheme has been set to light-mode per user preferences");
    } else if (darkMode) {
        document.body.className = 'dark-mode';
        console.log("Color scheme has been set to dark-mode per user preferences");
    } else {
        document.body.className = 'light-mode';
        console.log("Color scheme has been set automatically to light-mode");

    }
};

document.getElementById("theme-switch").addEventListener("change", function () {
    console.log("Color scheme preference has been changed to ", this.value);
    document.body.className = this.value;
});

const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: light)');
colorSchemeMedia.addEventListener('change', setColorScheme);

setColorScheme();
setimage_path();





