import VueMdc from 'src'
import { Vue } from '../helpers/utils.js'

Vue.use(VueMdc)

function comp (name) {
  return function () {
    Vue.component(name).should.exist
  }
}

function dir (name) {
  return function () {
    Vue.directive(name).should.exist
  }
}

describe('VueMdc', function () {
  it('registers MdcButton', comp('MdcButton'))
  it('registers MdcCard', comp('MdcCard'))
  it('registers v-ripple', dir('ripple'))
})
