import './App.css';
import './Header';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App() {
    return ( 
        <div className = "app" >
            <Header />
            <TinderCards />
            <SwipeButtons />
        {/* Footer */}
        </div>
    );
}

export default App;