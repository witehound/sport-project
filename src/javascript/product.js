// selecting elements that we need
const renderContainer = document.querySelector(".products");
const adidas = document.querySelector(".adidas");
const newBalance = document.querySelector(".newBalance");
const puma = document.querySelector(".puma");
const nike = document.querySelector(".nike");
const underArmour = document.querySelector(".underArmour");
const allbrands = document.querySelector(".allbrands");
const cart = document.querySelector(".cart");
const compareStatic = document.querySelector(".compare_static");
const cartNumber = document.querySelector(".cart_number");
const cartText = document.querySelector(".cart_text");

//uml will be added saturday and sunday

// an array of objects for producst
const product_array = [
  {
    name: "Vivvido Match Soccer Ball",
    price: "15,000",
    color: "White",
    brand: "Wilsons",
    image: "./assets/Wilson Ball.webp",
    about:
      "A clear vision of your competition delivered in a 20-panel construction with geometric striking zones. The Wilson NCAA Vivido Soccer ball is built for NCAA competition as the official soccer ball of the Mens and Womens NCAA College Cup Championships. Using Visual spin technology and a cover constructed for precise control this durable soccer ball is ready for elite competition. See the Vivido and track its movement from across the field with a clear vision.",
    state: "",
    toCompareState: false,
  },

  {
    name: "Wilsons Shingaurd",
    price: "5,000",
    color: "Silver",
    brand: "Wilsons",
    image: "./assets/Wil Shinguard.webp",
    about:
      "A lightweight shin guard providing a soccer player the basic protection needed for all levels of play. The perforated foam padding gives it ergonomic comfort fit.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Ultra Mini Racket",
    price: "25,000",
    color: "Red",
    brand: "Wilsons",
    image: "./assets/Wil Racket.webp",
    about:
      "Comprised of a red storage bag and foldable cart, the Tennis Teaching Cart has enough space for up to 150 tennis balls. The bag fits securely inside the teaching cart, providing easy access for repetitions during practice. Bag features a zippered top to ensure safe, convenient travel and prevent balls from spilling out.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Teaching cart",
    price: "10,000",
    color: "Multi",
    brand: "Wilsons",
    image: "./assets/Wil Teaching Cart.webp",
    about:
      'Perfect for displaying proudly around the house, this 10" mini tennis racket impressively maintains the intricate details of its adult performance model.',
    state: "",
    toCompareState: false,
  },

  {
    name: "Air Force 1",
    price: "9,000",
    color: "White",
    brand: "Nike",
    image: "./assets/naf1.jpeg",
    about:
      "The classic Nike shoes, Air Force 1, have become a style statement over the years. These shoes have become a staple item in everyone’s closet. The Nike Air Force 1 was designed by Bruce Kilgore in 1982. The shoe is categorized by Nike Air technology that provides soft cushioning in the midsole. First introduced as a basketball shoe, the Nike Air Force 1 is now a style icon for the younger generation.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Sportswear Tech Fleece Hoodie",
    price: "30,000",
    color: "Black",
    brand: "Nike",
    image: "./assets/nsh.jpeg",
    about:
      "Ready to rock the warmth and comfort of your favorite weekender hoodie, but need to keep your look clean? This Nike Tech Fleece hoodie strikes the right balance with a lightweight, low-profile design that packs in the heat without adding bulk. You can layer with ease whether youre lounging at home or making your city commute.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Ankle Socks",
    price: "500",
    color: "White and Grey",
    brand: "Nike",
    image: "./assets/naas.webp",
    about:
      "The Nike Everyday Plus Cushioned Socks bring comfort to your workout with extra cushioning under the heel and forefoot and a snug, supportive arch band. Sweat-wicking power and breathability up top help keep your feet dry and cool to help push you through that extra set.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Nike dri-ft Mens T-Shirt",
    price: "10,000",
    color: "Grey",
    brand: "Nike",
    image: "./assets/ntts.jpeg",
    about:
      "The Nike Dri-FIT Pop Swoosh Town (MLB Pittsburgh Pirates) T-Shirt has sweat-wicking technology to help provide a dry, comfortable game-day experience. Its team-inspired design is a perfect way to support your favorite team in MLB.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Sports Bras",
    price: "5,000",
    color: "Brown",
    brand: "Nike",
    image: "./assets/nsbb.jpeg",
    about:
      "Run, jump and pivot with confidence in the Nike Victory Shape Sports Bra. The snug, compressive design—with supportive molded cups—includes Dri-FIT technology to wick sweat away. Mesh on the back gives you breathability when youre going all out.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Terrex cyprex ulta DLX",
    price: "13,000",
    color: "Black",
    brand: "Adidas",
    image: "./assets/adss.jpeg",
    about:
      "Head outside for casual warm-weather hikes. These sandals have comfortable textile straps and a buckle closure for a secure fit. The rubber outsole provides traction on wet or slippery surfaces.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Terrex Rain Jacket",
    price: "25,000",
    color: "Shock Blue",
    brand: "Adidas",
    image: "./assets/aarj.webp",
    about: "A WATERPROOF, BREATHABLE RAIN JACKET FOR WET WEATHER.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Golf Sun Hat",
    price: "5,000",
    color: "Shock Blue",
    brand: "Adidas",
    image: "./assets/aash.webp",
    about:
      "Throw some shade on your game. This adidas golf hat has a wide brim to keep the suns rays off your face and neck while moisture-absorbing AEROREADY keeps you dry. Adjust the drawcord when a breeze comes up, and swing for the pin.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Golf Premium Backpack",
    price: "10,000",
    color: "Grey and Black",
    brand: "Adidas",
    image: "./assets/aabp.jpg",
    about: "A ROOMY GOLF BACKPACK TO STORE YOUR PERSONAL ESSENTIALS.",
    state: "",
    toCompareState: false,
  },
  {
    name: "BURN X3",
    price: "45,000",
    color: "Red with flame",
    brand: "New Balance",
    image: "./assets/NewB boot.webp",
    about:
      "TPU molded cleat outsole provides superior traction on both turf and natural surfaces. Knit upper with Kinetic Stitch technology. Achilles pads for heel comfort. Lace closure for a secure fit. Hybrid tongue construction gives you the support of a mid-cut and look of a low-cut collar",
    state: "",
    toCompareState: false,
  },
  {
    name: "Fresh Foam Roav v2",
    price: "20,000",
    color: "Black with sea salt",
    brand: "New Balance",
    image: "./assets/NewB Running Shoe.webp",
    about:
      "Ground Contact Fresh Foam midsole cushioning with rubber outsole pods delivers an ultra-cushioned, lightweight ride while providing abrasion resistance where needed. Stylish knit upper with leather details. Supportive heel pillows for all-day wear. Lace closure for an adjustable, secure fit. 8 mm drop due to variances created during the development and manufacturing processes, all references to 8 mm drop are approximate. Casual colors from the NB Knit Pack",
    state: "",
    toCompareState: false,
  },
  {
    name: "FuelCell MD-X",
    price: "15,000",
    color: "Black and White",
    brand: "New Balance",
    image: "./assets/NewB Shoe.webp",
    about:
      "FuelCell foam delivers a propulsive feel to help drive you forward. Full-length external carbon fiber plate with six built-in pins for rigidity and traction. Knit synthetic/mesh upper with strategic internal reinforcement. Lace closure. Designed for middle to long distance track races",
    state: "",
    toCompareState: false,
  },
  {
    name: "New Balance Slides",
    price: "12,000",
    color: "Grey",
    brand: "New Balance",
    image: "./assets/NewB Slides.webp",
    about:
      "Plush footbed held in a comfortable ground-contact EVA carrier. One-piece fixed upper. Plush top bed foam cushioning",
    state: "",
    toCompareState: false,
  },

  {
    name: "Running Pain Relief CFX Insole",
    price: "5,000",
    color: "Hi Lite with Black",
    brand: "New Balance",
    image: "./assets/NewB ShoePad.webp",
    about:
      "CFX CARBON FIBER: built with carbon fiber technology for gravity-defying support DEEP HEEL CUP cushions and protects against ground impac  MOISTURE-WICKING: engineered to control odor.",
    state: "",
    toCompareState: false,
  },
  {
    name: "Man City Prematch Mens Soccer Jersey",
    price: "20,000",
    color: "Heather-Peacoat",
    brand: "Puma",
    image: "./assets/Puma Jersey.webp",
    about:
      "Regular fit. Crew neck. All-over sublimation print on front and sleeves. PUMA and club name rubber print at chest. Official club logo rubber print at upper back",
    state: "",
    toCompareState: false,
  },
  {
    namet: "PUMA x DUA LIPA Slim Womens Tee",
    price: "20,000",
    color: "Black",
    brand: "Puma",
    image: "./assets/Puma Dua Lipa.webp",
    about:
      "Slim fit. Ribbed crew neck. 3D gradient transfer print. Features Dua Lipas signature butterfly",
    state: "",
    toCompareState: false,
  },
  {
    name: "Crystal Galaxy Graphic Womens Hoodie",
    price: "20,000",
    color: "Puma White",
    brand: "Puma",
    image: "./assets/Puma Crystal Hoodie.webp",
    about:
      "Regular fit. Hood with drawcord for an adjustable fit. Kangaroo pocket. Ribbed cuffs and hem. PUMA Archive No. 1 Logo at chest",
    state: "",
    toCompareState: false,
  },
  {
    name: "Flawless High Waist 7/8 Womens Training Leggings",
    price: "20,000",
    color: "Puma White",
    brand: "Puma",
    image: "./assets/Puma Training Leggins.webp",
    about:
      "Tight fit. High-waist construction. Side entry pockets. Mesh inserts at back of calves for ventilation. All-over Flawless texture",
    state: "",
    toCompareState: false,
  },
  {
    name: "Wick Sunglasses",
    price: "2,000",
    color: "Black Smoke",
    brand: "Puma",
    image: "./assets/Puma Sunglasses.webp",
    about:
      "Rectangular silhouette. Polycarbonate lenses. Injection molded frame. Formstrip design at temples. PUMA Cat Logo at temples and left corner lens",
    state: "",
    toCompareState: false,
  },
];

