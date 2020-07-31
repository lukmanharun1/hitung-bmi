function hitungBMI() {
  let beratBadan = document.getElementById('berat-badan').value
  let tinggiBadan = document.getElementById('tinggi-badan').value

  let tinggiBadanMeter = tinggiBadan / 100
  let BMI = beratBadan / Math.pow(tinggiBadanMeter, 2)
  let BMIDibulatkan = Math.round(BMI)


  if (BMIDibulatkan < 18.5) {
    document.getElementById('hasil').innerHTML = `BMI anda ${BMIDibulatkan}. Berat Badan Anda Kurang`
    return reset()
  } else if (BMIDibulatkan >= 18.5 && BMIDibulatkan <= 24.9) {
    (document.getElementById(
      'hasil'
    ).innerHTML = `BMI anda ${BMIDibulatkan}. Berat Badan Anda Normal`);
    return reset()
  } else if (BMIDibulatkan > 24.9 && BMIDibulatkan <= 29.9) {
    (document.getElementById(
      'hasil'
    ).innerHTML = `BMI anda ${BMIDibulatkan}. Berat Badan Anda Berlebih`);
  } else if (BMIDibulatkan > 30) {
    (document.getElementById(
      'hasil'
    ).innerHTML = `BMI anda ${BMIDibulatkan}. Anda Obesitas`);
    return reset()
  } else {
    (document.getElementById(
      'hasil'
    ).innerHTML = `Silahkan masukkan berat dan tinggi badan Anda terlebih dahulu`);
    return reset()
  }
}

function reset() {
  document.getElementById('berat-badan').value = ''
  document.getElementById('tinggi-badan').value = ''
}