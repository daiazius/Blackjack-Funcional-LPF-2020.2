if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Teste'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Teste'.");
}var Teste = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Teste() {
  }
  Teste.prototype.oi = function () {
    println('oioioi');
  };
  Teste.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Teste',
    interfaces: []
  };
  var package$blackjack = _.blackjack || (_.blackjack = {});
  package$blackjack.Teste = Teste;
  Kotlin.defineModule('Teste', _);
  return _;
}(typeof Teste === 'undefined' ? {} : Teste, kotlin);
