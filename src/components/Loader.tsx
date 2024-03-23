export default function Loader({ message }: { message?: string }) {
  return (
    <div className="p-4 flex flex-col gap-2 h-screen justify-center items-center">
      <div className="loader"></div>
      <div className="text-lg">{message || "Loading..."}</div>
    </div>
  );
}
