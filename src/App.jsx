import NftCard from "./components/NftCard";
import nft_1 from "./assets/imgs/nft-1.jpg";
import owner_pic_1 from "./assets/imgs/owner-1.png";
import nft_2 from "./assets/imgs/nft-2.jpg";
import owner_pic_2 from "./assets/imgs/owner-2.jpg";
import nft_3 from "./assets/imgs/nft-3.jpg";
import owner_pic_3 from "./assets/imgs/owner-3.jpg";
const list = [
  {
    imgUrl: nft_1,
    title: "Nebula Pulse #4421",
    description: "A swirling nebula sphere emitting pulsating cosmic energy.",
    price: "0.052",
    time: "4 days left",
    owner: "Orion Vale",
    ownerPic: owner_pic_1,
  },
  {
    imgUrl: nft_2,
    title: "Lunar Shard #9932",
    description: "A fragment of moonstone reflecting soft silver light.",
    price: "0.047",
    time: "1 day left",
    owner: "Selene Arc",
    ownerPic: owner_pic_2,
  },
  {
    imgUrl: nft_3,
    title: "Quantum Drift #7740",
    description: "A floating geometric core bending space-time around it.",
    price: "0.071",
    time: "6 days left",
    owner: "Kael Draven",
    ownerPic: owner_pic_3,
  },
  {
    imgUrl: nft_3,
    title: "Prism Bloom #2094",
    description: "A radiant blossom formed from interlocking prisms.",
    price: "0.058",
    time: "2 days left",
    owner: "Lyra Sune",
    ownerPic: owner_pic_1,
  },
  {
    imgUrl: nft_1,
    title: "Cyber Veil #3302",
    description: "A veil-like hologram shifting through neon grids.",
    price: "0.066",
    time: "3 days left",
    owner: "Riven Talos",
    ownerPic: owner_pic_2,
  },
  {
    imgUrl: nft_2,
    title: "Aurora Node #6180",
    description: "A glowing node channeling aurora beams across its surface.",
    price: "0.083",
    time: "5 days left",
    owner: "Eira Dawn",
    ownerPic: owner_pic_3,
  },
  {
    imgUrl: nft_1,
    title: "Eclipse Fragment #5127",
    description: "A rare fragment capturing the moment of a solar eclipse.",
    price: "0.064",
    time: "7 days left",
    owner: "Voss Meridian",
    ownerPic: owner_pic_1,
  },
  {
    imgUrl: nft_2,
    title: "Holo Drift #2288",
    description: "A soft holographic ribbon floating in a zero-gravity field.",
    price: "0.049",
    time: "1 day left",
    owner: "Mira Solis",
    ownerPic: owner_pic_2,
  },
  {
    imgUrl: nft_3,
    title: "Stellar Core #8401",
    description: "A miniature digital star radiating controlled plasma.",
    price: "0.095",
    time: "6 days left",
    owner: "Zenith Arlo",
    ownerPic: owner_pic_3,
  },
];
function App() {
  return (
    <>
      <main className="w-full lg:max-w-[1920px] bg-neutral-blue-950 flex flex-col items-center p-6">
        <section className="max-w-[375px] grid md:max-w-3xl lg:max-w-[1440px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full justify-center items-center gap-10">
          {list.map((p) => (
            <NftCard
              imgUrl={p.imgUrl}
              title={p.title}
              description={p.description}
              price={p.price}
              time={p.time}
              owner={p.owner}
              ownerPic={p.ownerPic}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
