var grafico02 = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 700,
  height: 400,

  data: {
    url: "https://raw.githubusercontent.com/huanngomes/projeto-netflix-ads/refs/heads/main/netflix_titles_limpo.csv"
  },

  mark: {
    type: "arc"
  },

  encoding: {

    theta: {
      aggregate: "count",
      type: "quantitative"
    },

    color: {
      field: "type",
      type: "nominal",
      title: "Tipo",
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

vegaEmbed('#grafico02', grafico02);