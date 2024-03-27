import React, { useEffect } from 'react'

const useTtitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Shopping Cart `
  },[title])
  return null;
    
  
}

export default useTtitle