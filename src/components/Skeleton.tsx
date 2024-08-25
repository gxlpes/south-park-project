const Skeleton = () => {
  const items = Array.from({ length: 10 }); // Create an array with 25 undefined elements

  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {items.map((_, index) => (
        <div key={index} className="h-[35rem] animate-pulse bg-gray-200"></div>
      ))}
    </div>
  );
};

export default Skeleton;
