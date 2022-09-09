function BurgerButton(props) {
  const { handleClickBurger } = props;

  return (
    <div className="burger-button-container" onClick={handleClickBurger}>
      <div className="burger-line top-line"></div>
      <div className="burger-line middle-line"></div>
      <div className="burger-line bottom-line"></div>
    </div>
  );
}

export default BurgerButton;
