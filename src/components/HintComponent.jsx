import hintPic from "../assets/Hint.png";

export default function HintComponent() {
  return (
    <div className="p-8 flex justify-center">
      <img src={hintPic} alt="hint" className="w-96" />
      {/* <img src="https://placehold.co/600x400" alt="" /> */}
    </div>
  );
}
