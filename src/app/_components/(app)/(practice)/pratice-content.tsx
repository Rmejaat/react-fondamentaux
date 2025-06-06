"use client"

import { useEffect, useState } from "react"

const PracticeContent = ({ children }: { children: JSX.Element }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return isClient && children
}

export default PracticeContent
