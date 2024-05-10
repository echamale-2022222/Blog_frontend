import { useState, useEffect } from 'react'
import { Nav } from '../../components/nav/Nav'
import { PublicationCard } from '../../components/publication/Publication'
import { listarPublicaciones } from '../../services'

export const DashboardPage = () => {
  const [publications, setPublications] = useState([])

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await listarPublicaciones()
        console.log('Datos obtenidos:', response.data) // Verificar los datos obtenidos
        if (!response.error) {
          setPublications(response.data || [])
          console.log('publications actualizados:', response.data) // Verificar los publications actualizados
        } else {
          console.log('Error:', response.data)
        }
      } catch (error) {
        console.log('Error fetching publications:', error)
      }
    }
    fetchPublications()
  }, [])

  return (
    <>
      <Nav />
      <PublicationCard publications={publications} />
    </>
    )
}
