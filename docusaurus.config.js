module.exports = {
    title: 'Victor Grados',
    tagline: 'FrontEnd Developer',
    url: 'https://vgrados2.github.io/personal-docusaurus/',
    baseUrl: '/personal-docusaurus/',
    favicon: 'img/favicon.ico',
    organizationName: 'vgrados2', // Usually your GitHub org/user name.
    projectName: 'personal-docusaurus',
    themeConfig: {
        algolia: {
            apiKey: '3385b405855fe0135ae7cffc442936b5',
            indexName: 'vgrados2',
            // appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
            // algoliaOptions: {}, // Optional, if provided by Algolia
        },
        navbar: {
            title: 'Inicio',
            logo: {
                alt: '#vgrados',
                src: 'img/logo.svg',
            },
            links: [
                {
                    to: '/docs/quick-guides/quick-guide-git',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    href: 'https://github.com/vgrados2/personal-docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Guiás rápidas',
                            to: '/docs/quick-guides/quick-guide-git',
                        },
                        {
                            label: 'Guiá de estilos',
                            to: 'docs/doc1',
                        },
                    ],
                },
                {
                    title: 'Comunidad Docusaurus',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'Extras',
                    items: [
                        // {
                        //     label: 'Blog',
                        //     to: 'blog',
                        // },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/vgrados2/personal-docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} <b>Victor Grados</b>, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/vgrados2/personal-docusaurus/edit/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/vgrados2/personal-docusaurus/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                }
            },
        ],
    ],
    stylesheets: [
        {
            href: 'https://fonts.googleapis.com/css2?family=Galada&display=swap',
            type: 'text/css',
        },
    ],
};

