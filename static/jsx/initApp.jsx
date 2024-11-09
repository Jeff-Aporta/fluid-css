function initApp() {
  setup();
  burn_template();
  ready();

  function setup() {
    Object.assign(config_template, {
      banner: {
        left: {
          label: "Documentación",
          logo: "static/img/icon.svg",
        },
        right: {
          social: {
            github: {
              label: "Jeff-Aporta",
              url: "https://github.com/Jeff-Aporta",
            },
            youtube: {
              label: "YouTube",
              url: "https://www.youtube.com/@JeffAporta",
            },
            whatsapp: {
              label: "WhatsApp",
              url: "https://wa.link/1tmqmt",
            },
            telegram: {
              label: "Telegram",
              url: "https://t.me/jeffAporta",
            },
          },
        },
      },
      mapSite: _mapSite(),
      repo: {
        name: "Fluid CSS",
        url: "https://github.com/Jeff-Aporta/fluid-css",
      },
    });
  }

  function burn_template() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  function ready() {
    changeContent({ id: get_id_param() });
  }

  function _mapSite() {
    return [
      {
        lbl: " ",
      },
      {
        component: () => <_masEnMiPortafolio />,
      },
      {
        lbl: " - ",
      },
      {
        lbl: "Empecemos",
      },
      {
        lbl: "Introducción",
        id: "intro",
        content: () => <_intro />,
        i: "fa-regular fa-file-lines",
      },
      {
        lbl: " ",
      },
      {
        lbl: "Uso",
      },
      {
        lbl: "Condiciones",
        id: "conds",
        content: () => <_conds />,
        i: "fa-solid fa-person-chalkboard",
      },
      {
        lbl: "Interpolación líneal",
        id: "lerp",
        content: () => <_lerp />,
        i: "fa-solid fa-arrows-left-right",
      },
      {
        lbl: "  ",
      },
    ];
  }
}
