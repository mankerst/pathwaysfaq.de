import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Redirect} from "@docusaurus/router";





const FeatureList = [
  {
    title: 'Redeprojekte',
    Svg: require('@site/static/img/undraw_things_to_say.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Lernpfade',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
        <a href={'docs/pathways/intro'}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
        </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
      <div>
          <section className={styles.features}>
              <div className="container">
                  <div className="row">
                      {FeatureList.map((props, idx) => (
                          <Feature key={idx} {...props} />
                      ))}
                  </div>
              </div>
          </section>

      </div>


  );
}
