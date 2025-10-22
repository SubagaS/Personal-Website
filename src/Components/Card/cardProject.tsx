import styles from './styles.module.css';
type CardProps = {
  thumbnailSrc: string;
};
function Card({ thumbnailSrc }: CardProps) {
  return (
    <>
      <img
        src={thumbnailSrc}
        alt="card-project-thumbnail"
        className={styles.thumbnail}
      />
      <button>View Live Site</button>
      <button>View Code</button>

    </>
  );
}
export default Card;
