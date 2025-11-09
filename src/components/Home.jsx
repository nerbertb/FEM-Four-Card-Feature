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
      <div className="max-w-[375px] flex flex-col justify-center items-center gap-15 md:max-w-3xl">
        <div className="max-w-[316px] flex flex-col gap-4 md:max-w-[540px] md:text-center">
          <div className='md:max-w-[540px]'>
            <h1 className="text-[24px]/[140%] tracking-[0.25px] poppins-extralight text-[#4D4F62] md:text-4xl/[140%]">
              Reliable, efficient delivery
            </h1>
            <h2 className="text-[24px]/[140%] md:text-4xl/[140%] tracking-[0.25px] poppins-semibold text-[#4D4F62]">
              Powered by Technology
            </h2>
          </div>
          <div>
            <p className="text[15px]/[140%] text-[#4D4F62] poppins-regular text-center">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>
        </div>
        <section className='max-w-[314px] grid grid-cols-1 gap-8 md:max-w-[660px] md:grid-cols-2 md:auto-rows-auto md:place-items-center'>{cards.map((card, index) => {
            const pos = index === 0 ? 'md:col-span-2 md:row-start-1' : index === 1 ? 'md:col-start-1 md:row-start-2' : index === 2 ? 'md:col-start-2 md:row-start-2' : 'md:col-span-2 md:row-start-3';
            return (
                <div key={card.title} className={pos}>{createCards(card)}</div>
            )
        })}</section>
      </div>
    </main>
  );
}

export default Home;
