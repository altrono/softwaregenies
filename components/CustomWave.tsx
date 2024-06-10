
const CustomWave = ({color}: {color: string}) => {
  return (
    <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className='absolute top-0 left-0 z-1'>
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none', fill: color}}></path>
    </svg>
  )
}

export default CustomWave
