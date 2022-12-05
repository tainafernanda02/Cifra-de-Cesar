function calculate() {
  var chave = Number(document.querySelector('#chave').value);
  var frase = document.querySelector('#text').value;
  var choose = document.querySelector('#choose').checked;
  var result = document.getElementById('result');
  let fraseCoded = '';

  result.innerText = ' ';

  let alf = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let alfCoded = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  for (let i = 0; i < alf.length; i++) {
    if (chave >= alfCoded.length) chave = 0;
    alfCoded[i] = alf[chave];
    chave++;
  }
  for (let c = 0; c < frase.length; c++) {
    let validateAst = /[!|?|,|.|;|:|-]/;
    if (Number(frase[c]) || validateAst.test(frase[c])) fraseCoded += frase[c];

    for (let idx = 0; idx < alf.length; idx++) {
      if (frase[c].trim().length === 0) fraseCoded += ' ';
      if (choose) {
        if (frase[c].toUpperCase() === alfCoded[idx]) fraseCoded += alf[idx];
      } else {
        if (frase[c].toUpperCase() === alf[idx]) fraseCoded += alfCoded[idx];
      }
    }
  }
  result.innerHTML = fraseCoded;
}