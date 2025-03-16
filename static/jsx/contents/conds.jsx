function _conds() {
  setTimeout(PR.prettyPrint);
  return (
    <$FMD>
      <Typography variant="h1">Modo de uso</Typography>
      <p>
        Fluid CSS ofrece un conjunto de funciones que permiten aplicar estilos
        condicionales en función de las dimensiones de la ventana. Estas
        funciones son <code>btwX</code>, <code>btwY</code>, <code>ltX</code>,{" "}
        <code>gtX</code>, y <code>lerp</code>, cada una diseñada para facilitar
        la adaptación de estilos en diferentes contextos de visualización.
      </p>
      {sep}
      <Reglas_lt />
      {sep}
      <MayorQue />
      {sep}
      <Entre />
      {sep}
      <Lerps />
      {sep}
      <EntreY />
      {sep}
      <Caracteristicas />
      {sep}
      <Ejemplos />
    </$FMD>
  );
}

function Reglas_lt() {
  return (
    <$index label="ltX y ltY">
      <Typography variant="h4">ltX y ltY | (&lt;=)</Typography>
      <$CardF>
        Esta condición se aplica cuando el ancho de la pantalla es menor o igual
        que el valor especificado, permitiendo definir estilos específicos para
        pantallas pequeñas.
        <$CardDef title="Menor o igual que en X o Y" elevation={0}>
          <div>
            La regla <code>ltX</code> establece un punto de ajuste en el ancho
            de la pantalla donde se aplican estilos específicos. Esto permite
            una personalización precisa y un diseño responsivo en dispositivos
            con pantallas más pequeñas.
          </div>
          <br />
          <Typography variant="h5">Ejemplo de uso</Typography>
          <$PR lang="javascript">
            {"fluidCSS().ltX(900, { backgroundColor: ['red', 'blue'] }).end();"}
          </$PR>
        </$CardDef>
      </$CardF>
    </$index>
  );
}

function MayorQue() {
  return (
    <$index label="Mayor que (>)">
      <Typography variant="h4">Mayor que (&gt;)</Typography>
      <$CardF>
        Esta condición se aplica cuando el ancho de la pantalla es mayor que el
        valor especificado, ideal para pantallas grandes.
        <$CardDef title="Mayor que en X" elevation={0}>
          <div>
            La regla <code>gtX</code> permite aplicar estilos específicos cuando
            el ancho de la pantalla supera un valor límite (X). Esto optimiza la
            experiencia del usuario en dispositivos de escritorio.
          </div>
          <br />
          <Typography variant="h5">Ejemplo de uso</Typography>
          <$PR lang="javascript">
            {"fluidCSS().gtX(1200, { fontSize: ['18px', '14px'] }).end();"}
          </$PR>
        </$CardDef>
      </$CardF>
    </$index>
  );
}

function Entre() {
  return (
    <$index label="Entre">
      <Typography variant="h4">Entre</Typography>
      <$CardF>
        Esta condición permite aplicar estilos cuando el ancho de la pantalla
        está dentro de un rango específico.
        <$CardDef title="Entre X e Y" elevation={0}>
          <div>
            La regla <code>btwX</code> permite definir estilos que se aplican
            cuando el ancho de la pantalla está entre dos valores. Esto es útil
            para crear diseños responsivos que se adaptan a diferentes tamaños
            de pantalla.
          </div>
          <br />
          <Typography variant="h5">Ejemplo de uso</Typography>
          <$PR lang="javascript">
            {
              "fluidCSS().btwX([600, 900], { backgroundColor: ['green', 'yellow'] }).end();"
            }
          </$PR>
        </$CardDef>
      </$CardF>
    </$index>
  );
}

function Lerps() {
  return (
    <$index label="lerpX y lerpY">
      <Typography variant="h4">lerpX y lerpY</Typography>
      <$CardF>
        Esta función permite aplicar estilos de manera gradual en función de la
        posición del cursor en la pantalla.
        <$CardDef title="lerpX y lerpY" elevation={0}>
          <div>
            Las reglas <code>lerpX</code> y <code>lerpY</code> permiten definir
            estilos que se aplican de manera gradual en función de la posición
            del cursor en la pantalla. Esto es útil para crear efectos de
            transición suaves y personalizados.
          </div>
          <br />
          <Typography variant="h5">Ejemplos de uso</Typography>
          <$PR lang="javascript">
            {["fluidCSS().lerpX([400, 800], { opacity: [0, 1] }).end();",
              "fluidCSS().lerpX(400, 800, { opacity: [0, 1] }).end();",
              "fluidCSS().lerpY([400, 800], { opacity: [0, 1] }).end();",
              "fluidCSS().lerpY(400, 800, { opacity: [0, 1] }).end();",
            ]}
          </$PR>
        </$CardDef>
      </$CardF>
    </$index>
  );
}

