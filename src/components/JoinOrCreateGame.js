const JoinOrCreateGame = () => {
  localStorage.setItem("splitted","false")
  return (
    <div className='game-page'>
      <div className='choose'>Join or Create a game</div>
      <Link to={{ pathname: "/gamemode" }}>
        <button className='btn-return'>
          <img src={back} alt='' />
        </button>
      </Link>
      <Link to={{ pathname: "/" }}>
        <button className='btn-close'>
          <img src={cancel} alt='' />
        </button>
      </Link>
      <div className='mode'>
        <Link to='/join-game'>
          <button className='btn-mode'>Join Game</button>
        </Link>
        <Link to={{ pathname: "/create-a-game" }}>
          <button className='btn-mode'>Create Game</button>
        </Link>
      </div>
      <img className='right_vector' src={dayday} alt='Not Found' />
      <div className='help'>Help & FAQ</div>
      <img className='purple-vector' src={purple_vector} alt='Not Found' />
    </div>
  );
};


export default JoinOrCreateGame;