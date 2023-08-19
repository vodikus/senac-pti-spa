import './App.css';
import CardComida from './components/CardComida/CardComida';

function App() {
  const dados = [
    { foto: 'images/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg', titulo: 'Hamburgão Loko', valor: 77.65, id: 'burger-1' },
    { foto: 'images/eaters-collective-pLKgCsBOiw4-unsplash.jpg', titulo: 'Hamburgão Pirado', valor: 76.75, id: 'burger-2' },
    { foto: 'images/michele-blackwell-rAyCBQTH7ws-unsplash.jpg', titulo: 'Miojão Nervoso', valor: 99.9, id: 'miojo-1' },
    { foto: 'images/macarrao-instantaneo-miojo-0522-1400x800.jpg', titulo: 'Miojão Brabo', valor: 95.9, id: 'miojo-2' },
    { foto: 'images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg', titulo: 'Saladinha Ninja', valor: 150, id: 'salada-1' }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>SENAC PTI SPA - Delivery de Comidas Rango Bom</h1>
      </header>
      <section className="App-pratos">
        <div class="container text-center">
          <div class="row">
            { dados.map((obj, index) => 
            <div class="col pt-3">
              <CardComida produto={ obj } largura={300} altura={300} key={index}/>
            </div>
              )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
