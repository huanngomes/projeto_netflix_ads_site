var grafico07 = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 700,
  height: 400,

  data: {
    url: "https://raw.githubusercontent.com/huanngomes/projeto-netflix-ads/refs/heads/main/netflix_titles_limpo.csv"
  },

  transform: [
    {
      aggregate: [
        {
          op: "count",
          as: "total"
        }
      ],
      groupby: ["listed_in"]
    }
  ],

  mark: {
    type: "bar",
    color: "purple"
  },

  encoding: {

    x: {
      field: "listed_in",
      type: "nominal",
      sort: "-y",
      title: "Categoria"
    },

    y: {
      field: "total",
      type: "quantitative",
      title: "Quantidade"
    }
  }
};