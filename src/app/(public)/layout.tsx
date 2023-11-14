import MainPageMenu from '@/components/MainPageMenu';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl md:grid grid-cols-[240px_1fr] flex flex-col gap-4 sm:px-4 sm:pt-4">
      <div className="h-full ">
        <MainPageMenu />
      </div>
      {children}
    </div>
  );
};

export default PublicLayout;
