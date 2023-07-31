"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const ProductPage = ({ params }) => {
  console.log(params.productId);
  const [productData, setProductData] = useState(null);
  const [currentThumbnail, setCurrentThumbnail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products/1");
      const data = await response.json();
      setProductData(data);
      setCurrentThumbnail(data.thumbnail);
    };

    fetchData();
  }, []);

  const changeImg = (img) => {
    setCurrentThumbnail(img);
  };
  if (productData) {
    return (
      <div>
        <h1>Product Page</h1>
        <Image src={currentThumbnail} width={320} height={320} />
        <div>
          {productData.images.map((img) => (
            <div
              key={img}
              onClick={() => {
                changeImg(img);
              }}
            >
              <Image src={img} width={60} height={60} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ProductPage;
