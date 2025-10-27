import styles from './styles.module.css';
type hrProps = {
  width?: string;
};

function HorizontalRule({ width }: hrProps) {
  return (
    <>
      <hr className={styles.hrTag} style={{ width }} />
    </>
  );
}
export default HorizontalRule;
