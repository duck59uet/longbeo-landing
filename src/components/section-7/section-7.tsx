import clsx from "clsx";
import { FC } from "react";
import Slider from "react-slick";

export type Section7Props = {
  classes: {
    [key: string]: string
  }
}

const settings = {
  initialSlide: 0,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export const Section7: FC<Section7Props> = ({
  classes
}) => {
  return (
    <div className={classes.container}>
      <div className="flex flex-col items-center gap-8 mt-8">
        <h1 className={clsx(classes.h1, 'text-white')}>Tin tức</h1>
      </div>
      <div className="mt-10 mb-10 pb-0 md:pb-28 overflow-hidden">
        <div className="container mx-auto">
          <Slider {...settings}>
          </Slider>
        </div>
      </div>
    </div>
  );
}

const Item = ({
  classes,
  href,
  thumb,
  title,
  content
}: any) => {
  return (
    <a className={classes.item} href={href} target="_blank">
      <div className={classes.imageDiv}>
        <img src={thumb} alt="thumb" />
      </div>
      <div className={clsx('text-justify md:text-left', classes.title)}>{title}</div>
      <div className={clsx('text-justify md:text-left', classes.content)}>{content}</div>
      <a>Tìm hiểu thêm</a>
    </a>
  );
}