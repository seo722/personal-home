export default function Home() {
  return (
    <main className="max-w-7xl md:grid grid-cols-3 flex flex-col gap-4">
      <div className="">
        <p>HOME홈페이지입니다</p>
      </div>
      <div className="">
        <p>HOME홈페이지입니다</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-white dark:bg-stone-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2">
              <p className="text-slate-800 dark:text-white">써보고 싶어서 넣어놓음</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
