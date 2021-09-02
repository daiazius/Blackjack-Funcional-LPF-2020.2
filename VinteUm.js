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
  var dealer;
  var jogoAcabou;
  function darCartas() {
    p1.maoDoJogador.puxarCarta_9350cv$(2, baralhin.cartas);
    dealer.maoDoJogador.puxarCarta_9350cv$(2, baralhin.cartas);
    var carta1 = p1.maoDoJogador.cartasNaMao.get_za3lpa$(0).toString();
    var carta2 = p1.maoDoJogador.cartasNaMao.get_za3lpa$(1).toString();
    var cartaDoDealer1 = dealer.maoDoJogador.cartasNaMao.get_za3lpa$(0).toString();
    var pont = p1.maoDoJogador.somarOTotal_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0);
    var pontA = p1.maoDoJogador.somarOTotalcomAs_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0);
    var jorje = document.getElementById('jogo');
    if (jorje == null) {
      println('ihhh passou vergoinha em');
      return;
    }jorje.innerHTML = '\n    <link rel="stylesheet" type="text/css" href="estilos.css" media="screen"/>\n    <div id = "maoJogador"><\/div>\n    <div id = "maoDealer"><\/div>\n    <div id = "pontuacaoDealer">Pontua\xE7\xE3o: ???<\/div>\n    <button id = "pedir" onclick = "VinteUm.pedirCartas()">Adiciona<\/button>\n    <button id = "manter" onclick = "VinteUm.manterMao()">Manter<\/button>     \n    ';
    var jorje2 = document.getElementById('maoJogador');
    var jorje3 = document.getElementById('maoDealer');
    if (jorje2 == null || jorje3 == null) {
      println('ihhh passou vergoinha em');
      return;
    }jorje2.innerHTML = '\n' + '    <div id = ' + '"' + 'carta' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta1 + '<\/p><\/div>' + '\n' + '    <div id = ' + '"' + 'carta' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta2 + '<\/p><\/div>' + '\n' + '    ';
    jorje3.innerHTML = '\n' + '    <div id = ' + '"' + 'cartaDealer' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + cartaDoDealer1 + '<\/p><\/div>' + '\n' + '    <div id = ' + '"' + 'cartaDealer2' + '"' + '><\/div>' + '\n' + '    ';
    if (p1.maoDoJogador.asNaMao) {
      jorje.innerHTML = jorje.innerHTML + ('\n' + '        <div id = ' + '"' + 'pontuacao' + '"' + '>Pontua\xE7\xE3o: ' + pont + '/' + pontA + '<\/div>' + '\n' + '        ');
    } else {
      jorje.innerHTML = jorje.innerHTML + ('\n' + '        <div id = ' + '"' + 'pontuacao' + '"' + '>Pontua\xE7\xE3o: ' + pont + '<\/div>' + '\n' + '        ');
    }
  }
  function pedirCartas() {
    var tmp$, tmp$_0, tmp$_1;
    if (baralhin.cartas.isEmpty()) {
      println('baralho vazio');
      return;
    }p1.maoDoJogador.puxarCarta_9350cv$(1, baralhin.cartas);
    var carta = last(p1.maoDoJogador.cartasNaMao).toString();
    var pont = p1.maoDoJogador.somarOTotal_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0);
    var pontA = p1.maoDoJogador.somarOTotalcomAs_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0);
    var vonNeumann = document.getElementById('maoJogador');
    if (vonNeumann == null) {
      println('ihhh passou vergoinha em');
      return;
    }vonNeumann.innerHTML = vonNeumann.innerHTML + ('\n' + '    <div id = ' + '"' + 'carta' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta + '<\/p><\/div>' + '\n' + '    ');
    if (p1.maoDoJogador.asNaMao) {
      (tmp$ = document.getElementById('pontuacao')) != null ? (tmp$.innerHTML = 'Pontua\xE7\xE3o: ' + pont + '/' + pontA) : null;
    } else {
      (tmp$_0 = document.getElementById('pontuacao')) != null ? (tmp$_0.innerHTML = 'Pontua\xE7\xE3o: ' + pont) : null;
    }
    verificinator();
    if (jogoAcabou) {
      tmp$_1 = document.getElementById('jogo');
      tmp$_1 != null ? (tmp$_1.innerHTML = (tmp$_1 != null ? tmp$_1.innerHTML : null) + '<button onclick="document.location.reload(true)" id="recarregar"><p id = "jogar">Recarrega<\/p><\/button>') : null;
    }}
  function pedirCartasDealer() {
    if (baralhin.cartas.isEmpty()) {
      println('baralho vazio');
      return;
    }dealer.maoDoJogador.puxarCarta_9350cv$(1, baralhin.cartas);
    var carta = last(dealer.maoDoJogador.cartasNaMao).toString();
    var vonNeumann = document.getElementById('maoDealer');
    if (vonNeumann == null) {
      println('ihhh passou vergoinha em');
      return;
    }vonNeumann.innerHTML = vonNeumann.innerHTML + ('\n' + '    <div id = ' + '"' + 'cartaDealer' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta + '<\/p><\/div>' + '\n' + '    ');
  }
  function manterMao() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    verificinator();
    if (!jogoAcabou) {
      var cartaDoDealer2 = dealer.maoDoJogador.cartasNaMao.get_za3lpa$(1).toString();
      var pontosJogador;
      if (p1.maoDoJogador.somarOTotalcomAs_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0) <= 21) {
        pontosJogador = p1.maoDoJogador.somarOTotalcomAs_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0);
      } else {
        pontosJogador = p1.maoDoJogador.somarOTotal_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0);
      }
      println('vez do dealer');
      (tmp$ = document.getElementById('cartaDealer2')) != null ? (tmp$.innerHTML = '<p id = texto-carta>' + cartaDoDealer2 + '<\/p>') : null;
      (tmp$_0 = document.getElementById('cartaDealer2')) != null ? (tmp$_0.id = 'cartaDealer') : null;
      verificinatorDealer(pontosJogador);
      if (dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) !== 21 && jogoAcabou === false) {
        while (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) < 17 && dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) <= pontosJogador) {
          pedirCartasDealer();
          verificinatorDealer(pontosJogador);
        }
      }if (!jogoAcabou) {
        verificinatorDealer(pontosJogador);
      } else {
        tmp$_1 = document.getElementById('jogo');
        tmp$_1 != null ? (tmp$_1.innerHTML = (tmp$_1 != null ? tmp$_1.innerHTML : null) + '<button onclick="document.location.reload(true)" id="recarregar"><p id = "jogar">Recarrega<\/p><\/button>') : null;
      }
      var pont = dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0);
      var pontA = dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0);
      if (dealer.maoDoJogador.asNaMao) {
        (tmp$_2 = document.getElementById('pontuacaoDealer')) != null ? (tmp$_2.innerHTML = 'Pontua\xE7\xE3o: ' + pont + '/' + pontA) : null;
      } else {
        (tmp$_3 = document.getElementById('pontuacaoDealer')) != null ? (tmp$_3.innerHTML = 'Pontua\xE7\xE3o: ' + pont) : null;
      }
    } else {
      tmp$_4 = document.getElementById('jogo');
      tmp$_4 != null ? (tmp$_4.innerHTML = (tmp$_4 != null ? tmp$_4.innerHTML : null) + '<button onclick="document.location.reload(true)" id="recarregar"><p id = "jogar">Recarrega<\/p><\/button>') : null;
    }
  }
  function verificinator() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    if (p1.maoDoJogador.asNaMao) {
      if (p1.maoDoJogador.somarOTotalcomAs_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0) > 21) {
        println('rebentastes ou nao');
      } else if (p1.maoDoJogador.somarOTotalcomAs_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0) === 21) {
        println('vencestes');
        (tmp$ = document.getElementById('pedir')) != null ? (tmp$.remove(), Unit) : null;
        (tmp$_0 = document.getElementById('manter')) != null ? (tmp$_0.remove(), Unit) : null;
        tmp$_1 = document.getElementById('jogo');
        tmp$_1 != null ? (tmp$_1.innerHTML = (tmp$_1 != null ? tmp$_1.innerHTML : null) + '\n        <div id = "fimDeJogo" style = "background: green;">PARABENS OTARIO<\/div>') : null;
        jogoAcabou = true;
      }}if (p1.maoDoJogador.somarOTotal_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0) > 21) {
      println('rebentastes');
      (tmp$_2 = document.getElementById('pedir')) != null ? (tmp$_2.remove(), Unit) : null;
      (tmp$_3 = document.getElementById('manter')) != null ? (tmp$_3.remove(), Unit) : null;
      tmp$_4 = document.getElementById('jogo');
      tmp$_4 != null ? (tmp$_4.innerHTML = (tmp$_4 != null ? tmp$_4.innerHTML : null) + '\n            <div id = "fimDeJogo" style = "background: darkred">REBENTASTES<\/div>') : null;
      jogoAcabou = true;
    } else if (p1.maoDoJogador.somarOTotal_za3lpa$(p1.maoDoJogador.cartasNaMao.size - 1 | 0) === 21) {
      println('vencestes');
      (tmp$_5 = document.getElementById('pedir')) != null ? (tmp$_5.remove(), Unit) : null;
      (tmp$_6 = document.getElementById('manter')) != null ? (tmp$_6.remove(), Unit) : null;
      tmp$_7 = document.getElementById('jogo');
      tmp$_7 != null ? (tmp$_7.innerHTML = (tmp$_7 != null ? tmp$_7.innerHTML : null) + '\n        <div id = "fimDeJogo" style = "background: green;">PARABENS OTARIO<\/div>') : null;
      jogoAcabou = true;
    }}
  function verificinatorDealer(pontosJogador) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22;
    if (dealer.maoDoJogador.asNaMao) {
      if (dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) > 21) {
        println('rebentastes ou nao');
      } else if (dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) === 21) {
        println('vencestes');
        (tmp$ = document.getElementById('pedir')) != null ? (tmp$.remove(), Unit) : null;
        (tmp$_0 = document.getElementById('manter')) != null ? (tmp$_0.remove(), Unit) : null;
        tmp$_1 = document.getElementById('jogo');
        tmp$_1 != null ? (tmp$_1.innerHTML = (tmp$_1 != null ? tmp$_1.innerHTML : null) + '<div id = "fimDeJogo" style = "background: blue;">PERDEU OTARIO<\/div>') : null;
        jogoAcabou = true;
      } else if (dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) > pontosJogador) {
        println('vencestes');
        (tmp$_2 = document.getElementById('pedir')) != null ? (tmp$_2.remove(), Unit) : null;
        (tmp$_3 = document.getElementById('manter')) != null ? (tmp$_3.remove(), Unit) : null;
        tmp$_4 = document.getElementById('jogo');
        tmp$_4 != null ? (tmp$_4.innerHTML = (tmp$_4 != null ? tmp$_4.innerHTML : null) + '<div id = "fimDeJogo" style = "background: yellow;">PERDEU OTARIO<\/div>') : null;
        jogoAcabou = true;
      } else if (dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) === pontosJogador) {
        println('vencestes');
        (tmp$_5 = document.getElementById('pedir')) != null ? (tmp$_5.remove(), Unit) : null;
        (tmp$_6 = document.getElementById('manter')) != null ? (tmp$_6.remove(), Unit) : null;
        tmp$_7 = document.getElementById('jogo');
        tmp$_7 != null ? (tmp$_7.innerHTML = (tmp$_7 != null ? tmp$_7.innerHTML : null) + '<div id = "fimDeJogo" style = "background: green;">EMPATE OTARIO<\/div>') : null;
        jogoAcabou = true;
      }}if (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) > 21) {
      println('rebentastes');
      (tmp$_8 = document.getElementById('pedir')) != null ? (tmp$_8.remove(), Unit) : null;
      (tmp$_9 = document.getElementById('manter')) != null ? (tmp$_9.remove(), Unit) : null;
      tmp$_10 = document.getElementById('jogo');
      tmp$_10 != null ? (tmp$_10.innerHTML = (tmp$_10 != null ? tmp$_10.innerHTML : null) + '\n            <div id = "fimDeJogo">GANHASTES<\/div>\n            ') : null;
      jogoAcabou = true;
    } else if (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) === 21) {
      println('vencestes');
      (tmp$_11 = document.getElementById('pedir')) != null ? (tmp$_11.remove(), Unit) : null;
      (tmp$_12 = document.getElementById('manter')) != null ? (tmp$_12.remove(), Unit) : null;
      tmp$_13 = document.getElementById('jogo');
      tmp$_13 != null ? (tmp$_13.innerHTML = (tmp$_13 != null ? tmp$_13.innerHTML : null) + '<div id = "fimDeJogo" style = "background: brown;">PERDEU OTARIO<\/div>') : null;
      jogoAcabou = true;
    } else if (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) > pontosJogador) {
      println('vencestes');
      (tmp$_14 = document.getElementById('pedir')) != null ? (tmp$_14.remove(), Unit) : null;
      (tmp$_15 = document.getElementById('manter')) != null ? (tmp$_15.remove(), Unit) : null;
      tmp$_16 = document.getElementById('jogo');
      tmp$_16 != null ? (tmp$_16.innerHTML = (tmp$_16 != null ? tmp$_16.innerHTML : null) + '<div id = "fimDeJogo" style = "background: pink;">PERDEU OTARIO<\/div>') : null;
      jogoAcabou = true;
    } else if (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) === pontosJogador && dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) >= 17) {
      println('vencestes');
      (tmp$_17 = document.getElementById('pedir')) != null ? (tmp$_17.remove(), Unit) : null;
      (tmp$_18 = document.getElementById('manter')) != null ? (tmp$_18.remove(), Unit) : null;
      tmp$_19 = document.getElementById('jogo');
      tmp$_19 != null ? (tmp$_19.innerHTML = (tmp$_19 != null ? tmp$_19.innerHTML : null) + '<div id = "fimDeJogo" style = "background: purple;">EMPATE OTARIO<\/div>') : null;
      jogoAcabou = true;
    } else if (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) >= 17 && dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) < pontosJogador) {
      println('vencestes');
      (tmp$_20 = document.getElementById('pedir')) != null ? (tmp$_20.remove(), Unit) : null;
      (tmp$_21 = document.getElementById('manter')) != null ? (tmp$_21.remove(), Unit) : null;
      tmp$_22 = document.getElementById('jogo');
      tmp$_22 != null ? (tmp$_22.innerHTML = (tmp$_22 != null ? tmp$_22.innerHTML : null) + '<div id = "fimDeJogo" style = "background: green;">PARABENS OTARIO<\/div>') : null;
      jogoAcabou = true;
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
        coisa = coisa2 + ' ' + '\n' + '   \u2663';
        break;
      case 2:
        coisa = coisa2 + ' ' + '\n' + '   \u2665';
        break;
      case 3:
        coisa = coisa2 + ' ' + '\n' + '   \u2666';
        break;
      case 4:
        coisa = coisa2 + ' ' + '\n' + '   \u2660';
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
  Object.defineProperty(_, 'dealer', {
    get: function () {
      return dealer;
    }
  });
  Object.defineProperty(_, 'jogoAcabou', {
    get: function () {
      return jogoAcabou;
    },
    set: function (value) {
      jogoAcabou = value;
    }
  });
  _.darCartas = darCartas;
  _.pedirCartas = pedirCartas;
  _.pedirCartasDealer = pedirCartasDealer;
  _.manterMao = manterMao;
  _.verificinator = verificinator;
  _.verificinatorDealer_za3lpa$ = verificinatorDealer;
  _.Carta = Carta;
  _.Baralho = Baralho;
  _.Mao = Mao;
  _.Jogador = Jogador;
  baralhin = new Baralho();
  p1 = new Jogador('joao');
  dealer = new Jogador('dealer');
  jogoAcabou = false;
  Kotlin.defineModule('VinteUm', _);
  return _;
}(typeof VinteUm === 'undefined' ? {} : VinteUm, kotlin);
