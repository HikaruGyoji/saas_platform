import { Collection } from '@/components/shared/Collection';
import HomeSection from '@/components/pages/HomeSection';
import { getAllImages } from '@/lib/actions/image.actions';

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <HomeSection />
      <section className='sm:mt-12'>
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};

export default Home;
