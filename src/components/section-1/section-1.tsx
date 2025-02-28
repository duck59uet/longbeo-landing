import { FC, useEffect, useState } from "react";

export type Section1Props = {
  classes: {
    [key: string]: string
  }
}

const Img = ({ name, imageName }: any) => {
  const [url, setUrl] = useState(`/images/section-1/networks/${imageName}-2.png`)

  // const onMouseEnter = () => {
  //   setUrl(`/images/section-1/networks/${imageName}-2.png`)
  // }

  // const onMouseOut = () => {
  //   setUrl(`/images/section-1/networks/${imageName}.png`)
  // }

  return (
    <img
      className="w-[60px] h-[60px]"
      src={url}
      // onMouseEnter={onMouseEnter}
      // onMouseOut={onMouseOut}
      alt={name}
    />
  )
}

export const Section1: FC<Section1Props> = ({
  classes
}) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is below a certain threshold (e.g., 768 pixels)
      const mobileThreshold = 768;
      setIsMobile(window.innerWidth < mobileThreshold);
    };

    // Initial check on mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-3 items-center mt-3 md:mt-32">
          <div className="flex flex-col gap-6 md:gap-10 mt-6 md:mt-0 w-full md:w-2/3">
            <h1 className={classes.caption}>Tăng Cường Khán Giả Nâng Tầm Nội Dung</h1>
            <div className={classes.body1}>Với hơn 5 năm kinh nghiệm trong ngành MMO, cùng đội ngũ lập trình viên chuyên nghiệp, ứng dụng công nghệ mới. Chúng tôi sản xuất các sản phẩm với chất lượng tốt nhất và giá cả cạnh tranh.</div>
            <div>
              <a className={`${classes.btnLaunchpad} text-white`} href="https://dichvumat.com" target="_blank">Khám phá App</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Item = ({
  classes,
  value,
  desc,
}: any) => {
  return (
    <div className={classes.item}>
      <h3>{value}</h3>
      <div>{desc}</div>
    </div>
  );
}