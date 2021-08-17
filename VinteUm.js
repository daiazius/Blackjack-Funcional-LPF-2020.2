if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'VinteUm'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'VinteUm'.");
}var VinteUm = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main() {
  }
  function darCartas() {
    var jorje = document.getElementById('jogo');
    if (jorje == null) {
      println('ihhh passou vergoinha em');
      return;
    }jorje.innerHTML = 'Voce jogou 21 e ganhou confia';
  }
  _.main = main;
  _.darCartas = darCartas;
  main();
  Kotlin.defineModule('VinteUm', _);
  return _;
}(typeof VinteUm === 'undefined' ? {} : VinteUm, kotlin);
