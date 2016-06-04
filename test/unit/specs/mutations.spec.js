import {mutations} from '../../../src/vuex/store'
const { ADDPIC } = mutations
const {CHANGETAB} = mutations
const {ONCOMPLETED} = mutations
describe('mutations', () => {
  it('MainTab components change', () => {
    const state = { tabType: {type: 'article'}}
    CHANGETAB(state, 'PicList')
    expect(state.currentTab).to.equal('PicList')
    CHANGETAB(state, 'ArticleList')
    expect(state.currentTab).to.equal('ArticleList')
  })
  it('upload completed, push img to pic lists with options', () => {
    let response = {
      hash:'xxx',
      key: 'xxxx'
    }
    const picOptions = {
      exURL: 'http://7xj0ss.com1.z0.glb.clouddn.com/',
      suURL: '',
      action: 'http://up.qiniu.com',
      tokenURL: 'http://api.pikach.com/qiniu'
    }
    const state = {
      picList: [{
        name: 'A good pic',
        img: 'http://vuejs.org.cn/images/logo.png'
      }]
    }
    ONCOMPLETED(state, response , picOptions)
    expect(state.picList.length).to.equal(2)
  })
})
