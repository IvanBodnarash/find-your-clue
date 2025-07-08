export default function InputsComponent({
  rightCoordinates,
  onCheck,
  onToggleHint,
  setError,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const firstNum = form.first.value;
    const secondNum = form.second.value;

    const enteredCoords = [firstNum, secondNum];

    setError(false);

    if (enteredCoords.toString() == rightCoordinates) {
      onCheck(true);
      onToggleHint(false);
      console.log("sdfsd");
    } else {
      setError(true);
    }

    // form.firstNum = "";

    // console.log(typeof form.firstNum);
  }
  return (
    <div className="pt-4 px-16 pb-16">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col w-50 m-auto gap-4"
      >
        <input
          className="border rounded-sm p-1 text-center transition-all"
          type="number"
          name="first"
          placeholder="Enter first value"
          autoComplete="off"
          step="0.0001"
          required
        />
        <input
          className="border rounded-sm p-1 text-center transition-all"
          type="number"
          name="second"
          placeholder="Enter second value"
          autoComplete="off"
          step="0.0001"
          required
        />
        <button
          type="submit"
          className="cursor-pointer bg-amber-100 hover:bg-amber-200 active:bg-amber-300 shadow-2xl transition-all p-2 rounded-lg m-auto w-50 text-gray-800"
        >
          Check Entered Values
        </button>
      </form>
    </div>
  );
}
