import { useState } from 'react';
import styles from './styles.module.css';
import HorizontalRule from '../HorizontalRule/horizontalRule';
type AccordionProps = {
  title: string;
  content: string;
};
function AccordionItem({ title, content }: AccordionProps) {
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
              <img
                src="/src/assets/images/Minus-icon.png"
                className={styles.minusBtn}
              />
            ) : (
              <img
                src="/src/assets/images/Add-icon.png"
                className={styles.addBtn}
              />
            )}
          </button>
        </div>

        {isOpen && (
          <div className={styles.accordionContent}>
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
        'As a graphic designer I love turning ideas into visuals. Whether it is a brand identity or a social media campaign, I approach every design with curiosity and intention. For me, design is about emotion, balance, and the quiet details.',
      skillIconSrc: [
        '/src/assets/images/Adobe_Photoshop_CC_icon.svg (1).png',
        '/src/assets/images/Adobe_Illustrator_CC_icon.svg (1).png',
      ],
    },
    {
      title: 'UI/UX Design',
      content:
        'UI/UX design to me is to make a product feel human.My process begins with understanding the users story and ends with crafting intuitive, beautiful interfaces that make their journey effortless.',
    },
    {
      title: 'Frontend Developement',
      content:
        'As a frontend developer, I obsess over clean code and the small moments of delight that make a product feel alive. I see development as an extension of design-a creative craft that bridges logic and aesthetics to build digital experiences that are both meaningful and memorable.',
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
