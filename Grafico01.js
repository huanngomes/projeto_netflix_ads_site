var grafico01 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 800,
  height: 400,

  data: {
    url: "https://raw.githubusercontent.com/huanngomes/projeto-netflix-ads/refs/heads/main/netflix_titles_limpo.csv"
  },

  mark: {
    type: "bar",
    opacity: 0.8,
    strokeWidth: 2
  },

  encoding: {

    x: {
      field: "type",
      type: "nominal",
      title: "Tipo",
      axis: {
        labelAngle: 0,
        labelFontSize: 12,
        titleFontSize: 14
      }
    },

    y: {
      aggregate: "count",
      type: "quantitative",
      title: "Quantidade",
      axis: {
        labelFontSize: 12,
        titleFontSize: 14
      }
    },

    color: {
      field: "type",
      type: "nominal",
      legend: {
        title: "Tipos",
        orient: "bottom",
        labelFontSize: 12,
        titleFontSize: 14
      },
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