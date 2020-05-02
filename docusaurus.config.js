module.exports = {
    title: 'Victor Grados',
    tagline: 'Front-end Developer',
    url: 'https://vgrados2.github.io/personal-docusaurus/',
    baseUrl: '/personal-docusaurus/',
    favicon: 'img/favicon.ico',
    organizationName: 'vgrados2', // Usually your GitHub org/user name.
    projectName: 'personal-docusaurus',
    themeConfig: {
        algolia: {
            apiKey: 'api-key',
            indexName: 'index-name',
            appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
            algoliaOptions: {}, // Optional, if provided by Algolia
        },
        navbar: {
            title: 'Inicio',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            links: [
                {
                    to: 'docs/doc1',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {to: 'blog', label: 'Blog', position: 'left'},
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
                            label: 'Style Guide',
                            to: 'docs/doc1',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
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
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/vgrados2/personal-docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Documentacion, Inc. Built with Docusaurus.`,
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