const addedToCart = [];

const forToCompare = [];

//function to render element that holds each from from product_array
const renderAnItem = (item, container) => {
  const product_div = document.createElement("div");
  product_div.setAttribute("class", "product_div");

  const productTop = document.createElement("div");
  productTop.setAttribute("class", "product_div_top");

  const productImage = document.createElement("img");
  productImage.setAttribute("class", "product_div_image");
  productImage.setAttribute("src", item.image);

  const productBottom = document.createElement("div");
  productBottom.setAttribute("class", "product_div_buttom");

  const productBottomH2 = document.createElement("h2");
  productBottomH2.setAttribute("class", "product_div_buttom_h2");
  productBottomH2.innerText = item.name;

  const productBottomP = document.createElement("h4");
  productBottomP.setAttribute("class", "product_div_buttom_h4");
  productBottomP.innerText = item.brand;

  const productPrice = document.createElement("h2");
  productPrice.setAttribute("class", "product_div_price");
  productPrice.innerText = `$ ${item.price}`;

  const toCompare = document.createElement("button");
  toCompare.setAttribute("class", "to_compare");
  toCompare.innerText = "Selcet to Compare";
  toCompare.style.height = "26px";
  toCompare.addEventListener("click", () => {
    if (forToCompare.length < 2) {
      forToCompare.push(item);
      item.toCompareState = !item.toCompareState;
      if (forToCompare.length > 1) {
        if (forToCompare[1].name === forToCompare[0].name) {
          forToCompare.pop();
        }
      }
    } else {
      item.toCompareState = !item.toCompareState;
      forToCompare.shift();
      forToCompare.push(item);
      if (forToCompare[1].name === forToCompare[0].name) {
        forToCompare.pop();
      }
    }
  });

  const addTocart = document.createElement("button");
  addTocart.setAttribute("class", "product_div_add");
  addTocart.innerText = "+";
  addTocart.addEventListener("click", () => {
    addedToCart.push(item);
    console.log(addedToCart.length);
    cartNumber.innerText = addedToCart.length;
  });

  if (item.state === "") {
    addTocart.style.display = "block";
  } else {
    addTocart.style.display = "none";
  }

  container.appendChild(product_div);
  product_div.appendChild(productTop);
  productTop.appendChild(productImage);
  product_div.appendChild(productBottom);
  productBottom.appendChild(productBottomH2);
  productBottom.appendChild(productBottomP);
  productBottom.appendChild(productPrice);
  productPrice.appendChild(toCompare);
  productPrice.appendChild(addTocart);
};

