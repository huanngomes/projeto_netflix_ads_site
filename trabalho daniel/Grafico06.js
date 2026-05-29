var grafico06 = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 700,
  height: 400,

  data: {
    url: "https://raw.githubusercontent.com/huanngomes/projeto-netflix-ads/refs/heads/main/netflix_titles_limpo.csv"
  },

  mark: {
    type: "bar",
    color: "orange"
  },

  encoding: {

    x: {
      field: "duration",
      type: "nominal",
      sort: "-y",
      title: "Duração"
    },

    y: {
      aggregate: "count",
      type: "quantitative",
      title: "Quantidade"
    }
  }
};