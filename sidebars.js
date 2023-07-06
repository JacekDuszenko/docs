// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    DocsSidebar: [
        "introduction",
        {
            type: "category",
            label: "Getting Started",
            collapsed: false,
            items: [
                "getting-started/installation",
                "getting-started/configuration",
                "getting-started/playground",
                "getting-started/security",
            ],
        },
        {
            type: "category",
            label: "Guides",
            collapsed: false,
            items: [
                "guides/syntax",
                "guides/aladino-language",
                "guides/built-ins/built-ins",
                "guides/merge-protection",
                "guides/commands/commands",
                "guides/extends/extends",
                "guides/message-report",
                "guides/metric-report"
            ],
        },
        {
            type: "doc",
            id: "troubleshooting",
            label: "Troubleshooting",
        },
        {
            type: "doc",
            id: "contribute",
            label: "Contribute",
        },
    ],
};

module.exports = sidebars;
