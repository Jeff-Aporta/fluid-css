import CrearIFHW from "./functions/_if.mjs";
import CrearLERPHW from "./functions/_lerp.mjs";

import appvar from "./vars.mjs";
import actualizarStyle from "./update.mjs";
import soportarMultilinea from "./multiline.mjs";
import Processing from "./processing.mjs";
import fluidCSS from "./fluidCSS.mjs";

fluidCSS = fluidCSS({
  appvar,
  actualizarStyle,
  soportarMultilinea,
  CrearIFHW,
  CrearLERPHW,
  Processing,
});
Processing = Processing(fluidCSS);

export {
  appvar,
  actualizarStyle,
  soportarMultilinea,
  CrearIFHW,
  CrearLERPHW,
  fluidCSS,
  Processing,
};
