function searchBar() {
    searchBar = document.getElementById('search_bar_id');
    results = document.querySelectorAll('.card');

    searchBar.addEventListener('input', function () {
        input = searchBar.value.toLowerCase();

        results.forEach(result => {
            if (result.textContent.toLowerCase().includes(input)) {
                result.classList.remove('card_hidden', 'card_fade_out');
            } else {
                result.classList.add('card_fade_out');

                setTimeout(() => {
                    result.classList.add('card_hidden');
                }, 500);
            }
        });
    });
}

searchBar();

