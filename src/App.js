import Header from './components/Header'
import footer from './components/footer'
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {Container} from 'react-bootstrap'
// import configData from './products'
function App() {
    return (
        <Router>
            <Header/>
            <main className="py-3">
                <Container>
                    <Route path='/' component={HomeScreen} exact/>
                    <Route path='/product/:id' component={ProductScreen} />
                </Container>
            </main>


            <footer/>
        </Router>
    );
}

export default App;
