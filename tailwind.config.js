module.exports = {
  theme: {
    colors: {
      transparent: "transparent",

      black: "#22292f",
      "grey-darker": "#434343",
      "grey-dark": "#52524E",
      grey: "#9A9B94",
      "grey-light": "#D4D6C8",
      "grey-lighter": "#E9E9E5",
      white: "#ffffff",
      "white-lighter": "#FCF5EE",

      "red-dark": "#D12737",
      red: "#F45B69",
      "red-light": "#E39DA4",
      "red-darkest": "#B60414",
      "red-lightest": "#FDD0D4",

      "yellow-darkest": "#C3A50B",
      "yellow-dark": "#D2B62B",
      yellow: "#FCD307",
      "yellow-light": "#FDDF4A",
      "yellow-lightest": "#FFEFA0",

      "green-darker": "#158A05",
      "green-dark": "#26D30D",
      green: "#4EF037",
      "green-light": "#80FF6F",
      "green-lightest": "#B9FFAF",

      "blue-darkest": "#0E749C",
      "blue-dark": "#26A5D7",
      blue: "#56CBF9",
      "blue-light": "#9DE3FF",
      "blue-lightest": "#A6E5FE",
    },
    screens: {
      s: "320px",
      "s-max": [{ max: "320px" }],
      sl: "375px",
      sm: "575px",
      "sm-600": "600px",
      "sm-land": [{ min: "667px" }],
      md: "768px",
      lg: "992px",
      x: "1024px",
      lapie: [{ min: "1280px", max: "1366px" }],
      xl: [{ min: "1500px" }],
    },
    fontFamily: {
      display: ["Saira"],
    },
    fontSize: {
      xs: ".75rem", // 12px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem",
      "7xl": "5rem", // 48px
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    leading: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2,
    },
    textColors: (theme) => theme("colors"),
    backgroundColors: (theme) => theme("colors"),
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    borderWidths: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
      "8": "8px",
    },
    borderColors: global.Object.assign(
      { default: (theme) => theme(colors["grey-light"]) },
      (theme) => theme("colors")
    ),
    borderRadius: {
      none: "0",
      img: "10%",
      px: "5px",
      sm: ".125rem",
      default: ".25rem",
      lg: "25px",
      full: "9999px",
      "header-border": "0px 0px 220px 220px",
      "header-border-sm": "0px 0px 120px 120px",
    },
    width: {
      auto: "auto",
      px: "1px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "24": "6rem",
      "32": "8rem",
      "48": "12rem",
      "64": "16rem",
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "5/6": "83.33333%",
      full: "100%",
      screen: "100vw",
      "300": "300px",
      "320": "320px",
      "350": "350px",
      "400": "400px",
      "500": "500px",
      img: "600px",
      "700": "700px",
      "750": "750px",
      "800": "800px",
      card: "264px",
    },
    height: {
      card: "364px",
      auto: "auto",
      px: "1px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "24": "6rem",
      "32": "8rem",
      "48": "12rem",
      "64": "16rem",
      "86": "20rem",
      full: "100%",
      screen: "100vh",
      img: "500px",
      "90": "90px",
      "150": "150px",
      "200": "200px",
      "250": "250px",
      "350": "350px",
      "400": "400px",
      "450": "450px",
      "490": "490px",
      "500": "500px",
      "550": "550px",
      "600": "600px",
      "650": "650px",
      "750": "750px",
      "800": "800px",
      imgHeader: "570px",
    },
    padding: {
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "55": "1.1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem",
      "38": "16rem",
      "44": "20rem",
    },
    margin: {
      auto: "auto",
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem",
      "40": "40%",
      imgHeader: "-85px",
    },
    boxShadow: {
      default: "0px 4px 4px  rgba(0,0,0,0.25)",
      md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
      lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      outline: "0 0 0 3px rgba(52,144,220,0.5)",
      "lg-card": "0px 6px 12px rgba(0, 0, 0, 0.1);",
      none: "none",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },
    zIndex: {
      "100": 100,
    },
    gap: (theme) => theme("spacing"),
    gridTemplateColumns: {
      none: "none",
      "0": "1fr 1fr",
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(auto-fill, minmax(250px, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
      "7": "repeat(7, minmax(0, 1fr))",
      "8": "repeat(8, minmax(0, 1fr))",
      "9": "repeat(9, minmax(0, 1fr))",
      "10": "repeat(10, minmax(0, 1fr))",
      "11": "repeat(11, minmax(0, 1fr))",
      "12": "repeat(12, minmax(0, 1fr))",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
    },
    gridColumnStart: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
    },
    gridColumnEnd: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
    },
    gridTemplateRows: {
      none: "none",
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
    },
    gridRowStart: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
    },
    gridRowEnd: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
    },
    backgroundPosition: {
      center: "center center",
    },
  },
  variants: {
    accessibility: ["responsive", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    cursor: ["responsive"],
    display: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive"],
    order: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    stroke: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"],
  },
  plugins: [
    function({ addComponents }) {
      const border = {
        ".border-top": {
          borderTop: "#F45B69  8px solid",
        },
      };
      const borderBottom = {
        ".border-bottom": {
          borderBottom: "#F45B69  8px solid",
        },
      };

      addComponents(borderBottom);
      addComponents(border);
    },
  ],
};
