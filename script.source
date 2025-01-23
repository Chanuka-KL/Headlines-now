const API_KEY = "561f4ee0152e4b00a141fa567422d0d0"; // Your NewsAPI key
const newsContainer = document.getElementById("news-container");
const categorySelect = document.getElementById("category-select");

// Fetch news from NewsAPI
async function fetchNews(category = "") {
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`;
    if (category) {
        url += `&category=${category}`;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles) {
            renderNews(data.articles);
        } else {
            newsContainer.innerHTML = "<p>No news found.</p>";
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p>Failed to load news. Please try again later.</p>";
    }
}

// Render news articles on the page
function renderNews(articles) {
    newsContainer.innerHTML = ""; // Clear existing content
    articles.forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.className = "news-card";

        newsCard.innerHTML = `
            ${article.urlToImage ? `<img src="${article.urlToImage}" alt="News Image" class="news-image">` : ""}
            <div class="news-content">
                <h2 class="news-title">${article.title || "No title available"}</h2>
                <p class="news-description">${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank" class="news-link">Read full article</a>
                <div class="news-source">Source: <strong>${article.source.name || "Unknown"}</strong></div>
            </div>
        `;

        newsContainer.appendChild(newsCard);
    });
}

// Fetch default news on page load
fetchNews();

// Fetch news when category changes
categorySelect.addEventListener("change", () => {
    const selectedCategory = categorySelect.value;
    fetchNews(selectedCategory);
});
