import { useState } from "react";
import "./styles.css";

export default function BmiCalculator() {
  const [heightCm, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (isNaN(heightCm) || isNaN(weight) || heightCm === "" || weight === "") {
      setErrorMessage("Lütfen geçerli bir boy/kilo bilgisi girin.");
      setBMI(null);
    } else {
      const heightMeters = heightCm / 100;
      const bmiResult = calculateBMI(heightMeters, weight);
      setBMI(bmiResult);
      setErrorMessage("");
    }
    setHeight("");
    setWeight("");
  };
  function calculateBMI(height, weight) {
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
  }
  return (
    <div className="container">
      <form onSubmit={handleFormSubmission}>
        <h2>Vücut Kitle İndeksi Hesaplama</h2>
        <label htmlFor="height">
          Boy (cm):{" "}
          <input
            onChange={(e) => setHeight(e.target.value)}
            type="number"
            name="height"
            id="height"
            value={heightCm}
            placeholder={175}
            min={0}
            autoFocus
          />
        </label>
        <label htmlFor="weight">
          Kilo (kg):{" "}
          <input
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            name="weight"
            id="weight"
            value={weight}
            placeholder={60}
            min={0}
          />
        </label>
        <button>Hesapla</button>
        {errorMessage && <p>{errorMessage}</p>}
        {bmi !== null && <p>BMI Sonucu: {bmi}</p>}
      </form>
    </div>
  );
}
