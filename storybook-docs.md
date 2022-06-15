## Setting up the storybook template in covr-2.0

First, import the `StorybookTemplate` method and declare a new instance, `template`. 

```
import { StorybookTemplate} from '@covr/storybook-utils'
import { Login } from './login'

const template = new StorybookTemplate('Examples/Templates', 'Login', Login, {
  figmaURLs: {
    Empty: 'https://www.figma.com/file/Qs1TjTMpGgZB6nAaV8wYVj/Untitled?node-id=2%3A3',
  },
})
```

The arguments to be passed into the `StorybookTemplate` class are as follows:

### Storybook atomic designation

The location or designation of the story's location in the storybook UI. The above example uses a special example location, `Examples/Templates`. For typical stories, they will be designated using atomic design terminology as one of the following:
    - Atoms
    - Molecules
    - Organisms
    - Templates
    - Pages

Here is an example of a small component which falls under the category of an atom:

```
import { StorybookTemplate, RadioInputControl, ToggleInputControl, TextInputControl } from '@covr/storybook-utils'
import Switch, { SwitchProps } from './Switch'

const template = new StorybookTemplate<SwitchProps>('Atoms', 'Switch', Switch, {
  figmaURLs: { Primary: 'https://www.figma.com/file/rEKx3SQ1awmGNjquJKUyVq/COVR-Design-System?node-id=243%3A796' },
})
```

You can read more about atomic design here: https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/

### Name of component folder in Storybook UI

In the above example using the Switch component, we want the stories for this component to be placed in a folder named `Switch`, so we provide that string as the second argument. 

### Component

The third argument is the component itself, as imported directly above the template instantiation

### Figma URLs

The fourth argument is an object to hold Figma design urls. This allows you to view the reference designs in the Storybook UI under the `Designs` tab which is convenient. 

For this argument you should pass in an object with a `figmaURLs` property, which should have a `Primary` property with the figma url as a string. If there are other relevant designs, they can be passed in as other properties such as `Secondary` and so forth. 

```
const template = new StorybookTemplate('Atoms', 'Button', Button, {
  figmaURLs: {
    Primary: 'https://www.figma.com/file/rEKx3SQ1awmGNjquJKUyVq/COVR-Design-System?node-id=241%3A673',
    Secondary: 'https://www.figma.com/file/rEKx3SQ1awmGNjquJKUyVq/COVR-Design-System?node-id=241%3A760',
  },
  events: ['onClick', 'onMouseOver'],
})
```

### Option 5th argument: actions

There is an optional 5th argument that can be used to define what actions will be used to interact with the component. 

TBD


## Creating a default story

Once you have instantiated the template class, you must create a default story. Creating a default story is required in Storybook. You can then create secondary stories for specific use cases/states. 

The default story should be the default export from the story file. For example:

```
export default template.createDefaultStory({
  args: {
    email: '',
    setEmail: () => {},
    password: '',
    setPassword: () => {},
    error: '',
  },
})
```

The `createDefaultStory` method takes in an object. That object should have and `args` property which is where we'll declare what props/arguments the component will receive. In the above example we expect to have an `email` string, a method called `setEmail`, a `password` string, a method called `setPassword`, and an `error` string.

### Storybook controls

To help document the above props, we can use the `addStorybookControl` method. This allows us to add a description and a default value, as well as define the type of control. 

```
template.addStorybookControl(
  'variant',
  'Change variant of button',
  'default',
  new SelectInputControl(buttonTypes as unknown as string[])
)
```



