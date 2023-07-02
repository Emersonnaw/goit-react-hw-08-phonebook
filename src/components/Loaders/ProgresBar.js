import { ProgressBar } from 'react-loader-spinner';
import { Div } from './Loader.styled'; 

const ProgresBar = () => {
    return (
        <Div>
<ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
        </Div>
    )
}

export default ProgresBar 