function EntreY() {
  return (
    <$index label="Entre Y">
      <Typography variant="h4">Entre Y</Typography>
      <$CardF>
        Esta condición permite aplicar estilos cuando la altura de la pantalla
        está dentro de un rango específico.
        <$CardDef title="Entre Y1 e Y2" elevation={0}>
          <div>
            La regla <code>btwY</code> permite definir estilos que se aplican
            cuando la altura de la pantalla está entre dos valores. Esto es útil
            para crear diseños responsivos que se adaptan a diferentes tamaños
            de pantalla.
          </div>
          <br />
          <Typography variant="h5">Ejemplo de uso</Typography>
          <$PR lang="javascript">
            {
              "fluidCSS().btwY([600, 900], { backgroundColor: ['green', 'yellow'] }).end();"
            }
          </$PR>
        </$CardDef>
      </$CardF>
    </$index>
  );
}

function Caracteristicas() {
  return (
    <$index label="Características">
      <Typography variant="h4">Características de las funciones</Typography>
      <$CardF>
        A continuación, se presentan las características de cada una de las
        funciones:
        <ul>
          <li>
            <code>btwX</code>: permite definir estilos que se aplican cuando el
            ancho de la pantalla está entre dos valores.
          </li>
          <li>
            <code>btwY</code>: permite definir estilos que se aplican cuando la
            altura de la pantalla está entre dos valores.
          </li>
          <li>
            <code>ltX</code>: establece un punto de ajuste en el ancho de la
            pantalla donde se aplican estilos específicos.
          </li>
          <li>
            <code>gtX</code>: permite aplicar estilos específicos cuando el
            ancho de la pantalla supera un valor límite (X).
          </li>
          <li>
            <code>lerp</code>: permite definir estilos que se aplican de manera
            gradual en función de la posición del cursor en la pantalla.
          </li>
        </ul>
        <Typography variant="h5">Uso de las funciones</Typography>
        <p>
          Las funciones <code>btwX</code>, <code>btwY</code>, <code>ltX</code>,{" "}
          <code>gtX</code> y <code>lerp</code> se pueden utilizar de manera
          combinada para crear diseños responsivos y personalizados.
        </p>
        <p>
          Por ejemplo, se puede utilizar <code>btwX</code> para definir estilos
          para pantallas pequeñas y <code>gtX</code> para definir estilos para
          pantallas grandes.
        </p>
        <p>
          Además, se puede utilizar <code>lerp</code> para crear efectos de
          transición suaves y personalizados.
        </p>
        <p>
          Las funciones también se pueden utilizar para crear diseños
          responsivos que se adaptan a diferentes tamaños de pantalla y
          dispositivos.
        </p>
        <p>
          Por ejemplo, se puede utilizar <code>btwY</code> para definir estilos
          para pantallas con una altura específica y <code>ltX</code> para
          definir estilos para pantallas con un ancho específico.
        </p>
        <p>
          Las funciones también se pueden utilizar para crear efectos de
          transición suaves y personalizados en función de la posición del
          cursor en la pantalla.
        </p>
        <p>
          Por ejemplo, se puede utilizar <code>lerp</code> para crear un efecto
          de transición suave entre dos estilos diferentes en función de la
          posición del cursor en la pantalla.
        </p>
        <p>
          En resumen, las funciones <code>btwX</code>, <code>btwY</code>,{" "}
          <code>ltX</code>, <code>gtX</code> y <code>lerp</code> ofrecen una
          gran flexibilidad y personalización para crear diseños responsivos y
          atractivos.
        </p>
      </$CardF>
    </$index>
  );
}

