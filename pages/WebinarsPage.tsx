import React, { useEffect, useState } from 'react';
import { WebinarListSection } from '@components';
import { Webinar } from '@types';
import { useLocation } from 'react-router-dom';
import { useList } from '@refinedev/core';

export const Webinars: React.FC = () => {
  const { state } = useLocation();

  const { result: { data: webinarsData }, query: { isLoading: webinarsLoading} } = useList<Webinar>({
    resource: 'api/webinars',
    pagination: {
      mode: 'off',
    },
  });
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="font-sans antialiased text-gray-900 container mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          <WebinarListSection
            title={state?.title || 'Webinars'}
            webinars={webinarsData}
            category={state?.category || null}
            timeline={!state?.viewall}
            viewAllCheck={state?.viewall || false}
            isLoading={webinarsLoading}
          />
        </main>
      </div>
    </section>
  );
};

export default Webinars;
