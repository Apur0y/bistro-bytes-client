import React from "react";
import TitleName from "../../../component/SectionTitle/TitleName";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useMenu from "../../../hook/useMenu";
import useReviews from "../../../hook/useReviews";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
  const [reviews] = useReviews();

  return (
    <div>
      <TitleName
        heading={"Testimonials"}
        subHeading={"What Our Client Says"}
      ></TitleName>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide>
            <h1> {review.name}</h1>
            <Rating
              style={{ maxWidth: 300 }}
              value={review.rating}
              
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
