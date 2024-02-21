//Mungo id product 
//price_1OmIqtL2M4tcUfgCqHLFlG4f

//Wave
//price_1OmIsrL2M4tcUfgC0uEEYoFb

//The ocean
//price_1OmItaL2M4tcUfgC6GE97nLU

//Perfect sky
//price_1OmIuBL2M4tcUfgCxEBuIW0g

const productsArray = [
    
    {
      id: "price_1OmIsrL2M4tcUfgC0uEEYoFb",
      title: 'Wave',
      href: '#',
      price: '30.00',
      imageSrc: '/2.jpg',
      imageAlt: 'Wave.',
    },
    {
        id: "price_1OmItaL2M4tcUfgC6GE97nLU",
        title: 'The ocean',
        href: '#',
        price: '40.00',
        imageSrc: '/3.jpg',
        imageAlt: 'Wave.',
      },
      {
        id: "price_1OmIqtL2M4tcUfgCqHLFlG4f",
        title: 'Mungo',
        href: '#',
        price: '50.00',
        imageSrc: '/comprimida.jpg',
        imageAlt: 'Mungo National Park.',
      },
      {
        id: "price_1OmIuBL2M4tcUfgCxEBuIW0g",
        title: 'Perfect sky',
        href: '#',
        price: '20.00',
        imageSrc: '/4.jpg',
        imageAlt: 'Wave.',
      }
    // More products...
  ];


    function getProductData(id) {
        let productData = productsArray.find(product => product.id === id);
        
        if (productData === undefined) {
          console.log('Product not found' + id);
          return undefined;
        }

        return productData;

    }

  export { productsArray, getProductData };