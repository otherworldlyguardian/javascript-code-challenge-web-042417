class CommentList {
  constructor() {
    this.commentList = []
  }

  render () {
    return '<ul>' + this.commentList.map(comment => comment.render()).join('') + '</ul>'
  }

  addComment (str) {
    this.commentList.push(new Comment(str))
  }
}
