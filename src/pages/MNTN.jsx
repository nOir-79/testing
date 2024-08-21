import Navigation1 from "../components/Navigation1";
import ContentContainer from "../components/ContentContainer";

const MNTN = () => {
  return (
    <div className="w-full relative shadow-[0px_0px_100px_rgba(0,_0,_0,_0.2)] bg-bg overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[120px] box-border gap-60 leading-[normal] tracking-[normal] mq800:gap-[60px] mq1125:gap-[120px]">
      <section className="w-full !m-[0] absolute top-[-400px] left-[0px] flex flex-row items-start justify-start max-w-full text-right text-lg text-wei font-gilroy">
        <img
          className="h-[1513px] flex-1 relative max-w-full overflow-hidden object-cover"
          alt=""
          src="/hg@2x.png"
        />
        <img
          className="h-6 w-6 absolute !m-[0] bottom-[581px] left-[80px] overflow-hidden shrink-0 z-[4]"
          loading="lazy"
          alt=""
          src="/twitter.svg"
        />
        <b className="w-[21px] absolute !m-[0] right-[115px] bottom-[625px] inline-block min-w-[21px] z-[4]">
          02
        </b>
        <b className="w-[21px] absolute !m-[0] right-[115px] bottom-[563px] inline-block min-w-[21px] z-[4]">
          03
        </b>
      </section>
      <section className="w-full h-[1422px] absolute !m-[0] top-[464px] right-[0px] left-[0px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[3]"
          alt=""
          src="/mg@2x.png"
        />
        <img
          className="absolute top-[304px] left-[0px] w-[1920px] h-[926px] object-cover z-[4]"
          alt=""
          src="/vg@2x.png"
        />
      </section>
      <section className="w-full h-[700px] absolute !m-[0] top-[1200px] right-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(11,_29,_38,_0),_#0b1d26_72.28%)] z-[5]" />
      <Navigation1 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <ContentContainer />
      </section>
    </div>
  );
};

export default MNTN;
