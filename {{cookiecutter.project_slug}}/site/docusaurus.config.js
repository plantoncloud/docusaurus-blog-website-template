/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Blog',
    tagline: '{{cookiecutter.company_name}} Blog',
    url: 'http://docs/', //this is used in the algolia docsearch indexing
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: '{{cookiecutter.company_name}}', // Usually your GitHub org/user name.
    projectName: '{{cookiecutter.project_slug}}', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false
        },
        {%- if cookiecutter.algolia_enabled == "true" -%}
        algolia: {
            apiKey: '{{cookiecutter.algolia_api_key}}',
            appId: '{{cookiecutter.algolia_app_id}}',
            indexName: '{{cookiecutter.algolia_index_name}}',
        },
        {% endif %}
        navbar: {
            title: '',
            style: 'dark',
            logo: {
                alt: 'logo',
                src: 'img/logo.png',
            },
            items: [],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} {{cookiecutter.company_name}}.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                blog: {
                    routeBasePath: '/',
                    blogTitle: '{{cookiecutter.blog_title}}',
                    blogDescription: '{{cookiecutter.blog_description}}',
                    remarkPlugins: [[require('mdx-mermaid'), {mermaid: {theme: 'dark'}}]],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
