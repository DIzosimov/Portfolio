import React, { useEffect, useState } from 'react'
import axios from 'axios'

const cv = () => {
  const [jobs, setJobs] = useState([])
  const [educations, setEducations] = useState([])

  useEffect(() => {
    getJobs()
    getEducations()
  }, [])

  return (
    <>
      
    </>
  )
}

export default cv