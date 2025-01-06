import React from "react";
import TitleName from "../../../component/SectionTitle/TitleName";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useReviews from "../../../hook/useReviews";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews] = useReviews();

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <TitleName
          heading={"Testimonials"}
          subHeading={"What Our Clients Say"}
        />
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mt-8"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {review.name}
                </h2>
                <Rating
                  style={{ maxWidth: 200 }}
                  value={review.rating}
                  readOnly
                />
                <p className="mt-4 text-gray-600 text-sm md:text-base">
                  "{review.details}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