function Ejemplos() {
  return (
    <$index label="Ejemplos">
      <Typography variant="h4">Ejemplos de uso de Fluid CSS</Typography>
      <$CardF>
        <p>Define estilos que cambian según la altura de la ventana.</p>
        <Typography variant="h5">Uso de la función btwY:</Typography>
        <p>
          Este ejemplo aplica estilos que cambian según la altura de la ventana.
        </p>
        <$PR lang="javascript">
          {"fluidCSS().btwY([400, 800], { height: ['100vh', '50vh'] }).end();"}
        </$PR>
        <p>
          Esto aplica un estilo de altura que cambia entre 100vh y 50vh al estar
          entre 400px y 800px de altura de ventana.
        </p>
        <Typography variant="h5">Uso de la función btwX:</Typography>
        <p>
          Este ejemplo aplica estilos que cambian según el ancho de la ventana.
        </p>
        <$PR lang="javascript">
          {"fluidCSS().btwX([400, 800], { height: ['100vw', '50vw'] }).end();"}
        </$PR>
        <p>
          Esto aplica un estilo de altura que cambia entre 100vw y 50vw al estar
          entre 400px y 800px de ancho de ventana.
        </p>
        <Typography variant="h5">
          Uso de la función btwY con argumentos separados:
        </Typography>
        <p>
          Este ejemplo es equivalente al anterior pero usando argumentos
          separados.
        </p>
        <$PR lang="javascript">
          {"fluidCSS().btwY(400, 800, { height: ['100vh', '50vh'] }).end();"}
        </$PR>
        <p>
          Esto aplica un estilo de altura que cambia entre 100vh y 50vh al estar
          entre 400px y 800px de altura de ventana.
        </p>
        <Typography variant="h5">
          Uso de la función btwY dentro del rango:
        </Typography>
        <p>
          Esto aplica un estilo de altura de 100vh únicamente dentro del rango
          especificado.
        </p>
        <$PR lang="javascript">
          {"fluidCSS().btwY(400, 800, { height: '100vh' }).end();"}
        </$PR>
        <p>
          Esto aplica un estilo de altura de 100vh únicamente dentro del rango
          especificado.
        </p>
        <Typography variant="h5">
          Uso de la función btwY fuera del rango:
        </Typography>
        <p>
          Esto aplica un estilo de altura de 100vh únicamente fuera del rango
          especificado.
        </p>
        <$PR lang="javascript">
          {"fluidCSS().btwY(400, 800, { height: [null,'100vh'] }).end();"}
        </$PR>
        <p>
          Esto aplica un estilo de altura de 100vh únicamente fuera del rango
          especificado.
        </p>
        <Typography variant="h5">
          Uso de la función btwY con estilos por fuera y dentro:
        </Typography>
        <p>
          Esto aplica un estilo de altura que cambia entre 100vh y 50vh al estar
          entre 400px y 800px de altura de ventana.
        </p>
        <$PR lang="javascript">
          {"fluidCSS().btwY(400, 800, { height: ['100vh', '50vh'] }).end();"}
        </$PR>
        <p>
          Esto aplica un estilo de altura que cambia entre 100vh y 50vh al estar
          entre 400px y 800px de altura de ventana.
        </p>
        <Typography variant="h5">
          Uso de la función btwY con múltiples estilos:
        </Typography>
        <p>
          Esto aplica un estilo de altura que cambia entre 40vh, 50vh y 100vh al
          estar entre 400px y 800px de altura de ventana.
        </p>
        <$PR lang="javascript">
          {
            "fluidCSS().btwY(400, 800, { height: ['40vh', '50vh', '100vh'] }).end();"
          }
        </$PR>
        <p>
          Esto aplica un estilo de altura que cambia entre 40vh, 50vh y 100vh al
          estar entre 400px y 800px de altura de ventana.
        </p>
        <Typography variant="h5">Uso de la función lerpX:</Typography>
        <p>
          Esto aplica un estilo de ancho que cambia linealmente entre 200px y
          800px al estar entre 390px y 1200px de ancho de ventana.
        </p>
        <$PR lang="javascript">
          {"fluidCSS().lerpX([390, 1200], { width: [200, 800] }).end();"}
        </$PR>
        <p>
          Esto aplica un estilo de ancho que cambia linealmente entre 200px y
          800px al estar entre 390px y 1200px de ancho de ventana.
        </p>
      </$CardF>
    </$index>
  );
}
