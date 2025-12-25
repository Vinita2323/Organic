import React from "react";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Deal1 from "../../assets/GrainsMillets/Deal1.png";
import Deal2 from "../../assets/GrainsMillets/Deal2.png";
import Deal3 from "../../assets/GrainsMillets/Deal3.png";
import Deal4 from "../../assets/GrainsMillets/Deal4.png";
import Deal5 from "../../assets/GrainsMillets/Deal5.png";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Organic Maize",
      image: Deal1,
      price: "₹149",
      unit: "/ 1kg",
      oldPrice: "₹239",
      stock: "Only 23 Left",
      discount: "37% OFF",
    },
    {
      id: 2,
      name: "Organic Wheat",
      image: Deal2,
      price: "₹799",
      unit: "/ 2kg",
      oldPrice: "₹1,269",
      stock: "Only 23 Left",
      discount: "37% OFF",
    },
    {
      id: 3,
      name: "Organic Rice",
      image: Deal3,
      price: "₹799",
      unit: "/ 5kg",
      oldPrice: "₹1,269",
      stock: "Only 23 Left",
      discount: "37% OFF",
    },
    {
      id: 4,
      name: "Organic Little Millet",
      image: Deal4,
      price: "₹799",
      unit: "/ 1kg",
      oldPrice: "₹1,269",
      stock: "Only 23 Left",
      discount: "37% OFF",
    },
    {
      id: 5,
      name: "Organic Foxtail Millet",
      image: Deal5,

      price: "₹799",
      unit: "/ 1kg",
      oldPrice: "₹1,269",
      stock: "Only 23 Left",
      discount: "37% OFF",
    },
  ];

  const allProducts = [...products, ...products];

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
      {/* Header Section */}
      <div className="mb-6">
        <p className="text-sm font-medium text-[#4CAF50] text-[21px]">
          Customer Deals
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          <h1 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#FA6060]">
            Deals of the Day
          </h1>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#EAB6B6] to-[#F2E0E0] text-white px-3 py-1 text-xs font-medium">
            <QueryBuilderIcon
              className="w-4 h-4 text-rose-600"
              fontSize="small"
            />
            Ends in 12:00:00
          </span>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
        {allProducts.map((product, index) => (
          <article
            key={`${product.id}-${index}`}
            className="group relative bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-4 flex flex-col hover:shadow-md transition-shadow"
          >
            <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-[#F81818] text-white text-[10px] font-medium px-2 py-1">
              {product.discount}
            </span>

            <div className="mt-8 h-36 w-full flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain"
              />
            </div>

            <h3 className="mt-3 text-center text-[17px] font-semibold tracking-tight text-slate-900">
              {product.name}
            </h3>

            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-medium px-1.5 py-0.5">
                <StarIcon sx={{ fontSize: 14 }} /> 5.0
              </span>
              <span className="text-slate-500 text-sm">(330)</span>
            </div>

            <p className="mt-2 text-xs font-medium text-rose-600  text-center">
              {product.stock}
            </p>

            <div className="mt-1 flex items-baseline justify-center">
              <p className="text-lg font-semibold text-black">
                {product.price}
              </p>
              <span className="text-xs text-black">{product.unit}</span>
              <span className="text-xs text-slate-400 line-through">
                {product.oldPrice}
              </span>
            </div>

            <button className="mt-3 inline-flex items-center justify-center rounded-full bg-[#3EB543E5] hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 transition-colors">
              Add To Cart
            </button>
          </article>
        ))}
      </div>
       <div className="mt-8 flex justify-end">
        <button className="rounded-full bg-[#3EB543E5] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
          See More
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
