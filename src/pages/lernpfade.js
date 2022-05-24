import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Lernpfade() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Lernpfade ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">

            <main>

                <section>
                    sdsdf
                </section>
            </main>
        </Layout>
    );
}
