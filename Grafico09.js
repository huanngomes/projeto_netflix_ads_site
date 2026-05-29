var grafico09 = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 700,
  height: 400,

  data: {
    url: "https://raw.githubusercontent.com/huanngomes/projeto-netflix-ads/refs/heads/main/netflix_titles_limpo.csv"
  },

  mark: {
    type: "area"
  },

  encoding: {

    x: {
      field: "release_year",
      type: "quantitative",
      title: "Ano"
    },

    y: {
      aggregate: "count",
      type: "quantitative",
      title: "Quantidade"
    },

    color: {
      field: "type",
      type: "nominal",
      title: "Tipo"
    }
  }
};