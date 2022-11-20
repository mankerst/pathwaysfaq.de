import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Redirect} from "@docusaurus/router";
import Link from "@docusaurus/Link";





const FeatureList = [
  {
    title: 'Redeprojekte',
      link: '/docs/category/projekte',
    Svg: require('@site/static/img/undraw_things_to_say.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Lernpfade',
      link: '/docs/category/lernpfade',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Blog',
      link: '/blog',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>

      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
        <Link to={link}>

      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
        </Link>
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
