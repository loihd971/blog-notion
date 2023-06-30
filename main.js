import "./style.css";

async function fetchPost() {
  const posts = await fetch("/api/posts")
    .then((res) => res.json())
    .then((data) => data.results);
  document.querySelector(".card-container").innerHTML = posts
    .map(
      (post) => `
    <article class="card">
    <img
      src="${post.properties.image.files[0].external.url}"
      alt="${post.properties.image.files[0].name}"
      class="card__image"
    />
    <h2 class="card__heading">${post.properties.name.title[0].plain_text}</h2>
    <div class="card__content">
      <p>
       ${post.properties.content.rich_text[0].plain_text}
      </p>
    </div>
    <a class="card__btn" href=""> ${post.properties.btn_text.rich_text[0].plain_text}</a>
  </article>
    `
    )
    .join("");
}

// invoke function
fetchPost();
