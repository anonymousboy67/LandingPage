const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src="/classmate.png" alt="logo"  width={100} height={50}/>
        </div>
        <ul>
          <li href="#">Explore</li>
          <li href="#">Room</li>
          <li href="#">Join</li>
          <li href="#">About</li>
        </ul>
  
        <button>login</button>
      </nav>
    );
  };
  
  export default Navigation;