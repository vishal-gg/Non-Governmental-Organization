import './Preview.scss'
import {motion} from 'framer-motion'

const Preview = ({preview, setPreview}) => {
  return (
    <motion.div onClick={()=> setPreview(null)} animate={{backdropFilter: 'blur(.8rem)'}} className='preview-container'>
      <div className='preview-wrapper'>
        <motion.img layoutId={preview} src={preview} alt="image" />
      </div>
    </motion.div>
  )
}

export default Preview
