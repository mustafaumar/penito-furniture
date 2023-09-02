import React,{Fragment} from 'react'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionThree from './SectionThree/SectionThree'
import SectionFour from './SectionFour/SectionFour'
import SectionFive from './SectionFive/SectionFive'

const Main = () => {
  return (
    <Fragment>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </Fragment>
  )
}

export default Main
