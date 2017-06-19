class App {
  constructor() {
    this.text = document.querySelector('#input-text')
    this.submit = document.querySelector('#submit-btn')
    this.submit.addEventListener('click', this.onSubmit.bind(this))
    this.commentList = new CommentList()
    this.commentContainer = document.querySelector('#comment-list')
  }

  onSubmit () {
    event.preventDefault()
    this.commentList.addComment(this.text.value)
    this.text.value = ''
    this.render()
  }

  render () {
    this.commentContainer.innerHTML = this.commentList.render()
  }
}

$(document).ready(function(){
  const newApp = new App()
  newApp.render()
})
