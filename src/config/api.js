const API_KEY = "l4PZsOew3qNeZFai95z5tLNVK7wUhmZgQfzgh5dj"

export const fetchImageList = fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`)
.then((res) => res.json())