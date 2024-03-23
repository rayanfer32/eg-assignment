export default function Error({ message }: { message?: string }) {
    return (
      <div className="text-xl p-4 flex flex-col h-screen justify-center items-center">
        <div className="text-red-500">{message || "Something went wrong..."}</div>
        <button className="bg-white p-3 rounded-lg w-fit shadow-md hover:bg-slate-100 hover:scale-110 transition-all" onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }
  