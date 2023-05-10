import { mount } from '@vue/test-utils';
import JcButton from '../JcButton.vue';

describe('Card', () => {
  it('Click button must emmit a click event', async () => {
    const wrapper = mount(JcButton, {
      slots: {
        default: 'button',
      },
    });
    await wrapper.trigger('click');
    console.log(wrapper.emitted());
    expect(wrapper.text()).toContain('button');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
