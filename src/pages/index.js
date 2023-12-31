import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
    {
        title: "Dao Structure",
        imageUrl: "img/crown.png",
        description: (
            <>
                Learn how Adbongo Org is structured into different guilds and
                ranks and how you can make your journey from Apprentice to
                Master.
            </>
        ),
    },
    {
        title: "Save the World",
        imageUrl: "img/axe.png",
        description: (
            <>
                The handbook contains all the guidelines, tools and resources to
                help you execute a successfully SAVE Campaign.
            </>
        ),
    },
    {
        title: "Internal Ops",
        imageUrl: "img/wand.png",
        description: (
            <>
                How we collaborate and coordinate is the most important thing
                for Adbongo Org's success. Inside you'll find the tools and
                processes we use to keep organized.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames("col col--4", styles.feature)}>
            {imgUrl && (
                <div className='text--center'>
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <header
                className={classnames("hero hero--primary", styles.heroBanner)}
            >
                <div className='container'>
                    <h1 className='hero__title'>{siteConfig.title}</h1>
                    <p className='hero__subtitle'>{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                "button button--outline button--secondary button--lg",
                                styles.getStarted
                            )}
                            to={useBaseUrl("docs/overview")}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className='container'>
                            <div className='row'>
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
