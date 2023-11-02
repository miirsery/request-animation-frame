import {ElDrawer} from "element-plus";
import { mount } from '@vue/test-utils'
import {nextTick} from "vue";
import {rAF} from "../../../shared/lib/test-utils/rAF.js";

const _mount = (template, data, otherObj) => mount({
  components: {
    [ElDrawer.name]: ElDrawer,
  },
  template,
  data,
  ...otherObj,
})

const title = 'Drawer Title'
const content = 'content'

describe('Drawer', () => {
  test('create', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title="title" v-model="visible"></el-drawer>
      `,
      () => ({
        title,
        visible: true,
      })
    )
    await nextTick()
    await rAF()
    await nextTick()
    const wrapperEl = wrapper.find('.el-overlay').element
    const headerEl = wrapper.find('.el-drawer__header').element

    await nextTick()
    expect(wrapperEl.style.display).not.toEqual('none')
    expect(headerEl.textContent).toEqual(title)
  })
})
