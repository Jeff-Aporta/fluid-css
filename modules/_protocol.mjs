import {
  appvar,
  actualizarStyle,
  soportarMultilinea,
  CrearIFHW,
  CrearLERPHW,
  Processing
} from "./modules.mjs";

export default fluidCSS;

const CSScmdsReset = () => {
  Object.values(appvar.reglasCMD).forEach((regla) => {
    regla.reset();
  });
  actualizarStyle();
};

function fluidCSS(props){
  if (!props) {
    return Processing();
  }
  let { code, clss = [], reset } = props;
  if (reset) {
    CSScmdsReset();
  }
  if (typeof clss === "string") {
    clss = [clss];
  }
  clss = clss.join(" ").trim();
  if (typeof code != "string") {
    return clss;
  }

  code = soportarMultilinea({ code });

  if (!code.length) {
    return clss;
  }

  update();

  let retorno = code
    .map((cmd) =>
      Object.values(appvar.reglasCMD).reduce((acc, regla) => {
        if (!acc) {
          const t = regla.cmd({ comando: cmd });
          if (t) {
            return t;
          }
        }
        return acc;
      }, "")
    )
    .join(" ");

  let r = [retorno, clss, "css-cmdscalc"].filter(Boolean).join(" ").trim();
  while (r.includes("  ")) {
    r = r.replaceAll("  ", " ");
  }
  return r;

  function update() {
    if (appvar.actualizarStyleState && appvar.huboCambio) {
      appvar.huboCambio = false;
      appvar.actualizarStyleState = false;
      actualizarStyle();
    }
  }
};

CrearIFHW();
CrearLERPHW();