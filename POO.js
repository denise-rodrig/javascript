/*paradigma imperativo:como resolvero o problema
declarativo: o q você vai fazer*/

//objeto,classe,herança e emcapsulamento
//pilares do OO:Abstração,Herança,Encapsulamento(cada classe tem propriedades e métodos próprios independentes do restante do código) e polimorfismo(objetos podem herdar a mesma classe pai, mas se comportam de forma diferentes quando invocamos seus metodos UM EXEMPLO É CLASSE ANIMAL E METODO FALAR,JA QUE CADA ANIMAL TEM UMA MANEIRA DIFERENTE DE FALAR)

//OOSJ JAVASCRIPT ORIENTADO A OBJETO

/*TODOS OS OBJETOS JAVASCRIPT HERDAM PROPRIEDADES E MÉTODOS DE UM PROTOTYPE.SÃO OS ESQUELETO DOS OBJETOS DO JAVASCRIPT COM METODOS E PROPRIEDADES.
O JS NÃO POSSUI CLASSES NATIVAMENTE.TODAS AS CLASSES SÃO OBJETOS E A HERENÇA SE DÁ POR PROTÓTIPOS:
  CONSTRUCTOR:CONTRUIR A CLASSE  E O PARAMETRO ATRIBUI A CERTOS VALORES DA CLASSE;
  GET E SET:ACESSO AS PROPRIEDADES DA CLASSE;
  SUPER:MANDA PARA PAI AS PROPRIEDADES DA FILHA;
  METODO:METODO ESCRITO,PERSONALIZADO
*/
//ATIVIDADE:CRIANDO CLASSES

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return "Operação negada";
    }
    this_saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}

//classeFilha
class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }
  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitaria";
  }
  sacar(valor) {
    if (valor > 500) {
      return "Operação negada!";
    }
    this._saldo = this._saldo - valor;
  }
}
