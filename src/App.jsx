import NftCard from "./components/NftCard";
import pic from "./assets/imgs/image-equilibrium.jpg";
import owner_pic from "./assets/imgs/image-avatar.png";
function App() {
  return (
    <>
      <main className="w-full max-w-[1920px] bg-[#0D1A2D] flex flex-col items-center p-6">
        <section className="max-w-[375px] flex lg:max-w-[1440px] lg:flex-row flex-col w-full justify-center items-center gap-10">
          <NftCard
            imgUrl={pic}
            title="Equilibrium #3249"
            description="Our Equilibrium collection promotes balance and calm."
            price="0.041"
            time="3 days left"
            owner="Jules Wyvern"
            ownerPic={owner_pic}
          />
          <NftCard
            imgUrl={pic}
            title="Equilibrium #3249"
            description="Our Equilibrium collection promotes balance and calm."
            price="0.041"
            time="3 days left"
            owner="Jules Wyvern"
            ownerPic={owner_pic}
          />
          <NftCard
            imgUrl={pic}
            title="Equilibrium #3249"
            description="Our Equilibrium collection promotes balance and calm."
            price="0.041"
            time="3 days left"
            owner="Jules Wyvern"
            ownerPic={owner_pic}
          />
        </section>
      </main>
    </>
  );
}

export default App;
