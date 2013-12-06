class Gui
  constructor: ->
    console.log("gui started")

  createElementFor: (templateId, data) =>
    source = $(templateId).html()
    template = Handlebars.compile(source)
    html = template(data)
    element = $(html)
    return element

  showNews: (newsList) =>
    console.log("show news (#{newsList.length})")
    @addNews(news) for news in newsList

  addNews: (news) =>
    newsElement = @createElementFor("#news", news)
    $("#myNews").append(newsElement)

