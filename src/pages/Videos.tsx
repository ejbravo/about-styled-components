import SearchBar from '../components/SearchBar';
import { useVideos } from '../hooks';

import { PageLayout } from '../layouts';

const Videos = () => {
  const { videos, search } = useVideos('Bilbao');

  return (
    <PageLayout title="My youtube">
      <SearchBar onFormSubmit={search} />
    </PageLayout>
  );
};

export { Videos };
