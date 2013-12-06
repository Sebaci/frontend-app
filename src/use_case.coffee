class UseCase
  constructor: ->
    @news = []

  start: =>
    console.log("use case started")

  setNews: (@news) =>