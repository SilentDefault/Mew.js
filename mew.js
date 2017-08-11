/**
 * Copyright:   Silent* <silentdefault@gmail.com> 
 * License:     <see file /License>
 * Created:     2017-08-10
 * Repository:  https://github.com/SilentDefault
 */

(function (window) {
    'use strict';
    function Mew() {

        var _mew = {};

        let configuration = {//configurations
            zeroBased: false,//to use zero base number in day and month
        };

        _mew.config = function (a) {
            if (typeof a === 'object') {
                for (let b in a) {
                    configuration[b] = a[b];
                }
            } else {
                throw Error(`It's not an object`);
            }
        }

        let lenguages = {//please add and fix their language
            es: {
                month: { 0: 'Enero', 1: 'Febrero', 2: 'Marzo', 3: 'Abril', 4: 'Mayo', 5: 'Junio', 6: 'Julio', 7: 'Agosto', 8: 'Septiembre', 9: 'Octubre', 10: 'Noviembre', 11: 'Diciembre' },
                day: { 0: 'Domingo', 1: 'Lunes', 2: 'Martes', 3: 'Miercoles', 4: 'Jueves', 5: 'Viernes', 6: 'Sabado' },
                ordinal: {
                    Milécimo: 1000,
                    Noningentécimo: 900,
                    Octigentécimo: 800,
                    Septigentécimo: 700,
                    Sexcentécimo: 600,
                    Quingentécimo: 500,
                    Cuadrigentécimo: 400,
                    Tricentécimo: 300,
                    Ducentécimo: 200,
                    Centécimo: 100,
                    Novagécimo: 90,
                    Octogécimo: 80,
                    Septuagécimo: 70,
                    Sexagécimo: 60,
                    Quincuagécimo: 50,
                    Cuadragécimo: 40,
                    Trigécimo: 30,
                    Vigécimo: 20,
                    Décimo: 10,
                    Noveno: 9,
                    Octavo: 8,
                    Septimo: 7,
                    Sexto: 6,
                    Quinto: 5,
                    Cuarto: 4,
                    Tercero: 3,
                    Segundo: 2,
                    Primero: 1
                },
                cardinal: {
                    0: 'cero', 1: 'uno', 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco', 6: 'seis', 7: 'siete', 8: 'ocho', 9: 'nueve',
                    10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince'
                },
                Year: {
                    Eón: 1000000000,
                    Milenio: 1000,
                    Siglo: 100,
                    Década: 10,
                    Sexenio: 6,
                    Lustro: 5,
                    Trienio: 3,
                    Bienio: 2,
                    año: 1
                }
            },
            en: {
                month: { 0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December' },
                day: { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' },
                ordinal: { 1: 'First', 2: 'Second', 3: 'Third', 4: '' },
                cardinal: {
                    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
                    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
                    20: 'twenty'
                }
            }
        };

        _mew.toMonth = function (a) {
            a = checkNumber(a);
            if ((!configuration.zeroBased && (a < 1 || a > 12)) || (configuration.zeroBased && (a < 0 || a > 11))) {
                throw Error(`Can not be converted to month`);
            }
            if (configuration.zeroBased) {
                return lenguages[configuration.lenguage].month[a];
            } else {
                return lenguages[configuration.lenguage].month[--a];
            }
        }

        _mew.toDay = function (a) {
            a = checkNumber(a);
            if ((!configuration.zeroBased && (a < 1 || a > 7)) || (configuration.zeroBased && (a < 0 || a > 6))) {
                throw Error(`Can not convert to day`);
            }
            if (configuration.zeroBased) {
                return lenguages[configuration.lenguage].day[a];
            } else {
                return lenguages[configuration.lenguage].day[--a];
            }
        }

        _mew.toOrdinal = function (a) {
            a = checkNumber(a);
            var R = '';
            var K = lenguages[configuration.lenguage].ordinal;
            for (let z in K) {
                while (a >= K[z]) {
                    if (R == ' ') {
                        R = z;
                    } else {
                        R += ' ' + z;
                    }
                    a -= K[z];
                }
            }
            return R;
        }

        _mew.toCardinal = function (a) {
            a = checkNumber(a);
            return lenguages[configuration.lenguage].cardinal[a];
        }

        _mew.toRoman = function (a) {
            a = checkNumber(a);
            let K = {
                M5: 5000, M4: 4000, M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
            };
            let R = '';
            for (let z in K) {
                while (a >= K[z]) {
                    R += z;
                    a -= K[z];
                }
            }
            return R;
        }

        _mew.to = function (b, a, c = false) {
            a = checkNumber(a);
            if (typeof b !== 'string') {
                throw Error(`Specify the name of the unit`);
            }
            if (a != 1 && a != -1) {
                if (b.substr(-1) != 's') {
                    switch (configuration.lenguage) {
                        case 'es':
                            switch (b.substr(-1)) {
                                case 'l': case 'r': case 'n': case 'd': case 'j':
                                    b += 'es';
                                    break;
                                default:
                                    b += 's';
                            }
                            break;
                        case 'en':
                            b += 's';
                            break;
                    }
                }
            }
            if (c) {
                a = _mew.toCardinal(a);
            }
            return `${a} ${b}`;
        }

        //doesn't work yet
        //_mew.toYear = function (a, c = false) {
        //    a = checkNumber(a);
        //    var K = lenguages[configuration.lenguage].Year;
        //    console.log(K);
        //    for (let z in K) {
        //        let y = 0;
        //        while (a >= K[z]) {
        //            y += 1;
        //            a -= K[z];
        //        }
        //        K[z] = y;
        //    }
        //    return K;
        //}

        function checkNumber(a) {
            a = Number(a);
            if (typeof a === 'number' && !isNaN(a)) {
                return a;
            } else {
                throw Error(`It's not a number`);
            }
        }

        return _mew;
    }
    if (typeof (window.mew) === 'undefined') {
        window.mew = Mew();
    }
})(window);
