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
  },
  {
    id: 5,
    name: "Metal headlight grill",
    category: "Accessories",
    price: "700",
    description: "A useful addition for headlights protection.",
    image: "https://bikerupgrade.com/wp-content/uploads/2026/06/64fd5f43-5d52-43f7-9b20-fb1e11618a16.png",
    link: "https://bikerupgrade.com/product/tvs-ronin-headlight-grill-transformer-design/"
  },
  {
    id: 6,
    name: "Centre Meter console mount",
    category: "Accessories",
    price: "700",
    description: "If you want to change the look of the bike use this to change the meter console to the centre(Your choice of perspective)",
    image: "https://bikerupgrade.com/wp-content/uploads/2026/03/157.png",
    link: "https://bikerupgrade.com/product/tvs-ronin-centre-metre-clamp/"
  },
  {
    id: 7,
    name: " Front brake fluid cap cover",
    category: "Accessories",
    price: "270",
    description: "Extra protection and look upgrade for your brake fluid cap on front - I have not yet installed it in my bike but i have one so mentioned it",
    image: "https://bikerupgrade.com/wp-content/uploads/2026/08/15.png",
    link: "https://bikerupgrade.com/product/tvs-ronin-front-brake-fluid-cap-cover/"
  },
  {
    id: 8,
    name: "Pillion Footrest Kit",
    category: "Accessories",
    price: "500",
    description: "Must need one for the bikers who do both family use and long ride (This is from the offical TVS accessories, i bought online and fitted my self)",
    image: "https://shop.tvsmotor.com/cdn/shop/files/NR221650_1_7d06b366-dcb4-44ed-bbe2-85c9f5b35c03.png?v=1707725994&width=1214%202x",
    link: "https://shop.tvsmotor.com/collections/shop-by-model/products/lady-pillion-footrest-kit-ronin-videotest"
  },
  {
    id: 9,
    name: "Rear Rack for Ronin(2024 or before Edition)",
    category: "Accessories",
    price: "1,900",
    description: "If you do long rides this is must to have one to easy carry of luggage (This is from the offical TVS accessories, i bought online and fitted my self)",
    image: "https://shop.tvsmotor.com/cdn/shop/products/NR221300_1_de602d91-20df-45e1-9e38-077e6f15e0fd.png?v=1691469863&width=1214%202x",
    link: "https://shop.tvsmotor.com/collections/shop-by-model/products/rear-rack-videotest"
  },
  {
    id: 10,
    name: "Universal Hand Guards Protectors",
    category: "Accessories",
    price: "1,500",
    description: "Good Hand Guards that I use but, for Ronin seprately no hand guard is avaliable so we have use universal one so fitting can be a issues",
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/handle-bar/x/l/m/universal-hand-guards-protectors-for-motorcycle-safety-moto-original-imahsugzr2xj2g4z.jpeg?q=90",
    link: "https://www.flipkart.com/moto-genius-universal-hand-guards-protectors-motorcycle-safety-handle-bar/p/itm759e28fc4c80f"
  },
  {
    id: 11,
    name: "AIR PRO – BLACK BLACK GLOVES FROM BISON",
    category: "Riding Gear",
    price: "3,500",
    description: "One of the best gloves under 3.5k with necessary protection u can use for both city and highway rides",
    image: "https://bisonprogear.com/wp-content/uploads/2023/06/1-5-600x600.jpg",
    link: "https://bisonprogear.com/product/air-pro-black-black-gloves-2/"
  },
  {
    id: 12,
    name: "UV-Protected Full Face Cover Balaclava ",
    category: "Riding Gear",
    price: "190",
    description: "One of the best balaclava under 200 which is confortable and useful when using a full face helment",
    image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-600,ar-2500-2500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/b4c0b419-41e4-4f62-b3d5-2d211042d8e7/Slovic-UV-Protected-Full-Face-Cover-Balaclava-Face-Mask-for-Bikers-Lightweight-Easy-to-Wear.png",
    link: "https://www.zepto.com/pn/slovic-uv-protected-full-face-cover-balaclava-face-mask-for-bikers-lightweight-easy-to-wear/pvid/4e3fb15d-cd4c-4b09-aad1-e7e6f3d5f473"
  },
  {
    id: 13,
    name: "Ronin-Tank Grip",
    category: "Accessories",
    price: "778",
    description: "Tank grips are very useful when you ride long distance to rest the knees into the tank griped to perfect posture (This is from the offical TVS accessories, i bought online and fitted my self)",
    image: "https://shop.tvsmotor.com/cdn/shop/products/NR221970_3_75d5db88-1e1f-4614-b298-f419da007aaf.png?v=1757065945&width=1214%202x",
    link: "https://shop.tvsmotor.com/products/tank-grip?_pos=1&_sid=853abf3ba&_ss=r"
  },
  {
    id: 14,
    name: "MICHELIN Bike Chain Cleaner Spray 400ml",
    category: "Maintenance Essentials",
    price: "480",
    description: "Most efficient chain cleaner i ever used must have one",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/51fWlYKAVkL._SL1000_.jpg",
    link: "https://www.amazon.in/dp/B004YF1Z4M?lv=shuf&channelId=704&plpRedirect=mhFallback"
  },
  {
    id: 15,
    name: "Motul Helmet Care Kit",
    category: "Maintenance Essentials",
    price: "250",
    description: "Must have one helmet and visor cleaner",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/61tmlD+A38L._SL1050_.jpg",
    link: "https://www.amazon.in/dp/B0078119HM?lv=shuf&channelId=704&plpRedirect=mhFallback"
  },
  {
    id: 16,
    name: "Bike Body Cover",
    category: "Maintenance Essentials",
    price: "485",
    description: "Maintain your bike from dust",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/51HzU-oAHkL._SL1000_.jpg",
    link: "https://www.amazon.in/dp/B08P61HXSX?lv=shuf&channelId=704&plpRedirect=mhFallback"
  },
  {
    id: 17,
    name: "Sounce Helmet Chin Strap Mount",
    category: "Motovlog-setup",
    price: "Currently unavailable",
    description: "A cheper option for the beginner moto volger just setup your phone and start vloging",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/51TkYs5Q6LL._SL1500_.jpg",
    link: "https://www.amazon.in/dp/B09THD1HNB?lv=shuf&channelId=704&plpRedirect=mhFallback"
  },
  {
    id: 18,
    name: "Cordless Portable Wireless Pressure Washer ",
    category: "Maintenance Essentials",
    price: "1,500",
    description: "Best buget portable bike washer which runs on battery and easy to use best for a clean wash at home itself",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/71iBPskvuIL._SL1500_.jpg",
    link: "https://www.amazon.in/dp/B0DY1QMSW6?lv=shuf&channelId=704&plpRedirect=mhFallback"
  },
  {
    id: 19,
    name: "Multi-Purpose Bike Chain Cleaner Brush",
    category: "Maintenance Essentials",
    price: "100",
    description: "Must have chain cleaner bursh(Don't use your hand directly or else have to loose your finger)",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/610XWnl+nXL._SL1500_.jpg",
    link: "https://www.amazon.in/dp/B076DC73XF?lv=shuf&channelId=704&plpRedirect=mhFallback"
  },
  {
    id: 20,
    name: "WD-40 Multipurpose Spray",
    category: "Maintenance Essentials",
    price: "420",
    description: "Must have Multipurpose Spray just spray where ever you see rust and wipe it and were you want to loosen things very useful",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/51iXu11jMdL._SL1000_.jpg",
    link: "https://www.amazon.in/dp/B07FCHCQCW?lv=shuf&channelId=704&plpRedirect=mhFallback"
  },
  {
    id: 21,
    name: "Motul C2 Chain Lube 400ml",
    category: "Maintenance Essentials",
    price: "520",
    description: "Best chain lube i have used so far",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/51UhbdF5CqL._SL1000_.jpg",
    link: "https://www.amazon.in/dp/B0077AUCYK?lv=shuf&channelId=704&plpRedirect=mhFallback"
  },
  

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
