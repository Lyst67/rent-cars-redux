import css from './BigButton.module.css';

export const BigButton = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick} type="button" className={css.big_button}>
        {children}
      </button>
    </>
  );
};