const renderToCompare = (item, container) => {
  const letsCompare = document.createElement("div");
  letsCompare.setAttribute("class", "lets_compare");

  const productTop = document.createElement("div");
  productTop.setAttribute("class", "product_div_top");

  const productImage = document.createElement("img");
  productImage.setAttribute("class", "product_div_image");
  productImage.setAttribute("src", item.image);

  const productBottom = document.createElement("div");
  productBottom.setAttribute("class", "product_div_buttom_compare");

  const productBottomH2 = document.createElement("h2");
  productBottomH2.setAttribute("class", "product_div_buttom_h2");
  productBottomH2.innerText = item.name;

  const productBottomP = document.createElement("h4");
  productBottomP.setAttribute("class", "product_div_buttom_h4");
  productBottomP.innerText = item.brand;

  const productPrice = document.createElement("p");
  productPrice.setAttribute("class", "product_div_price");
  productPrice.innerText = item.price;

  const productColor = document.createElement("h4");
  productColor.setAttribute("class", "product_div_color");
  productColor.innerText = item.color;

  const productStatus = document.createElement("h2");
  productStatus.setAttribute("class", "product_div_status");
  productStatus.innerText = item.about;

  container.appendChild(letsCompare);
  letsCompare.appendChild(productTop);
  productTop.appendChild(productImage);
  letsCompare.appendChild(productBottom);
  productBottom.appendChild(productBottomH2);
  productBottom.appendChild(productBottomP);
  productBottom.appendChild(productPrice);
  productBottom.appendChild(productColor);
  productBottom.appendChild(productStatus);
};

