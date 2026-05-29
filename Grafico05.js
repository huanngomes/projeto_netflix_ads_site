var grafico05 = {

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
      groupby: ["country"]
    }
  ],

  mark: {
    type: "bar",
    color: "darkred"
  },

  encoding: {

    x: {
      field: "country",
      type: "nominal",
      sort: "-y",
      title: "País"
    },

    y: {
      field: "total",
      type: "quantitative",
      title: "Quantidade"
    }
  }
};