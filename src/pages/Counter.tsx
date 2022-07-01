import React from 'react';

import { Counter } from '../components';
import { PageLayout } from '../layouts';

const CounterPage = () => {
  return (
    <PageLayout title="Counter" center>
      <Counter />
    </PageLayout>
  );
};

export { CounterPage };
