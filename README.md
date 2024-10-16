# Library Management Application
This is a web-based Library Management system built with HTML, CSS, JavaScript, and Bootstrap. The application allows users to search for books using an external API, displays search results with book images and author information, and provides a user-friendly interface.

<h2>Features</h2>
->Responsive UI built with Bootstrap.<br>
->Search functionality that fetches book data from an external API (https://apis.ccbp.in/book-store) based on the user's input.<br>
->Spinner animation displayed while fetching data to improve user experience.<br>
->Dynamically rendered search results including book title, author, and cover image.<br>
->Error handling: Displays a "No results found" message when no matching books are available.<br>

<h2>How It Works</h2>
->The user types a book title into the search input field.<br>
->When the user presses the "Enter" key, a request is sent to the book API using the fetch method.C
->A spinner appears during the loading process to inform the user that the data is being fetched.<br>
->Once the results are fetched:
  --If there are matching books, the application displays the book cover, title, and author.<br>
  --If no results are found, a "No results found" message is shown.<br>

<h2>Key Files</h2>
->index.html: The main HTML file that contains the structure of the web page.<br>
->style.css: A custom stylesheet that provides additional styling beyond Bootstrap.<br>
->script.js: The JavaScript file responsible for fetching book data and manipulating the DOM based on user input.<br>
