/**
 * useProfile hook
 */

import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { fetcher } from '../utils/http'

import Router from 'next/router'

export default function useProfile({
  redirectTo = '',
} = {}) {
  const [userId, setUserId] = useState<string>('')
  const { data: profile, isLoading, mutate: setProfile } = useSWR(userId ? `/profile/${userId}` : null, fetcher)

  useEffect(() => {
    if (!userId || !redirectTo || profile === null) {
      return
    }
    
    if (!isLoading && profile.error) { // No authorized, redirect to login page
      Router.push(redirectTo)
    }
  }, [profile, isLoading, userId, redirectTo])

  return { setProfile, profile, isLoading, setUserId }
}