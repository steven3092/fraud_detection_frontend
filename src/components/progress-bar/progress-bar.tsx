export const ProgressBar = ({ progress }: { progress: number }) => {
  const percentage = (progress / 200) * 100;

  return (
    <div className="flex flex-row pt-10 pb-5">
      <span>0</span>
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden h-6 relative">
        <div
          className={`h-full transition-all duration-300 ${
            progress < 97 ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-black font-semibold">
          {progress}
        </span>
      </div>
      <span>200</span>
    </div>
  );
};
