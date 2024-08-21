import Content from "./Content";
import PropTypes from "prop-types";

const ContentContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[1462px] flex flex-col items-start justify-start gap-[200px] max-w-full text-left text-221xl text-gray-100 font-gilroy mq800:gap-[50px] mq450:gap-[25px] mq1325:gap-[100px] ${className}`}
    >
      <Content
        equipment="01"
        gEtStarted="GEt Started"
        whatLevelOfHikerAreYou="What level of  hiker are you?"
        determiningWhatLevelOfHiker="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
        ifYesProvideInAnnexureIV="/01@2x.png"
      />
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 text-lg text-accent mq1325:flex-wrap">
        <img
          className="w-[566px] relative max-h-full object-cover max-w-full mq1325:flex-1"
          loading="lazy"
          alt=""
          src="/01-1@2x.png"
        />
        <div className="w-[632px] flex flex-col items-start justify-start pt-0 px-0 pb-[140px] box-border min-w-[632px] min-h-[579px] max-w-full mq800:pb-[91px] mq800:box-border mq800:min-w-full mq1325:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
            <div className="w-[450px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="h-[22px] w-[258px] relative tracking-[6px] uppercase font-extrabold inline-block z-[1]">
                Hiking Essentials
              </div>
            </div>
            <div className="w-[555px] flex flex-row items-start justify-start relative max-w-full text-221xl text-gray-100">
              <div className="h-60 w-[275px] absolute !m-[0] top-[-152px] left-[-150px]">
                <b className="absolute top-[0px] left-[0px] leading-[240px] inline-block w-full h-full mq800:text-77xl mq800:leading-[144px] mq450:text-41xl mq450:leading-[96px]">
                  02
                </b>
                <div className="absolute top-[113px] left-[150px] bg-accent w-[72px] h-0.5 z-[1]" />
              </div>
              <h1 className="m-0 h-[154px] flex-1 relative text-45xl font-semibold font-chronicle-display text-wei inline-block max-w-full z-[1] mq800:text-32xl mq450:text-19xl">
                Picking the right Hiking Gear!
              </h1>
            </div>
            <b className="self-stretch relative leading-[32px] inline-block text-wei min-h-[160px]">
              <p className="m-0">
                The nice thing about beginning hiking is that you don’t really
                need any special gear, you can probably get away with things you
                already have.
              </p>
              <p className="m-0">
                Let’s start with clothing. A typical mistake hiking beginners
                make is wearing jeans and regular clothes, which will get heavy
                and chafe wif they get sweaty or wet.
              </p>
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
      <Content
        equipment="03"
        propWidth="276px"
        gEtStarted="where you go is the key"
        propWidth1="358px"
        propHeight="22px"
        whatLevelOfHikerAreYou={`Understand Your Map & Timing`}
        determiningWhatLevelOfHiker="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
        propDisplay="inline-block"
        propMinHeight="160px"
        ifYesProvideInAnnexureIV="/01-2@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-13xl text-wei font-chronicle-display mq1125:flex-wrap">
        <div className="w-[356.1px] flex flex-col items-start justify-start gap-[122px] max-w-full mq450:gap-[61px]">
          <div className="w-[303px] flex flex-col items-start justify-start gap-6">
            <div className="flex flex-row items-start justify-start">
              <h2 className="m-0 relative text-inherit tracking-[0.01em] capitalize font-bold font-[inherit] inline-block min-w-[32px] mq800:text-7xl mq450:text-lgi">
                M
              </h2>
              <h2 className="m-0 relative text-inherit tracking-[0.01em] capitalize font-bold font-[inherit] inline-block min-w-[26px] z-[1] mq800:text-7xl mq450:text-lgi">
                N
              </h2>
              <h2 className="m-0 relative text-inherit tracking-[0.01em] capitalize font-bold font-[inherit] inline-block min-w-[24px] z-[2] mq800:text-7xl mq450:text-lgi">
                T
              </h2>
              <h2 className="m-0 relative text-inherit tracking-[0.01em] capitalize font-bold font-[inherit] inline-block min-w-[26px] z-[3] mq800:text-7xl mq450:text-lgi">
                N
              </h2>
            </div>
            <b className="self-stretch relative text-lg leading-[32px] font-gilroy">{`Get out there & discover your next slope, mountain & destination!`}</b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0 box-border max-w-full text-lg text-gray-200 font-gilroy">
            <div className="flex-1 relative leading-[32px] font-medium inline-block max-w-full">{`Copyright 2023 MNTN, Inc. Terms & Privacy`}</div>
          </div>
        </div>
        <div className="w-[566px] flex flex-row items-start justify-start gap-[212px] max-w-full text-5xl text-accent font-gilroy mq800:flex-wrap mq800:gap-[106px] mq450:gap-[53px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[125px]">
            <b className="relative leading-[32px] mq450:text-lgi mq450:leading-[26px]">
              More on The Blog
            </b>
            <div className="w-[183px] flex flex-col items-start justify-start gap-4 text-lg text-wei">
              <div className="relative leading-[32px] font-medium inline-block min-w-[104px]">
                About MNTN
              </div>
              <div className="self-stretch relative leading-[32px] font-medium">{`Contributors & Writers`}</div>
              <div className="relative leading-[32px] font-medium inline-block min-w-[99px]">
                Write For Us
              </div>
              <div className="w-[94px] relative leading-[32px] font-medium inline-block">
                Contact Us
              </div>
              <div className="relative leading-[32px] font-medium inline-block min-w-[113px]">
                Privacy Policy
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <b className="relative leading-[32px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
              More on MNTN
            </b>
            <div className="flex flex-col items-start justify-start gap-4 text-lg text-wei">
              <div className="relative leading-[32px] font-medium inline-block min-w-[81px]">
                The Team
              </div>
              <div className="w-[41px] relative leading-[32px] font-medium inline-block">
                Jobs
              </div>
              <div className="relative leading-[32px] font-medium inline-block min-w-[42px]">
                Press
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentContainer.propTypes = {
  className: PropTypes.string,
};

export default ContentContainer;
