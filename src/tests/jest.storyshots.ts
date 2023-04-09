// import initStoryshots, {
//   multiSnapshotWithOptions,
// } from '@storybook/addon-storyshots'

// initStoryshots({
//   test: multiSnapshotWithOptions(),
//   storyKindRegex: /^((?!.*?mdx|.*?svg).)*$/,
// })

import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'

initStoryshots({
  test: multiSnapshotWithOptions(),
})
