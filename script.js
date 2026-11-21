/*
  PRODUCT EDITING GUIDE
  1. Add a new object inside the products array.
  2. Use a matching category: "Lighting", "Accessories", or "Riding Gear".
  3. Put product photos inside the images folder.
  4. Use a relative image path, e.g. "images/my-product.jpg".
  5. If you don't have a purchase URL yet, leave link as an empty string.
*/

const products = [
  {
    id: 1,
    name: "LPG DK350 Fog Lights",
    category: "Lighting",
    price: "₹5,000 fitted",
    description: "My auxiliary fog light setup. Price includes the fitting and clamp.",
    image: "https://lgpindia.com/cdn/shop/files/lgp-dk350-led-fog-lamp-for-bike-pair-wireless-switch-full-wiring-kit-included-high-power-spotlight-with-clamp-mount-2151751.jpg?v=1790668039&width=1200", // Add your photo: "images/foglights.jpg"
    link: "https://lgpindia.com/products/lgp-dk350-led-fog-lamp"   // Add the exact product/store URL when available
  },
  {
    id: 2,
    name: "Metal Windshield",
    category: "Accessories",
    price: "1,100",
    description: "The metal windshield fitted on my Ronin.",
    image: "https://bikerupgrade.com/wp-content/uploads/2026/05/295.png",
    link: "https://bikerupgrade.com/product/tvs-ronin-metal-visor/"
  },
  {
    id: 3,
    name: "Phone Mount",
    category: "Accessories",
    price: "2,999",
    description: "A useful addition for navigation on longer rides.",
    image: "https://m.media-amazon.com/images/I/51saoPRsf6L._SY300_SX300_QL70_FMwebp_AIweblab1392912,T1_.jpg",
    link: "https://www.amazon.in/BOBO-Anti-Vibration-Anti-Theft-Waterproof-Motorcycle/dp/B0DPLMG53K/ref=sr_1_3_pp?sr=8-3"
  },
  {
    id: 4,
    name: "SMK Typhoon Helmet",
    category: "Riding Gear",
    price: "5,000",
    description: "My full-face helmet for everyday rides and touring.",
    image: "https://m.media-amazon.com/images/I/41cab2zpgfL._SY300_SX300_QL70_FMwebp_AIweblab1392912,T1_.jpg",
    link: "https://www.amazon.in/SMK-Typhoon-Helmet-Spoiler-Certified/dp/B09GKC9VLC/ref=sr_1_7?sr=8-7"
  }
];

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter");

let activeCategory = "All";

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const photo = document.createElement("div");
  photo.className = "product-photo";

  if (product.image) {
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";
    image.onerror = () => {
      photo.innerHTML = "";
      const placeholder = document.createElement("div");
      placeholder.className = "photo-placeholder";
      placeholder.textContent = "ADD PRODUCT PHOTO";
      photo.appendChild(placeholder);
    };
    photo.appendChild(image);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "photo-placeholder";
    placeholder.textContent = "PRODUCT PHOTO";
    photo.appendChild(placeholder);
  }

  const body = document.createElement("div");
  body.className = "product-body";

  const category = document.createElement("p");
  category.className = "product-category";
  category.textContent = product.category;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  const bottom = document.createElement("div");
  bottom.className = "product-bottom";

  const price = document.createElement("span");
  price.className = "product-price";
  price.textContent = product.price;

  const link = document.createElement("a");
  link.className = product.link ? "product-link" : "product-link disabled";
  link.textContent = product.link ? "VIEW PRODUCT ↗" : "LINK COMING SOON";

  if (product.link) {
    link.href = product.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `View ${product.name} purchase link`);
  } else {
    link.removeAttribute("href");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
  }

  bottom.append(price, link);
  body.append(category, title, description, bottom);
  card.append(photo, body);

  return card;
}

function renderProducts(list) {
  productGrid.replaceChildren();
  productCount.textContent = `${String(list.length).padStart(2, "0")} ITEMS`;

  if (list.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No accessories found. Try another search or category.";
    productGrid.appendChild(empty);
    return;
  }

  list.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });
}

function filterProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    const searchableText =
      `${product.name} ${product.category} ${product.description}`.toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  renderProducts(filtered);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    filterProducts();
  });
});

searchInput.addEventListener("input", filterProducts);

// Press "/" to jump to search, unless the user is already typing.
document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    event.preventDefault();
    searchInput.focus();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts(products);
