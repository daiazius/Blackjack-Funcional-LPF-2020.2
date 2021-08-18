if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'VinteUm'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'VinteUm'.");
}var VinteUm = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var removeFirst = Kotlin.kotlin.collections.removeFirst_vvxzk3$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function darCartas() {
    var jorje = document.getElementById('jogo');
    if (jorje == null) {
      println('ihhh passou vergoinha em');
      return;
    }var alanturing = new Baralho();
    var sim = new Mao();
    sim.puxarCarta_9350cv$(1, alanturing.cartas);
    var carta = removeFirst(sim.cartasNaMao);
    var a = carta.toString();
    jorje.innerHTML = '\n    <link rel="stylesheet" type="text/css" href="estilos.css" media="screen"/>\n    <button onclick = "VinteUm.pedirCartas()">adiciona<\/button>    \n    ';
  }
  function pedirCartas() {
    var vonNeumann = document.getElementById('jogo');
    if (vonNeumann == null) {
      println('ihhh passou vergoinha em');
      return;
    }vonNeumann.innerHTML = vonNeumann.innerHTML + '\n    <div id = "bora"><p style = "text-align: center"><\/p><\/div>\n    ';
  }
  function Carta(naipe, numero) {
    this.numero = numero;
    this.naipe = naipe;
  }
  Carta.prototype.toString = function () {
    var coisa = '';
    switch (this.naipe) {
      case 1:
        coisa += this.numero.toString() + ' de paus';
        break;
      case 2:
        coisa += this.numero.toString() + ' de ouros';
        break;
      case 3:
        coisa += this.numero.toString() + ' de copas';
        break;
      case 4:
        coisa += this.numero.toString() + ' de espadas';
        break;
    }
    return coisa;
  };
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
  function Mao() {
    this.cartasNaMao = ArrayList_init();
  }
  Mao.prototype.puxarCarta_9350cv$ = function (qntdCartas, cartas) {
    if (qntdCartas === 0) {
      return;
    } else {
      this.cartasNaMao.add_11rb$(removeFirst(cartas));
      this.puxarCarta_9350cv$(qntdCartas - 1 | 0, cartas);
    }
  };
  Mao.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mao',
    interfaces: []
  };
  _.darCartas = darCartas;
  _.pedirCartas = pedirCartas;
  _.Carta = Carta;
  _.Baralho = Baralho;
  _.Mao = Mao;
  Kotlin.defineModule('VinteUm', _);
  return _;
}(typeof VinteUm === 'undefined' ? {} : VinteUm, kotlin);
