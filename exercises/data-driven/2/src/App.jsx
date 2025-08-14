/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */


import Card from './components/Card.jsx'

function App() {
    return (
        <div className="contacts">
            <Card 
              img="/src/assets/images/mr-whiskerson.png" 
              name="Mr. Whiskerson" 
              phone="(212) 555-1234" 
              email="mr.whiskaz@catnap.meow"
            />
            <Card 
              img="/src/assets/images/fluffykins.png" 
              name="Mr. Fluffykins"
              phone="(212) 555-5678"  
              email="mr.fluffykins@catnap.meow"
            />
            <Card 
              img="/src/assets/images/felix.png" 
              name="Mr. Felix"
              phone="(212) 555-8765"
              email="mr.felix@catnap.meow"
            />
            <Card 
              img="/src/assets/images/pumpkin.png" 
              name="Mr. Pumpkin" 
              phone="(212) 555-4321" 
              email="mr.pumpkin@catnap.meow"
            />
        </div>
    )
}


export default App