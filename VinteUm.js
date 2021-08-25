if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'VinteUm'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'VinteUm'.");
}var VinteUm = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var removeFirst = Kotlin.kotlin.collections.removeFirst_vvxzk3$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var baralhin;
  var p1;
  function darCartas() {
    p1.maoDoJogador.puxarCarta_9350cv$(2, baralhin.cartas);
    var carta1 = p1.maoDoJogador.cartasNaMao.get_za3lpa$(0).toString();
    var carta2 = p1.maoDoJogador.cartasNaMao.get_za3lpa$(1).toString();
    var pont = p1.maoDoJogador.somarOTotal_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0);
    var jorje = document.getElementById('jogo');
    if (jorje == null) {
      println('ihhh passou vergoinha em');
      return;
    }jorje.innerHTML = '\n' + '    <link rel=' + '"' + 'stylesheet' + '"' + ' type=' + '"' + 'text/css' + '"' + ' href=' + '"' + 'estilos.css' + '"' + ' media=' + '"' + 'screen' + '"' + '/>' + '\n' + '    <div id = ' + '"' + 'cartaDealer' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta1 + '<\/p><\/div>' + '\n' + '    <div id = ' + '"' + 'cartaDealer' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta2 + '<\/p><\/div>' + '\n' + '    <div id = ' + '"' + 'carta' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta1 + '<\/p><\/div>' + '\n' + '    <div id = ' + '"' + 'carta' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta2 + '<\/p><\/div>' + '\n' + '\n' + '    <div id = ' + '"' + 'pontuacao' + '"' + '><p>Pontua\xE7\xE3o: ' + pont + '<\/p><\/div>' + '\n' + '    <div id = ' + '"' + 'pontuacaoDealer' + '"' + '><p>Pontua\xE7\xE3o: ' + pont + '<\/p><\/div>' + '\n' + '    <button id = ' + '"' + 'pedir' + '"' + ' onclick = ' + '"' + 'VinteUm.pedirCartas()' + '"' + '>Adiciona<\/button>' + '\n' + '    <button id = ' + '"' + 'manter' + '"' + '>Manter<\/button>     ' + '\n' + '    ';
  }
  function pedirCartas() {
    var tmp$;
    if (baralhin.cartas.isEmpty()) {
      println('baralho vazio');
      return;
    }p1.maoDoJogador.puxarCarta_9350cv$(1, baralhin.cartas);
    var carta = last(p1.maoDoJogador.cartasNaMao).toString();
    var pont = p1.maoDoJogador.somarOTotal_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0);
    var pontA = p1.maoDoJogador.somarOTotalcomAs_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0);
    var vonNeumann = document.getElementById('jogo');
    if (vonNeumann == null) {
      println('ihhh passou vergoinha em');
      return;
    }vonNeumann.innerHTML = vonNeumann.innerHTML + ('\n' + '    <div id = ' + '"' + 'carta' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta + '<\/p><\/div>' + '\n' + '    ');
    (tmp$ = document.getElementById('pontuacao')) != null ? (tmp$.innerHTML = 'Pontua\xE7\xE3o: ' + pont + ' ' + pontA) : null;
    verificinator();
  }
  function verificinator() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (p1.maoDoJogador.asNaMao) {
      if (p1.maoDoJogador.somarOTotalcomAs_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0) > 21) {
        println('rebentastes ou nao');
      } else if (p1.maoDoJogador.somarOTotalcomAs_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0) === 21) {
        println('vencestes');
      }}if (p1.maoDoJogador.somarOTotal_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0) > 21) {
      println('rebentastes');
      (tmp$ = document.getElementById('pedir')) != null ? (tmp$.remove(), Unit) : null;
      (tmp$_0 = document.getElementById('manter')) != null ? (tmp$_0.remove(), Unit) : null;
      tmp$_1 = document.getElementById('jogo');
      tmp$_1 != null ? (tmp$_1.innerHTML = (tmp$_1 != null ? tmp$_1.innerHTML : null) + '\n            <div id = "fimDeJogo">REBENTASTES<\/div>\n            ') : null;
    } else if (p1.maoDoJogador.somarOTotal_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0) === 21) {
      println('vencestes');
      (tmp$_2 = document.getElementById('pedir')) != null ? (tmp$_2.remove(), Unit) : null;
      (tmp$_3 = document.getElementById('manter')) != null ? (tmp$_3.remove(), Unit) : null;
      tmp$_4 = document.getElementById('jogo');
      tmp$_4 != null ? (tmp$_4.innerHTML = (tmp$_4 != null ? tmp$_4.innerHTML : null) + '<div id = "fimDeJogo" style = "background: green;">PARABENS OTARIO<\/div>') : null;
    }}
  function Carta(naipe, numero) {
    this.naipe = naipe;
    this.numero = numero;
  }
  Carta.prototype.toString = function () {
    var coisa = '';
    var coisa2;
    if (this.numero === 1) {
      coisa2 = 'A';
    } else if (this.numero === 11) {
      coisa2 = 'J';
    } else if (this.numero === 12) {
      coisa2 = 'Q';
    } else if (this.numero === 13) {
      coisa2 = 'K';
    } else {
      coisa2 = this.numero.toString();
    }
    switch (this.naipe) {
      case 1:
        coisa += coisa2 + ' ' + '\n' + '   \u2663';
        break;
      case 2:
        coisa += coisa2 + ' ' + '\n' + '   \u2665';
        break;
      case 3:
        coisa += coisa2 + ' ' + '\n' + '   \u2666';
        break;
      case 4:
        coisa += coisa2 + ' ' + '\n' + '   \u2660';
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
    this.asNaMao = false;
  }
  Mao.prototype.puxarCarta_9350cv$ = function (qntdCartas, cartas) {
    if (qntdCartas === 0) {
      return;
    } else {
      if (cartas.get_za3lpa$(0).numero === 1) {
        this.asNaMao = true;
      }this.cartasNaMao.add_11rb$(removeFirst(cartas));
      this.puxarCarta_9350cv$(qntdCartas - 1 | 0, cartas);
    }
  };
  Mao.prototype.somarOTotal_za3lpa$ = function (n) {
    if (n < 0) {
      return 0;
    } else {
      if (this.cartasNaMao.get_za3lpa$(n).numero > 10) {
        return this.somarOTotal_za3lpa$(n - 1 | 0) + 10 | 0;
      }return this.somarOTotal_za3lpa$(n - 1 | 0) + this.cartasNaMao.get_za3lpa$(n).numero | 0;
    }
  };
  Mao.prototype.somarOTotalcomAs_za3lpa$ = function (n) {
    if (n < 0) {
      return 0;
    } else {
      if (this.cartasNaMao.get_za3lpa$(n).numero > 10) {
        return this.somarOTotalcomAs_za3lpa$(n - 1 | 0) + 10 | 0;
      }if (this.cartasNaMao.get_za3lpa$(n).numero === 1) {
        return this.somarOTotalcomAs_za3lpa$(n - 1 | 0) + 11 | 0;
      }return this.somarOTotalcomAs_za3lpa$(n - 1 | 0) + this.cartasNaMao.get_za3lpa$(n).numero | 0;
    }
  };
  Mao.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mao',
    interfaces: []
  };
  function Jogador(nome) {
    this.nome = nome;
    this.maoDoJogador = new Mao();
    this.pontuacao = 0;
  }
  Jogador.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Jogador',
    interfaces: []
  };
  Object.defineProperty(_, 'baralhin', {
    get: function () {
      return baralhin;
    }
  });
  Object.defineProperty(_, 'p1', {
    get: function () {
      return p1;
    }
  });
  _.darCartas = darCartas;
  _.pedirCartas = pedirCartas;
  _.verificinator = verificinator;
  _.Carta = Carta;
  _.Baralho = Baralho;
  _.Mao = Mao;
  _.Jogador = Jogador;
  baralhin = new Baralho();
  p1 = new Jogador('joao');
  Kotlin.defineModule('VinteUm', _);
  return _;
}(typeof VinteUm === 'undefined' ? {} : VinteUm, kotlin);
