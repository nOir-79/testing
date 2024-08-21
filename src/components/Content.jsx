import { useMemo } from "react";
import PropTypes from "prop-types";

const Content = ({
  className = "",
  equipment,
  propWidth,
  gEtStarted,
  propWidth1,
  propHeight,
  whatLevelOfHikerAreYou,
  determiningWhatLevelOfHiker,
  propDisplay,
  propMinHeight,
  ifYesProvideInAnnexureIV,
}) => {
  const equipmentStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const gEtStartedStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  const determiningWhatLevelStyle = useMemo(() => {
    return {
      display: propDisplay,
      minHeight: propMinHeight,
    };
  }, [propDisplay, propMinHeight]);

  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start py-0 pl-[150px] pr-0 box-border gap-[114px] max-w-full z-[6] text-left text-221xl text-gray-100 font-gilroy mq800:gap-[57px] mq800:pl-[37px] mq800:box-border mq450:gap-7 mq1325:flex-wrap mq1325:pl-[75px] mq1325:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[140px] box-border min-w-[411px] min-h-[579px] max-w-full mq800:pb-[91px] mq800:box-border mq800:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <b
            className="w-60 absolute !m-[0] top-[-103px] left-[-150px] leading-[240px] inline-block mq800:text-77xl mq800:leading-[144px] mq450:text-41xl mq450:leading-[96px]"
            style={equipmentStyle}
          >
            {equipment}
          </b>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[27px] max-w-full z-[1] text-lg text-accent">
            <div className="flex flex-row items-start justify-start gap-6">
              <div className="w-[72px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                <div className="self-stretch h-0.5 relative bg-accent" />
              </div>
              <div
                className="w-[172px] relative tracking-[6px] uppercase font-extrabold inline-block whitespace-nowrap"
                style={gEtStartedStyle}
              >
                {gEtStarted}
              </div>
            </div>
            <h1 className="m-0 w-[555px] h-[154px] relative text-45xl font-semibold font-chronicle-display text-wei whitespace-pre-wrap inline-block max-w-full mq800:text-32xl mq450:text-19xl">
              {whatLevelOfHikerAreYou}
            </h1>
            <b
              className="self-stretch relative leading-[32px] text-wei"
              style={determiningWhatLevelStyle}
            >
              {determiningWhatLevelOfHiker}
            </b>
            <div className="flex flex-row items-start justify-start gap-4">
              <b className="relative inline-block min-w-[87px]">read more</b>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-6 h-4 relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/iconnavigationarrow-downward-24px-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[566px] relative max-h-full object-cover max-w-full mq1325:flex-1"
        loading="lazy"
        alt=""
        src={ifYesProvideInAnnexureIV}
      />
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  equipment: PropTypes.string,
  gEtStarted: PropTypes.string,
  whatLevelOfHikerAreYou: PropTypes.string,
  determiningWhatLevelOfHiker: PropTypes.string,
  ifYesProvideInAnnexureIV: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default Content;
