export default function Error({ message }: { message?: string }) {
    return (
      <div className="p-4 flex flex-col gap-2 h-screen justify-center items-center">
        <div className="text-lg text-red-500">{message || "Something went wrong..."}</div>
        <button className="bg-white p-3 rounded-lg w-fit shadow-md hover:bg-slate-100 hover:scale-110 transition-all" onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }
  