ctrl + space will show all auto complete options


Colons after variables or parameters are how you specify a type for that variable or constant. 

`|` is used to create a union type (multiple accepted types)

Hovering over a variable with show you it's type. Hovering over a function will show you it's parameter's types as well as the type of it's return. 
tl;dr hovering in TS shows you handy stuff. 

There is still just one type `number` for integers and floats. 

`any` as a type pretty much negates the purpose and benefit of using TS. 

You can specify what type a function should return. 

You can specify what types of data can be stored in an array like so `let favoriteActivites: string[]` (an array of strings). 

`enums` are cool and very useful for creating keys with corresponding numerical ids. 

If you give something a type of function you can specify what types its params should be as well as what type it's return should be. 

If you specify that a callback param will be a function you can still do the same as above^. 





## Interfaces

So interfaces are pretty much a way to declare custom types (or "shapes" of types) as a separate reference rather than inline. 

You can use a `?` to make a property in an interface object optional. 

## Generics

Basically allow you to pass types for parameters dynamically, thus allowing more flexibility while also avoiding the drawbacks of using type `any`. 

In the below example, <AvatarProps> is the generic, meaning this is where any props are being typed. In this case, we're using an interface called `AvatarProps` which is created above this code. Then in the function, where we would normally pass in props, we're destructuring them just like we could from any props object. So instead of giving them a type when we declare them as parameters, we're typing them with the generic (the type will be defined when they're passed in) and then destructuring them for easy access without having to worry about the type.
`export const Avatar: React.FC<AvatarProps> = ({ image, name, size = 'medium' }) => {`

## Decorators



`let whatever: number<thisIsATypeArgument> = 7`