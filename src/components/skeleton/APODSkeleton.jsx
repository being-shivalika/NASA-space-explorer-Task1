const APODSkeleton = () => {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-white/5">
          <div className="aspect-4/3  bg-white/25  " />
        </div>

        <div className="flex flex-col justify-center space-y-5">
          <div className="h-8 w-3/4 rounded-full bg-white/20" />
        </div>
      </div>
    </>
  );
};

export default APODSkeleton;
