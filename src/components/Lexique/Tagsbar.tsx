import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "@emotion/styled";
import { LEXIQUE_TAGS } from "../../datas/lexiqueData";
import { useTags } from "../../store/useTags";

function Tagsbar() {
  const swiperRef = useRef<SwiperType>();
  const { setTag } = useTags();

  const sliderSettings = {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <TagsbarGlobal>
      <MySwiperButton onClick={() => swiperRef.current?.slidePrev()}>
        <i className="fa-solid fa-caret-left"></i>
      </MySwiperButton>

      <Swiper
        breakpoints={sliderSettings}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {LEXIQUE_TAGS.map((item, index) => {
          return (
            <MySwiperItem key={index} onClick={() => setTag(item.tag)}>
              {item.tag}
            </MySwiperItem>
          );
        })}
      </Swiper>

      <MySwiperButton onClick={() => swiperRef.current?.slideNext()}>
        <i className="fa-solid fa-caret-right"></i>
      </MySwiperButton>
    </TagsbarGlobal>
  );
}

export default Tagsbar;

const TagsbarGlobal = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top: solid 0.5px rgb(220, 220, 220);
  border-bottom: solid 0.5px rgb(220, 220, 220);
`;

const MySwiperItem = styled(SwiperSlide)`
  background-color: rgb(10, 20, 100);
  border-radius: 40px;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 0.3px grey;
  padding: 5px 0px 5px 0px;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(10, 20, 100);
    box-shadow: inset 0px 0px 0px 1px rgb(10, 20, 100);
    font-weight: 500;
  }
`;

const MySwiperButton = styled.div`
  cursor: pointer;
  color: grey;
  background-color: white;

  &:nth-of-type(1) {
    margin-right: 20px;
  }

  &:nth-of-type(3) {
    margin-left: 20px;
  }
`;
