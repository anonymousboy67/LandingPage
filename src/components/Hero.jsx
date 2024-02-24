const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>SHARE YOUR WILDEST FANTACY😁</h1>
          <p>
          See who else shares your fantasy by expressing it. 
          If mathces, you have similar thought processes.

          </p>
  
          <div className="hero-btn">
            <button>Create </button>
            <button className="secondary-btn">Share</button>
          </div>
  
          <div className="shopping">
            <p>Join with your friends</p>
  
            <div className="brand-icons">
              <img src="/public/twi.png" alt="twitter-logo" width={20} height={20}/>
              <img src="/public/insta.png" alt="insta-logo" width={20} height={20}/>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="./public/astronaut.jpg" alt="hero-image" width={400} height={400}/>
        </div>
      </main>
    );
  };
  
  export default HeroSection;