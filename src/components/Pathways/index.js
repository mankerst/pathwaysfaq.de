import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Redirect} from "@docusaurus/router";


const PathList = [
    {
        title: 'Dynamische Führung',
        Jpg: require('@site/static/img/pathways-badges-jpg/DynamicLeadershipPath.jpg').default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: 'Präsentationen Beherrschen',
        Jpg: require('@site/static/img/pathways-badges-jpg/PresentationMasteryPath.jpg').default,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
            </>
        ),
    },
    {
        title: 'Innovative Planung',
        Jpg: require('@site/static/img/pathways-badges-jpg/InnovativePlanningPath.jpg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
];



function Pathway({Jpg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={Jpg} className={styles.pathwayBadge} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function PathwayFullList() {
  return (
      <div>
          <section className={styles.features}>
              <div className="container">
                  <div className="row">
                      {PathList.map((props, idx) => (
                          <Pathway key={idx} {...props} />
                      ))}
                  </div>
              </div>
          </section>

      </div>


  );
}
