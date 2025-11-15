import eth_icon from "../assets/imgs/icon-ethereum.svg";
import clock_icon from "../assets/imgs/icon-clock.svg";
import view_icon from "../assets/imgs/icon-view.svg";
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
      <section className="w-full h-full flex flex-col p-4 bg-[#16263D] gap-5 rounded-xl shadow-[#0C1729] shadow-2xl">
        <div className="relative group">
          <img src={imgUrl} className="rounded-lg w-full h-auto object-cover aspect-square" />
          <div className="absolute inset-0 bg-[#32C0CC]/60 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out rounded-lg"></div>
          <img
            src={view_icon}
            className="absolute inset-0 m-auto w-12 h-12 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 border-b-2 border-[#20324A] pb-4">
          <a href="#" className="text-2xl text-[#F8FFFF] font-bold hover:text-[#32C0CC]">{title}</a>
          <p className="text-[16px] text-[#4A6180] font-light tracking-wider">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-1">
              <img
                src={eth_icon}
                alt="eth"
                className="w-[11px] h-[18px] object-fit"
              />
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
            Creation of <a className="text-[#BBCBDB] hover:text-[#32C0CC]" href="#">{owner}</a>
          </span>
        </div>
      </section>
    </>
  );
};
export default NftCard;
