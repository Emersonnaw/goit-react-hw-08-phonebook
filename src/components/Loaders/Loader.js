import { ThreeCircles } from 'react-loader-spinner';
import { Div } from './Loader.styled'; 

const Loader = () => {
    return (
        <Div>
<ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
        </Div>
    )
}

export default Loader