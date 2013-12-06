class FakeServerSide
  constructor: ->
    console.log("fake server side constructor")
    @news = []
    @news.push(@fake_news(i)) for i in [1..5]
    @counter = 5

  fake_news: (n) =>
    news =
      id: n
      author: "Sebaci#{n}"
      title: "Title#{n}"
      content: "Content#{n}"
    return news

  loadNews: =>
    @newsLoaded(@news)

  newsLoaded: (news) =>



