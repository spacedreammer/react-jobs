import  ClipLoader  from "react-spinners/ClipLoader"

const override = {
  display : 'block',
  margin : '100px auto',
}
const Spinners = ({loading}) => {
  return (
    <ClipLoader 
    color = 'red'
    loading = {loading}
    cssOverride = {override}
    size = {150}
    />
  )
}

export default Spinners