import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import styles from './PenguinsPage.module.css'
import PenguinApi from '../../api/PenguinApi'

const PenguinsPage = () => {
  const getPenguins = async () => {
    const data = await PenguinApi.getPenguins()
    console.log(data)
  }

  useEffect(() => {
    getPenguins()
  }, [])

  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <Card>
          test
        </Card>
      </div>
    </div>
  )
}

export default PenguinsPage