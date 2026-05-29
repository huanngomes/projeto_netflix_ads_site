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
    },

    {
      window: [
        {
          op: "rank",
          as: "rank"
        }
      ],
      sort: [
        {
          field: "total",
          order: "descending"
        }
      ]
    },

    {
      filter: "datum.rank <= 10"
    }

  ],

  mark: {
    type: "bar",
    color: "darkred"
  },

  encoding: {

    y: {
      field: "country",
      type: "nominal",
      sort: "-x",
      title: "País"
    },

    x: {
      field: "total",
      type: "quantitative",
      title: "Quantidade"
    },

    tooltip: [
      {
        field: "country",
        type: "nominal",
        title: "País"
      },
      {
        field: "total",
        type: "quantitative",
        title: "Quantidade"
      }
    ]
  }
};
