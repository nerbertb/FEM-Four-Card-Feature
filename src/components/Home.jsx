import Card from './Card';
import cards from '../data/cards';

function Home() {

    function createCards(card) {
        return <Card key={card.title} title={card.title} role={card.role} img={card.img}/>;
    }

    return ( 
        <main>
            <div>
                <h1>Reliable, efficient delivery</h1>
  <h2>Powered by Technology</h2>

  <p>Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful</p>
        
        <section>
        {cards.map(createCards)}
        </section>
            </div>
        </main>
     );
}

export default Home;