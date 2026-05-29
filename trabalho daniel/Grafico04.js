var grafico04 = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 700,
  height: 400,

  data: {
    url: "https://raw.githubusercontent.com/huanngomes/projeto-netflix-ads/refs/heads/main/netflix_titles_limpo.csv"
  },

  mark: {
    type: "bar"
  },

  encoding: {

    x: {
      field: "rating",
      type: "nominal",
      sort: "-y",
      title: "Classificação"
    },

    y: {
      aggregate: "count",
      type: "quantitative",
      title: "Quantidade"
    },

    color: {
      field: "rating",
      type: "nominal"
    }
  }
};