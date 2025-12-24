import { useState } from 'react';
import styles from './styles.module.css';
import HorizontalRule from '../HorizontalRule/horizontalRule';
import psIcon from '/src/assets/images/Adobe_Photoshop_CC_icon.svg.png';
import illustratorIcon from '/src/assets/images/Adobe_Illustrator_CC_icon.svg.png';
import figmaIcon from '/src/assets/images/Figma-logo.svg';
import htmlIcon from '/src/assets/images/HTML-icon.png';
import cssIcon from '/src/assets/images/css-icon.png';
import jsIcon from '/src/assets/images/JS-icon.png';
import tsIcon from '/src/assets/images/Typescript_logo_2020.svg.png';
import reactIcon from '/src/assets/images/React-icon.svg.png';
import githubIcon from '/src/assets/images/github-icon.png';
import minusIcon from '/src/assets/images/Minus-icon.png';
import plusIcon from '/src/assets/images/Add-icon.png';

type AccordionProps = {
  title: string;
  content: string;
  skillIconSrc: string[];
};
function AccordionItem({ title, content, skillIconSrc }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.accordionItem}>
        <div
          className={styles.accTitleContainer}
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className={styles.accTitleName}>{title}</h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.accOpenBtn}
          >
            {isOpen ? (
              <img src={minusIcon} className={styles.minusBtn} />
            ) : (
              <img src={plusIcon} className={styles.addBtn} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className={styles.accordionContent}>
            <div className={styles.skillIconContainer}>
              {skillIconSrc.map((src, index) => (
                <img key={index} src={src} className={styles.skillIcon} />
              ))}
            </div>
            <p>{content}</p>
          </div>
        )}
      </div>
      <HorizontalRule />
    </>
  );
}

function AccordionSkill() {
  const items = [
    {
      title: 'Graphic Design',
      content:
        'As a graphic designer, I love turning ideas into visuals. Whether it is a brand identity or a social media campaign, I approach every design with curiosity and intention. For me, design is about emotion, balance, and the quiet details.',
      skillIconSrc: [psIcon, illustratorIcon],
    },
    {
      title: 'UI/UX Design',
      content:
        'To me, UI/UX design is something that makes a product feel human. My process begins with understanding the users story and ends with crafting intuitive and beautiful interfaces.',
      skillIconSrc: [figmaIcon],
    },
    {
      title: 'Frontend Development',
      content:
        'As a frontend developer, I obsess over clean code and the small moments of delight that make a product feel alive. I see development as an extension of design-a creative craft that bridges logic and aesthetics to build digital experiences that are both meaningful and memorable.',
      skillIconSrc: [htmlIcon, cssIcon, jsIcon, tsIcon, reactIcon, githubIcon],
    },
  ];
  return (
    <>
      <div className={styles.accordion}>
        {items.map((item, i) => (
          <AccordionItem key={i} {...item} />
        ))}
      </div>
    </>
  );
}
export default AccordionSkill;
