<div id="content"></div>

<script>
const API_URL = "https://v0-next-js-api-route-nu.vercel.app/feed"

// CHANGE THIS PER PAGE
const CATEGORY = "comparison" // or "local_service" or "lead_generation"

async function loadContent() {
  try {
    const res = await fetch(API_URL)
    const data = await res.json()

    const items = data.data || []

    const filtered = items.filter(item => item.card_tag === CATEGORY)

    const container = document.getElementById("content")

    if (filtered.length === 0) {
      container.innerHTML = "<p>No content available yet.</p>"
      return
    }

    container.innerHTML = filtered.map(item => `
      <div style="margin-bottom: 30px;">
        <h2>${item.card_title}</h2>
        <p>${item.article_title}</p>
        <a href="${item.article_source_url}" target="_blank">Read more</a>
      </div>
    `).join("")

  } catch (err) {
    console.error(err)
    document.getElementById("content").innerHTML = "Error loading content"
  }
}

loadContent()
</script>
