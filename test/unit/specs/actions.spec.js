import {changeArticle} from '../../../src/vuex/action'

describe('actions', () => {
  // 用指定的 mutaions 测试 action 的辅助函数

  let state = {
    fileChange: false,
    currentArticle: {
      name: 'actions',
      content: 'test action'
    }
  }
  const testAction = (action, args, state, expectedMutations, done) => {
    let count = 0
    // 模拟 dispatch
    const dispatch = (name, ...payload) => {
      const mutation = expectedMutations[count]
      expect(mutation.name).to.equal(name)
      if (payload) {
        expect(mutation.payload).to.deep.equal(payload)
      }
      count++
      if (count >= expectedMutations.length) {
        done()
      }
    }
    // 用模拟的 store 和参数调用 action
    action({dispatch, state}, ...args)

    // 检查是否没有 mutation 被 dispatch
    if (expectedMutations.length === 0) {
      expect(count).to.equal(0)
      done()
    }
  }
  it('test changeArticle',() => {
    testAction(changeArticle, [{name: 'testsucc', content: 'xxxxx'}])
  })

})
