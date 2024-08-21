import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(-29.76deg,_rgba(11,_29,_38,_0),_#0b1d26)] flex flex-col items-start justify-start pt-16 px-20 pb-[603px] box-border gap-[198px] max-w-full z-[1] text-left text-lg text-wei font-gilroy mq800:gap-[49px] mq800:pt-[27px] mq800:pb-[255px] mq800:box-border mq1125:gap-[99px] mq1125:pl-10 mq1125:pr-10 mq1125:box-border mq1325:pt-[42px] mq1325:pb-[392px] mq1325:box-border ${className}`}
    >
      <div className="w-[1920px] h-[1200px] relative [background:linear-gradient(-29.76deg,_rgba(11,_29,_38,_0),_#0b1d26)] hidden max-w-full" />
      <header className="self-stretch flex flex-row items-end justify-between top-[0] z-[99] sticky gap-5 text-left text-mid text-wei font-gilroy">
        <nav className="m-0 flex flex-col items-start justify-end pt-0 px-0 pb-px mq800:hidden">
          <nav className="m-0 h-6 overflow-hidden shrink-0 flex flex-row items-start justify-start z-[2] text-left text-13xl text-wei font-chronicle-display">
            <a className="mt-[-6px] [text-decoration:none] relative tracking-[0.01em] capitalize font-bold text-[inherit] inline-block min-w-[32px]">
              M
            </a>
            <a className="mt-[-6px] [text-decoration:none] relative tracking-[0.01em] capitalize font-bold text-[inherit] inline-block min-w-[26px]">
              N
            </a>
            <a className="mt-[-6px] [text-decoration:none] relative tracking-[0.01em] capitalize font-bold text-[inherit] inline-block min-w-[24px]">
              T
            </a>
            <a className="mt-[-6px] [text-decoration:none] relative tracking-[0.01em] capitalize font-bold text-[inherit] inline-block min-w-[26px]">
              N
            </a>
          </nav>
        </nav>
        <nav className="m-0 w-[292px] flex flex-col items-start justify-end pt-0 pb-px pl-0 pr-[9px] box-border">
          <nav className="m-0 self-stretch h-[22px] relative text-left text-lg text-wei font-gilroy">
            <a className="[text-decoration:none] absolute top-[0px] left-[245px] font-bold text-[inherit] inline-block min-w-[38px] z-[2]">
              Blog
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[130px] font-bold text-[inherit] inline-block min-w-[75px] whitespace-nowrap z-[2]">
              About us
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[0px] font-bold text-[inherit] inline-block min-w-[90px] z-[2]">
              Equipment
            </a>
          </nav>
        </nav>
        <div className="flex flex-row items-start justify-start gap-2">
          <img
            className="h-6 w-6 relative object-cover min-h-[24px] z-[2]"
            loading="lazy"
            alt=""
            src="/icons-general--cart@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[66px] z-[2]">
              Account
            </a>
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1325:flex-wrap">
        <div className="h-[197px] w-[107px] flex flex-col items-start justify-start pt-[72px] px-0 pb-0 box-border">
          <div className="w-6 flex-1 flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
              <b className="w-[77px] relative inline-block [transform:_rotate(90deg)] shrink-0 z-[2]">
                Follow us
              </b>
            </div>
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[4]"
              loading="lazy"
              alt=""
              src="/instagram.svg"
            />
          </div>
        </div>
        <div className="w-[950px] flex flex-col items-start justify-start gap-8 max-w-full mq800:gap-4">
          <div className="flex flex-row items-start justify-start gap-8 text-accent mq450:flex-wrap mq450:gap-4">
            <div className="w-[72px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
              <div className="self-stretch h-0.5 relative bg-accent z-[2]" />
            </div>
            <div className="w-[212px] relative tracking-[6px] uppercase font-extrabold inline-block whitespace-nowrap z-[2]">
              A Hiking guide
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-69xl leading-[100px] capitalize font-semibold font-chronicle-display z-[2] mq800:text-25xl mq800:leading-[60px] mq450:text-7xl mq450:leading-[40px]">
            Be prepared for the Mountains and beyond!
          </h1>
          <div className="flex flex-row items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <b className="relative inline-block min-w-[94px] z-[2]">
                scroll down
              </b>
            </div>
            <img
              className="self-stretch w-4 relative max-h-full min-h-[24px] z-[2]"
              alt=""
              src="/iconnavigationarrow-downward-24px.svg"
            />
          </div>
        </div>
        <div className="w-[77px] flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border text-right">
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="w-[42px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-end justify-start gap-10">
                <b className="self-stretch relative inline-block min-w-[42px] z-[2]">
                  Start
                </b>
                <b className="relative inline-block min-w-[18px] z-[2]">01</b>
              </div>
            </div>
            <div className="h-60 w-[3px] relative z-[4]">
              <div className="absolute top-[0px] left-[0px] bg-gray-200 w-full h-full" />
              <div className="absolute top-[0px] left-[0px] bg-wei w-[3px] h-[60px] z-[1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
