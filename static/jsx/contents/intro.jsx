const sep = (
  <_>
    <$$h />
    <$hr />
    <$$h />
  </_>
);

function _intro() {
  return (
    <$FMD>
      <_$Bienvenido name_app="Fluid CSS" img_url="static/img/app.svg">
        Fluid CSS es un sistema avanzado para el manejo y manipulación de
        estilos CSS dinámicos, basado en comandos personalizados.
        <p>
          Diseñado para ajustar y personalizar estilos en función de condiciones
          específicas, Fluid CSS permite definir reglas CSS que responden a
          parámetros como el tamaño de la pantalla, utilizando comandos de
          estilo encapsulados.
        </p>
      </_$Bienvenido>
      {sep}
      <_$Instalación
        url_cdn="https://jeff-aporta.github.io/fluid-css/static/js/index.all.min.js"
        npm_pack="fluid-css-lng"
      />
      {sep}
      <_$testing
        src_params_iife={{
          url: "https://jeff-aporta.github.io/fluid-css/static/js/index.all.min.js",
          name: "fluidCSS",
          comment: "Debería mostrar la función: ƒ I(e){if(!e)return new ...",
        }}
        src_params_nodemodule={{
          name: "fluidCSS",
          nodepack: "fluid-css-lng",
          comment: "// Debería mostrar la función: ƒ fluidCSS(props) { ...",
        }}
      />
      {sep}
      <Caracteristicas />
    </$FMD>
  );

  function Caracteristicas() {
    return (
      <$index label="Características Técnicas">
        <Card className="pad-10px">
          <Typography variant="h5">Funciones Principales:</Typography>
          {sep}
          <$CardDef title="Interpolación Lineal" elevation={0}>
            Fluid CSS utiliza la función <code>lerp</code> para realizar
            interpolaciones suaves entre valores de estilo. Esto permite que los
            elementos de la interfaz se ajusten dinámicamente según el tamaño de
            la ventana, proporcionando una experiencia visual fluida.
          </$CardDef>
          <$CardDef title="Condiciones Dinámicas" elevation={0}>
            <div>
              Con las funciones <code>btwX</code>, <code>btwY</code>,{" "}
              <code>ltX</code>, y <code>gtX</code>, Fluid CSS permite definir
              estilos que responden a condiciones específicas basadas en el
              tamaño de la ventana. Esto incluye aplicar estilos cuando el ancho
              o la altura está dentro de un rango específico o por encima/debajo
              de ciertos límites.
            </div>
            <p>
              Estas condiciones permiten una personalización precisa de la
              interfaz, optimizando la adaptación a diferentes dispositivos y
              resoluciones.
            </p>
          </$CardDef>
          <$CardDef title="Fácil Integración" elevation={0}>
            Fluid CSS es compatible con cualquier proyecto web y se integra
            fácilmente utilizando npm. Su diseño modular permite que funcione
            tanto en el lado del cliente como en el servidor, facilitando su
            implementación en diversos entornos de desarrollo.
            <p>
              La biblioteca está diseñada para ser intuitiva, permitiendo a los
              desarrolladores aplicar estilos dinámicos sin complicaciones
              adicionales.
            </p>
          </$CardDef>
        </Card>
        <$$h />
        <Card className="pad-20px" elevation={6}>
          <strong>
            Fluid CSS es ideal para proyectos que requieren una adaptación
            elegante y responsiva a diferentes dispositivos y resoluciones.
          </strong>
        </Card>
      </$index>
    );
  }
}
