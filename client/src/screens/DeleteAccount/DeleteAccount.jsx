import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Button from '../../components/shared/Button/Button'

export default function DeleteAccount() {
  return (
    <Layout>
      <Button
        color='#5A83EC'
        buttonText='Cancel'
      />
      <Button
        color='#FF7373'
        buttonText='Yes, Delete My Account'
        buttonLink='/'
      />
      <Button
        color='#31C96E'
        buttonText='Sign In'
        buttonLink='/signin'
      />
    </Layout>
  )
}
