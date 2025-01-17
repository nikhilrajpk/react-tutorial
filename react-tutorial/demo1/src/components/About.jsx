import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
  const {aboutId} = useParams()
  return (
    <div>
      about : {aboutId}
    </div>
  )
}

export default About