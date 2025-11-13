import eth_icon from "../assets/imgs/icon-ethereum.svg";
import clock_icon from "../assets/imgs/icon-clock.svg";

const NftCard = ({
  imgUrl,
  title,
  description,
  price,
  time,
  owner,
  ownerPic,
}) => {
  return (
    <>
      <section className="w-full flex flex-col p-4 bg-[#16263D] gap-5 rounded-xl shadow-[#0C1729] shadow-2xl">
        <img src={imgUrl} alt={title} className="w-full h-auto object-cover rounded-2xl" />
        <div className="flex flex-col justify-center gap-5 border-b-2 border-[#20324A] pb-4">
          <h3 className="text-2xl text-[#F8FFFF] font-bold">{title}</h3>
          <p className="text-[16px] text-[#4A6180] font-light tracking-wider">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-1">
              <img src={eth_icon} alt="eth" className="w-[11px] h-[18px] object-fit" />
              <span className="text-[12px] text-[#32C0CC] font-bold">
                {price} ETH
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img
                src={clock_icon}
                alt="clock"
                className="w-4 h-4 object-cover"
              />
              <span className="text-[12px] text-[#7A91B1]">{time}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={ownerPic}
            alt={owner}
            className="rounded-full w-5 h-5 object-cover border border-[#A4ABB5]"
          />
          <span className="text-[12px] text-[#98AFD1]">
            Creation of <span className="text-[#BBCBDB]">{owner}</span>
          </span>
        </div>
      </section>
    </>
  );
};
export default NftCard;
