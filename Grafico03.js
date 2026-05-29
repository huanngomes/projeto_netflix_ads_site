var grafico03 = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 700,
  height: 400,

  data: {
    url: "https://raw.githubusercontent.com/huanngomes/projeto-netflix-ads/refs/heads/main/netflix_titles_limpo.csv"
  },

  mark: {
    type: "line",
    color: "red",
    point: true,
    strokeWidth: 3
  },

  encoding: {

    x: {
      field: "release_year",
      type: "quantitative",
      title: "Ano",
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

    tooltip: [
      {
        field: "release_year",
        type: "quantitative",
        title: "Ano"
      },
      {
        aggregate: "count",
        type: "quantitative",
        title: "Quantidade"
      }
    ]
  }
};