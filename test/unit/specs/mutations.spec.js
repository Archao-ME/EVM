import {mutations} from '../../../src/vuex/store'
const { ADDPIC } = mutations
const {TEST} = mutations
describe('mutations', () => {
  it('MainTab components change', () => {
    const state = { tabType: {type: 'article'}}
    TABCHANGE(state,{type: 'pic'})
    expect(state.tabType.type).to.equal('PicList')
    TABCHANGE(state,{type: 'article'})
    expect(state.tabType.type).to.equal('ArticleList')
  }),
  it('upload completed, push img to pic lists with options', () => {

  })
})
