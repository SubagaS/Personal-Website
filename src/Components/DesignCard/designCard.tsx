import styles from './styles.module.css';
type DesignCardProps = {
  designImgSrc: string;
  designLink: string;
  designTitle: string;
  designSkills: string;
};
function DesignCard({
  designImgSrc,
  designLink,
  designTitle,
  designSkills,
}: DesignCardProps) {
  return (
    <>
      <div className={styles.designCardContainer}>
        <div className={styles.designImgContainer}>
          <img
            src={designImgSrc}
            alt="project-cover"
            className={styles.designImg}
          />
          <div className={styles.designSkills}>
            <p>{designSkills}</p>
          </div>
        </div>
        <div className={styles.designTitleContainer}>
          <p className={styles.designTitle}>{designTitle}</p>

          <a href={designLink} target="_blank" className={styles.designLink}>
            <button className={styles.designProjectBtn}>
              View project
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default DesignCard;
