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
  var baralho;
  var jogador;
  var dealer;
  var jogoAcabou;
  function darCartas() {
    jogador.maoDoJogador.puxarCarta_9350cv$(2, baralho.cartas);
    dealer.maoDoJogador.puxarCarta_9350cv$(2, baralho.cartas);
    var carta1 = jogador.maoDoJogador.cartasNaMao.get_za3lpa$(0).toString();
    var carta2 = jogador.maoDoJogador.cartasNaMao.get_za3lpa$(1).toString();
    var cartaDoDealer1 = dealer.maoDoJogador.cartasNaMao.get_za3lpa$(0).toString();
    var pontuacao = jogador.maoDoJogador.somarOTotal_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0);
    var pontuacaoComAs = jogador.maoDoJogador.somarOTotalcomAs_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0);
    var divDoJogo = document.getElementById('jogo');
    if (divDoJogo == null) {
      println('nulo');
      return;
    }divDoJogo.innerHTML = '\n    <link rel="stylesheet" type="text/css" href="estilos.css" media="screen"/>\n    <div id = "maoJogador"><\/div>\n    <div id = "maoDealer"><\/div>\n    <div id = "pontuacaoDealer">Pontua\xE7\xE3o: ???<\/div>\n    <button id = "pedir" onclick = "VinteUm.pedirCartas()">Adiciona<\/button>\n    <button id = "manter" onclick = "VinteUm.manterMao()">Manter<\/button>     \n    ';
    var divMaoDoJogador = document.getElementById('maoJogador');
    var divMaoDoDealer = document.getElementById('maoDealer');
    if (divMaoDoJogador == null || divMaoDoDealer == null) {
      println('null');
      return;
    }divMaoDoJogador.innerHTML = '\n' + '    <div id = ' + '"' + 'carta' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta1 + '<\/p><\/div>' + '\n' + '    <div id = ' + '"' + 'carta' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta2 + '<\/p><\/div>' + '\n' + '    ';
    divMaoDoDealer.innerHTML = '\n' + '    <div id = ' + '"' + 'cartaDealer' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + cartaDoDealer1 + '<\/p><\/div>' + '\n' + '    <div id = ' + '"' + 'cartaDealer2' + '"' + '><\/div>' + '\n' + '    ';
    if (jogador.maoDoJogador.asNaMao) {
      divDoJogo.innerHTML = divDoJogo.innerHTML + ('\n' + '        <div id = ' + '"' + 'pontuacao' + '"' + '>Pontua\xE7\xE3o: ' + pontuacao + '/' + pontuacaoComAs + '<\/div>' + '\n' + '        ');
    } else {
      divDoJogo.innerHTML = divDoJogo.innerHTML + ('\n' + '        <div id = ' + '"' + 'pontuacao' + '"' + '>Pontua\xE7\xE3o: ' + pontuacao + '<\/div>' + '\n' + '        ');
    }
  }
  function pedirCartas() {
    var tmp$, tmp$_0, tmp$_1;
    jogador.maoDoJogador.puxarCarta_9350cv$(1, baralho.cartas);
    var carta = last(jogador.maoDoJogador.cartasNaMao).toString();
    var pontuacao = jogador.maoDoJogador.somarOTotal_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0);
    var pontuacaoComAs = jogador.maoDoJogador.somarOTotalcomAs_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0);
    var divMaoDoJogador = document.getElementById('maoJogador');
    if (divMaoDoJogador == null) {
      println('null');
      return;
    }divMaoDoJogador.innerHTML = divMaoDoJogador.innerHTML + ('\n' + '    <div id = ' + '"' + 'carta' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta + '<\/p><\/div>' + '\n' + '    ');
    if (jogador.maoDoJogador.asNaMao) {
      (tmp$ = document.getElementById('pontuacao')) != null ? (tmp$.innerHTML = 'Pontua\xE7\xE3o: ' + pontuacao + '/' + pontuacaoComAs) : null;
    } else {
      (tmp$_0 = document.getElementById('pontuacao')) != null ? (tmp$_0.innerHTML = 'Pontua\xE7\xE3o: ' + pontuacao) : null;
    }
    verificinator();
    if (jogoAcabou) {
      reset();
      tmp$_1 = document.getElementById('jogo');
      tmp$_1 != null ? (tmp$_1.innerHTML = (tmp$_1 != null ? tmp$_1.innerHTML : null) + '<button onclick="VinteUm.darCartas()" id="recarregar">Reiniciar<\/button>') : null;
    }}
  function pedirCartasDealer() {
    dealer.maoDoJogador.puxarCarta_9350cv$(1, baralho.cartas);
    var carta = last(dealer.maoDoJogador.cartasNaMao).toString();
    var divMaoDoDealer = document.getElementById('maoDealer');
    if (divMaoDoDealer == null) {
      println('nulo');
      return;
    }divMaoDoDealer.innerHTML = divMaoDoDealer.innerHTML + ('\n' + '    <div id = ' + '"' + 'cartaDealer' + '"' + '><p id = ' + '"' + 'texto-carta' + '"' + '>' + carta + '<\/p><\/div>' + '\n' + '    ');
  }
  function manterMao() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    verificinator();
    if (!jogoAcabou) {
      var cartaDoDealer2 = dealer.maoDoJogador.cartasNaMao.get_za3lpa$(1).toString();
      var pontosJogador;
      if (jogador.maoDoJogador.somarOTotalcomAs_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0) <= 21) {
        pontosJogador = jogador.maoDoJogador.somarOTotalcomAs_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0);
      } else {
        pontosJogador = jogador.maoDoJogador.somarOTotal_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0);
      }
      (tmp$ = document.getElementById('cartaDealer2')) != null ? (tmp$.innerHTML = '<p id = texto-carta>' + cartaDoDealer2 + '<\/p>') : null;
      (tmp$_0 = document.getElementById('cartaDealer2')) != null ? (tmp$_0.id = 'cartaDealer') : null;
      verificinatorDealer(pontosJogador);
      if (dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) !== 21 && !jogoAcabou) {
        while (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) < 17 && dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) <= pontosJogador) {
          pedirCartasDealer();
          verificinatorDealer(pontosJogador);
        }
      }tmp$_1 = document.getElementById('jogo');
      tmp$_1 != null ? (tmp$_1.innerHTML = (tmp$_1 != null ? tmp$_1.innerHTML : null) + '<button onclick="VinteUm.darCartas()" id="recarregar">Reiniciar<\/button>') : null;
      var pontuacao = dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0);
      var pontuacaoComAs = dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0);
      if (dealer.maoDoJogador.asNaMao) {
        (tmp$_2 = document.getElementById('pontuacaoDealer')) != null ? (tmp$_2.innerHTML = 'Pontua\xE7\xE3o: ' + pontuacao + '/' + pontuacaoComAs) : null;
      } else {
        (tmp$_3 = document.getElementById('pontuacaoDealer')) != null ? (tmp$_3.innerHTML = 'Pontua\xE7\xE3o: ' + pontuacao) : null;
      }
      reset();
    } else {
      reset();
      tmp$_4 = document.getElementById('jogo');
      tmp$_4 != null ? (tmp$_4.innerHTML = (tmp$_4 != null ? tmp$_4.innerHTML : null) + '<button onclick="VinteUm.darCartas()" id="recarregar">Reiniciar<\/button>') : null;
    }
  }
  function verificinator() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    if (jogador.maoDoJogador.asNaMao) {
      if (jogador.maoDoJogador.somarOTotalcomAs_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0) === 21) {
        (tmp$ = document.getElementById('pedir')) != null ? (tmp$.remove(), Unit) : null;
        (tmp$_0 = document.getElementById('manter')) != null ? (tmp$_0.remove(), Unit) : null;
        tmp$_1 = document.getElementById('jogo');
        tmp$_1 != null ? (tmp$_1.innerHTML = (tmp$_1 != null ? tmp$_1.innerHTML : null) + '\n            <div id = "fimDeJogo" style = "background: green;">VENCESTES<\/div>') : null;
        jogoAcabou = true;
      }}if (jogador.maoDoJogador.somarOTotal_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0) > 21) {
      (tmp$_2 = document.getElementById('pedir')) != null ? (tmp$_2.remove(), Unit) : null;
      (tmp$_3 = document.getElementById('manter')) != null ? (tmp$_3.remove(), Unit) : null;
      tmp$_4 = document.getElementById('jogo');
      tmp$_4 != null ? (tmp$_4.innerHTML = (tmp$_4 != null ? tmp$_4.innerHTML : null) + '\n        <div id = "fimDeJogo" style = "background: darkred">REBENTASTES<\/div>') : null;
      jogoAcabou = true;
    } else if (jogador.maoDoJogador.somarOTotal_za3lpa$(jogador.maoDoJogador.cartasNaMao.size - 1 | 0) === 21) {
      (tmp$_5 = document.getElementById('pedir')) != null ? (tmp$_5.remove(), Unit) : null;
      (tmp$_6 = document.getElementById('manter')) != null ? (tmp$_6.remove(), Unit) : null;
      tmp$_7 = document.getElementById('jogo');
      tmp$_7 != null ? (tmp$_7.innerHTML = (tmp$_7 != null ? tmp$_7.innerHTML : null) + '\n        <div id = "fimDeJogo" style = "background: green;">VENCESTES<\/div>') : null;
      jogoAcabou = true;
    }}
  function verificinatorDealer(pontosJogador) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20;
    if (dealer.maoDoJogador.asNaMao) {
      if (dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) > pontosJogador && dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) <= 21) {
        (tmp$ = document.getElementById('pedir')) != null ? (tmp$.remove(), Unit) : null;
        (tmp$_0 = document.getElementById('manter')) != null ? (tmp$_0.remove(), Unit) : null;
        tmp$_1 = document.getElementById('jogo');
        tmp$_1 != null ? (tmp$_1.innerHTML = (tmp$_1 != null ? tmp$_1.innerHTML : null) + '<div id = "fimDeJogo" style = "background: yellow;">PERDESTES<\/div>') : null;
        jogoAcabou = true;
      } else if (dealer.maoDoJogador.somarOTotalcomAs_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) === pontosJogador) {
        (tmp$_2 = document.getElementById('pedir')) != null ? (tmp$_2.remove(), Unit) : null;
        (tmp$_3 = document.getElementById('manter')) != null ? (tmp$_3.remove(), Unit) : null;
        tmp$_4 = document.getElementById('jogo');
        tmp$_4 != null ? (tmp$_4.innerHTML = (tmp$_4 != null ? tmp$_4.innerHTML : null) + '<div id = "fimDeJogo" style = "background: green;">EMPATASTES<\/div>') : null;
        jogoAcabou = true;
      }}if (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) > 21) {
      (tmp$_5 = document.getElementById('pedir')) != null ? (tmp$_5.remove(), Unit) : null;
      (tmp$_6 = document.getElementById('manter')) != null ? (tmp$_6.remove(), Unit) : null;
      tmp$_7 = document.getElementById('jogo');
      tmp$_7 != null ? (tmp$_7.innerHTML = (tmp$_7 != null ? tmp$_7.innerHTML : null) + '\n            <div id = "fimDeJogo">VENCESTES<\/div>\n            ') : null;
      jogoAcabou = true;
    } else if (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) === 21) {
      (tmp$_8 = document.getElementById('pedir')) != null ? (tmp$_8.remove(), Unit) : null;
      (tmp$_9 = document.getElementById('manter')) != null ? (tmp$_9.remove(), Unit) : null;
      tmp$_10 = document.getElementById('jogo');
      tmp$_10 != null ? (tmp$_10.innerHTML = (tmp$_10 != null ? tmp$_10.innerHTML : null) + '<div id = "fimDeJogo" style = "background: brown;">PERDESTES<\/div>') : null;
      jogoAcabou = true;
    } else if (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) > pontosJogador) {
      (tmp$_11 = document.getElementById('pedir')) != null ? (tmp$_11.remove(), Unit) : null;
      (tmp$_12 = document.getElementById('manter')) != null ? (tmp$_12.remove(), Unit) : null;
      tmp$_13 = document.getElementById('jogo');
      tmp$_13 != null ? (tmp$_13.innerHTML = (tmp$_13 != null ? tmp$_13.innerHTML : null) + '<div id = "fimDeJogo" style = "background: pink;">PERDESTES<\/div>') : null;
      jogoAcabou = true;
    } else if (dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) === pontosJogador && dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0) >= 17) {
      (tmp$_14 = document.getElementById('pedir')) != null ? (tmp$_14.remove(), Unit) : null;
      (tmp$_15 = document.getElementById('manter')) != null ? (tmp$_15.remove(), Unit) : null;
      tmp$_16 = document.getElementById('jogo');
      tmp$_16 != null ? (tmp$_16.innerHTML = (tmp$_16 != null ? tmp$_16.innerHTML : null) + '<div id = "fimDeJogo" style = "background: purple;">EMPATASTES<\/div>') : null;
      jogoAcabou = true;
    } else {
      tmp$_17 = dealer.maoDoJogador.somarOTotal_za3lpa$(dealer.maoDoJogador.cartasNaMao.size - 1 | 0);
      if (17 <= tmp$_17 && tmp$_17 < pontosJogador) {
        (tmp$_18 = document.getElementById('pedir')) != null ? (tmp$_18.remove(), Unit) : null;
        (tmp$_19 = document.getElementById('manter')) != null ? (tmp$_19.remove(), Unit) : null;
        tmp$_20 = document.getElementById('jogo');
        tmp$_20 != null ? (tmp$_20.innerHTML = (tmp$_20 != null ? tmp$_20.innerHTML : null) + '<div id = "fimDeJogo" style = "background: blue;">VENCESTES<\/div>') : null;
        jogoAcabou = true;
      }}
  }
  function reset() {
    baralho = new Baralho();
    jogador.maoDoJogador.limparMao();
    dealer.maoDoJogador.limparMao();
    jogoAcabou = false;
  }
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
        coisa = coisa2 + ' \u2663';
        break;
      case 2:
        coisa = coisa2 + ' \u2665';
        break;
      case 3:
        coisa = coisa2 + ' \u2666';
        break;
      case 4:
        coisa = coisa2 + ' \u2660';
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
  Mao.prototype.limparMao = function () {
    this.asNaMao = false;
    this.cartasNaMao.clear();
  };
  Mao.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mao',
    interfaces: []
  };
  function Jogador(nome) {
    this.nome = nome;
    this.maoDoJogador = new Mao();
    this.vezesQueGanhou = 0;
  }
  Jogador.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Jogador',
    interfaces: []
  };
  Object.defineProperty(_, 'baralho', {
    get: function () {
      return baralho;
    },
    set: function (value) {
      baralho = value;
    }
  });
  Object.defineProperty(_, 'jogador', {
    get: function () {
      return jogador;
    },
    set: function (value) {
      jogador = value;
    }
  });
  Object.defineProperty(_, 'dealer', {
    get: function () {
      return dealer;
    },
    set: function (value) {
      dealer = value;
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
  _.reset = reset;
  _.Carta = Carta;
  _.Baralho = Baralho;
  _.Mao = Mao;
  _.Jogador = Jogador;
  baralho = new Baralho();
  jogador = new Jogador('joao');
  dealer = new Jogador('dealer');
  jogoAcabou = false;
  Kotlin.defineModule('VinteUm', _);
  return _;
}(typeof VinteUm === 'undefined' ? {} : VinteUm, kotlin);
