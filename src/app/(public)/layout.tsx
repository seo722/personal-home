import MainPageMenu from '@/components/Menu';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl md:grid grid-cols-[1fr_240px] flex flex-col gap-4 sm:px-4 sm:pt-4">
      {children}
      <MainPageMenu />
    </div>
  );
};

export default PublicLayout;
