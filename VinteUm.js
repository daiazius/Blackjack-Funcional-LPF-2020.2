if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'VinteUm'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'VinteUm'.");
}var VinteUm = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function darCartas() {
    var jorje = document.getElementById('jogo');
    var teste = document.getElementById('sla');
    if (jorje == null || teste == null) {
      println('ihhh passou vergoinha em');
      return;
    }teste.innerHTML = 'ola';
    jorje = teste;
  }
  function Carta(naipe, numero) {
    this.numero = numero;
    this.naipe = naipe;
  }
  Carta.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Carta',
    interfaces: []
  };
  function Baralho() {
    this.cartas = ArrayList_init();
    this.andaNaipe_vux9f0$(1, 13);
    shuffle(this.cartas);
  }
  Baralho.prototype.andaNaipe_vux9f0$ = function (nNaipe, nCarta) {
    if (nNaipe > 4) {
      return;
    } else {
      this.andaCarta_vux9f0$(nNaipe, nCarta);
      this.andaNaipe_vux9f0$(nNaipe + 1 | 0, nCarta);
    }
  };
  Baralho.prototype.andaCarta_vux9f0$ = function (nNaipe, nCarta) {
    if (nCarta === 0) {
      return;
    } else {
      this.cartas.add_11rb$(new Carta(nNaipe, nCarta));
      this.andaCarta_vux9f0$(nNaipe, nCarta - 1 | 0);
    }
  };
  Baralho.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Baralho',
    interfaces: []
  };
  _.darCartas = darCartas;
  _.Carta = Carta;
  _.Baralho = Baralho;
  Kotlin.defineModule('VinteUm', _);
  return _;
}(typeof VinteUm === 'undefined' ? {} : VinteUm, kotlin);
