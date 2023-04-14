export const message = {
  logo: "irisnet.png",
  homeBanner: [
    {
      title: "IRIS Hub 1.2",
      subTitle: "",
      description:
        "An Interchain NFT Hub between public blockchains and consortium blockchains ",
      leftBtnLabel: "More Details",
      leftBtnLink: "https://twitter.com/irisnetwork",
      rightBtnLabel: "CoinMarketCap",
      rightBtnLink: "https://www.coinmarketcap.com/currencies/irisnet/",
      bgImage: require("../../assets/pages/banner/shengtai_banner.png"),
      padImage: require("../../assets/pages/banner/shengtai_banner.png"),
    },
    {
      title: "IRIS Hub 1.2",
      subTitle: "Mainnet Upgraded",
      description: "Enabled TIBC protocol and enhanced NFT features",
      leftBtnLabel: "Announcement",
      leftBtnLink: "https://medium.com/irisnet-blog/iris-hub-1-2-mainnet-has-been-successfully-upgraded-8f223216140",
      rightBtnLabel: "About TIBC",
      rightBtnLink:
        "https://medium.com/irisnet-blog/introducing-tibc-the-terse-inter-blockchain-communication-c88f73dbac75",
      bgImage: require("../../assets/pages/banner/tibc_image.png"),
      padImage: require("../../assets/pages/banner/tibc_image.png"),
    },
    // {
    //   title: "Bug Bounty Program IV",
    //   subTitle: "",
    //   description:
    //     "Jointly make sure the upgraded mainnet with TIBC module integrated to remain robust",
    //   leftBtnLabel: "Join Program",
    //   leftBtnLink:
    //     "https://medium.com/irisnet-blog/announcing-irisnet-bug-bounty-program-iv-48e2ee885334",
    //   rightBtnLabel: "About TIBC",
    //   rightBtnLink:
    //     "https://medium.com/irisnet-blog/introducing-tibc-the-terse-inter-blockchain-communication-c88f73dbac75",
    //   bgImage: require("../../assets/pages/banner/bugbounty_image.png"),
    //   padImage: require("../../assets/pages/banner/bugbounty_image.png"),
    // },
    {
      title: "Join Interchain Space",
      subTitle: "",
      description:
        "Accelerate the Development of the IRISnet Interchain Ecosystem",
      leftBtnLabel: "Apply for Tech-Grants",
      leftBtnLink:
        " https://github.com/irisnet/iris-foundation/blob/master/funding/iris-foundation-tech-grants-program.md",
      rightBtnLabel: "Mainnet Faucet",
      rightBtnLink:
        "https://stakely.io/faucet/irisnet-iris",
      bgImage: require("../../assets/pages/banner/Techgrant.png"),
      padImage: require("../../assets/pages/banner/Techgrant_pad.png"),
    },
  ],
  thirdBanner: {
    img: require("../third_en.png"),
    img1000: require("../third_en_1000.png"),
    img320: require("../third_zh_320.png"),
    descriptionF: "Cross-chain Manage your NFTs",
    descriptionT: "through Interchain Accounts",
    btnLabel: "CoinMarketCap",
    btnLink: "https://www.coinmarketcap.com/zh/currencies/irisnet/",
  },
  irishub: {
    title: "IRISHUB 2.0",
    secondTitle:
      "Unleash the power of EVM, build diverse NFT dApps and more",
    description: "– A BPoS Blockchain That Is Self-evolutionary",
    btn: {
      prepare: "Rainbow Wallet",
      proposal: "Explorer",
      tooltip: "Coming Soon",
    },
    proposal: {
      title: "Proposals",
      list: [
        {
          proposalId: "Proposal #1",
          title: "IRIS Hub 1.1 Mainnet Upgrade",
          btnLabel: "Vote",
          link: "",
        },
        {
          proposalId: "Proposal #2",
          title: "IBC Enabled",
          btnLabel: "Vote",
          link: "",
        },
      ],
    },
    upGrade: {
      title: "Prepare for Upgrade",
      testnetTitle: "Participate in the Testnet",
      testnetDescription: "For the Connected Interchain World",
      joinTestnet: "Prepare",
      joinTestnetLink: "",
    },
    prepare: {
      maneuverTitle: "Bifrost Testnet",
      maneuverDescription:
        "The specialized testnet dedicated to test IBC and functions like AMM",
      learnBifrost: "Learn Bifrost",
      link:
        "https://medium.com/irisnet-blog/bifr%C3%B6st-irisnets-bridge-to-a-new-era-af32960dd88e",
      guide: {
        title: "Documentations",
        list: [
          {
            iconName: "icon-jiaoyisuo",
            title: "Exchanges",
            description:
              "Exchanges should test the applications/clients in this staging environment to familiarize with the migration process",
            linkLabel: "Migration Guide for Exchanges",
            link:
              "https://github.com/irisnet/mainnet/blob/master/upgrade/v1.0.0/Migration-Guide-For-Exchange.md",
          },
          {
            iconName: "icon-qianbaoliulanqi",
            title: "Wallets & Explorers",
            description:
              "Wallets and Explorers should fully test to ensure to provide stable services after the upgrade",
            linkLabel: "Migration Guide for Wallets & Explorers",
            link:
              "https://github.com/irisnet/irishub/tree/master/docs/endpoints",
          },
          {
            iconName: "icon-yanzhengren",
            title: "Validators",
            description:
              "IRIS Hub mainnet validators are recommended to participate in the simulated upgrade and help run the Bifrost-2 to familiarize with the upgrade workflow",
            linkLabel: "Upgrade Workflow for Validators",
            link:
              "https://github.com/irisnet/irishub/blob/master/docs/migration/README.md",
          },
          {
            iconName: "icon-IRISHubyonghu",
            title: "IRIS Hub Users",
            description:
              "IRIS Hub users should make sure to back up your wallet mnemonics or keystore files",
            linkLabel: "Tutorial for Rainbow Wallet Users",
            link:
              "https://medium.com/irisnet-blog/much-safer-keystore-import-export-function-is-added-to-rainbow-v2-4-5e8d9e0723cc",
            cliTitle:
              "Users of other wallets should follow their own manuals to perform similar operations",
            cliLinkLabel: "Keys Migration Guide for CLI Users",
            cliLink:
              "https://github.com/irisnet/irishub/blob/master/docs/migration/keys.md",
          },
        ],
      },
      joinTestnet: {
        title: "Join the Testnet",
        chainId: "Chain-ID: bifrost-2",
        section:
          "IRIS Hub 1.0 as a Significant Milestone will be an incompatible upgrade including many important features",
        sectionTwo:
          "IRISnet's Bifrost is the specialized testnet where IBC and functions like AMM of IRIS Hub v1.0 can be tested out. Developers and mainnet validators are strongly recommended to treat Bifrost as the staging environment and use it for active testing",
        joinLabel: "Join Bifrost Testnet",
        joinLink:
          "https://github.com/irisnet/testnets/blob/master/bifrost/phase-2/README.md",
        rpcNodeLabel: "Public RPC Endpoints",
        rpcNodeIp: "34.80.22.255:26657",
        rpcNodeIpLink: "http://34.80.22.255:26657/",
        restNodeLabel: "Public REST Endpoints",
        restNodeIp: "34.80.22.255:1317",
        restNodeIpLink: "http://34.80.22.255:1317/",
      },
    },
    newFunction: {
      title: "New Features"
    },
    featuresList: [
      {
        label: 'EVM Integration',
        intro: 'Incorporates the EVM, allowing developers to seamlessly deploy EVM-based smart contracts and dApps on IRISHUB, and enabling compatibility with Ethereum.'
      },
      {
        label: 'New Fee Token',
        intro: 'Introduces a new fee token for EVM transactions, which is created by converting $IRIS at a 1:1 conversion rate.'
      },
      {
        label: 'EIP-1559 Support',
        intro: 'Supports EIP-1559 as a supplement to EVM, optimizing the burning and gas fee distribution mechanisms to promote mutual benefits and shared interests among IRISHUB community members.'
      }
    ],
    ibc: {
      // title: "IBC + iService",
      // description:
      //   "TCP/IP + HTTP protocol of blockchains that can build and further broaden the Internet of Blockchains to support cross-platform data and application services between on-chain and off-chain, bridging the blockchain world with traditional business systems.",
      // test: "Multi-Networks IBC Joint Tests",
      // link: "",
    },
    // applicationList: [
    //   {
    //     iconName: require('../irishub1/nft_kuafu.png'),
    //     title: "NFT",
    //     section:
    //       "Supported NFT, to achieve the digitization of assets on blockchains.",
    //   },
    //   {
    //     iconName: require('../irishub1/oracle_kuafu.png'),
    //     title: "Oracle",
    //     section:
    //       "Supported oracle service based on iService, to impletment cross-platform data services from off-chain to on-chain/off-chain.",
    //   },
    //   {
    //     iconName: require('../irishub1/coinswap_kuafu.png'),
    //     title: "Coinswap",
    //     section:
    //       "Cross-chain AMM protocol, a vanguard innovation platform for the Cosmos application ecosystem.",
    //   },
    // ],
    testnet: {
      title: "Bifrost Testnet",
      description:
        'IRISnet\'s Bifrost is the testnet launched for IBC and innovative functions like AMM to give strong support to <a href="https://cosmos.network/" target="_blank" rel="noreferrer noopener" style="color: rgba(100, 141, 237, 1)">Cosmos</a>\'s interchain vision.',
      understand: "Learn More",
      understandLink:
        "https://medium.com/irisnet-blog/bifr%C3%B6st-irisnets-bridge-to-a-new-era-af32960dd88e",
    },
    setpList: {
      phase: "Phase",
      link0:
        "https://medium.com/irisnet-blog/irisnet-launched-defi-and-interchain-testnet-bifrost-8ab43c38c55b",
      link1:
        "https://medium.com/irisnet-blog/phase-1-of-irisnets-defi-interchain-testnet-bifrost-has-successfully-ended-on-jan-6-bdee924dd93a",
      link2:
        "https://medium.com/irisnet-blog/phase-2-of-irisnets-defi-interchain-testnet-bifrost-launched-to-be-followed-by-mainnet-upgrade-211d69d0f828",
      link3: "https://medium.com/irisnet-blog/irisnet-mainnet-1-0-5ce1c2643965",
      oneStepTitle: "",
      end: "End",
      ing: "End",
      comeSoon: "Live",
      irishub: "IRIS Hub",
      hub1: "1.0",
    },
    functionList: [
      {
        iconName: "icon-gongnengceshi",
        title: "Functional Tests",
        subTitle:
          "A staging environment where exchanges, developers of wallets, explorers and dApps can verify their product upgrades.",
        list: [
          {
            content:
              "IRISnet's unique functions, including AMM, NFT, enhanced iService, etc.",
          },
          {
            content:
              "Cosmos Stargate functions, including smooth upgrade, IBC, state sync, etc.",
          },
        ],
        description: "",
      },
      {
        iconName: "icon-shengjimoni",
        title: "Mainnet Upgrade Simulation",
        subTitle:
          "An upgrade simulation environment provided for IRIS Hub mainnet validators.",
        list: [],
        description:
          "This simulation helps validators familiarize with the upgrade workflow including exporting and migrating the mainnet state, upgrading and restarting their validator nodes etc.",
      },
      {
        iconName: "icon-duowangluoIBClianheceshi",
        title: "Multi-Networks IBC Joint Tests",
        subTitle: "A multi-networks IBC joint testing initiated by IRISnet.",
        list: [],
        description:
          'This effort aims to further validate the IBC cross-chain transfer function, improve the IBC user experience, support the IBC-related tools development and so on together with <a href="https://cosmwasm.com" target="_blank" rel="noreferrer noopener" style="color: rgba(100, 141, 237, 1)">Confio（CosmWasm）</a>, <a href="https://tendermint.com" target="_blank" rel="noreferrer noopener" style="color: rgba(100, 141, 237, 1)">Tendermint</a>, <a href="https://www.regen.network" target="_blank" rel="noreferrer noopener" style="color: rgba(100, 141, 237, 1)">Regen Network</a>,<a href="https://chainapsis.com" target="_blank" rel="noreferrer noopener" style="color: rgba(100, 141, 237, 1)">Chainapsis（Keplr）</a>and many other teams. ',
      },
    ],
    applicationShowList: {
      title: "Application Ecosystem",
      list: [
        {
          scr: require("../irishub1/uptick-logo.png"),
          title: "Uptick Marketplace",
          section:
            "Uptick NFT Marketplace is a platform that makes it incredibly easy for users to create, collect and trade NFTs. With a host of global creators and multiple NFT categories, including support for various media formats, Uptick NFT Marketplace caters to a wide audience.",
          link: "https://www.uptickproject.com",
        },
        {
          scr: require("../irishub1/irishub_chain_link.png"),
          title: "Chainlink",
          section:
            "With the flexible framework of iService, Chainlink's oracle is integrated to support the off-chain data secure and reliable transfer into distributed applications, and accordingly to cover more blockchain environments.",
          link: "https://chain.link",
        },
      ],
    },
    bugBounty: {
      title: "IRISnet Bug Bounty",
      subtitle: "Program",
      span: "III",
      lookDetail: "Learn More",
      lookDetailLink:
        "https://medium.com/irisnet-blog/irisnet-bug-bounty-program-iii-e43769ed5571",
    },
  },
  floatWindow: {
    title: "FORUM",
  },
  header: {
    left: [
      {
        id: 1,
        title: "Collaboration",
        active: false,
      },
      {
        id: 3,
        title: "Developers",
        active: false,
      },
    ],
    right: [
      /*{
                id:0,
                title:'KUAFU',
                href:'',
                name:'kuafu',
                active: false,
            },*/
      {
        id: 0,
        title: "Mainnet",
        href: "",
        active: false,
      },
      {
        id: 1,
        title: "Docs",
        href: "https://www.irisnet.org/docs/",
        active: false,
      },
      {
        id: 3,
        title: "Blog",
        href: "https://medium.com/irisnet-blog",
        active: false,
      },
    ],
    mobileNavigation: [
      {
        id: 0,
        title: "Mainnet",
        activeIndex: "",
        active: false,
      },
      /*  {
                id:10,
                title:'KUAFU',
                activeIndex: 10,
                active:false,
            },*/
      /* {
                id:1,
                title:'Testnet',
                activeIndex: '',
                active:false,
            },*/


      {
        id: 4,
        title: "Collaboration",
        activeIndex: 0,
        active: false,
      },
      {
        id: 6,
        title: "Developers",
        activeIndex: 6,
        active: false,
      },
    ],
    mobileLinkHrefNavigation: [
      {
        id: 0,
        title: "Docs",
        href: "https://www.irisnet.org/docs/",
        activeIndex: "",
      },
      {
        id: 2,
        title: "Blog",
        href: "https://medium.com/irisnet-blog",
        activeIndex: "",
      },
    ],
  },
  footer: {
    socialCommunityTitle: "Community",
    validatorCommunityTitle: "Validators",
    TechCommunityTitle: "Developers",
    socialCommunity: [
      {
        id: 0,
        src: "cmc.png",
        href: "https://www.coinmarketcap.com/currencies/irisnet/",
      },
      {
        id: 1,
        src: "irisnet_telegram.png",
        href: "https://t.me/irisnetwork",
      },
      {
        id: 2,
        src: "irisnet_twitter.png",
        href: "https://twitter.com/irisnetwork",
      },

      {
        id: 3,
        src: "irisnet_medium.png",
        href: "https://medium.com/irisnet-blog",
      },
      {
        id: 4,
        src: "irisnet_mail.png",
        href: "mailto:contact@irisnet.org",
      },
    ],
    validatorCommunity: [
      {
        id: 0,
        src: "discord.png",
        href: "https://discord.gg/bmhu9F9xbX",
      },
    ],
    techCommunity: [
      {
        id: 0,
        src: "irisnet_github.png",
        href: "https://github.com/irisnet",
      },
      {
        id: 1,
        src: "discord.png",
        href: "https://discord.gg/bmhu9F9xbX",
      },
    ],
    productList: [
      {
        id: 0,
        name: "Rainbow Wallet",
        href: "https://www.rainbow.one/",
      },
      {
        id: 1,
        name: "IOBScan",
        href: "https://ibc.iobscan.io/",
      },
      {
        id: 2,
        name: "Endpoints & SDKs",
        href: "https://www.irisnet.org/docs/endpoints/intro.html",
      },
      {
        id: 3,
        name: "CLI Client",
        href: " https://www.irisnet.org/docs/cli-client/intro.html",
      },
    ],
    resourceList: [
      {
        id: 1,
        name: "Blog",
        href: "https://medium.com/irisnet-blog",
      },
      {
        id: 2,
        name: "Docs",
        href: "https://www.irisnet.org/docs/",
      },
      {
        id: 3,
        name: "Press Kit",
        href: "/community/press-kit",
      },
      {
        id: 4,
        name: "Explorer",
        href: "https://irishub.iobscan.io/"
      }
    ],
    productsTitle: "Products",
    resourcesTitle: "Resources",
    submitBtn: {
      title: "Newsletter",
      subscribe: "Subscribe",
      success: "Success",
    },
    errEmailAddress: {
      error: "Please enter a valid email address",
    },
    irisnetInproduction:
      "Named after the Greek goddess Iris, IRISHUB aspires to bridge the gap between blockchains and real-world business systems, much like Iris connects earth and the heavens.",
  },
  home: {
    bannerHref:
      "https://medium.com/irisnet-blog/irisnet-launches-bug-bounty-ii-join-and-win-the-prize-47845defc9fe",
    gozExplorer: {
      title:
        "View GoZ competition as well as hands on IBC backed token transfer!",
      content:
        "IRISnet Dev Team in Game of Zones GoZ Network State Visualizer & IBC-GoZ Rainbow Wallet",
      time: " is online",
      button: {
        buttonName: {
          explorerName: "View Inter-blockchain world",
          rainbowName: "Try Inter-blockchain token transfer",
        },
        buttonUrl: {
          explorerUrl: "https://ibc-goz.irisplorer.io/#/",
          rainbowUrl:
            "https://medium.com/@irisnet/get-in-line-experience-crosschain-transfers-and-atomic-coinswaps-with-rainbow-goz-61cfc57365f9",
        },
      },
    },
    irishub1: {
      content: {
        title: "IRIS Hub 1.0",
        title1: "will Upgrade on Feb 25",
        content: "Welcome to the New Connected Interchain World",
        btn1: "More Details",
        btnHref1: "/kuafu/?lang=EN",
        btn2: "Announcement",
        btnHref2:
          "https://medium.com/irisnet-blog/irisnet-mainnet-1-0-upgrade-announcement-87374f6e3841",
      },
    },
    bsn: {
      content: {
        title: "IRISnet",
        title1:
          "IRISnet integrates related services as a public chain service portal of BSN International ",
        btn1: "Developers",
        btnHref1: "",
        btn2: "BSN International",
        btnHref2: "https://bsnbase.io/",
      },
    },
    techGrants: {
      content: {
        title: "Tech-Grants Program",
        title1:
          "Accelerate the Development of the IRISnet Interchain Ecosystem",
        btn1: "Apply",
        btnHref1:
          "https://github.com/irisnet/iris-foundation/blob/master/funding/iris-foundation-tech-grants-program.md",
        btn2: "More Details",
        btnHref2:
          "https://medium.com/irisnet-blog/iris-foundation-launches-tech-grants-program-to-accelerate-the-development-of-the-irisnet-362ac7786c88",
      },
    },
    frost: {
      content: {
        title: "Bifröst",
        content: "to a New Interchain Era",
        btn1: "Bifrost Explorer",
        btn2: "Interchain Wallet",
        btnHref1: " https://bifrost.irisplorer.io/#/home",
        btnHref2: "",
        coming: "Coming Soon",
      },
    },
    ecosystem: {
      content: {
        title: "IRISnet Ecosystem",
        content: "Welcome to jointly promote the sustainable development",
        btnHref1: "https://www.rainbow.one/",
        btn1: "Rainbow Wallet",
        btnHref2: "https://www.coinmarketcap.com/currencies/irisnet/",
        btn2: "CoinMarketCap",
      },
    },
    sectionOne: {
      title: "DeFi App Dev Support is coming",
      time: "2019.8.29",
      content: "Multi-asset module available on IRIS Hub V0.15",
      shareUrl: {
        telegramUrl: "https://t.me/irisnetwork",
        githubUrl: "https://github.com/irisnet/irishub",
        weChatUrl: "",
      },
      button: {
        buttonName: {
          rainbowName: "Rainbow Wallet",
          explorerName: "IRIS Explorer",
        },
        buttonUrl: {
          rainbowUrl: "https://www.rainbow.one/",
          explorerUrl: "https://irishub.iobscan.io",
        },
      },
    },
    irisnetBianJie: {
      commission: "Cosmos Hub Validator",
      development: " Maintained by the core development team of IRISnet",
      button: {
        buttonName: {
          rainbowName: "Delegate ATOM",
          explorerName: "View Details",
        },
        buttonUrl: {
          rainbowUrl: "https://www.rainbow.one/",
          explorerUrl: "/irisnet-bianjie",
        },
      },
    },
    irisnetVote: {
      commission: "Participate in On-Chain Governance",
      development: "Vote for Proposals",
      button: {
        buttonName: {
          voteName: "How to Vote",
        },
        buttonUrl: {
          voteUrl:
            "https://medium.com/irisnet-blog/rainbow-v2-5-released-with-on-chain-governance-support-237f076b0211",
        },
      },
    },
    bianDex: {
      commission: "Deposit to Binance DEX",
      development: "Win 500,000 IRIS Airdrop",
      button: {
        buttonName: {
          eventDetail: "More Details",
          howIsDex: " Why We Connect",
        },
        buttonUrl: {
          eventDetail:
            "https://medium.com/irisnet-blog/irisnet-iris-airdrop-on-binance-dex-win-500-000-iris-4e24be10a886",
          howIsDexUrl:
            "https://medium.com/irisnet-blog/why-are-we-connecting-iris-hub-with-binance-dex-5b02bff5753c",
        },
      },
    },
    KeyInnovations: {
      title: "Key Innovations",
      list: [
        {
          id: 0,
          msg: "Incorporation of a service-oriented infrastructure into the Interchain",
          imgName: require("../white_paper_first_icon.png"),
        },
        {
          id: 1,
          msg:
            "Integration of business services offered by heterogeneous systems, including public and consortium chains as well as legacy systems",
            imgName: require("../white_paper_second_icon.png"),
        },
        {
          id: 2,
          msg:
            "NFT Interoperability across the Internet of Blockchains and service interactions between on/off-chain systems",
          imgName: require("../white_paper_last_icon.png"),
        },
      ],
      buttonMsg: "White Paper",
      WHITEPAPERUrl:
        "https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md",
    },
    core: {
      title: "Core Features",
      list: [
        {
          title: "IBC + iService",
          content:
            "TCP/IP + HTTP protocol of blockchains that can build and further broaden the Internet of Blockchains to support cross-platform data & application services between on-chain and off-chain.",
        },
        {
          title: "EVM Integration",
          content:
            "The EVM (Ethereum Virtual Machine) integration allows developers to seamlessly deploy EVM-based smart contracts and dApps on IRISHUB, and enabling compatibility with Ethereum.",
        },
        {
          title: "TIBC",
          content:
            "Terse IBC protocol to accelerate heterogeneous interchain technology with NFT transfers,  smart contracts interactions and other cross-chain services enabled.",
        },
        {
          title: "Coinswap",
          content:
            "Cross-chain AMM protocol, a vanguard innovation platform for the Cosmos application ecosystem.",
        },
      ],
    },
    upcoming: {
      title: "Upcoming Feature",
      list: [
        {
          title: "Interchain NFTs",
          content:
            "Deploying ICS-721 standard to enable interchain transfers of NFT assets.",
          image: require("../../assets/pages/interchain_nft_logo.png"),
        },
      ],
    },
    joinchain:{
      title: "Join Interchain Space",
      content: "Accelerate the Development of the IRISHUB Interchain Ecosystem",
      list:[
        { btn:"Apply for Tech-Grants",
        url:" https://github.com/irisnet/iris-foundation/blob/master/funding/iris-foundation-tech-grants-program.md"

      },
      {
        btn:"Mainnet Faucet",
        url:" https://stakely.io/faucet/irisnet-iris"

      }
          ]

    },
    collborations: {
      title: "Collaboration",
      list: [
        {
          title: "Development Teams",
          list: [
            {
              name: "BIANJIE.AI",
              link: "",
              image: require("../../assets/pages/collaboration/bianjie.png"),
            },
            {
              name: "Tendermint",
              link: "https://tendermint.com/",
              image: require("../../assets/pages/collaboration/tendermint.png"),
            },
          ],
        },
        {
          title: "Strategic Partners",
          list: [
            {
              name: "INTERCHAIN",
              link: "https://cosmos.network/about",
              image: require("../../assets/pages/collaboration/interchain.png"),
            },
            {
              name: "HashKey",
              link: "https://www.hashkey.com/#/",
              image: require("../../assets/pages/collaboration/HashKey.png"),
            },
            {
              name: "PlatON",
              link: "https://www.platon.network/#/index",
              image: require("../../assets/pages/collaboration/Platon.png"),
            },
          ],
        },
        {
          title: "Ecosystem Partners",
          list: [
            {
              name: "BINANCE",
              link: "https://www.binance.com/zh-CN",
              image: require("../../assets/pages/collaboration/BINANCE.png"),
            },
            {
              name: "Chainlink",
              link: "https://chain.link/",
              image: require("../pages/collaboration/collaboration.png"),
            },
            {
              name: "CoinMarketCap",
              link: "https://coinmarketcap.com/",
              image: require("../../assets/pages/collaboration/CMC.png"),
            },
            {
              name: "KAVA",
              link: "https://www.kava.io/",
              image: require("../../assets/pages/collaboration/KAVA.png"),
            },
            {
              name: "MYKEY",
              link: "https://mykey.org/",
              image: require("../../assets/pages/collaboration/MYKEY.png"),
            },
            {
              name: "e-Money",
              link: "https://www.e-money.com/",
              image: require("../../assets/pages/collaboration/EM.png"),
            },
            {
              name: "Starname",
              link: "https://www.starname.me/",
              image: require("../../assets/pages/collaboration/Starname.png"),
            },
            {
              name: "COIRFAN",
              link: "http://iris.fan/#/",
              image: require("../../assets/pages/collaboration/COIRFAN.png"),
            },
            {
              name: "StaFiHub",
              link: "https://www.stafihub.io/",
              image: require("../../assets/pages/collaboration/StaFiHub.png")
            }
          ],
        },
      ],
    },

    sectionTwo: {
      NetworkDesign: {
        title: "Network Design",
        list: [
          {
            id: 0,
            msg:
              "Definition of standard ABCI transaction types supporting registration,binding, invocation, query, profiling and governance of IRIS Services(a.k.a. iServices)",
          },
          {
            id: 1,
            msg:
              "iService providers act as adaptors of business logic residing in public andconsortium blockchains as well as enterprise legacy systems",
          },
          {
            id: 2,
            msg: "iServices can be invoked across anextended IBC protocol",
          },
        ],
      },
    },
    sectionThree: {
      title: "Roadmap",
      road: [
        {
          id: 0,
          isActive: false,
          caption: "PANGU",
          time: "JAN 2018 - MAR 2019",
          msg:
            "The first stage of the IRIS project focused on having the IRIS Hub up and running. Initial version of the mobile client for the IRIS network was released. In this stage we also focused on building the fundamental IRIS Service Layer which was released to IRIS Hub. Which enables service definition, binding, invocation and query.",
        },
        {
          id: 1,
          isActive: false,
          caption: "NÜWA",
          time: "APR 2019 - OCT 2019",
          msg:
            "In this stage we are adding more fundamental modules to support application development especially DeFi applications. The new modules planned to release in this stage including multi-asset management, uniswap, multi-sig account etc. We plan to collaborate with 1-2 ecosystem partners to develop applications using those modules.We also plan to accomplish the test connection with Cosmos Hub through IBC at this stage.",
        },
        {
          id: 2,
          isActive: false,
          caption: "KUAFU",
          time: "NOV 2019 - FEB 2021",
          msg:
            "In this stage we are aiming to accomplish the connection of IRIS Hub with applications blockchains through IBC. We plan to upgrade IRISnet mobile client to support those applications. The third stage will also focus on upgrades to the IRIS network in order to support our planned advanced IRIS Service features.",
        },
        {
          id: 3,
          isActive: true,
          caption: "HOUYI",
          time: "BEYOND MAR 2021",
          msg:
            "The fourth stage will focus on further technology innovations, including TIBC (Terse IBC) protocol, interchain NFT applications, to the IRIS network, SDK and mobile client, as well as developer engagement.",
        },
      ],
    },
    sectionFour: {
      Collaboration: "Collaboration",
      CoreDevelopmentTeams: {
        title: "Development Teams",
        logos: [
          {
            id: 0,
            path: "logos/irisnet_bianjiehover.png",
            url: "https://www.bianjie.ai/",
          },
          {
            id: 1,
            path: "logos/irisnet_tenderminthover.png",
            url: "https://tendermint.com/",
          },
        ],
      },
      StrategicPartners: {
        title: "Strategic Partners",
        logos: [
          {
            id: 0,
            path: "logos/irisnet_InTERCHAIN.png",
            url: "https://cosmos.network/about",
          },
          {
            id: 1,
            path: "logos/irisnet_HASHKEY.png",
            url: "https://www.hashkey.com/#/",
          },
          {
            id: 2,
            path: "logos/irisnet_Platonlogo.png",
            url: "https://www.platon.network/#/index",
          },
        ],
      },
      EcosystemPartners: {
        title: "Ecosystem Partners",
        logos: [
          {
            id: 0,
            path: "logos/irisnet_binance.png",
            url: "https://www.binance.com?ref=H2WOUINO",
          },
          {
            id: 1,
            path: "logos/irisnet_Chainlink.png",
            url: "https://chain.link/",
          },
          {
            id: 2,
            path: "logos/irisnet_cmc.png",
            url: "https://coinmarketcap.com",
          },
          {
            id: 3,
            path: "logos/irisnet_ok_chain.png",
            url: "https://www.okex.com/okchain",
          },
          {
            id: 4,
            path: "logos/irisnet_kava.png",
            url: "https://www.kava.io",
          },
          {
            id: 5,
            path: "logos/mykey_logo.png",
            url: "https://mykey.org/",
          },
          {
            id: 6,
            path: "logos/irisnet_eMoney.png",
            url: "https://www.e-money.com/",
          },
          { id: 7, path: "logos/IOV.png", url: "https://iov.one/" },
          {
            id: 8,
            path: "logos/irisnet_coirfan.png",
            url: "http://iris.fan/#/",
          },
        ],
      },
      Institutional: {
        title: {
          msg1: "Institutional Supporters",
          msg2: "( Listed in no particular order )",
        },
        logos: [
          {
            id: 0,
            path: "logos/irisnet_AminoCapital.png",
            url: "http://www.aminocapital.com/",
          },
          {
            id: 1,
            path: "logos/irisnet_Bibox.png",
            url: "https://www.bibox.com/",
          },
          {
            id: 2,
            path: "logos/irisnet_huobi.png",
            url: "https://www.hbg.com/en-us/capital/",
          },
          {
            id: 3,
            path: "logos/irisnet_GBIC.png",
            url: "https://gbic.io/",
          },
          {
            id: 4,
            path: "logos/irisnet_8decim.png",
            url: "javascript:void(0)",
          },
          {
            id: 5,
            path: "logos/irisnet_bihu.png",
            url: "https://bihu.com/",
          }, // 1
          {
            id: 7,
            path: "logos/irisnet_BKfund.png",
            url: "javascript:void(0)",
          },
          {
            id: 8,
            path: "logos/irisnet_byz.png",
            url: "javascript:void(0)",
          },
          {
            id: 9,
            path: "logos/irisnet_ChainPE.png",
            url: "http://www.chainpe.com/",
          },
          {
            id: 10,
            path: "logos/irisnet_CP.png",
            url: "https://chainpool.io/",
          },
          {
            id: 11,
            path: "logos/irisnet_COEFFICIENT.png",
            url: "http://coefficient.network/",
          }, // 2
          {
            id: 12,
            path: "logos/irisnet_gongshi.png",
            url: "http://consensuscapital.ca/",
          },
          {
            id: 13,
            path: "logos/irisnet_dushu.png",
            url: "javascript:void(0)",
          },
          {
            id: 14,
            path: "logos/irisnet_genblock.png",
            url: "https://genblock.capital/",
          },
          {
            id: 15,
            path: "logos/irisnet_HAYEK.png",
            url: "javascript:void(0)",
          },
          {
            id: 16,
            path: "logos/irisnet_INK.png",
            url: "http://ink.one/",
          },
          {
            id: 17,
            path: "logos/irisnet_LINKVCcopy.png",
            url: "http://www.linkvc.com/",
          }, // 3
          {
            id: 18,
            path: "logos/irisnet_MediSHares.png",
            url: "http://medishares.org/",
          },
          {
            id: 19,
            path: "logos/irisnet_jieshi.png",
            url: "http://www.milestonevc.com/index.html",
          },
          {
            id: 20,
            path: "logos/irisnet_nirvana-logo-white.png",
            url: "http://nirvana.capital/",
          },
          {
            id: 21,
            path: "logos/irisnet_NGC.png",
            url: "http://ngc.fund/",
          },
          {
            id: 22,
            path: "logos/irisnet_origin.png",
            url: "http://www.theorigincapital.com/",
          },
          {
            id: 23,
            path: "logos/irisnet_SatoshiFUnd.png",
            url: "https://satoshi.fund/",
          }, // 4
          {
            id: 24,
            path: "logos/irisnet_guigu.png",
            url: "http://www.svinsight.com/",
          },
          {
            id: 25,
            path: "logos/irisnet_shicuo.png",
            url: "javascript:void(0)",
          },
          {
            id: 26,
            path: "logos/irisnet_huixiang.png",
            url: "javascript:void(0)",
          },
          {
            id: 27,
            path: "logos/irisnet_Unetwork.png",
            url: "https://u.network/",
          },
          {
            id: 28,
            path: "logos/irisnet_jiuhe.png",
            url: "http://www.unityvc.com/",
          },
          {
            id: 29,
            path: "logos/irisnet_UA.png",
            url: "javascript:void(0)",
          }, //5
          {
            id: 30,
            path: "logos/irisnet_shuidi.png",
            url: "http://waterdrip.io/",
          },
          {
            id: 31,
            path: "logos/irisnet_yidao.png",
            url: "javascript:void(0)",
          },
          {
            id: 32,
            path: "logos/irisnet_snz.png",
            url: "http://snzholding.com/",
          },
        ],
      },
    },
  },
  // "logo": 'irisnet.png',
  mainnet: {
    title: "IRIS Hub",
    production:
      "Interchain Service Hub for NextGen Distributed Applications – A BPoS Blockchain That Is Self-evolutionary",
    wallet: "Rainbow Wallet",
    walletHref: "https://www.rainbow.one/",
    explorer: "IRIS Explorer",
    explorerHref: "https://irishub.iobscan.io/",
  },
  developer: {
    title: "Developers",
    content: {
      title: "IRISnet-BSN Developer Portal",
      rightContent1:
        'BSN is a cross-cloud, cross-portal, cross-framework blockchain-based global infrastructure network, supported by major Chinese entities and corporations, and its founding consortia partners include China’s State Information Center, China Mobile, China UnionPay and other organizations. IRISnet has previously joined the BSN ecosystem as <a style="color: #714BE3" href="https://medium.com/irisnet-blog/irisnet-is-selected-into-first-batch-of-public-blockchains-supported-by-bsn-1945aa2e2a0?source=collection_category---4------10-----------------------" target="_blank">the first batch of public blockchains</a> and is one of the first batch of public chains to join <a style="color: #714BE3" href="https://medium.com/bsnbase/major-breakthrough-in-chinas-blockchain-ecosystem-as-the-bsn-open-permissioned-blockchain-11e5fcae79de" target="_blank">BSN O. P. B. Initiative</a>.',
      rightContent2:
        'IRISnet is developing a dedicated portal to embed <a style="color: #714BE3" href="https://bsnbase.io/g/main/index" target="_blank">BSN International</a>’s public chain services. Developers can conveniently complete user registrations, node building, node updates, information queries and other operations via this portal. ',
      rightContent3:
        "Currently, developers are able to sign up. Developers who register now may have the chances to join the early bird event in the future. Come to join and sign up!",
      createDeveloperBtnDoc: "Register",
      createDeveloperHref: "https://bsn.irisnet.org",
      irisnetDoc: "IRISnet Docs",
      irisnetDocHref: "https://www.irisnet.org/docs/",
    },
    testnet: {
      title: "Testnet",
      content: {
        title: "Nyancat Testnet",
        content:
          "The Nyancat testnet runs a version that precedes the existing IRISHUB mainnet release, enabling validators to test and preview the new features prior to their deployment on mainnet.",
        link: "https://nyancat.iobscan.io/",
        btnLabel: "Use Nyancat Testnet",
        isRouterLink: false,
      },
    },
  },
  announcements: {
    title: "Announcements",
    viewMore: "View More",
    viewMoreHref: "https://medium.com/irisnet-blog",
    betaTitle: "IRISnet Public Token Addresses",
    betaContent: "Foundation and Dev Team Token Addresses.",
    readMore: "Read more",
    readMoreHref:
      "https://github.com/irisnet/iris-foundation/blob/master/iris-public-token-address.md",
    betaDate: "Mar 02,2019",
    announcementList: [
      {
        id: "0",
        img: require("../../assets/pages/announcements/irisnet_01.jpg"),
        href:
          "https://medium.com/irisnet-blog/iris-hub-1-4-mainnet-upgrade-has-been-successfully-completed-947b8b9f3357",
        date: "Dec 05 2022",
        title:
          "IRISnet Mainnet 1.4 Upgrade Announcement",
        content: "",
      },
      {
        id: "1",
        img: require("../../assets/pages/announcements/irisnet_02.jpg"),
        href:
          " https://medium.com/irisnet-blog/irisnet-monthly-update-2022-10-8e21813b2521",
        date: "Nov 16 2022",
        title: "IRISnet Monthly Update",
        content: "",
      },
    ],
  },
  testnet: {
    fuxi: {
      explorerHref: "https://testnet.irisplorer.io/#/home",
      title: "FUXI Testnet",
      production:
        "The FUXI testnet runs the same software as IRIS mainnet, providing a stable test environment for the developer community (wallets, browsers, iService providers/consumers).",
      testnetLink: "Use FUXI Testnet",
      href:
        "https://www.irisnet.org/docs/get-started/testnet.html#fuxi-testnet",
    },
    nyancat: {
      explorerHref: "http://nyancat.irisplorer.io/#/home",
      title: "Nyancat Testnet",
      production:
        "The Nyancat testnet runs a newer version of irishub, providing a test environment for validators to preview and test the new version before it is ready for deployment to mainnet.",
      testnetLink: "Use Nyancat Testnet",
      href:
        "https://www.irisnet.org/docs/get-started/testnet.html#nyancat-testnet",
    },
  },
  community: {
    title: "Join Tech Community",
    joinWay: [
      {
        id: "1",
        src: "irisnet_community_riot.png",
        name: "Riot room",
        linkName: "#iris:matrix.org",
        href: "https://riot.im/app/#/room/#iris:matrix.org",
      },
      {
        id: "2",
        src: "irisnet_community_qq.png",
        name: "QQ group",
        linkName: "795301695",
        href: "https://jq.qq.com/?_wv=1027&k=51eKP77",
      },
    ],
  },
  testnetPage: {
    title: "FUXI Testnet",
    section: [
      {
        content:
          "The previous iterations of the testnets have accomplished their mission. ",
      },
      {
        content:
          "In February 2019, the IRISnet development team released irishub v0.12.0 and successfully started the new testnet (chain-id : fuxi) with this version. ",
      },
      {
        content:
          "The FUXI testnet runs the same software as IRIS mainnet, providing a stable test environment for the developer community (wallets, browsers, iService providers/consumers).",
      },
    ],
    joinTitle: "IRISplorer (FUXI)",
    joinHref: "https://testnet.irisplorer.io/#/home",
    // faqTitle:'IRIShub FAQ',
    // faqHref:'https://www.irisnet.org/docs/introduction/',
    explorerTitle: "IRISplorer (Nyancat)",
    explorerHref: "https://nyancat.irisplorer.io/#/home",
  },
  newsLetter: {
    successTitle: "Welcome to The IRISnet Newsletter",
    failedTitle: "Subscription Failed",
    successText:
      "Thank you for your interest in and subscription to our project infomation. Please check your email box and click the button to confirm the subscription and to start receiving our newsletters and other latest updates.",
    failedText:
      "Maybe you are already subscribed? If not then please try again or contact us via email contact@irisnet.org.",
    confirm: "Confirm",
  },
  communityPage: {
    pressKitContent: {
      title: "Press Kit",
      downloadTitle: "Get our press kit with all logo assets you might need",
      downloadBtn: "Resources",
      downloadHref: "https://www.irisnet.org/resources/",
    },
    ColorsContent: {
      title: "Colors",
      colors: [
        {
          color: "#009DDE",
        },
        {
          color: "#694D9F",
        },
        {
          color: "#ED3554",
        },
        {
          color: "#2E3148",
        },
      ],
    },
    Standard: {
      title: "Logo",
      StandardList: [
        /*  {
                    id: 0,
                    imgUrl: 'presskit/irisnet_logo_black.png',
                    pngUrl: 'presskit/IRISNet rebrand Horizontal-black.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISNet rebrand Horizontal-black.svg',
                    svgTitle: 'svg'
                },*/
        {
          id: 1,
          imgUrl: "presskit/irisnet_logo_white.png",
          pngUrl: "presskit/IRISNet rebrand Horizontal-white.png",
          pngTitle: "png",
          svgUrl: "presskit/IRISNet rebrand Horizontal-white.svg",
          svgTitle: "svg",
        },
        /* {
                    id: 2,
                    imgUrl: 'presskit/irisnet_logo_column_black.png',
                    pngUrl: 'presskit/IRISnetlogo Vertical-black.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnetlogo Vertical-black.svg',
                    svgTitle: 'svg'
                },*/
        {
          id: 3,
          imgUrl: "presskit/irisnet_logo_column_white.png",
          pngUrl: "presskit/IRISnetlogo Vertical-white.png",
          pngTitle: "png",
          svgUrl: "presskit/IRISnetlogo Vertical-white.svg",
          svgTitle: "svg",
        },

        {
          id: 4,
          imgUrl: "presskit/iris_logo_white.png",
          pngUrl: "presskit/IRISnetRoundLogoWithoutText-white.png",
          pngTitle: "png",
          svgUrl: "presskit/IRISnetRoundLogoWithoutText-white.svg",
          svgTitle: "svg",
        },
        {
          id: 5,
          imgUrl: "presskit/iris_logo_black.png",
          pngUrl: "presskit/IRISnetRoundLogoWithoutText-black.png",
          pngTitle: "png",
          svgUrl: "presskit/IRISnetRoundLogoWithoutText-black.svg",
          svgTitle: "svg",
        },
        {
          id: 6,
          imgUrl: "presskit/irisnet-rebrand-capital-bg.png",
          pngUrl: "presskit/IRISnet-Rebrand-Capital-Black.png",
          pngTitle: "png",
          svgUrl: "presskit/IRISnet-Rebrand-Capital-Black.svg",
          svgTitle: "svg",
        },
      ],
    },
    aboutIrisnet: {
      title: "About IRISHUB",
      content: [
        {
          id: 0,
          item:
            "IRISHUB (a.k.a IRISnet) is an Interchain NFT Hub tailored for next-generation dApps. Built with Cosmos-SDK, IRISHUB facilitates cross-chain interoperability of NFTs, services, and on/off-chain systems.",
        },
      ],
      readMoreText: "Other Related Information...",
      readMoreHref:
        "https://github.com/irisnet/irisnet/blob/master/pressKit.md",
    },
    title: "Community",
    eventsTitle: "Upcoming Events",
    events: {
      left: [],
      right: [],
    },
    eventsBottom: {
      left: [],
      right: [],
    },
    faq: {
      faqTitle: "FAQ",
      faqImg: "/IRISnet_community_faq.png",
      faqList: {
        title: "FAQ",
        list: [
          {
            item: "1. What is IRISnet?",
          },
          {
            item: "2. What's the initial token distribution?",
          },
          {
            item: "3. What are IRIS token's use cases,and its token economics?",
          },
          {
            item: "4. What is the relationship between IRISnet and Cosmos?",
          },
        ],
        viewMore: "View More",
        viewMoreLink:
          "https://medium.com/irisnet-blog/irisnet-faq-8793cf116c37",
      },
      ama: {
        title: "Events Review",
        leftList: [
          {
            img: "irisnet_event_review_biance_11_06_en.png",
            href:
              "https://medium.com/irisnet-blog/irisnet-iris-airdrop-on-binance-dex-win-500-000-iris-4e24be10a886",
            title: "Airdrop on Binance DEX",
            content:
              "IRISnet (IRIS) Airdrop on Binance DEX — Win 500,000 IRIS!",
          },
          {
            img: "irisnet_event_review_11_06_en.png",
            href:
              "https://medium.com/irisnet-blog/follow-retweet-to-help-iris-binance-dex-listing-7c27cc36dfd1",
            title: "Follow & Retweet to Help IRIS Binance DEX Listing",
            content: "Follow & Retweet to Help IRIS Binance DEX Listing",
          },
        ],
        rightList: [
          {
            img: "irisnet_event_10_15.png",
            href:
              "https://medium.com/irisnet-blog/project-progress-applications-in-irisnet-cosmos-ecosystem-bihu-ama-review-725b78d8f59d",
            title: "Bihu AMA Review",
            content:
              "Project Progress & Applications in IRISnet & Cosmos Ecosystem |Bihu AMA Review",
          },
          {
            img: "irisnet_bug_bounty.png",
            href:
              "https://medium.com/irisnet-blog/irisnet-launches-bug-bounty-ii-join-and-win-the-prize-47845defc9fe",
            title: "IRISnet",
            content:
              "Opened! IRIS Hub Bug Bounty II Program for new version release",
          },
        ],
      },
    },
    resources: {
      title: "Resources",
      ResourceList: [
        {
          img: "wallet.png",
          name: "Wallets",
          href: "javascript:void(0);",
          resourceList: [
            {
                itemName: "Rainbow",
                osList: [
                    "icon-anzhuo",
                    "icon-iOS"
                ],
                href: "https://www.rainbow.one/",
            },
            {
                itemName: "Keplr",
                osList: [
                    "icon-anzhuo",
                    "icon-iOS",
                    "icon-PC"
                ],
                href: "https://www.keplr.app/",
            },
            {
                itemName: "Math Wallet",
                osList: [
                    "icon-anzhuo",
                    "icon-iOS",
                    "icon-PC"
                ],
                href: "https://mathwallet.org/zh-cn/",
            },
            {
                itemName: "Wetez",
                osList: [
                    "icon-anzhuo",
                    "icon-iOS",
                ],
                href: "https://www.wetez.io/wallet",
            },
            {
                itemName: "Cosmostation",
                osList: [
                    "icon-anzhuo",
                    "icon-iOS",
                ],
                href: "https://www.cosmostation.io/wallet/",
            },
            {
                itemName: "ViaWallet",
                osList: [
                    "icon-anzhuo",
                    "icon-iOS",
                ],
                href: "https://viawallet.com/",
            },
            {
                itemName: "LoyToken",
                osList: [
                    "icon-anzhuo",
                    "icon-iOS",
                ],
                href: "http://www.loytoken.com/web.html",
            },
            {
                itemName: "HashKey Hub",
                osList: [
                    "icon-anzhuo",
                    "icon-iOS",
                ],
                href: "https://hub.hashkey.com/",
            },
            {
                itemName: "Moonstake",
                osList: [
                    "icon-anzhuo",
                    "icon-iOS",
                ],
                href: "https://moonstake.io/wallets/",
            },
            {
                itemName: "SyncNode",
                osList: [
                    "icon-iOS",
                ],
                href: "https://wallet.syncnode.ro/",
            },
            {
              itemName: "Leap Wallet",
              osList: [
                "icon-anzhuo",
                "icon-iOS",
                "icon-PC"
              ],
              href: "https://www.leapwallet.io/",
            }
          ],
          content:
            "These web and mobile wallets allow you to store & transfer IRIS, delegate IRIS to validators, and some of them also support ATOM. Note that we do not endorse any of the wallets, they are listed for your convenience.",
        },
        {
          img: "Toolbox.png",
          name: "Staking Tools",
          href: "javascript:void(0);",
          resourceList: [
            {
                itemName: "Keplr",
                href: "https://wallet.keplr.app/#/dashboard",
            },
            {
                itemName: "Math Wallet",
                href: "https://mathwallet.org/web/irisnet",
            },
            {
                itemName: "Cosmostation",
                href: "https://wallet.cosmostation.io/iris",
            },
            {
                itemName: "Citadel.one",
                href: "https://app.citadel.one/login",
            },
            {
                itemName: "Union Market",
                href: "https://union.market/token/irisnet",
            },
            {
                itemName: "Ping.Pub",
                href: "https://ping.pub/iris-network/staking",
            },
            {
                itemName: "Skynet",
                href: "https://skynetexplorers.com/iris-network/staking",
            },
            {
                itemName: "Moonstake",
                href: "https://wallet.moonstake.io/",
            },
            {
                itemName: "01node",
                href: "https://01node.com/iris-network/",
            },
            {
                itemName: "Dokia",
                href: "https://staking.dokia.cloud/",
            },
            {
                itemName: "Allnode",
                href: "https://www.allnodes.com/iris/stake",
            },
            {
                itemName: "Stakewolle",
                href: "https://stakewolle.com/",
            },
          ],
          content:
            "Those tools, contributed by IRISnet validators and developers, facilitates IRIS token holders to delegate via web wallets and Ledger hardware wallets, etc . Before using these tools, you need to assure their security.",
        },
        {
          img: "explorer.png",
          name: "Explorers",
          href: "javascript:void(0);",
          resourceList: [
            {
              itemName: "IOBScan",
              href: "https://irishub.iobscan.io/#/home",
            },
            {
              itemName: "Mintscan",
              href: "https://www.mintscan.io/iris",
            },
            {
              itemName: "Ping.Pub",
              href: "https://ping.pub/iris-network",
            },
            {
              itemName: "Skynet",
              href: "https://skynetexplorers.com/iris-network",
            },
            {
              itemName: "ATOMScan",
              href: "https://atomscan.com/iris-network",
            },
            {
              itemName: "MapofZones",
              href: "https://mapofzones.com/zones/irishub-1/overview?period=24h"
            }
          ],
          content:
            "These block explorers allow you to search, view and analyze IRIS Hub data—like blocks, transactions, validators, governance including params or proposals, etc.",
        },
        {
          img: "presskit.png",
          name: "Press Kit",
          content: "Get our press kit with all logo assets you might need.",
          href: "javascript:void(0);",
          resourceList: [
            {
              itemName: "Press Kit",
              href: "https://www.irisnet.org/community/press-kit",
            },
          ],
        },
        {
          img: "doc.png",
          name: "Docs",
          content:
            "Interchain Service Hub for NextGen Distributed Applications – A BPoS Blockchain That Is Self-evolutionary.",
          href: "javascript:void(0);",
          resourceList: [
            /*{
                            itemName: 'FUXI',
                            href: 'https://www.irisnet.org/docs/get-started/testnet.html'
                        },*/
            {
              itemName: "Mainnet",
              href: "https://www.irisnet.org/docs/get-started/mainnet.html",
            },
            {
              itemName: "Nyancat",
              href: "https://www.irisnet.org/docs/get-started/testnet.html",
            },
            {
              itemName: "Cli Client",
              href: "https://www.irisnet.org/docs/cli-client/intro.html",
            },
            {
              itemName: "Light Client",
              href: "https://www.irisnet.org/docs/cli-client/intro.html",
            },
          ],
        },
      ],
    },
  },

  cosmos: {
    en: {
      header: {
        title: "IRISnet-Bianjie ",
        commission: "commission",
        product: "Maintained by the core development team of IRISnet",
        validatorAddress: "Validator Address",
        address: "cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em",
        toastHint: "Copied",
        bondedAtoms: "Bonded ATOMs",
        votingPower: "Voting Power",
        commissionRate: "Commission Rate",
        uptime: "Uptime",
        guide: "Cosmos Hub Wallets",
        guideHref: "https://hub.cosmos.network/main/hub-overview/overview.html#cosmos-hub-wallets",
      },
      about: {
        title: "About IRISnet-Bianjie",
        secondTitle:
          "Core Developer of IRISnet, Open Source Contributor to Cosmos",
        irisnet: {
          title: "Core Development Team of IRISnet",
          list: [
            {
              item:
                'Supported by <a href="https://cosmos.network/about" target="_blank" style="color:rgba(77, 150, 223, 1)">Interchain Foundation (ICF)</a> to build IRISnet, a Cosmos Hub that facilitates construction of distributed business applications.',
            },
            {
              item:
                '<a href="https://www.irisnet.org/" target="_blank" style="color:rgba(77, 150, 223, 1)">IRISnet</a> - a BPoS blockchain that is Self-evolutionary.',
            },
          ],
        },
        cosmos: {
          title: "Open Source Contributor to Cosmos",
          list: [
            {
              item: "Genesis validator on Cosmos since March 14th, 2019",
            },
            {
              item:
                "Participant of Cosmos testnets from Gaia-1000 to mainnet launch",
            },
            {
              item:
                "Technical support team to Cosmos China community since August 2017",
            },
          ],
        },
      },
      bianjie: {
        title: "Safe Bianjie, Safe Delegation",
        product: [
          {
            src: require("../../assets/cosmos/service_room.png"),
            text: "Safe and Reliable Enterprise-class Data Center",
          },
          {
            src: require("../../assets/cosmos/net.png"),
            text: "Highly Available Network",
          },
          {
            src: require("../../assets/cosmos/node.png"),
            text: "Auto Scale Sentry Nodes",
          },
          {
            src: require("../../assets/cosmos/lock.png"),
            text: "HSM for Private Key Protection",
          },
          {
            src: require("../../assets/cosmos/hour.png"),
            text: "24/7 Professional Monitoring",
          },
          {
            src: require("../../assets/cosmos/shield.png"),
            text: "DDoS Attack Protection",
          },
        ],
      },
      cosmosExplorerTitle: "Cosmos Hub Explorers",
      cosmosExplorer: [
        {
          active: false,
          whiteImg: require("../../assets/cosmos/Mintscan_white.png"),
          blueImg: require("../../assets/cosmos/Mintscan_blue.png"),
          title: "Mintscan",
          href:
              "https://www.mintscan.io/cosmos/validators/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g",
        },
        {
          active: false,
          whiteImg: require("../../assets/cosmos/big_dipper_white.png"),
          blueImg: require("../../assets/cosmos/big-dipper_blue.png"),
          title: "Big Dipper",
          href:
            "https://cosmos.bigdipper.live/account/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g",
        },
        {
          active: false,
          whiteImg: require("../../assets/cosmos/cosmos_white.png"),
          blueImg: require("../../assets/cosmos/cosmos_blue.png"),
          title: "Cosmos Overview",
          href:
            "https://cosmos-overview.genesislab.net",
        },
        // {
        //   active: false,
        //   whiteImg: require("../../assets/cosmos/hubble_white.png"),
        //   blueImg: require("../../assets/cosmos/hubble_blue.png"),
        //   title: "Hubble",
        //   href:
        //     "https://hubble.figment.network/cosmos/chains/cosmoshub-2/validators/696ABC95186FD65A07050C28AB00C9358A315030",
        // },
        //
        // {
        //   active: false,
        //   whiteImg: require("../../assets/cosmos/Stargazer_white.png"),
        //   blueImg: require("../../assets/cosmos/Stargazer_blue.png"),
        //   title: "Stargazer",
        //   href:
        //     "https://stargazer.certus.one/accounts/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g",
        // },
      ],
    },
  },
  white: "public/whiteDw.png",
  whiteHref: "https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md",
  next: "what_next.png",
  head: {
    txt: [
      {
        txt: "Whitepaper",
        href: "#/0/1",
      },
      {
        txt: "Collaboration",
        href: "#/0/3",
      },
      {
        txt: "Contact",
        href: "#/0/5",
      },
    ],
  },
  collaboration: {
    title: "Collaboration",
    txt: ["Core Development Team", "Strategic Partners"],

    core: {
      title: "Development Teams",
      list: [
        {
          img: "collaboration/bianjieai.png",
          pos: -56 * 0,
          title: "BIANJIE.AI",
          href: "https://www.bianjie.ai/",
        },
        {
          img: "collaboration/newtendermint.png",
          pos: -56 * 1,
          title: "Tendermint",
          href: "https://tendermint.com",
        },
      ],
    },

    strategy: {
      title: "Strategic Partners",
      img: "collaboration/strategy.png",
      list: [
        {
          img: "collaboration/interchain.png",
          pos: -56 * 0,
          title: "Interchain Foundation",
          href: "https://cosmos.network/about",
        },
        {
          img: "collaboration/hashkeygroup.png",
          pos: -56 * 2,
          href: "https://www.hashkey.com/#/",
        },
      ],
    },
    ecosystem: {
      title: "Ecosystem Partners",
      list: [
        {
          img: "collaboration/Platonlogo.png",
          pos: -56 * 3,
          title: "Hashgard",
          href: "https://www.platon.network/#/index",
        },
        {
          img: "collaboration/hashquark.png",
          pos: -56 * 3,
          title: "Hashgard",
          href: "https://www.hashquark.io/#/",
        },
        {
          img: "collaboration/hashgard.png",
          pos: -56 * 3,
          title: "Hashgard",
          href: "https://www.hashgard.io/#/",
        },
      ],
    },
    investment: {
      title: "Institutional Supporters",
      subtitle: "( Listed in no particular order )",
      list: [
        {
          img: "collaboration/AminoCapital.png",
          pos: -56 * 0,
          title: "Amino Capital",
          href: "http://www.aminocapital.com",
        },
        {
          img: "collaboration/bibox.png",
          title: "Bibox",
          href: "https://www.bibox.com/",
        },
        {
          img: "collaboration/huobiCapital.png",
          title: "Huobi Capital",
          href: "https://www.hbg.com/en-us/capital/",
        },
        {
          img: "collaboration/gbic.png",
          title: "GBIC",
          href: "https://gbic.io/",
        },
        {
          img: "collaboration/bawei.png",
          pos: -56 * 1,
          title: "8 Decimal",
          href: "",
        },
        {
          img: "collaboration/bihu.png",
          pos: -56 * 2,
          title: "BIHU",
          href: "https://bihu.com/",
        },
        {
          img: "collaboration/newbtts.png",
          pos: -56 * 3,
          title: "BA Capital",
          href: "",
        },
        {
          img: "collaboration/newBKfund.png",
          pos: -56 * 4,
          title: "BKFund",
          href: "",
        },
        {
          img: "collaboration/bzt.png",
          pos: -56 * 5,
          title: "Byzantium",
          href: "",
        },
        {
          img: "collaboration/chainPEter.png",
          pos: -56 * 6,
          title: "Chain PE",
          href: "http://www.chainpe.com",
        },
        {
          img: "collaboration/cp.png",
          pos: -56 * 7,
          title: "Chain Pool",
          href: "https://chainpool.io/",
        },
        {
          img: "collaboration/coefficient.png",
          pos: -56 * 8,
          title: "Coefficient",
          href: "http://coefficient.network",
        },
        {
          img: "collaboration/gszb.png",
          pos: -56 * 9,
          title: "Consensus",
          href: "http://consensuscapital.ca",
        },
        {
          img: "collaboration/dsjj.png",
          pos: -56 * 10,
          title: "Dushu",
          href: "",
        },
        {
          img: "collaboration/genblock.png",
          pos: -56 * 11,
          title: "Genblock",
          href: "https://genblock.capital",
        },
        {
          img: "collaboration/hayek.png",
          pos: -56 * 12,
          title: "Hayak",
          href: "",
        },
        {
          img: "collaboration/ink.png",
          pos: -56 * 13,
          title: "Ink Labs",
          href: "http://ink.one",
        },
        {
          img: "collaboration/linkvc.png",
          pos: -56 * 14,
          title: "LinkVC",
          href: "http://www.linkvc.com",
        },
        {
          img: "collaboration/newmedishares.png",
          pos: -56 * 15,
          title: "Medi Shares",
          href: "http://medishares.org/",
        },
        {
          img: "collaboration/js.png",
          pos: -56 * 16,
          title: "MILESTONE",
          href: "http://www.milestonevc.com/index.html",
        },
        {
          img: "collaboration/nirvanacapital.png",
          pos: -56 * 16,
          title: "Nirvana Capital",
          href: "http://nirvana.capital/",
        },
        {
          img: "collaboration/ngc.png",
          pos: -56 * 17,
          title: "NEO GLOBAL",
          href: "http://ngc.fund",
        },
        {
          img: "collaboration/y.png",
          pos: -56 * 18,
          title: "Origin Capital",
          href: "http://www.theorigincapital.com",
        },
        {
          img: "collaboration/satoshifund.png",
          pos: -56 * 19,
          title: "Satoshi Fund",
          href: "https://satoshi.fund",
        },
        {
          img: "collaboration/ggtm.png",
          pos: -56 * 20,
          title: "SV Insight",
          href: "http://www.svinsight.com",
        },
        {
          img: "collaboration/sczb.png",
          pos: -56 * 21,
          title: "Timestamp",
          href: "",
        },
        {
          img: "collaboration/hxjj.png",
          pos: -56 * 22,
          title: "Transference Fund",
          href: "",
        },
        {
          img: "collaboration/unetwork.png",
          pos: -56 * 23,
          title: "U Network",
          href: "https://u.network",
        },
        {
          img: "collaboration/jhct.png",
          pos: -56 * 24,
          title: "UNITY VENTURES",
          href: "http://www.unityvc.com",
        },
        {
          img: "collaboration/ua.png",
          pos: -56 * 25,
          title: "Univalues Associates",
          href: "",
        },
        {
          img: "collaboration/sdzb.png",
          pos: -56 * 25,
          title: "WATERDRIP CAPITAL",
          href: "http://waterdrip.io",
        },
        {
          img: "collaboration/ydzb.png",
          pos: -56 * 25,
          title: "",
          href: "",
        },
      ],
    },

    counsel: {
      title: "Counsel",
      img: "collaboration/counsel.png",

      list: [
        {
          img: "collaboration/ey.png",
          pos: -56 * 0,
          title: "E&Y",
          href: "",
        },
        {
          img: "collaboration/king.png",
          pos: -56 * 1,
          title: "KWM",
          href: "",
        },
      ],
    },

    list: [
      {
        img: "collaboration/bianjie.png",
        title: "BIANJIE.AI",
        text: "bianjie.ai",
        href: "https://bianjie.ai",
      },
      {
        img: "collaboration/cosmos.png",
        title: "COSMOS",
        text: "cosmos.network",
        href: "https://cosmos.network",
      },
      {
        img: "collaboration/tendermint.png",
        title: "Tendermint",
        text: "tendermint.com",
        href: "https://tendermint.com",
      },
      {
        img: "collaboration/hashkeygroup.png",
        href: "https://www.hashkey.com/#/",
      },
      {
        img: "collaboration/base.png",
        title: "Newchainbase",
        text: "newchainbase.com",
        href: "http://www.newchainbase.com",
      },
      {
        img: "collaboration/waterdrip.png",
        title: "WaterDrip",
        text: "waterdrip.io",
        href: "http://waterdrip.io/",
      },
      {
        img: "collaboration/medishares.png",
        title: "Medishares",
        text: "medishares.org",
        href: "https://medishares.org",
      },
      {
        img: "collaboration/transference.png",
        title: "Transference",
        text: "",
        href: "",
      },
      {
        img: "collaboration/bkfund.png",
        title: "BKFund",
        text: "",
        href: "",
      },
      {
        img: "collaboration/timestamp.png",
        title: "Timestamp",
        text: "",
        href: "",
      },
    ],
    btnTxt: "Collaboration",
  },
  about: {
    title: "Key Innovations",
    imgtxt:
      " Facilitate construction of <br> distributed business applications",
    txt: [
      "Incorporation of a service-oriented infrastructure into Cosmos",
      "Integration of business services offered by heterogeneous systems, including public & consortium chains as well as legacy systems",
      "Interoperability of those services across an internet of blockchains",
    ],
    btnTxt: "WHITE PAPER",
    checkTxt: "CHECK NETWORK",
  },
  network: {
    title: "Network Design",
    txt: [
      "Definition of standard ABCI transaction types supporting " +
        "registration, binding, invocation, query, profiling and " +
        "governance of IRIS Services (a.k.a. iServices)",
      "iService providers act as adaptors of business logic " +
        "residing in public and consortium blockchains as well " +
        "as enterprise legacy systems",
      "iServices can be invoked across an internet of " +
        "blockchains over an extended IBC protocol",
    ],
    src: "white.png",
  },
  privacy: {
    title: "IRIS Foundation Limited",
    title1: "Privacy policy",
    list: [
      {
        title: "Introduction",
        txtList: [
          "We are IRIS Foundation Limited, a company limited by guarantee and incorporated in Hong Kong (“the Foundation”, " +
            "“we” or “us”). ",
          "Your privacy is important to us.  We are committed to protecting the privacy, confidentiality and security of the personal data we hold by " +
            "complying with the requirements under applicable laws and regulations.  We are equally committed to ensuring that all our employees, service " +
            "providers and agents uphold these obligations.",
          "This policy explains how we manage personal data within our organization.",
        ],
      },
      {
        title: "How we collect personal data",
        txtList: [
          "We collect personal data about you in the following ways: ",
          "<ul>" +
            "<li>where you register for an account or to receive emails from us</li>" +
            "<li>when you order products or services from us</li>" +
            "<li>when you submit a query or request to us</li>" +
            "<li>when you respond to a survey that we run or fill in forms on one of our websites</li>" +
            "<li>by tracking your use of our websites and mobile applications</li>" +
            "<li>from public sources</li>" +
            "<li>from examination of public and private blockchains</li>" +
            "<li>from third parties who are entitled to disclose that information to us</li>" +
            "<li>when you apply for a job with us</li>" +
            "</ul> ",
          "In some cases we may be required by law to collect certain types of personal data about you.",
          "Where we collect personal data from you, we will generally do so ourselves.  However, in some cases " +
            "we may collect personal data from a third party, such as through your representatives, contractors who " +
            "provide services to us, or third parties who refer you to us because they think you may be interested in our " +
            "products or services.",
        ],
      },
      {
        title: "Kinds of personal data we collect",
        txtList: [
          "The kinds of personal data that we collect and hold about you may include: ",
          "<ul>" +
            "<li>identifying information, such as your real name, nationality, ID type, ID number and other information required by the laws and regulations</li>" +
            "<li>contact information, such as your postal address, email address and telephone number personal information</li>" +
            "<li>social media handles and other social media profile information that you make available to us or to the public</li>" +
            "<li>financial information, such as credit card, bank account or other payment details</li>" +
            "<li>blockchain identifiers, such as blockchain addresses and public keys</li>" +
            "<li>usernames and passwords that you create when registering for an account with us</li>" +
            "<li>details of any products or services that we provide to you</li>" +
            "<li>information about how you use the products and services we provide</li>" +
            "<li>records of our communications with you, including any messages you send us</li>" +
            "</ul> ",
          "Without this information, we may not be able to provide you with our products or services (or with all of the features and functionality offered by our products or services) or to respond to queries or requests that you submit to us.",
        ],
      },
      {
        title: "Purposes for which we use personal data",
        txtList: [
          "We use personal data that we collect about you for the following purposes: ",
          "<ul>" +
            "<li>to verify your identity when you are dealing with us</li>" +
            "<li>to determine your eligibility for any of our products or services</li>" +
            "<li>to determine your compliance with the terms and conditions that apply to any of our products or services and applicable law</li>" +
            "<li>to enable us to provide our products and services</li>" +
            "<li>to improve our website based on your information and feedback</li>" +
            "<li>to answer your queries and requests</li>" +
            "<li>to comply with our legal and regulatory obligations</li>" +
            "<li>to carry out market analysis and research</li>" +
            "<li>to monitor use of our products and services</li>" +
            "<li>to assess, maintain, upgrade and improve our products and services</li>" +
            "<li>to carry out education and training programs for our staff</li>" +
            "<li>to manage and resolve any legal or commercial complaints or issues</li>" +
            "<li>to carry out planning and forecasting activities and other internal business processes</li>" +
            "<li>to keep you informed about our activities, including by sending out newsletters</li>" +
            "<li>to connect you with our users of our products and services</li>" +
            "</ul> ",
        ],
      },
      {
        title: "Direct marketing",
        txtList: [
          "We may from time to time use your personal data in order to send you marketing materials about products " +
            "or services that we think you may be interested in (including in some cases products and services that " +
            "are provided by a third party).  We may not use your personal data unless we have received your consent.  " +
            "You can opt-out of receiving marketing communications from us by contacting us at " +
            '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a>. ',
          "We may use your following personal data for the purpose of direct marketing:  ",
          "<ul>" +
            "<li>identifying information, such as your name and date of birth</li>" +
            "<li>contact information, such as your postal address, email address and telephone number</li>" +
            "<li>products and services portfolio information and demographic data held by us from time to time</li>" +
            "</ul> ",
          "We may use your personal data to market the following products and/or services to you:",
          "<ul>" +
            "<li>purchasing and/or trading digital assets</li>" +
            "<li>providing, managing or accessing mobile wallets for holding digital assets; and</li>" +
            "<li>other products or services related to digital assets</li>" +
            "</ul> ",
          "If we use your personal data in any direct marketing communications, you have the right to request that we provide " +
            "you with the source of that personal data.  There is no fee for requesting this information.  We will provide you " +
            "with the source of the personal data, unless it is impracticable or unreasonable to do so. ",
          "Please indicate your consent to receiving information relating to the above by contacting us at " +
            '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a> . ',
          "We may also use and disclose your information for other purposes in accordance with your requests or instructions.",
        ],
      },
      {
        title: "People to whom we may disclose personal data",
        txtList: [
          "We may share personal data about you with: ",
          "<ul>" +
            "<li>your representatives, advisers and others you have authorised to interact with us on your behalf</li>" +
            "<li>our staff who need the information to discharge their duties</li>" +
            "<li>related entities within our corporate group</li>" +
            "<li>our business partners, agents and service providersp</li>" +
            "<li>payment system operators and financial institutions</li>" +
            "<li>prospective purchasers of all or part of our business or a related entity</li>" +
            "<li>professional advisers who we engage to provide advice on our business</li>" +
            "<li>government authorities who ask us to disclose that information, or to other people as required by law</li>" +
            "</ul> ",
          "In some cases the people to whom we disclose your personal information may be located overseas.  Further, we may have servers " +
            "located overseas.  The jurisdictions in which these people and/or servers are likely to be located include  the United States, Japan, " +
            "and Singapore.  There may not be in place data protection laws which are substantially similar to, or serve the same purposes as the " +
            "applicable data privacy laws in Hong Kong.  This means your personal information may not be protected to the same or similar level in Hong Kong. ",
          "[<span>We will never sell your personal data to any third party.</span>] [<span><b>optional clause</b></span>]",
        ],
      },
      {
        title:
          "Cookies <div class='div1'>[optional clause, to be used if cookies are relevant to your business]</div> ",
        txtList: [
          "<span>[We use cookies to monitor and observe your use of our websites, compile aggregate data about that use, " +
            "and provide you with a more effective service (which may include customising parts of our websites based on " +
            'your preferences and past activities on those websites).  <b>"Cookies"</b> are small text files created and stored on ' +
            "your hard drive by your internet browser software, in order to hold relevant information about the web page you are " +
            "currently viewing.  Most internet browsers have a facility that will allow you to disable cookies altogether – " +
            "please refer to your browser’s help menu to find out how to do this.  While you will still be able to browse our websites " +
            "with cookies disabled on your internet browser, some website functionality may not be available or may not function correctly.]</span> ",
        ],
      },
      {
        title: "Storage and security of personal data ",
        txtList: [
          "We generally store the personal data that we collect in electronic databases, some of which may be held on our behalf by third party data storage " +
            "providers.  Sometimes we also keep hard copy records of this personal data in physical storage facilities.  We use a range of physical and technical " +
            "security processes and procedures to protect the confidentiality and security of the information that we hold, and we update these from time to time " +
            "to address new and emerging security threats that you become aware of.",
          "[We also take steps to monitor access to and modification of your information by our staff, and ensure that our staff are aware of and properly trained " +
            "in their obligations for managing your privacy.] [<b>optional clause</b>]",
        ],
      },
      {
        title:
          "Google Analytics <div class='div1'>[optional clause, to be used if Google Analytics are used]</div>",
        txtList: [
          "<span>[Our website uses Google Analytics, a web analytics service provided by Google, Inc. (“<b>Google</b>”). " +
            "<span> Google Analytics uses cookies to help the website analyse how users use our website.</span>",
          "<span>The information generated by the cookie about your use of our website (including your IP address) will be transmitted to and stored " +
            "by Google on servers in the United States.  Google will use this information for the purpose of evaluating your use of the website, compiling " +
            "reports on website activity for website operators and providing other services relating to website activity and internet usage.  Google may also " +
            "transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf.  " +
            "Google will not associate your IP address with any other data held by Google.</span> ",
          "<span>You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use " +
            "the full functionality of our website.  By using our website, you consent to the processing of data about you by Google in the manner and for the purposes " +
            "set out above.]</span>",
        ],
      },
      {
        title: "Retention of personal data",
        txtList: [
          "Your personal data will only be kept as long as required.",
          "We may retain your personal data for a period of at least 12 months.  At our discretion, we may retain personal data for longer than the " +
            "said period if we consider it necessary or desirable to do so to meet our legal or regulatory obligations.  ",
        ],
      },
      {
        title: "Access and correction ",
        txtList: [
          "If you want to access any of the personal data that we hold about you or to correct some aspect of it (for example, because you think it is " +
            "incomplete or incorrect), please contact our privacy compliance team using the contact details set out below.  To protect the integrity and " +
            "security of the information we hold, we may ask that you follow a defined access procedure, which may include steps to verify your identity.  " +
            "In certain cases we may charge you an administration fee for providing you with access to the information you have asked for, but we will inform " +
            "you of this before proceeding.  There may be cases where we are unable to provide the information you request, such as where it would interfere " +
            "with the privacy of others or result in a breach of confidentiality.  In these cases we will let you know why we cannot comply with your request. ",
          "Even if you do not request access to and/or correct your personal data held  by us, if we are satisfied that, having regard to the reasons for which we " +
            "hold your personal data, that personal data is inaccurate, incomplete, out-of-date, irrelevant or misleading, we may take reasonable steps to correct that " +
            "information. ",
        ],
      },
      {
        title: "Your consent",
        txtList: [
          "By using our website, providing personal data and/or using any of our products or services, you agree that:",
          "<ul>" +
            "<li>you consent to this privacy policy, as updated from time to time; and</li>" +
            "<li>if you have provided personal data to us relating to any other person, you:" +
            "<ul>" +
            "<li>have a right to provide that information;</li>" +
            "<li>have provided a copy of this privacy policy, as updated from time to time, to that person; and</li>" +
            "<li>each such person has agreed to those terms.</li>" +
            "</ul>" +
            "</li>" +
            "</ul>",
        ],
      },
      {
        title: "Complaints",
        txtList: [
          "We try to meet the highest standards in order to protect your privacy.  However, if you are concerned about the way in which we are " +
            "managing your personal data and think we may have breached any applicable privacy laws, or any other relevant obligation, please contact " +
            "our privacy compliance team using the contact details set out below.  We will make a record of your complaint and refer it to our internal " +
            "complaint resolution department for further investigation.  We will deal with the matter as soon as we can, and keep you informed of the progress " +
            "of our investigation..",
        ],
      },
      {
        title: "Changes to this policy",
        txtList: [
          "We may make changes to this policy from time to time, to take into account changes to our standard practices and procedures or where necessary to " +
            "comply with new laws and regulations.  The latest version of this policy will always be available on our website.",
        ],
      },
      {
        title: "Contact details",
        txtList: [
          "If you want any further information from us on privacy matters, please contact our privacy compliance team at " +
            '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a>  .',
        ],
      },
    ],
  },
  terms: {
    title: "IRIS Foundation Limited",
    title1: "Website terms of use",
    list: [
      {
        title: "Introduction",
        txtList: [
          'This website ("our website") is owned and operated by IRIS Foundation Limited, a company limited by ' +
            'guarantee and incorporated in Hong Kong (“the Foundation”, "we" or "us").  Each reference in these terms ' +
            "of use to “our website” includes all materials that we make available to you on our website.",
          "By using our website, you agree to comply with these terms of use.  Please check this page each time you use our website, " +
            "as we may update these terms from time to time.",
          "If you carry out any transaction through our website, that transaction may be subject to additional terms and conditions " +
            "which you will be asked to read and accept at the relevant time.  To the extent of any inconsistency with these terms, the terms " +
            "of the transaction apply to that transaction and any matters connected with it.",
        ],
      },
      {
        title: "Your obligations",
        txtList: [
          "You must comply with any instructions we give you about how to use our website and must not do anything that interferes with or " +
            "adversely affects the normal operation of the website (including the ability of other users to access or use the website).",
          "You are responsible for ensuring the security of the systems and devices that you use to access our website, including through " +
            "use of appropriate virus-checking and other security software.",
        ],
      },
      {
        title: "Registration",
        txtList: [
          "You may need to register with us in order to access certain parts of our website.  Further details about registrations are " +
            "available here.  In this case, we may issue you with a user name and password, or other appropriate log-in details for your account.  " +
            "You are responsible for keeping your log-in details confidential so that they cannot be used without your permission.  You will be " +
            "responsible for any use of our website by anyone using your log-in details.",
        ],
      },
      {
        title: "Rights to suspend or terminate access",
        txtList: [
          "We may suspend, terminate or block your access to all or any part of our website at any time and without prior notice to you.",
        ],
      },
      {
        title: "Intellectual property",
        txtList: [
          "All of the intellectual property rights in and to our website belong to us and our licensors.  We may update and change the materials available on our " +
            "website, including by removing materials, at any time in our discretion without notice to you.",
          "You may download or print sections of our website if needed for your own personal use, but otherwise you may not reproduce any part of our website without " +
            "our express prior consent.  To the extent that our website contains functionality that allows you to access or download specific materials through our website, " +
            "your use of that functionality and the downloaded materials may be subject to separate terms and conditions which you will be asked to read and accept at the " +
            "relevant time.",
        ],
      },
      {
        title: "Website links",
        txtList: [
          "Our website may contain or link to information that has not been devised, verified or tested by us or any of our officers, employees or agents.  These are provided " +
            "for your information only.  We do not take any responsibility for that information, nor endorse its accuracy or completeness.  ",
          "We do not guarantee that the information, or the provision of the hyperlinks to you, does not infringe third party rights.  If our website contains a link to " +
            "an external website, we do not endorse, recommend, approve, guarantee or introduce any third parties or the services and/or products that those third parties " +
            "may offer.  We accept no responsibility for them or any of the content available, or for any loss or damage that may arise from your use of them.",
          "You may provide a link to the home page of our website at, on any website you operate, as long as you do not suggest any form of association, approval or " +
            "endorsement on our part without our express prior permission and you promptly delete the link at our request.",
          "Except as set out in this clause, you may not link to our website.",
        ],
      },
      {
        title: "No financial services activities or advice ",
        txtList: [
          "The information and any materials contained in this website should not be considered as an offer or solicitation to buy or sell financial instruments, provide " +
            "financial advice, create a trading platform, facilitate or take deposits or provide any other financial services of any kind in any jurisdiction.",
          "The information contained on this website is not intended to provide and should not be construed as advice of any kind.  You should obtain appropriate " +
            "professional advice when necessary. It does not take into account your objectives, financial situation or needs. ",
        ],
      },
      {
        title: "Liability",
        txtList: [
          "While we will use reasonable care and skill in operating our website, we cannot promise that our website will always be available, " +
            "meet your requirements or completely free of faults, errors or compromise from cybersecurity events. ",
          "To the maximum extent permitted by law, except as expressly set out in these terms of use, we exclude:",
          "<ul>" +
            "<li>all conditions, representations, warranties and statutory guarantees, whether express or implied, in relation to our website; and</li>" +
            "<li>any liability, whether in contract, tort (including negligence), or otherwise, for any indirect or consequential loss, " +
            "damage or expense incurred by you or any other user in connection with our website.</li>" +
            "</ul>",
          "To the extent we are unable by law to exclude any implied condition, representation, warranty or statutory guarantee in relation to the provision of " +
            "goods or services through our website, we limit our liability for a breach to the re-supply of those goods or services, or payment for such re-supply.  " +
            "This is without limitation to any other exclusions or restrictions of our or others’ liability in connection with this website.",
        ],
      },
      {
        title: "Privacy",
        txtList: [
          'We will manage any personal information that we collect through our website in accordance with our <a class="privacy"> Privacy Policy</a>, which you can access here. ',
        ],
      },
      {
        title: "Governing law",
        txtList: [
          "These terms of use are governed by the laws in force in Hong Kong and are subject to the exclusive jurisdiction of the courts in that place.",
        ],
      },
      {
        title: "Questions?",
        txtList: [
          'Please contact us <a href="mailto:contact@irisnet.org" >contact@irisnet.org </a> if you have any questions about our website.',
        ],
      },
    ],
  },
  qr: {
    title: " Scan QR code",
    txt: " to follow our Subscriptions",
  },
  // "community":{
  //     "title":"Community",
  //     "coming":"Coming soon"
  //
  // },
  contactList: [
    {
      infotitle: "IRISnet is named after Greek goddess Iris, said to be the ",
    },
    {
      infotitle: "personification of the rainbow and the faithful messenger ",
    },
    { infotitle: "between heaven and humanity" },
  ],
  appcontact: {
    appimg: [
      {
        src: "telegran.png",
        src_selected: "telegran_selected.png",
        txt: "Telegram",
        href: "https://t.me/irisnetworkcn",
      },
      {
        src: "twitter.png",
        src_selected: "twitter_selected.png",
        txt: "Twitter",
        href: "https://twitter.com/irisnetwork",
      },

      {
        src: "github.png",
        src_selected: "github_selected.png",
        txt: "Github",
        href: "https://github.com/irisnet",
      },
      {
        src: "mail.png",
        src_selected: "mail_selected.png",
        txt: "Email",
        href: "mailto:contact@irisnet.org",
      },
    ],
    appimg1: [
      {
        src: "bluemedium.png",
        src_selected: "redmedium-selected.png",
        txt: "Medium",
        href: "https://medium.com/irisnet-blog",
      },
      {
        src: "riot.png",
        src_selected: "riot_selected.png",
        txt: "Riot",
        href: "https://riot.im/app/#/room/!bmimZgJrUWSmxqQEmG:matrix.org",
      },
      {
        src: "wechat.png",
        src_selected: "wechat_selected.png",
        txt: "Wechat",
      },
      {
        src: "weibo.png",
        src_selected: "weibo_selected.png",
        txt: "Weibo",
        href: "https://weibo.com/u/6455513027",
      },
    ],
  },
  submit: {
    Subscribe: "Subscribe",
    success: "Success",
  },
  errEmail: {
    err: "Please enter a valid email address",
  },
  placehooder: {
    placehooder: "Please enter your email address",
  },
  mobileLogo: [
    {
      src: "../../../public/mobile_main_en.png",
      active: true,
    },
    {
      src: "../../../public/mobile_bug_bounty_en.png",
      active: false,
    },
    {
      src: "../../../public/mobile_irisnet_en.png",
      active: false,
    },
  ],
  // "announcements":[
  //     {
  //         src:'../../public/announcements_betanet.png',
  //         timestamp:"Feb 1, 2019",
  //         imgtext:'Betanet Work Plan',
  //         href: 'https://github.com/irisnet/iris-foundation/blob/master/betanet_work_plan.md'
  //     },
  //     {
  //         src:'../../public/announcements_mainnet.png',
  //         timestamp:"Jan 16, 2019",
  //         imgtext:'IRIS Foundation Announces Plan for Betanet',
  //         href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-plan.md'
  //     },
  //     {
  //         src:'../../public/announcements_irisnet.png',
  //         timestamp:"Jan 16, 2019",
  //         imgtext:'Expectations for IRIS Betanet',
  //         href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-expectations.md'
  //     }
  // ]
};
export default message;
