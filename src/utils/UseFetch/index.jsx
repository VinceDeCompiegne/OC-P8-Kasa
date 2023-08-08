import { useState, useEffect } from 'react'

export function useFetch(url) {

  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
            if (!url) return
            setLoading(true)
            async function fetchData() {
              try {
                let config = {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json; charset=utf-8',
                      'Accept': 'text/html',
                      }}
                const response = await fetch(url,config)
                const data = await response.json()
                setData(data)
              } catch (err) {
                console.log(err)
                setError(true)
              } finally {
                setLoading(false)
              }
            }
            fetchData()
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [])
          
          return { isLoading, data, error }
          
        }