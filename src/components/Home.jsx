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
    <main className="flex justify-center items-center my-14 md:my-20 lg:my-25.5 lg:mx-41">
      <div className="max-w-[375px] flex flex-col justify-center items-center gap-15 md:gap-18.5 md:max-w-3xl lg:max-w-[1140px]">
        <div className="max-w-[316px] flex flex-col justify-center items-center gap-4 md:max-w-[540px] md:text-center lg:max-w-[1114px]">
          <div className="md:max-w-[540px]">
            <h1 className="text-[24px]/[140%] tracking-[0.25px] poppins-extralight text-[#4D4F62] md:text-4xl/[140%]">
              Reliable, efficient delivery
            </h1>
            <h2 className="text-[24px]/[140%] md:text-4xl/[140%] tracking-[0.25px] poppins-semibold text-[#4D4F62]">
              Powered by Technology
            </h2>
          </div>
          <div className="md:max-w-[540px]">
            <p className="text[15px]/[140%] text-[#4D4F62] poppins-regular text-center">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>
        </div>
        <section className="max-w-[314px] grid grid-cols-1 gap-8 w-full md:max-w-[660px] md:grid-cols-2 lg:grid-cols-3 md:auto-rows-auto  lg:max-w-[1114px] place-items-center ">
          {cards.map((card, index) => {
            let pos =
              index === 0
                ? 'md:col-span-2 md:row-start-1 lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:row-span-2 lg:self-center'
                : index === 1
                ? 'md:col-start-1 md:row-start-2 lg:col-start-2 lg:row-start-1'
                : index === 2
                ? 'md:col-start-2 md:row-start-2 lg:col-start-2 lg:row-start-2'
                : 'md:col-span-2 md:row-start-3 lg:col-start-3 lg:row-start-1  lg:col-span-1  lg:row-span-2 lg:self-center';

            // if (index === 0) pos += ' lg:col-start-1 lg:row-start-1 lg:self-center';
            // if (index === 1) pos += ' lg:col-start-2 lg:row-start-1';
            // if (index === 2) pos += ' lg:col-start-2 lg:row-start-2';
            // if (index === 3) pos += ' lg:col-start-3 lg:row-start-1 lg:self-center';
            return (
              <div key={card.title} className={pos}>
                {createCards(card)}
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Home;
