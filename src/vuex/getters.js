export {currentTab,picList,articleList,picOptions,currentArticle}
function currentTab (state) {
  return state.currentTab
}
function picList (state) {
  return state.picList
}
function articleList (state) {
  return state.articleList
}
function picOptions (state) {
  return state.picOptions
}
function currentArticle (state, index) {
  return state.currentArticle
}
