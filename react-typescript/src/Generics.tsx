import React, {useState} from 'react'

interface Props {
    name: string
}

const HelloWorld: React.FC<Props> = ({name}) => {
    const [] = useState({ name: ''})
    return <div>
        Hello {name}
    </div>
}

const Generics: React.FC = () => {
    return <div>Hello</div>
}

export default Generics