import productImageOne from "../assets/images/image-product-1.jpg";
import productImageTwo from "../assets/images/image-product-2.jpg";
import productImageThree from "../assets/images/image-product-3.jpg";
import productImageFour from "../assets/images/image-product-4.jpg";
import thumbNailOne from "../assets/images/image-product-1-thumbnail.jpg";
import thumbNailTwo from "../assets/images/image-product-2-thumbnail.jpg";
import thumbNailThree from "../assets/images/image-product-3-thumbnail.jpg";
import thumbNailFour from "../assets/images/image-product-4-thumbnail.jpg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import { useState } from "react";

const ProductDetail = () => {
  const [image, setImage] = useState(productImageOne);
  const [activeThumb, setActiveThumb] = useState(1);

  const thumbnails = [
    { src: thumbNailOne, image: productImageOne },
    { src: thumbNailTwo, image: productImageTwo },
    { src: thumbNailThree, image: productImageThree },
    { src: thumbNailFour, image: productImageFour },
  ];

  const handleThumbnailClick = (index, productImage) => {
    setActiveThumb(index);
    setImage(productImage);
  };

  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={image}
            className="w-[400px] h-[400px] mb-4 mx-auto rounded-lg transition-all duration-200 object-cover aspect-square"
            alt="product-image"
          />
          <div className="flex items-center justify-center gap-6">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb.src}
                alt={`thumbnail-${index + 1}`}
                className={`w-20 rounded-lg cursor-pointer duration-200 transition-all border-4 ${activeThumb === index + 1 ? "border-orange-500 opacity-80" : "border-transparent"}`}
                onClick={() => handleThumbnailClick(index + 1, thumb.image)}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="max-w-md pt-16">
            <h1 className="text-neutral-grayish-blue mb-5 uppercase text-sm">
              Sneaker Company
            </h1>
            <h2 className="text-4xl mb-8 font-bold">
              Fall Limited Edition Sneakers
            </h2>
            <p className="text-neutral-grayish-blue mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              dolores ducimus facilis, id nisi officiis optio quidem quod
              repellendus unde? Lorem ipsum dolor llendus unde? Lorem ipsum
              dolor.
            </p>
            <div className="flex items-center gap-5 mb-1">
              <span className="text-xl font-bold">$ 125.00 </span>
              <span className="text-sm text-white bg-black px-2 py-0.5 text-center rounded-md">
                50 %
              </span>
            </div>
            <div className="mb-3">
              <span className="line-through text-neutral-grayish-blue">
                $ 250.00{" "}
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="inline-flex  px-10 py-2 rounded-md justify-evenly items-center gap-5 bg-neutral-light-grayish-blue ">
                <button>
                  <img src={minus} alt="" className="" />
                </button>
                <span className="text-sm">0</span>
                <button>
                  <img src={plus} alt="" className="" />
                </button>
              </div>
              <div className="">
                <button className="bg-primary-orange flex items-center gap-2 px-10 py-2 rounded-md">
                  <img src={cartIcon} alt="" className="w-4  h-4" />
                  <span className="text-sm">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
