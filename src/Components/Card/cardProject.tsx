import styles from './styles.module.css';
type CardProps = {
  thumbnailSrc: string;
  siteLink: string;
  codeLink: string;
  projectTitle: string;
  stackUsed: string;
};
function Card({
  thumbnailSrc,
  siteLink,
  codeLink,
  projectTitle,
  stackUsed,
}: CardProps) {
  return (
    <>
      <div className={styles.projectCard}>
        <a href={siteLink} target="_blank">
          <img
            src={thumbnailSrc}
            alt="card-project-thumbnail"
            className={styles.thumbnail}
          />
        </a>

        <p className={styles.projectCardTitle}>
          {projectTitle} <span className={styles.stacks}>{stackUsed}</span>
        </p>
        <div className={styles.btnLinkContainer}>
          <a href={siteLink} target="_blank">
            <button className={styles.cardBtn}>View Live Site</button>
          </a>
          <a href={codeLink} target="_blank">
            <button className={styles.cardBtn}>View Code</button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
