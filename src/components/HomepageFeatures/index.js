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
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Lernpfade',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
        <a href={'docs/intro'}>
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
          <section>
              <div className="container">
                  <div className="row">
                      <div className={"col col--12"}>
                          Du möchtest einen Gastartikel schreiben? <br />

                          Kein Problem, nimm gerne
                          Kontakt auf (bitte nur relevanter Content)
                      </div>
                  </div>
              </div>
          </section>
      </div>


  );
}
