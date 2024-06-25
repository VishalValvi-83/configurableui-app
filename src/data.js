const homepage = {
      welcomeMessage: "Welcome to the Ultimate Furniture Shop!",
      featuredProducts: [0, 1, 2],
      promoText: "Summer Sale: Up to 50% Off!"
    
    
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
      description: "A comfortable modern sofa with clean lines.",
      price: "$499",
      image: "/images/sofa.jpg"
    },
    {
      id: 1,
      name: "Dining Table",
      description: "A large dining table made from solid wood.",
      price: "$799",
      image: "/images/dining_table.jpg"
    },
    {
      id: 2,
      name: "Office Chair",
      description: "Ergonomic office chair with lumbar support.",
      price: "$199",
      image: "/images/office_chair.jpg"
    }
  ];
  
  const theme = {
    styles: {
      headingColor: "#2c3e50",
      backgroundColor: "#ecf0f1",
      footerBgColor : "#ffebcd",
      footerHeadingColor: "fff",
      footerSubHeadingColor: "#7e2121"
    }
  };
  
  export { homepage, products, theme, footer };
  