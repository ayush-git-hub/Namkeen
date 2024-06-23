import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

//This is the data base here 
const featuredProducts = [
    {
      id: 1,
      name: "Ramji's Classic Mixture",
      description: "Our bestselling spicy and crunchy mix of various namkeens.",
      image: "https://t3.ftcdn.net/jpg/04/20/50/66/240_F_420506643_SC4gJifgr5GeWEkeMmfFSkLcVcUGYOrq.jpg",
      // price: 120,
      // weight: "500g"
    },
    {
      id: 2,
      name: "Ramji's Masala Peanuts",
      description: "Crunchy peanuts coated with a blend of spicy masalas.",
      image: "https://t3.ftcdn.net/jpg/05/60/34/38/240_F_560343882_0RNZdwIgBTgQ0hBDZNbuOmG4kcHCkzxy.jpg",
      // price: 80,
      // weight: "400g"
    },
    {
      id: 3,
      name: "Ramji's Spicy Sev",
      description: "Thin, crispy noodles made from gram flour and spices.",
      image: "https://t3.ftcdn.net/jpg/02/23/53/88/240_F_223538883_FFjlGMLk9A3GEZyn7yDyTDAPYvAU4hD9.jpg",
      // price: 60,
      // weight: "300g"
    },
    {
      id: 4,
      name: "Ramji's Aloo Bhujia",
      description: "Crispy potato noodles seasoned with traditional spices.",
      image: "https://t3.ftcdn.net/jpg/03/97/76/96/240_F_397769679_VMMWoQBCmQNcK5SAfamg2cFceYBSY2qu.jpg",
      // price: 100,
      // weight: "450g"
    },
    {
      id: 5,
      name: "Ramji's Moong Dal",
      description: "Crunchy and lightly spiced split green gram snack.",
      image: "https://t4.ftcdn.net/jpg/04/81/35/83/240_F_481358363_7YBjTNDYIUWk680qR97ow3crsU7gDYbv.jpg",
      // price: 90,
      // weight: "400g"
    },
    {
      id: 6,
      name: "Ramji's Khatta Meetha",
      description: "A perfect balance of sweet and tangy flavors in a crunchy mix.",
      image: "https://t3.ftcdn.net/jpg/04/20/41/54/240_F_420415456_uauvbjFQ8lQczt7ltKb3G6gpdzqmCptw.jpg",
      // price: 110,
      // weight: "500g"
    }
  ];
    
  const ProductCard = ({ product }) => {
    return (
      <div className="bg-[#fff] rounded-lg overflow-hidden shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-sm">{product.description}</p>
          {/* <div className="flex justify-between items-center mt-4">
            <span className="text-[#EB2227] font-bold text-lg">₹{product.price}</span>
            <span className="text-sm text-gray-500">{product.weight}</span>
          </div> */}
        </div>
      </div>
    );
  };
  

  const FeatureProducts = () => {

    return (
      <section className="bg-white p-16 rounded-3xl shadow-2xl relative overflow-hidden">
        <h2 className="text-5xl font-bold mb-12 text-[#EB2227] text-center relative inline-block">
          Featured Products
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FCEE1F]"></span>
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link 
            to="/products"
            className="bg-gradient-to-r from-[#FCEE1F] to-[#EB2227] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore All Products
          </Link>
        </div>
      </section>
    );
  };

  
export default FeatureProducts