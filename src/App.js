import './App.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

function App() {
  return (
    <div className="App">
      {/* amazon logo */}
      <div className="header_logo">
        <EmojiNatureIcon className="header_logo_image" fontSize="large"></EmojiNatureIcon>
        <h2 classname="header_logo_title">Buggy Boutique</h2>
      </div>
      {/* search bar */}
      <div className="header_search">
        
      </div>
      {/* navigation bar */}
      <div className="header_nav_bar">
        <div className="nav_item">
          <span className="nav_itemOne">Hello Guest</span>
          <span className="nav_itemTwo">Sign In</span>
        </div> 
        <div className="nav_item">
          <span className="nav_itemOne">Your</span>
          <span className="nav_itemTwo">Shop</span>
        </div>
        <div className="nav_item">
          <AddShoppingCartIcon></AddShoppingCartIcon>
          <span className="nav_itemTwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