// using the product_array to render our products on start
product_array.forEach((product) => {
  renderAnItem(product, renderContainer);
});

// function to filter our brands
const pickSpecificBrand = (item, brandName) => {
  const specificBrand = item.filter((product) => product.brand === brandName);
  return specificBrand;
};

//functions to addeventlisteners to buttons
const initialFetch = (title, array, state) => {
  title.addEventListener("click", () => {
    renderContainer.innerHTML = "";
    array.forEach((product) => {
      product.state = state;
      renderAnItem(product, renderContainer);
    });
  });
};

const fetcher = (title, array, titletype, state) => {
  title.addEventListener("click", () => {
    renderContainer.innerHTML = "";
    const adidasProducts = pickSpecificBrand(array, titletype);
    adidasProducts.forEach((product) => {
      product.state = state;
      renderAnItem(product, renderContainer);
    });
  });
};

// calling functions for our buttons
initialFetch(allbrands, product_array, "");
initialFetch(cart, addedToCart, "cart");
fetcher(adidas, product_array, "Wilsons", "");
fetcher(nike, product_array, "Nike", "");
fetcher(puma, product_array, "Puma", "");
fetcher(underArmour, product_array, "Adidas", "");
fetcher(newBalance, product_array, "New Balance", "");

// to compare
compareStatic.addEventListener("click", () => {
  renderContainer.innerHTML = "";
  forToCompare.forEach((product) => {
    renderToCompare(product, renderContainer);
  });
});
