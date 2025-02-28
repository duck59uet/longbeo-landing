import { FC } from "react";

export type Section8Props = {
  classes: {
    [key: string]: string
  }
}


export const Section8: FC<Section8Props> = ({
  classes
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        <h1 className={classes.h1}>Want to launch your project on Spores Launchpad?</h1>
        <a className={classes.btn} href="https://docs.google.com/forms/d/1K_GPDM6RmYbz60GWyEy9IKXUyEGBrRqlTnmqU8Gd1cw/viewform?edit_requested=true#settings">Apply to Launch</a>
        <img className="md:absolute right-0 bottom-0" src="/images/section-8/img-001.png" alt="rocket image" />
      </div>
    </div>
  );
}