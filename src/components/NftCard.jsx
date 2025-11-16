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
      <section className="w-full h-full flex flex-col p-4 bg-neutral-blue-900 gap-5 rounded-xl shadow-neutral-blue-950 shadow-2xl">
        <div className="relative group">
          <img
            src={imgUrl}
            className="rounded-lg w-full h-auto object-cover aspect-square"
          />
          <div className="absolute inset-0 bg-primary-cyan-400/60 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out rounded-lg"></div>
          <img
            src={view_icon}
            className="absolute inset-0 m-auto w-12 h-12 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 border-b-2 border-neutral-blue-800 pb-4">
          <a
            href="#"
            className="text-2xl text-white font-bold hover:text-prbg-primary-cyan-400"
          >
            {title}
          </a>
          <p className="text-[16px] text-primary-blue-500 font-light tracking-wider">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-1">
              <img
                src={eth_icon}
                alt="eth"
                className="w-[11px] h-[18px] object-fit"
              />
              <span className="text-[12px] text-primary-cyan-400 font-bold">
                {price} ETH
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img
                src={clock_icon}
                alt="clock"
                className="w-4 h-4 object-cover"
              />
              <span className="text-[12px] text-primary-blue-500">{time}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={ownerPic}
            alt={owner}
            className="rounded-full w-5 h-5 object-cover border border-b-primary-blue-500"
          />
          <span className="text-[12px] text-primary-blue-500 font-bold tracking-wider">
            Creation of {"  "}
            <a
              className="text-white font-light hover:text-primary-cyan-400"
              href="#"
            >
              {owner}
            </a>
          </span>
        </div>
      </section>
    </>
  );
};
export default NftCard;
