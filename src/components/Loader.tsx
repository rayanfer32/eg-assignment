export default function Loader({ message }: { message?: string }) {
  return (
    <div className="text-xl p-4 flex flex-col h-screen justify-center items-center">
      <div className="loader"></div>
      <div>{message || "Loading..."}</div>
    </div>
  );
}
