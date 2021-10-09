import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'The Coolest',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The coolest guy you can find. Also, these sections are a placeholder.
      </>
    ),
  },
  {
    title: 'Totally The Coolest',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Even if these might be placeholders, there's still content in here. I'm sure you
        are reading this right now. Head over to <code>Main Content</code> for my personal docs..
      </>
    ),
  },
  {
    title: 'Definitely The Coolest',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        There is also a lot of other cool stuff in here. Follow the given links
        in any section and you might find some of it out.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
