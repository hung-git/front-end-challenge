export const fetchImageList = fetch("https://api.nasa.gov/planetary/apod?api_key=l4PZsOew3qNeZFai95z5tLNVK7wUhmZgQfzgh5dj&count=10")
.then((res) => res.json())