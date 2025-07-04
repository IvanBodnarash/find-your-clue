export default function Hero({ onToggleHint, onError }) {
  return (
    <div className="flex flex-col text-center pt-16 px-16 pb-4 gap-5">
      <h1 className="text-4xl font-bold">Congratulations!</h1>
      <h1 className="text-4xl font-bold">🎉</h1>
      <h2 className="text-3xl">You found it!</h2>
      <p className="text-xl">Hit the button below to see the next step ⬇️</p>
      <button
        type="button"
        onClick={() => {
          onToggleHint((prevState) => !prevState);
          onError(false);
        }}
        className="cursor-pointer bg-amber-100 hover:bg-amber-200 active:bg-amber-300 shadow-2xl transition-all p-2 rounded-lg m-auto w-50 text-gray-800"
      >
        Reveal next step
      </button>
    </div>
  );
}
