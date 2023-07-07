// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    DocsSidebar: [
        "installation",
        "5-minutes-tutorial",
        {
            type: "category",
            label: "Guides",
            collapsed: false,
            items: [
                "guides/syntax",
                "guides/aladino-language",
                "guides/built-ins/built-ins",
                "guides/commands/commands",
                "guides/extends/extends",
                "guides/merge-protection",
                "guides/message-report",
                "guides/metric-report"
            ],
        },
        "github-permissions",
        {
            type: "doc",
            id: "troubleshooting",
            label: "Troubleshooting",
        },
    ],
};

module.exports = sidebars;
