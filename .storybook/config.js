import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming'
import { configure } from '@storybook/react';

addParameters({
  options: {
    theme: themes.dark
  }
})

function loadStories() {
  require('../src/stories');
}
configure(loadStories, module);