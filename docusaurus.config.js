module.exports = {
    title: "Adbongo Guide",
    tagline: "Magical Internet Organization Grimoire",
    url: "http://guide.adbongo.io/",
    baseUrl: "/",
    favicon: "img/sd-icon.png",
    onBrokenLinks: "ignore",
    organizationName: "Adbongo", // Usually your GitHub org/user name.
    projectName: "Mio-grimoire", // Usually your repo name.
    themeConfig: {
        navbar: {
            logo: {
                alt: "Adbongo Logo",
                src: "img/sd-icon.png",
            },
            items: [
                // { to: "docs/raidCentral", label: "Handbook", position: "left" },
                // {
                //   to: "docs/raidCentral#member-registry",
                //   label: "Member Registry",
                //   position: "left"
                // },
                {
                    href: "https://www.adbongo.io",
                    label: "Main Site",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            // links: [
            //   {}, // keep this empty object in so the footer objects are "centered" in desktop view
            //   {
            //     title: "Our Presence",
            //     items: [
            //       {
            //         label: "Homepage",
            //         href: "https://www.adbongo.io"
            //       },
            //       {
            //         label: "DAO",
            //         href: "https://twitter.com/adbongogroupllc"
            //       },
            //       {
            //         label: "Twitter",
            //         href: "https://twitter.com/adbongogroupllc"
            //       },
            //       {
            //         label: "GitHub",
            //         href: "https://github.com/save-dao"
            //       }
            //     ]
            //   }
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} Adbongo`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/raid-guild/handbook/edit/master/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
