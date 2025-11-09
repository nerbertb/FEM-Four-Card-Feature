import Card from './Card';
import cards from '../data/cards';

function Home() {
  function createCards(card) {
    return (
      <Card
        key={card.title}
        title={card.title}
        role={card.role}
        img={card.img}
        color={card.color}
      />
    );
  }

  return (
    <main className='flex justify-center my-14'>
      <div className="max-w-[375px] flex flex-col justify-center items-center gap-15">
        <div className="max-w-[316px] flex flex-col gap-4">
          <div>
            <h1 className="text-[24px]/[140%] tracking-[0.25px] poppins-extralight text-[#4D4F62]">
              Reliable, efficient delivery
            </h1>
            <h2 className="text-[24px]/[140%] tracking-[0.25px] poppins-semibold text-[#4D4F62]">
              Powered by Technology
            </h2>
          </div>
          <div>
            <p className="text[15px]/[140%] text-[#4D4F62] poppins-regular">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>
        </div>
        <section className='max-w-[314px] flex flex-col gap-8'>{cards.map(createCards)}</section>
      </div>
    </main>
  );
}

export default Home;
