UI development tool to see/preview components in isolation. 

NX console makes it easy to open a component with storybook. 

NX is how we generate components easily with the boilerplate intact. 

`nx run ui:storybook` to run the component with storybook. It will open in a localhost tab. 

When you run it all the storybook enabled components will appear in the left sidebar. 

`filename.stories.tsx`:
default export provides some default metadata. Changing the title can group components together into folders. 

Other exports are different versions of the component. `.args` allows us to pass in an object with the props we want. 

#### Aside: the multiple exports in the .stories.tsx file allows us to easily view the component with different props. 

You can also edit the props dynamically in storybook to see how the component responds. 

There are also advanced default prop options you can set up to toggle between while in storybook. 




## JR Storybook

Decorators allow you to add context around the story/component that's being shown. 