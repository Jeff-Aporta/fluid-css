import CrearIFHW from "./functions/if.mjs";
import CrearLERPHW from "./functions/lerp.mjs";

import appvar from "./vars.mjs";
import actualizarStyle from "./update.mjs";
import soportarMultilinea from "./multiline.mjs";
import { Processing, init as initProcessing } from "./processing.mjs";
import { fluidCSS, init as initFluid } from "./fluidCSS.mjs";

initFluid({
  appvar,
  actualizarStyle,
  soportarMultilinea,
  CrearIFHW,
  CrearLERPHW,
});

initProcessing({ fluidCSS });

fluidCSS.actualizarStyle = actualizarStyle;

export {
  appvar,
  actualizarStyle,
  soportarMultilinea,
  CrearIFHW,
  CrearLERPHW,
  fluidCSS,
  Processing,
};

CrearIFHW();
CrearLERPHW();