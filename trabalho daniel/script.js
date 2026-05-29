var grafico01 = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 800,
  height: 400,

  data: {
    url: "https://raw.githubusercontent.com/huanngomes/projeto-netflix-ads/refs/heads/main/netflix_titles_limpo.csv"
  },

  mark: {
    type: "bar",
    opacity: 0.8
  },

  encoding: {

    x: {
      field: "type",
      type: "nominal",
      title: "Tipo"
    },

    y: {
      aggregate: "count",
      type: "quantitative",
      title: "Quantidade"
    },

    color: {
      field: "type",
      type: "nominal",
      scale: {
        domain: ["Movie", "TV Show"],
        range: ["#E50914", "#ff8533"]
      }
    },

    tooltip: [
      {
        field: "type",
        type: "nominal",
        title: "Tipo"
      },
      {
        aggregate: "count",
        type: "quantitative",
        title: "Quantidade"
      }
    ]
  }
};

vegaEmbed('#grafico01', grafico01);
vegaEmbed('#grafico02', grafico02);
vegaEmbed('#grafico03', grafico03);
vegaEmbed('#grafico04', grafico04);
vegaEmbed('#grafico05', grafico05);
vegaEmbed('#grafico06', grafico06);
vegaEmbed('#grafico07', grafico07);
vegaEmbed('#grafico08', grafico08);
vegaEmbed('#grafico09', grafico09);