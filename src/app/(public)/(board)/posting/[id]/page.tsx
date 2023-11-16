import BackButton from '@/components/posting/BackButton';
import ButtonAction from '@/components/posting/ButtonAction';

const DetailPostPage = () => {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post</h2>
        <ButtonAction />
        <p className="text-stone-700 dark:text-stone-300">Post one content</p>
      </div>
    </div>
  );
};

export default DetailPostPage;
