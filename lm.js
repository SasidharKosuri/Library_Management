let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let message = document.getElementById("message");
let spinner = document.getElementById("spinner");

function appendSearchResults(search_results) {
    searchResults.textContent = "";
    message.textContent = "";

    if (search_results.length === 0) {
        message.textContent = "No results found";
        return;
    }

    let headingEl = document.createElement("h1");
    headingEl.textContent = "Popular Books";
    searchResults.appendChild(headingEl);

    for (let eachItem of search_results) {
        let title = eachItem.title || "Title not available";
        let image = eachItem.imageLink || "default-image-url.png";
        let author = eachItem.author || "Author unknown";

        let imageEl = document.createElement("img");
        let textEl = document.createElement("p");

        imageEl.setAttribute("src", image);
        textEl.textContent = `${title} by ${author}`;

        searchResults.appendChild(imageEl);
        searchResults.appendChild(textEl);
    }
}

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let searchInputValue = searchInput.value.trim();
        if (searchInputValue === "") {
            message.textContent = "Please enter a book title to search.";
            return;
        }

        spinner.classList.remove("d-none");

        let url = "https://apis.ccbp.in/book-store?title=" + searchInputValue;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                let { search_results } = jsonData;
                appendSearchResults(search_results);
            })
            .catch(function () {
                message.textContent = "Something went wrong. Please try again later.";
            })
            .finally(function () {
                spinner.classList.add("d-none");
            });
    }
});
