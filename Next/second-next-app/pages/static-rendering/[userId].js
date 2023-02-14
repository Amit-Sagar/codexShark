import { useRouter } from 'next/router'
import React from 'react'

const UserDetails = () => {
  const router = useRouter()
  const {userId} = router.query
  return (
    <p>{userId}</p>
  )
}

export default UserDetails