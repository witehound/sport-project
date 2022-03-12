// selecting elements that we need
const renderContainer = document.querySelector('.products');
const adidas = document.querySelector('.adidas');
const newBalance = document.querySelector('.newBalance');
const puma = document.querySelector('.puma');
const nike = document.querySelector('.nike');
const underArmour = document.querySelector('.underArmour');
const allbrands = document.querySelector('.allbrands');
const cart = document.querySelector('.cart');
const compareStatic = document.querySelector('.compare_static')



// an array of objects for producst
const product_array = [
    {
      'name': 'Air max',
      'price': 200,
      'color': 'white',
      'brand': 'nike',
      'image': 'https://www.thenextsole.com/storage/images/CV8480-300.png',
      'state':''
    },
    {
      'name': 'crocs',
      'price': 850,
      'color': 'brown',
      'brand': 'adidas',
      'image': 'https://assets.adidas.com/images/w_600,f_auto,q_auto/f544367209ae4494b5f0ab730140c5af_9366/Adilette_Clogs_White_FY8970_01_standard.jpg',
      'state':''
    },
    {
      'name': 'sneaker',
      'price': 549,
      'color': 'red',
      'brand': 'puma',
      'image': 'https://www.ikarinotekken.com/images/h/red%20puma%20sneakers-210lrh.jpg',
      'state':''
    }
  ];

  const addedToCart = []

  const forToCompare = []



  //function to render element that holds each from from product_array
  const renderAnItem = (item,container) => {
     
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

      const toCompare = document.createElement('button')
      toCompare.setAttribute('class', 'to_compare')
      toCompare.innerText = 'Compare'
      toCompare.addEventListener('click',()=>{
        if(forToCompare.length < 2){
          forToCompare.push(item)
          console.log(push)
          if(forToCompare.length > 1){
            if(forToCompare[0].name === forToCompare[1].name){
              forToCompare.splice(forToCompare[0])
              console.log(forToCompare[1])
            }
          }
      }else{
        forToCompare.shift()
        forToCompare.push(item)
      }}
      )

      const addTocart = document.createElement('button')
      addTocart.setAttribute('class','product_div_add')
      addTocart.innerText = '+'
      addTocart.addEventListener('click',()=>{
        addedToCart.push(item)
      })

      if(item.state === ""){
        addTocart.style.display = 'block'
      }else{
        addTocart.style.display = 'none'
      }

      container.appendChild(product_div);
      product_div.appendChild(productTop);
      productTop.appendChild(productImage)
      product_div.appendChild(productBottom);
      productBottom.appendChild(productBottomH2)
      productBottom.appendChild(productBottomP)
      productBottom.appendChild(productPrice)
      productPrice.appendChild(toCompare)
      productPrice.appendChild(addTocart)
  }



// using the product_array to render our products on start
  product_array.forEach(product => {
    renderAnItem(product, renderContainer);
  });

  // function to filter our brands
  const pickSpecificBrand = (item, brandName) => {
      const specificBrand = item.filter(product => product.brand === brandName)
      return specificBrand
  }

  //functions to addeventlisteners to buttons
  const initialFetch = (title,array,state,) => {
  title.addEventListener('click',()=>{
    renderContainer.innerHTML = '';
    array.forEach(product => {
        product.state = state
        renderAnItem(product, renderContainer);
      });
  })}

  const fetcher = (title,array,titletype,state) => {
  title.addEventListener('click',()=>{
    renderContainer.innerHTML = '';
    const adidasProducts = pickSpecificBrand(array,titletype)
    adidasProducts.forEach(product => {
        product.state = state
        renderAnItem(product, renderContainer);
      });
  })}

  // calling functions for our buttons
  initialFetch(allbrands,product_array,'')
  initialFetch(cart,addedToCart,'cart')
  fetcher(adidas,product_array,'adidas','')
  fetcher(nike,product_array,'nike','')
  fetcher(puma,product_array,'puma','')
  fetcher(underArmour,product_array,'underarmour','')
  fetcher(newBalance,product_array,'newbalance','')
  
// to compare
compareStatic.addEventListener('click',()=> {
  console.log(forToCompare)
})