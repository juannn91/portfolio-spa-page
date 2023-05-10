import { mount } from '@vue/test-utils';
import JcCard from '../JcCard.vue';

describe('Card', () => {
  it('The card must render title', () => {
    const wrapper = mount(JcCard, {
      props: {
        title: 'Hola',
      },
      slots: {
        default: 'Main Content',
      },
    });
    console.log(wrapper.text());
    expect(wrapper.text()).toContain('Hola');
    expect(wrapper.text()).toContain('Main Content');
  });
});
