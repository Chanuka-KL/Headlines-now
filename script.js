
async function kghszo(zkmge = "") {
    try {
        const response = await fetch('CHANUKA-KL🌟.txt');
        const jsgeih = await response.text(); 
        const XQKSFI = jsgeih.trim();          
        rhsvsj(zkmge, XQKSFI);                 
    } catch (error) {
        console.error("Error fetching jsgeih:", error);
        document.getElementById('frfjs-container').innerHTML = "<p>Failed to load jsgeih. Please try again later.</p>";
    }
}


async function rhsvsj(zkmge = "", XQKSFI) {
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${XQKSFI}`;
    if (zkmge) {
        url += `&category=${zkmge}`;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles) {
            njgzhg(data.articles);
        } else {
            document.getElementById("frfjs-container").innerHTML = "<p>No news found.</p>";
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        document.getElementById("frfjs-container").innerHTML = "<p>Failed to load news. Please try again later.</p>";
    }
}

// Render news articles on the page
function njgzhg(nvhfg) {
    const frfjsContainer = document.getElementById("frfjs-container");
    frfjsContainer.innerHTML = ""; // Clear existing content
    nvhfg.forEach(item => {
        const frfjsCard = document.createElement("div");
        frfjsCard.className = "frfjs-card";

        frfjsCard.innerHTML = `
            ${item.urlToImage ? `<img src="${item.urlToImage}" alt="News Image" class="frfjs-image">` : ""}
            <div class="frfjs-content">
                <h2 class="frfjs-title">${item.title || "No title available"}</h2>
                <p class="frfjs-description">${item.description || "No description available."}</p>
                <a href="${item.url}" target="_blank" class="frfjs-link">Read full article</a>
                <div class="frfjs-source">Source: <strong>${item.source.name || "Unknown"}</strong></div>
            </div>
        `;

        frfjsContainer.appendChild(frfjsCard);
    });
}

// Event listener for category selection
const zkmgeSelect = document.getElementById("zkmge-select");
zkmgeSelect.addEventListener("change", () => {
    const selectedCategory = zkmgeSelect.value;
    kghszo(selectedCategory); // Pass the selected category to the function
});

// Initial load
kghszo();
