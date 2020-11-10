import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Optimized for Cloud Environment',
    imageUrl: 'img/1.png',
    description: (
      <>
        QueryPie는 AWS, Microsoft Azure, Google Cloud Platform과 같은 클라우드
        환경에 최적화되어 있습니다. 단 몇 초만에 여러 클라우드 및 리전에 흩어진
        데이터베이스를 한 곳에서 관리할 수 있도록 동기화합니다.
      </>
    ),
  },
  {
    title: 'One-Click Installation',
    imageUrl: 'img/2.png',
    description: (
      <>
        Docker, Kubernetes를 비롯해 AWS(ECS, EKS), Google Cloud Platform(GKE),
        Microsoft Azure(AKS)와 같은 개발 환경에서는 복잡한 과정없이 단 몇분만에
        간편하게 QueryPie를 설치할 수 있습니다.
      </>
    ),
  },
  {
    title: 'All-In-One DB Solution',
    imageUrl: 'img/3.png',
    description: (
      <>
        데이터베이스 접근제어, 멀티 클라우드, 멀티 리전 동기화, SQL 실행 및 DB
        인증 기록 감사, 동적 / 정적 데이터 마스킹, Web SQL Editor
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
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
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
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
