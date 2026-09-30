import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  logo: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  sameAs: string[];
}

interface RichResultsProps {
  type: 'LocalBusiness' | 'Organization' | 'WebSite' | 'Article' | 'Product';
  data: LocalBusinessData | any;
}

const RichResults = ({ type, data }: RichResultsProps) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default RichResults; 