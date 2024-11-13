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
        Sistema avanzado de manejo y manipulación de estilos CSS dinámicos,
        basado en comandos personalizados.
        <p>
          Diseñado para ajustar y personalizar estilos en función de condiciones
          específicas, Fluid CSS permite definir reglas CSS que responden a
          parámetros como el tamaño de la pantalla, mediante comandos de estilo
          encapsulados.
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
          comment: "ƒ I(e){if(!e)return new ... --> all OK",
        }}
        src_params_nodemodule={{
          name: "fluidCSS",
          nodepack: "fluid-css-lng",
          comment: "ƒ fluidCSS(props) { ... --> all OK",
        }}
      />
      {sep}
      <Caracteristicas />
    </$FMD>
  );

  function Caracteristicas() {
    return (
      <$index label="Características principales">
        <Card className="pad-10px">
          <$ variant="h5">Características principales:</$>
          {sep}
          <$CardDef title="Interpolación Lineal" elevation={0}>
            ajusta de manera fluida los atributos que utilicen unidades en
            píxeles, permitiendo que los elementos de la interfaz se adapten
            proporcionalmente. Los diseños responsivos harán transiciones suaves
            y escalado preciso.
          </$CardDef>
          <$CardDef title="Condiciones Dinámicas" elevation={0}>
            Define comportamientos específicos mediante condiciones dinámicas
            como "menor que", "mayor que" y "entre", aplicadas al ancho o a la
            altura de la ventana.
            <p>
              Ajusta de manera fluida los elementos que respondan a diferentes
              propiedades en rangos de dimensiones, optimizando la adaptación de
              la interfaz según el tamaño de la pantalla.
            </p>
          </$CardDef>
          <$CardDef title="Fácil Integración" elevation={0}>
            Compatible con cualquier proyecto web y es sencillo de implementar.
            Funciona tanto en el lado del cliente como en el lado del servidor
            usando npm, lo que permite una integración flexible y adaptable a
            distintos entornos de desarrollo.
            <p>
              Ideal para la adaptación dinámica de los estilos según las
              dimensiones de la ventana, optimizando la experiencia visual sin
              complicaciones adicionales.
            </p>
          </$CardDef>
        </Card>
        <$$h />
        <Card className="pad-20px" elevation={6}>
          <strong>
            Fluid CSS es ideal para proyectos que necesitan adaptarse de manera
            elegante y responsiva a diferentes dispositivos y resoluciones.
          </strong>
        </Card>
      </$index>
    );
  }
}
