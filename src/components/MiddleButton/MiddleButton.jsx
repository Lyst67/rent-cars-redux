import css from './MiddleButton.module.css';

export const MiddleButton = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick} type="button" className={css.button}>
        {children}
      </button>
    </>
  );
};
