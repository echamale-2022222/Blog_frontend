import React, { useState, useEffect } from 'react';
import { Nav } from '../../components/nav/Nav';
import { PublicationCard } from '../../components/publication/Publication';
import { listarPublicaciones } from '../../services';
import { PublicationDetails } from '../../components/publicationDetails/PublicationDetails';
import { Footer } from '../../components/footer/Footer';

export const DashboardPage = () => {
  const [publications, setPublications] = useState([]);
  const [selectedPublicationId, setSelectedPublicationId] = useState(null);

  const handleReadMoreClick = (id) => {
    console.log('Read more clicked:', id);
    setSelectedPublicationId(id);
  };

  useEffect(() => {
    console.log('Selected publication id:', selectedPublicationId);
  }, [selectedPublicationId]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await listarPublicaciones();
        if (!response.error) {
          setPublications(response.data || []);
        } else {
          console.log('Error:', response.data);
        }
      } catch (error) {
        console.log('Error fetching publications:', error);
      }
    };
    fetchPublications();
  }, []);

  return (
    <>
      <Nav />
      {selectedPublicationId === null ? (
        <PublicationCard publications={publications} onReadMoreClick={handleReadMoreClick} />
      ) : (
        <PublicationDetails publicationId={selectedPublicationId} />
      )}
      {selectedPublicationId === null && <Footer />}
    </>
  );
};
