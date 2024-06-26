const homepage = {
      welcomeMessage: "Welcome to the Ultimate Furniture Shop!",
      promoText: "Summer Sale: Up to 50% Off!",
      sliderContentsimage : [
        {
          image : "https://www.ulcdn.net/media/Collection/listings/FHS_Ending_Sale_Top.png?1718951194"
      },
      {
        image : "https://www.ulcdn.net/media/Slideshow/SBI-Reliance_retail-voucher.png?1698753986"
      },
      {
        image : "https://www.ulcdn.net/media/Slideshow/slideshow-min.png?1717678505"
      }
      ]
  };
const footer = {
  logo: "./../public/logo.png",
  since: "Since 1998 To",
  contactInfo: {
    address: "1234 Furniture Ave, Pune City, Maha. India",
    phone: "+911122334455",
    email: "Furniture@gmail.com"
  },
  quicklinks :false,
  quicklinksList: [
    { 
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    },
    {
      name: "Terms & Conditions",
      link: "/terms"
    },
    {
      name: "Privacy Policy",
      link: "/privacy"
    }
  ],
  socialMedia: {
    facebook: "https://facebook.com/furnitureshop",
    twitter: "https://twitter.com/furnitureshop",
    instagram: "https://instagram.com/furnitureshop",
    linkedin : "https://linkedIn.com/furnitureshop"
  }
};

  const products = [
    {
      id: 0,
      name: "Modern Sofa",
      description: "PIYUSH HANDICRAFT sofa set finish type Natural Brown Leatherette 3 + 2 + 1 Sofa Set",
      price: "₹28,999.00 INR*",
      image: "https://rukminim2.flixcart.com/image/850/1000/kox8b680/sofa-set/k/n/q/brown-imitation-leather-md-ss-0161-3-2-1-mahimart-and-original-imag39z9uky7j8xp.jpeg?q=20&crop=false"
    },
    {
      id: 1,
      name: "Dining Table",
      description: "A large dining table made from solid wood.",
      price: "₹14,959.00 INR*",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/-4v23wlv7.jpg"
    },
    {
      id: 2,
      name: "Office Chair",
      description: "Ergonomic office chair with lumbar support.",
      price: "₹4,878.00 INR*",
      image: "https://shop.gkwretail.com/cdn/shop/products/OfficeChairUpholstered5CasterWheelsOfficeChair.jpg?v=1640772341"
    },
    {
      id: 3,
      name: "Sofa",
      description: "Three-seater fabric sofa with cushions.",
      price: "₹21,499.00 INR",
      image: "https://www.at-home.co.in/cdn/shop/products/Velma3strLSwithcushion.jpg?v=1664268691"
    },
    {
      id: 4,
      name: "Bookshelf",
      description: "Five-tier wooden bookshelf.",
      price: "₹6,349.00 INR",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mqYo4O1WGm5JEoBZpFJHvHObeUk9p_NoWQ&s"
    },
    {
      id: 5,
      name: "Coffee Table",
      description: "Glass top coffee table with wooden legs.",
      price: "₹3,499.00 INR",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjksZN1YNXHmVQZkcPHUzm7BVt-Y-EGRoqIA&s"
    },
    {
      id: 6,
      name: "Bed",
      description: "Queen size wooden bed with storage.",
      price: "₹18,999.00 INR",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/11/VE/RE/QT/149234625/710jbqtajml-sl1500--500x500.jpg"
    },
    {
      id: 7,
      name: "Wardrobe",
      description: "Two-door wooden wardrobe with mirror.",
      price: "₹12,799.00 INR",
      image: "https://images.woodenstreet.de/image/data/wardrobe/cambrey-double-door-wardrobe-with-mirror/revised/walnut/updated/new-logo/1.jpg"
    },
    {
      id: 8,
      name: "TV Stand",
      description: "Modern TV stand with storage cabinets.",
      price: "₹4,999.00 INR",
      image: "https://quatropi.com/cdn/shop/files/quatropi-sophie-tv-cabinet-stand-220cm-white-46051963502886.jpg?v=1709894677"
    },
    {
      id: 9,
      name: "Recliner",
      description: "Leather recliner chair with footrest.",
      price: "₹14,999.00 INR",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJZB58Re4J8rH8R5hflJOjnEOD0qgLAfGIavRt0lQ0IOYHAsw_eBLRhpK7YNUDb8HYfqqApCTtA7_BECF7t2Rkmq4uI8Jk__217-top90&usqp=CAE"
    },
    {
      id: 10,
      name: "Dining Chair",
      description: "Set of four upholstered dining chairs.",
      price: "₹7,899.00 INR",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRnk8wGt4N_ptsKtGc1Bg2J5NTI7C-ULGrBTlyRCv1Eg4JVhlkDeYDkxEEOCM6uKZfF4VC_7g3MnhKa4DWE4Wk69vWCcKi8UI3gnk3cLbo&usqp=CAE"
    },
    {
      id: 11,
      name: "Desk",
      description: "Modern wooden desk with drawers.",
      price: "₹8,499.00 INR",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnFsFbJjYQLHwVHIhVyOu4sBAEqmw8HCsz2MRzbi7hRcQ85auppZ8aK1xNufd6DWa81aHqFDtrJoSlKIdegpzNson2bXAVy5usEQt7TKAQ&usqp=CAE"
    }
  ];
  const sales = [
    {
      id: 0,
      productId: 4, 
      discount: 20, 
      salePrice: "₹5,349.00 INR", 
    },
    {
      id: 1,
      productId: 8, 
      discount: 15,
      salePrice: "₹3,840.00 INR*", 
    },
    {
      id: 2,
      productId: 5, 
      discount: 10, 
      salePrice: "₹3,149.00 INR*", 
    },
    
  ];
  const theme = {
    styles: {
      headingColor: "#2c3e50",
      backgroundColor: "#ecf0f1",
      footerBgColor : "#ffebcd",
      footerHeadingColor: "fff",
      footerSubHeadingColor: "#7e2121",
      cardHeadingColor: "#8e44ad",
      cardbgColor: "#e5e5e5",
      buttonBg : "#2c3e50",
      buttonColor : "#fff"
    }
  };
  
  export { homepage, products, sales, theme, footer };
  