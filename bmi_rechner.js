function berechneBMI() {
    var gewicht = parseFloat(document.getElementById("gewicht").value);
    var groesse = parseFloat(document.getElementById("groesse").value);
	var meinDiv = document.getElementById("ergebnis");
    if (isNaN(gewicht) || isNaN(groesse) || gewicht <= 0 || groesse <= 0) {
        meinDiv.innerHTML = "<p>Bitte geben Sie gültige Werte ein.</p>";
		return;
    }
	

    var bmi = gewicht / (groesse * groesse);
    bmi = bmi.toFixed(2);

    var ergebnis = "Ihr BMI beträgt: " + bmi + "<br>";
    if (bmi < 18.5) {
        ergebnis += "Sie haben Untergewicht.";
		meinDiv.style.backgroundColor = "orange";
    } else if (bmi >= 18.5 && bmi < 25) {
        ergebnis += "Sie haben Normalgewicht.";
		meinDiv.style.backgroundColor = "green";
    } else if (bmi >= 25 && bmi < 30) {
        ergebnis += "Sie haben Übergewicht.";
		meinDiv.style.backgroundColor = "red";
    } else {
        ergebnis += "Sie haben Adipositas (Fettleibigkeit).";
		meinDiv.style.backgroundColor = "red";
    }

    meinDiv.innerHTML = ergebnis;
}
