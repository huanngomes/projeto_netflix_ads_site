var grafico08 = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 700,
  height: 400,

  data: {
    url: "https://raw.githubusercontent.com/huanngomes/projeto-netflix-ads/refs/heads/main/netflix_titles_limpo.csv"
  },

  transform: [
    {
      calculate: "year(datum.date_added)",
      as: "ano"
    }
  ],

  mark: {
    type: "line",
    color: "green",
    point: true
  },

  encoding: {

    x: {
      field: "ano",
      type: "quantitative",
      title: "Ano"
    },

    y: {
      aggregate: "count",
      type: "quantitative",
      title: "Quantidade"
    }
  }
};