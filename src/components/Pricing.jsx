import React from "react";
import { RxDividerVertical } from "react-icons/rx";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Pricing = () => {
  const card = [
    {
      id: 1,
      planType: "Bronze",
      planTypeStyle: "text-[#2E4F4F]",
      planPrice: 7.99,
      planSpan: "/month",
      planStyle: "bg-[#84D2C5]",
      planFeature1: "No Ads",
      planFeature2: "Unlimited Stream Time",
      planFeature3: "20 Monthly downloads",
      planBtn: "Choose Plan",
      planBtnStyle:
        "border text-[#2E4F4F] border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-[#84D2C5]",
    },
    {
      id: 2,
      planType: "Gold",
      planTypeStyle: "text-[#C9EEFF]",
      planPrice: 12.99,
      planSpan: "/month",
      planStyle: "bg-[#00425A]",
      planFeature1: "No Ads",
      planFeature2: "Unlimited Stream Time",
      planFeature3: "100 Monthly downloads",
      planBtn: "Choose Plan",
      planBtnStyle:
        "bg-black text-[#C9EEFF] hover:bg-transparent hover:border hover:border-[#C9EEFF]",
    },
    {
      id: 3,
      planType: "Silver",
      planTypeStyle: "text-[#EDDBC7]",
      planPrice: 10.99,
      planSpan: "/month",
      planStyle: "bg-[#A7727D]",
      planFeature1: "No Ads",
      planFeature2: "Unlimited Stream Time",
      planFeature3: "50 Monthly downloads",
      planBtn: "Choose Plan",
      planBtnStyle:
        "border text-[#EDDBC7] border-[#EDDBC7] hover:bg-[#EDDBC7] hover:text-[#A7727D]",
    },
  ];

  return (
    <>
      <div className="px-3 text-white py-2 my-3">
        <div className="flex items-center mb-3">
          <span className="text-xl">
            <RxDividerVertical className="text-xl text-[#00425A]" size={25} />
          </span>
          <h3 className="font-bold text-lg">Our Pricing Plans</h3>
        </div>
        <div className=" mx-auto sm:w-full px-3">
          <Swiper
            modules={[Autoplay, Pagination]}
            breakpoints={{
              768: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
            }}
          
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
          >
            {card.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div
                  className={`w-full sm:w-[240px] md:w-[250px] h-[300px] sm:h-[280px] ${plan.planStyle} px-2 pt-6 pb-12 rounded`}
                >
                  <div className="border-b text-center">
                    <h5 className={`${plan.planTypeStyle} text-2xl font-bold`}>
                      {plan.planType} Plan
                    </h5>
                    <h2 className="text-2xl font-bold">
                      ${plan.planPrice}
                      <span className="text-sm">{plan.planSpan}</span>
                    </h2>
                  </div>
                  <ul className="my-3 ml-4">
                    <li className="flex items-center gap-x-2">
                      {" "}
                      <span>
                        <IoCheckmarkDoneOutline size={20} />
                      </span>{" "}
                      {plan.planFeature1}
                    </li>
                    <li className="flex items-center gap-x-2">
                      <span>
                        <IoCheckmarkDoneOutline size={20} />
                      </span>
                      {plan.planFeature2}
                    </li>
                    <li className="flex items-center gap-x-2">
                      <span>
                        <IoCheckmarkDoneOutline size={20} />
                      </span>
                      {plan.planFeature3}
                    </li>
                  </ul>
                  <div className="grid place-items-center mt-12 sm:mt-8">
                    <button
                      className={`${plan.planBtnStyle} font-semibold px-4 py-2 mt-3 inline-block transition rounded`}
                    >
                      {plan.planBtn}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Pricing;
