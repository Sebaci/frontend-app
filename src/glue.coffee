class Glue
  constructor: (@useCase, @gui, @serverSide) ->
    After(@useCase, "start", => @serverSide.loadNews())
    After(@serverSide, "newsLoaded", (news) => @useCase.setNews(news))
    After(@useCase, "setNews", (news) => @gui.showNews(news))