function _lerp() {
  setTimeout(PR.prettyPrint);
  return (
    <$FMD>
      <$h1>Interpolación líneal</$h1>
      Las reglas LERP (Linear Interpolation) en Fluid CSS permiten crear
      transiciones suaves entre diferentes valores de propiedades CSS en función
      del tamaño de la pantalla. Utilizando interpolación lineal, estas reglas
      definen cómo deben cambiar las propiedades a medida que el ancho de la
      ventana se expande o se contrae dentro de un rango específico,
      proporcionando una transición fluida y precisa.
      {sep}
      <Sintaxis />
      {sep}
      <ProjTypes />
      {sep}
      <_$openProj />
      {sep}
      <_$closeProj />
      {sep}
      <_$mixProj />
      {sep}
      <CascadeMode />
      {sep}
      <$index label="A nivel de CSS">
        <$h3>Funcionamiento a nivel de CSS</$h3>
        <$$h />
        <$CardF>
          Las reglas lerp funcionan a nivel de CSS, es decir, JavaScript, aunque
          interpreta las reglas, no tiene que realizar cálculos más allá de la
          interpretación de las mismas.
          <p>
            Existen ecuaciones sobre las que se basa la interpolación lineal. La
            ecuación es la siguiente:
          </p>
          <$code style={{ color: "khaki" }} elevation={0}>
            v_lerp = (vf - vi) * t + vi
          </$code>
          A continuación, se muestra una guía de cómo se realiza la
          interpolación lineal en CSS.
          <$PR lang="css" elevation={0}>
            {loadStringsSync("static/jsx/frags/lerp-css.txt")}
          </$PR>
          Debido a cómo se aprovecha CSS para realizar la interpolación lineal,
          la regla lerp solo se puede aplicar a propiedades de medidas en px y
          no se puede aplicar a propiedades como color, background, opacity,
          etc.
        </$CardF>
      </$index>
    </$FMD>
  );

  function ProjTypes() {
    return (
      <$index label="Tipos de proyección">
        <$h3>Tipos de proyección</$h3>
        <$$h />
        <$CardF>
          En las reglas LERP, los corchetes `[ ]` y los paréntesis `( )` tienen
          significados específicos que permiten controlar cómo se comportan las
          interpolaciones a lo largo del rango de anchos de pantalla definido.
          <$CardDef title="Proyección abierta ( )" elevation={0}>
            Indica que la interpolación continuará siendo lineal más allá de los
            límites del rango de anchos de pantalla.
          </$CardDef>
          <$CardDef title="Proyección cerrada [ ]" elevation={0}>
            Indica que la interpolación conservará el valor del extremo más
            cercano al rango de anchos de pantalla.
          </$CardDef>
          <$CardDef title="Proyección mixta ( ] o [ )" elevation={0}>
            Indica que la interpolación conservará el valor del extremo más
            cercano al rango de anchos de pantalla.
          </$CardDef>
        </$CardF>
      </$index>
    );
  }

  function Sintaxis() {
    return (
      <$index label="Sintaxis">
        <$h3>Sintaxis</$h3>
        <Card className="pad-10px">
          <p>
            La estructura básica de una regla <b>LERP</b> es la siguiente:
          </p>
          <$code style={{ color: "khaki" }} elevation={0}>
            {[
              "minWidth<-x->maxWidth?{",
              "   attr-kebab-case: (valueInitialpx, valueFinalpx); ",
              "}",
            ].join("\n")}
          </$code>
          <p>
            <b>Ejemplo.</b>
          </p>
          <$PR lang="javascript" elevation={0}>
            {[
              "fluidCSS({",
              "   code: `",
              "      600px<-x->1200px?{",
              "         font-size: (16px, 24px);",
              "     }",
              "   `,",
              "   clss: 'extra-classes'",
              "});",
            ].join("\n")}
          </$PR>
        </Card>
      </$index>
    );
  }

  function CascadeMode() {
    return (
      <$index label="Modo Cascada">
        <$h3>Modo Cascada</$h3>
        <$$h />
        <$CardF>
          En el contexto de fluidCSS, el método lerpX permite realizar
          interpolaciones lineales de manera fluida entre dos valores a lo largo
          de un rango específico. La sintaxis básica es la siguiente:
          <$$h />
          <$PR lang="javascript" style={{ color: "khaki" }} elevation={0}>
            <pre>
              <code>
                {[
                  "fluidCSS().lerpX([initLimit, finLimit],{",
                  "   attrCamelCase: [initValue, finValue] // Close projection",
                  "})",
                  "",
                  "fluidCSS().lerpX([initLimit, finLimit],{",
                  "   attrCamelCase: [flagInit, initValue, finValue] // Mix projection with only flag init",
                  "})",
                  "",
                  "fluidCSS().lerpX([initLimit, finLimit],{",
                  "   attrCamelCase: [flagInit, initValue, finValue, flagFinal] // Mix projection with flags",
                  "})",
                  "",
                  "fluidCSS().lerpX([initLimit, finLimit],{",
                  "   attrCamelCase: ['o', initValue, finValue, 'o'] // Open projection",
                  "})",
                ].join("\n")}
              </code>
            </pre>
          </$PR>
          <$$h />
          <$PR lang="javascript" elevation={0}>
            {[
              "fluidCSS().lerpX([600,1200],{",
              "   margin: [20, 50] // Proyección cerrada por defecto",
              "})",
            ].join("\n")}
          </$PR>
          <$$h />
          Esta regla realiza una interpolación cerrada por defecto, es decir, si
          el ancho de la pantalla está fuera del rango definido (menor a 600px o
          mayor a 1200px), el valor de la propiedad margin se mantendrá
          constante en el extremo más cercano.
          <strong>Bandera "e" (End) y "o" (Open)</strong>
          Las banderas "e" (end) y "o" (open) permiten controlar cómo se
          comporta la interpolación en los extremos del rango:
          <p>
            Proyección abierta ("o"): Para hacer que la interpolación continúe
            más allá de los límites del rango de anchos de pantalla, puedes usar
            las banderas "o" al inicio o al final del rango. Ejemplo de
            proyección abierta:
          </p>
          <$PR lang="javascript" elevation={0}>
            {[
              "fluidCSS().lerpX([600,1200],{",
              "   margin: ['o', 20, 50, 'o'] // Proyección abierta",
              "})",
            ].join("\n")}
          </$PR>
          <$h />
          En este caso, la interpolación continuará más allá de los 600px y
          1200px, y los valores se calcularán de forma lineal fuera de este
          rango.
          <p>
            <b>La proyección mixta ( ]</b> se utiliza para tener una
            interpolación abierta al principio y cerrada al final. Aquí, puedes
            usar "o" al inicio y "e" al final, o solo "o" al principio: Ejemplo
            de proyección mixta ( ]:
          </p>
          <$PR lang="javascript" elevation={0}>
            {[
              "fluidCSS().lerpX([600,1200],{",
              "   margin: ['o', 20, 50] // Proyección mixta ( ]",
              "   // Lo mismo que:",
              "   margin: ['o', 20, 50, 'e'] // Proyección mixta ( ]",
              "})",
            ].join("\n")}
          </$PR>
          <$$h />
          En este caso, la interpolación será cerrada a la izquierda (por debajo
          de 600px) y abierta a la derecha (por encima de 1200px).
          <p>
            <b>Proyección mixta [ ):</b> La proyección mixta [ ) se utiliza
            cuando se quiere que la interpolación se comporte como cerrada en un
            extremo (izquierda) y abierta en el otro (derecha). Para lograr
            esto, usas la bandera "e" al inicio y "o" al final o solo una de
            ellas.
          </p>
          <$PR lang="javascript" elevation={0}>
            {[
              "fluidCSS().lerpX([600,1200],{",
              "   margin: ['e', 20, 50, 'o'] // Proyección mixta [ )",
              "})",
            ].join("\n")}
          </$PR>
          <$$h />
          Esto indica que la interpolación será abierta al inicio (antes de
          600px) y cerrada al final (después de 1200px).
        </$CardF>
      </$index>
    );
  }

  function _$mixProj() {
    return (
      <$index label="Proyección mixta ( ] o [ )">
        <$h3>Proyección mixta ( ] o [ )</$h3>
        <$$h />
        <$CardF>
          Los corchetes `[ ]` y los paréntesis `( )` pueden generar una
          proyección mixta.
          <p>
            Una proyección mixta significa que la interpolación se comportará de
            manera diferente en cada extremo, siendo uno de los lados abierto y
            el otro cerrado.
          </p>
          <strong>Sintáxis</strong>
          <$$h />
          <$code style={{ color: "khaki" }} elevation={0}>
            {["600px<-x->1200px?{", "   margin: [20px, 50px);", "}"].join("\n")}
          </$code>
          <$$h />
          <center>
            <_close_open_proj />
          </center>
          <$$h />
          Significa que la interpolación se hará desde 600px con margen de 20px
          hasta 1200px con margen de 50px. La proyección mixta `[ )` implica que
          cuando el ancho de la pantalla sea menor a 600px, la interpolación se
          comportará como cerrada `(manteniendo el valor 20px)`, y cuando el
          ancho sea mayor a 1200px, la interpolación será abierta, superando la
          proyección del valor 50px.
          <$$h />
          <$code style={{ color: "khaki" }} elevation={0}>
            {["600px<-x->1200px?{", "   margin: (20px, 50px];", "}"].join("\n")}
          </$code>
          <$$h />
          <center>
            <_open_close_proj />
          </center>
          <$$h />
          En este caso, la interpolación se realiza desde 600px con margen de
          20px hasta 1200px con margen de 50px. La proyección mixta `( ]`
          significa que cuando el ancho de la pantalla sea menor a 600px, la
          interpolación será abierta (continuará calculando los valores de
          manera lineal), y cuando el ancho sea mayor a 1200px, la interpolación
          se comportará como cerrada (manteniendo el valor 50px).
        </$CardF>
        <$$h />
        <$CardF elevation={6}>
          Este tipo de proyección es útil cuando se desea que los valores de las
          propiedades CSS no pasen de los límites establecidos, manteniendo un
          comportamiento controlado dentro del rango definido.
        </$CardF>
      </$index>
    );

    function _open_close_proj() {
      return (
        <svg
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          className={fluidCSS()
            .lerpX([320, 500], { width: [220, 350] })
            .end()}
          style={{
            backgroundColor: "white",
            filter: "invert(0.95)",
            borderRadius: "20px",
          }}
        >
          <g transform="translate(40, 260)">
            <line
              x1="-350"
              y1="0"
              x2="350"
              y2="0"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="0"
              y1="-300"
              x2="0"
              y2="300"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="20%"
              y1="-300"
              x2="20%"
              y2="300"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="70%"
              y1="-300"
              x2="70%"
              y2="300"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="-350"
              y1="-20%"
              x2="350"
              y2="-20%"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="-350"
              y1="-70%"
              x2="350"
              y2="-70%"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="20%"
              y1="-20%"
              x2="70%"
              y2="-70%"
              stroke="red"
              strokeWidth="3"
            />
            <line
              x1="70%"
              y1="-70%"
              x2="350"
              y2="-70%"
              stroke="magenta"
              strokeWidth="3"
            />
            <line
              x1="20%"
              y1="-20%"
              x2="-100%"
              y2="100%"
              stroke="magenta"
              strokeWidth="3"
            />
            <text
              x="20%"
              y="20"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              600px
            </text>
            <text
              x="70%"
              y="20"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              1200px
            </text>
            <text
              x="-20"
              y="-20%"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              20px
            </text>
            <text
              x="-20"
              y="-70%"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              50px
            </text>
          </g>
        </svg>
      );
    }
    function _close_open_proj() {
      return (
        <svg
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          className={fluidCSS()
            .lerpX([320, 500], { width: [220, 350] })
            .end()}
          style={{
            backgroundColor: "white",
            filter: "invert(0.95)",
            borderRadius: "20px",
          }}
        >
          <g transform="translate(40, 260)">
            <line
              x1="-350"
              y1="0"
              x2="350"
              y2="0"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="0"
              y1="-300"
              x2="0"
              y2="300"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="20%"
              y1="-300"
              x2="20%"
              y2="300"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="70%"
              y1="-300"
              x2="70%"
              y2="300"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="-350"
              y1="-20%"
              x2="350"
              y2="-20%"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="-350"
              y1="-70%"
              x2="350"
              y2="-70%"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="20%"
              y1="-20%"
              x2="70%"
              y2="-70%"
              stroke="red"
              strokeWidth="3"
            />
            <line
              x1="-350"
              y1="-20%"
              x2="20%"
              y2="-20%"
              stroke="magenta"
              strokeWidth="3"
            />
            <line
              x1="100%"
              y1="-100%"
              x2="70%"
              y2="-70%"
              stroke="magenta"
              strokeWidth="3"
            />
            <text
              x="20%"
              y="20"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              600px
            </text>
            <text
              x="70%"
              y="20"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              1200px
            </text>
            <text
              x="-20"
              y="-20%"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              20px
            </text>
            <text
              x="-20"
              y="-70%"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              50px
            </text>
          </g>
        </svg>
      );
    }
  }

  function _$openProj() {
    return (
      <$index label="Proyección abierta ( )">
        <$h3>Proyección abierta ( )</$h3>
        <$$h />
        <$CardF>
          La proyección abierta, representada por paréntesis `()`, permite que
          los valores de un diseño continúen ajustándose incluso fuera del rango
          de condiciones especificadas.
          <p>
            En otras palabras, si el tamaño de la pantalla supera o queda por
            debajo de los límites establecidos, la interpolación de los estilos
            sigue calculándose de manera lineal, extendiendo el ajuste más allá
            de esos límites.
          </p>
          <p>
            Esto es útil cuando se desea que los estilos cambien de forma
            continua sin detenerse, asegurando una transición fluida sin
            importar si la pantalla es más pequeña o más grande que el rango
            definido.
          </p>
          <strong>Sintáxis</strong>
          <$h />
          <$code style={{ color: "khaki" }} elevation={0}>
            {["600px<-x->1200px?{", "   margin: (20px, 50px);", "}"].join("\n")}
          </$code>
          <$$h />
          <center>
            <_open_proj />
          </center>
          <$$h />
          En el ejemplo, el hecho de que la proyección sea abierta implica que,
          aunque el ancho de la pantalla sea menor de 600px o mayor de 1200px,
          la interpolación seguirá calculando y proyectando los valores de la
          propiedad linealmente, extendiendo la transición fuera del rango
          definido.
        </$CardF>
      </$index>
    );

    function _open_proj() {
      return (
        <svg
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          className={fluidCSS()
            .lerpX([320, 500], { width: [220, 350] })
            .end()}
          style={{
            backgroundColor: "white",
            filter: "invert(0.95)",
            borderRadius: "20px",
          }}
        >
          <g transform="translate(40, 260)">
            <line
              x1="-350"
              y1="0"
              x2="350"
              y2="0"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="0"
              y1="-300"
              x2="0"
              y2="300"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="20%"
              y1="-300"
              x2="20%"
              y2="300"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="70%"
              y1="-300"
              x2="70%"
              y2="300"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="-350"
              y1="-20%"
              x2="350"
              y2="-20%"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="-350"
              y1="-70%"
              x2="350"
              y2="-70%"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="20%"
              y1="-20%"
              x2="70%"
              y2="-70%"
              stroke="red"
              strokeWidth="3"
            />
            <line
              x1="20%"
              y1="-20%"
              x2="-100%"
              y2="100%"
              stroke="magenta"
              strokeWidth="3"
            />
            <line
              x1="100%"
              y1="-100%"
              x2="70%"
              y2="-70%"
              stroke="magenta"
              strokeWidth="3"
            />
            <text
              x="20%"
              y="20"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              600px
            </text>
            <text
              x="70%"
              y="20"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              1200px
            </text>
            <text
              x="-20"
              y="-20%"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              20px
            </text>
            <text
              x="-20"
              y="-70%"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              50px
            </text>
          </g>
        </svg>
      );
    }
  }
  function _$closeProj() {
    return (
      <$index label="Proyección cerrada [ ]">
        <$h3>Proyección cerrada [ ]</$h3>
        <$$h />
        <$CardF>
          Los corchetes [ ] indican una proyección cerrada, lo que significa que
          la interpolación se limita al rango de anchos especificado,
          conservando los valores del extremo más cercano al ancho de la
          pantalla.
          <p>
            En otras palabras, si el ancho de la pantalla está fuera del rango
            definido, el valor de la propiedad no cambiará más allá del valor
            del extremo más cercano. Es decir, si el ancho de la pantalla es
            menor que el valor mínimo, se utilizará el valor de ese extremo; si
            es mayor que el valor máximo, se utilizará el valor del otro
            extremo.
          </p>
          <strong>Sintáxis</strong>
          <$h />
          <$code style={{ color: "khaki" }} elevation={0}>
            {["600px<-x->1200px?{", "   margin: [20px, 50px];", "}"].join("\n")}
          </$code>
          <$$h />
          <center>
            <_close_proj />
          </center>
          <$$h />
          Esto significa que la interpolación del margen irá desde 20px a 50px
          conforme el ancho de la pantalla cambie de 600px a 1200px. Si la
          pantalla es más pequeña que 600px o más grande que 1200px, el valor de
          margin se mantendrá en 20px o 50px, respectivamente, dependiendo de
          cuál sea el valor más cercano.
        </$CardF>
      </$index>
    );

    function _close_proj() {
      return (
        <svg
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          className={fluidCSS()
            .lerpX([320, 500], { width: [220, 350] })
            .end()}
          style={{
            backgroundColor: "white",
            filter: "invert(0.95)",
            borderRadius: "20px",
          }}
        >
          <g transform="translate(40, 260)">
            <line
              x1="-350"
              y1="0"
              x2="350"
              y2="0"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="0"
              y1="-300"
              x2="0"
              y2="300"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="20%"
              y1="-300"
              x2="20%"
              y2="300"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="70%"
              y1="-300"
              x2="70%"
              y2="300"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="-350"
              y1="-20%"
              x2="350"
              y2="-20%"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="-350"
              y1="-70%"
              x2="350"
              y2="-70%"
              stroke="skyblue"
              strokeWidth="2"
            />
            <line
              x1="20%"
              y1="-20%"
              x2="70%"
              y2="-70%"
              stroke="red"
              strokeWidth="3"
            />
            <line
              x1="-350"
              y1="-20%"
              x2="20%"
              y2="-20%"
              stroke="magenta"
              strokeWidth="3"
            />
            <line
              x1="70%"
              y1="-70%"
              x2="350"
              y2="-70%"
              stroke="magenta"
              strokeWidth="3"
            />
            <text
              x="20%"
              y="20"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              600px
            </text>
            <text
              x="70%"
              y="20"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              1200px
            </text>
            <text
              x="-20"
              y="-20%"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              20px
            </text>
            <text
              x="-20"
              y="-70%"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              fontWeight="bold"
            >
              50px
            </text>
          </g>
        </svg>
      );
    }
  }
}
