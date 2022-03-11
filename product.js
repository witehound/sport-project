// selecting elements that we need
// const productsContainer = document.getElementsByClassName('products')
const renderContainer = document.querySelector('.products');
const adidas = document.querySelector('.adidas');
const newBalance = document.querySelector('.newBalance');
const puma = document.querySelector('.puma');
const nike = document.querySelector('.nike');
const underArmour = document.querySelector('.underArmour');
const allbrands = document.querySelector('.allbrands');



// an array of objects for producst
const product_array = [
    {
      'name': 'Air max',
      'price': 200,
      'color': 'white',
      'brand': 'nike',
      'image': 'https://www.thenextsole.com/storage/images/CV8480-300.png'
    },
    {
      'name': 'crocs',
      'price': 850,
      'color': 'brown',
      'brand': 'adidas',
      'image': 'https://assets.adidas.com/images/w_600,f_auto,q_auto/f544367209ae4494b5f0ab730140c5af_9366/Adilette_Clogs_White_FY8970_01_standard.jpg'
    },
    {
      'name': 'sneaker',
      'price': 549,
      'color': 'red',
      'brand': 'puma',
      'image': 'https://www.ikarinotekken.com/images/h/red%20puma%20sneakers-210lrh.jpg'
    }
  ];

  const addedToCart = []


  //for addtocart
  let finalItemId 
//   const letsAdd = (item) => {
//     finalItemId =item
//     return finalItemId
//   }  

//   console.log(finalItemId)

  //function to render element that holds each from from product_array
  const renderAnItem = (item,container,finalItemId) => {
     
      const product_div = document.createElement('div')
      product_div.setAttribute('class', 'product_div')

      const productTop = document.createElement('div')
      productTop.setAttribute('class', 'product_div_top')

      const productImage = document.createElement('img')
      productImage.setAttribute('class', 'product_div_image')
      productImage.setAttribute('src', item.image)
      

      const productBottom = document.createElement('div')
      productBottom.setAttribute('class', 'product_div_buttom')
     

      const productBottomH2 = document.createElement('h2')
      productBottomH2.setAttribute('class', 'product_div_buttom_h2')
      productBottomH2.innerText = item.name;

      const productBottomP = document.createElement('h4')
      productBottomP.setAttribute('class', 'product_div_buttom_h4')
      productBottomP.innerText = item.brand;

      const productPrice = document.createElement('h2')
      productPrice.setAttribute('class','product_div_price')
      productPrice.innerText = item.price;

    
      const addTocart = document.createElement('button')
      addTocart.setAttribute('class','product_div_add')
      addTocart.innerText = '+'

    //   letsAdd(item)

      container.appendChild(product_div);
      product_div.appendChild(productTop);
      productTop.appendChild(productImage)
      product_div.appendChild(productBottom);
      productBottom.appendChild(productBottomH2)
      productBottom.appendChild(productBottomP)
      productBottom.appendChild(productPrice)
      productPrice.appendChild(addTocart)

      finalItemId = item

  }

  //eventlistener for add to cart button
//   const addTocart = document.getElementsByClassName('product_div_add')
//   addTocart.addEventListener('click', ()=>{
//       console.log('button clicked')
//   })
console.log(finalItemId)


// using the product_array to render our products
  product_array.forEach(product => {
    renderAnItem(product, renderContainer);
  });


  // function to filter our brands
  const pickSpecificBrand = (item, brandName) => {
      const specificBrand = item.filter(product => product.brand === brandName)
      return specificBrand
  }

  //adding eventlisters to filter brands
  allbrands.addEventListener('click',()=>{
    renderContainer.innerHTML = '';
    product_array.forEach(product => {
        renderAnItem(product, renderContainer);
      });
  })

  adidas.addEventListener('click',()=>{
    renderContainer.innerHTML = '';
    const adidasProducts = pickSpecificBrand(product_array,'adidas')
    adidasProducts.forEach(product => {
        renderAnItem(product, renderContainer);
      });
  })
  
  newBalance.addEventListener('click',()=>{
    renderContainer.innerHTML = '';
    const adidasProducts = pickSpecificBrand(product_array,'newbalance')
    adidasProducts.forEach(product => {
        renderAnItem(product, renderContainer);
      });
  })

  puma.addEventListener('click',()=>{
    renderContainer.innerHTML = '';
    const adidasProducts = pickSpecificBrand(product_array,'puma')
    adidasProducts.forEach(product => {
        renderAnItem(product, renderContainer);
      });
  })

  nike.addEventListener('click',()=>{
    renderContainer.innerHTML = '';
    const adidasProducts = pickSpecificBrand(product_array,'nike')
    adidasProducts.forEach(product => {
        renderAnItem(product, renderContainer);
      });
  })
  
  underArmour.addEventListener('click',()=>{
    renderContainer.innerHTML = '';
    const adidasProducts = pickSpecificBrand(product_array,'underarmour')
    adidasProducts.forEach(product => {
        renderAnItem(product, renderContainer);
      });
  })
  
  console.log(addedTocart)
  
