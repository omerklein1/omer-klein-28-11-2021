import Items from './items';
import Stores from './stores';
import './main.css';

function Main(props) {

  return (
        <div className="main">
            {props.isStoreList ? <Stores /> : <Items /> }
        </div>
    );
}

export default Main;
