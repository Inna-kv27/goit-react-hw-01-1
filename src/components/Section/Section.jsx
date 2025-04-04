import style from '../Section/Section.module.css';

export const Section = ({ children }) => {
  return (
    <section className={style.section}>{children}</section>
  );
};

export default Section;
