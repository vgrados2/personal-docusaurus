import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>JavaScript</>,
        imageUrl: 'img/home/js.png',
        description: (
            <>
                JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como
                orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.
            </>
        ),
    },
    {
        title: <>TypeScript</>,
        imageUrl: 'img/home/typescript.png',
        description: (
            <>
                TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por
                Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados
                en clases.
            </>
        ),
    },
    {
        title: <>NESTJS</>,
        imageUrl: 'img/home/nestjs.png',
        description: (
            <>
                Un marco progresivo de Node.js para crear aplicaciones del lado del servidor eficientes, confiables y
                escalables.
            </>
        ),
    },
    {
        title: <>VUE</>,
        imageUrl: 'img/home/vue.png',
        description: (
            <>
                Vue.js es un marco JavaScript de código abierto Modelo-vista-modelo de vista para construir interfaces
                de usuario y aplicaciones de una sola página.
            </>
        ),
    },
    {
        title: <>ANGULAR</>,
        imageUrl: 'img/home/angular.png',
        description: (
            <>
                Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido
                por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.
            </>
        ),
    },
    {
        title: <>REACT</>,
        imageUrl: 'img/home/react.png',
        description: (
            <>
                PHP, acrónimo recursivo en inglés de PHP: Hypertext Preprocessor, es un lenguaje de programación de
                propósito general de código del lado del servidor originalmente diseñado para el preprocesado de texto
                plano en UTF-8.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">

                    <h1 className={classnames('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <img className="" src="img/home/workspace.png" alt=""/>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--warning button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/doc1')}>
                            Ver Documentación
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
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
