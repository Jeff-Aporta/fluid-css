let fluidCSS;

export { Processing, init };

function forcePx(s) {
  return s.toString().endsWith("px") ? s : s + "px";
}

function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function init(params) {
  fluidCSS ??= params?.fluidCSS;
}

function Processing(params) {
  return new processing(params);
}

class processing {
  #_value = [];

  #compare(head, body, rule) {
    const [v, sz] = head;
    return this.if(`${v}${rule}${sz}`, body);
  }
  #lt(head, body) {
    return this.#compare(head, body, "<");
  }
  ltX(head, body) {
    return this.#lt(["x", head], body);
  }
  ltY(head, body) {
    return this.#lt(["y", head], body);
  }
  #gt(head, body) {
    return this.#compare(head, body, ">");
  }
  gtX(head, body) {
    return this.#gt(["x", head], body);
  }
  gtY(head, body) {
    return this.#gt(["y", head], body);
  }
  #btw(head, body) {
    if (Array.isArray(head)) {
      if (head.length == 2) {
        head = [head[0], "x", head[1]];
      }
    } else {
      console.log("fluidCSS.btw: Invalid head in btw", head);
      return this;
    }
    if (head.length != 3) {
      console.log("fluidCSS.btw: Invalid head in btw", head);
      return this;
    }
    let [strt, v, end] = head;
    if (strt == undefined || v == undefined || end == undefined) {
      console.log("fluidCSS.btw: Error en el head", { strt, v, end });
      return this;
    }
    strt = parseInt(strt);
    end = parseInt(end);
    const min = Math.min(strt, end);
    const max = Math.max(strt, end);
    return this.if(`${forcePx(min)}<${v}<${forcePx(max)}`, body);
  }
  btwX(head, body) {
    if (!Array.isArray(head) || head.length != 2) {
      console.log("fluidCSS.btwX: Invalid head in btw", head);
      return this;
    }
    return this.#btw([head[0], "x", head[1]], body);
  }
  btwY(head, body) {
    if (!Array.isArray(head) || head.length != 2) {
      console.log("fluidCSS.btwY: Invalid head in btw", head);
      return this;
    }
    return this.#btw([head[0], "y", head[1]], body);
  }
  if(cond, body) {
    this.#_value.push(
      `${cond}?{${Object.entries(body)
        .map(([k, v]) => `${camelToKebab(k)}:(${tratarV(v).join(",")})`)
        .join(";")}}`
    );
    return this;

    function tratarV(v) {
      if (typeof v == "string") {
        return [v, ""];
      }
      if (Array.isArray(v) && v.length == 1) {
        return [v[0], ""];
      }
      return v;
    }
  }
  lerp(head, body) {
    if (!Array.isArray(head)) {
      head = [head];
    }
    const ks = {
      S: {
        e: "[",
        o: "(",
      },
      E: {
        e: "]",
        o: ")",
      },
    };
    const [start, v, end] = head;
    if (start == undefined || v == undefined || end == undefined) {
      console.log("fluidCSS.lerp: Error en el head", { start, v, end });
      return this;
    }
    this.#_value.push(
      `${forcePx(start)}<-${v}->${forcePx(end)}?{${Object.entries(body)
        .map(([k, v]) => {
          let [fs = "e", s, e, fe = "e"] = v.length == 2 ? ["e", ...v] : v;
          fs = ks.S[fs];
          fe = ks.E[fe];
          if (fs == undefined || s == undefined || e == undefined || fe == undefined) {
            console.log("fluidCSS.lerp: Error en el body", { fs, s, e, fe });
            return "";
          }
          return `${camelToKebab(k)}:${fs}${[s, e]
            .map((st) => forcePx(st))
            .join(",")}${fe}`;
        })
        .filter(Boolean)
        .join(";")}}`
    );
    return this;
  }
  lerpX(head, body) {
    return this.lerp([head[0], "x", head[1]], body);
  }
  lerpY(head, body) {
    return this.lerp([head[0], "y", head[1]], body);
  }
  end(...clss) {
    clss = clss.filter(Boolean).join(" ");
    const code = this.toString();
    this.#_value = [];
    const ex = fluidCSS({ code, clss });
    return ex;
  }
  toString() {
    return this.#_value.join("\n");
  }
}
