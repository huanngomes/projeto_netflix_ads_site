var grafico07 = {

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  width: 700,
  height: 500,

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
    color: "purple"
  },

  encoding: {

    y: {
      field: "listed_in",
      type: "nominal",
      sort: "-x",
      title: "Categoria"
    },

    x: {
      field: "total",
      type: "quantitative",
      title: "Quantidade"
    },

    tooltip: [
      {
        field: "listed_in",
        type: "nominal",
        title: "Categoria"
      },
      {
        field: "total",
        type: "quantitative",
        title: "Quantidade"
      }
    ]
  }
};
