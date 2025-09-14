import React from 'react'

type Props = {
  name?: string
}

// use destructuring for props if less than 3 props
const PerfectReactComponent = ({name}: Props) => {
  
  // HOOKS
  // const auth = useAuth()
  // const [count, setCount] = useState(0) 
  // const ref = useRef(mull) 

  // EFFECTS 
  // useEffect(() = { 
  // console. log( "count, count) 
  // }, (count) )
  
  // HELPERS
  // const calculateCount = () = {} 
  
  // EVENT HANDLERS
  // const handleClick = () = {} 

  // EARLY RETURNS
  // if (!pagedata) return <aiv>loading ... </div>

  // RENDER LOGIC
  // const buttonName = loading ? 'Loading...' : 'Click me' 

  return (
    <div>PerfectReactComponent {name}</div>
  )
}

export default PerfectReactComponent