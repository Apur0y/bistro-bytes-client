import React, { useState } from "react";
import FoodCard from "../../../component/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OrderTabs = ({ items }) => {
  // Define the number of items per page
  const itemsPerPage = 6;

  // Function to paginate the items array
  const paginate = (array, size) =>
    array.reduce((result, _, index) => {
      if (index % size === 0) result.push(array.slice(index, index + size));
      return result;
    }, []);

  // Paginated items
  const paginatedItems = paginate(items, itemsPerPage);

  // State to track the active page
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const handleSlideChange = (swiper) => {
    setCurrentPage(swiper.activeIndex + 1); // Swiper's activeIndex is 0-based
  };

  return (
    <div>
      <Swiper
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {paginatedItems.map((page, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="grid grid-cols-3 gap-4">
              {page.map((item) => (
                <FoodCard
                  key={item.id}
                  foodImg={item.image}
                  title={item.name}
                  description={item.recipe}
                  price={item.price}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button className="custom-prev text-xl font-bold px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          {"<"}
        </button>
        <span className="text-lg font-bold">
          Page {currentPage} of {paginatedItems.length}
        </span>
        <button className="custom-next text-xl font-bold px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          {">"}
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-2"></div>
    </div>
  );
};

export default OrderTabs;
