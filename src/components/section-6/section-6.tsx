import clsx from "clsx";
import { FC } from "react";

export type Section6Props = {
  classes: {
    [key: string]: string
  }
}

export const Section6: FC<Section6Props> = ({
  classes
}) => {
  return (
    <div className={classes.container}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <img src="/images/section-6/line.png" alt="image" />
          <div className={classes.icon}>
            <img src="/images/section-6/icon-001.png" alt="image" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 mt-8">
          <h1 className={classes.h1}>Growth Agency</h1>
          <div className={classes.body1}>
            All-star marketing team, having carried out successful marketing campaigns for more than 200+ projects
          </div>
          <a className={classes.btnLearnMore} href="https://calendly.com/tra-tran-spores/new-meeting?month=2025-01">Learn more</a>
        </div>
        <div className={clsx(classes.items, "flex flex-col md:flex-row flex-wrap justify-center items-center")}>
          <Item
            classes={classes}
            icon="/images/section-6/icon-002.png"
            title="Public Relations"
            content="Press releases, Interviews, Articles Partnerships and co-branding opportunities"
          />
          <img className="hidden md:block" src="/images/section-6/line2.png" alt="line" />
          <Item
            classes={classes}
            icon="/images/section-6/icon-003.png"
            title="Marketing"
            content="Social media management Growth hacking: shill, seed, booster, AMAs, CMs"
          />
          <img className="hidden md:block" src="/images/section-6/line2.png" alt="line" />
          <Item
            classes={classes}
            icon="/images/section-6/icon-004.png"
            title="BD & Fund Raising"
            content="Strategy partnerships, VC Fund-raising, NFT Sales, Pitchdeck"
          />
          <Item
            classes={classes}
            icon="/images/section-6/icon-005.png"
            title="Strategy/Advisory"
            content="Growth strategy Go-to-market strategy Tokenomics and structure Market Making"
          />
          <img className="hidden md:block" src="/images/section-6/line2.png" alt="line" />
          <Item
            classes={classes}
            icon="/images/section-6/icon-006.png"
            title="Event Organization"
            content="Launching event Hackathon Networking, Meetup…"
          />
        </div>
      </div>
    </div>
  );
}

const Item = ({
  classes,
  icon,
  title,
  content
}: any) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemIcon}>
        <img src={icon} alt="icon" />
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.content}>{content}</div>
    </div>
  );
}