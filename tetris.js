var canvas
var ctx
var fps = 50
var anchoTablero = 10
var altoTablero = 20
var anchOFicha = 40
var altoFicha = 40
var anchoCanvas = 400
var altoCanvas = 640
var pieza
var margenSuperior = 4
var tamanyoFicha = 40

var tablero=[    
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
]

var tableroCopia = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
]

var rojo = '#FF0000'
var morado = '#800080'
var naranja = '#FF8C00'
var amarillo = '#FFD700'
var verde = '#008000'
var cyan = '#00CED1'
var azul = '#0000CD'

var fichaGrafico = [
    [
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ]
    ],
    [
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ],
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ]
    ],
    [
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ]
    ],
    [
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ]
    ],
    [
        [
        [0,0,0,0],
        [0,5,5,5],
        [0,5,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,5,0],
        [0,0,5,0],
        [0,0,5,5],
        [0,0,0,0]
        ],
        [
        [0,0,0,5],
        [0,5,5,5],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
        [0,5,5,0],
        [0,0,5,0],
        [0,0,5,0],
        [0,0,0,0]
        ]
    ],
    [
        [
        [0,0,0,0],
        [0,6,6,6],
        [0,0,0,6],
        [0,0,0,0]
        ],
        [
        [0,0,6,6],
        [0,0,6,0],
        [0,0,6,0],
        [0,0,0,0]
        ],
        [
        [0,6,0,0],
        [0,6,6,6],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,6,0],
        [0,0,6,0],
        [0,6,6,0],
        [0,0,0,0]
        ]
    ],
    [
        [
        [0,0,0,0],
        [0,7,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
        [
        [0,0,7,0],
        [0,0,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
        [
        [0,0,7,0],
        [0,7,7,7],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,7,0],
        [0,7,7,0],
        [0,0,7,0],
        [0,0,0,0]
        ]
    ]

    ]

    function dibujaTablero() {
        for(py = margenSuperior; py <= altoTablero; py++) {
            for(px = 1; px <= anchoTablero; px++) {
    
                if(tablero[py][px] > 0) {
                    if(tablero[py][px] == 1)
                        ctx.fillStyle = rojo
                    if(tablero[py][px] == 2)
                        ctx.fillStyle = morado
                    if(tablero[py][px] == 3)
                        ctx.fillStyle = naranja
                    if(tablero[py][px] == 4)
                        ctx.fillStyle = amarillo
                    if(tablero[py][px] == 5)
                        ctx.fillStyle = verde
                    if(tablero[py][px] == 6)
                        ctx.fillStyle = cyan
                    if(tablero[py][px] == 7)
                        ctx.fillStyle = azul
                    ctx.fillRect(((this.px - 1) * tamanyoFicha), ((this.py - margenSuperior) * tamanyoFicha), tamanyoFicha, tamanyoFicha)
                }
            }
        }
    }

    function resetearTablero() {

        for(py = 0; py < 21; py++) {
            for(px = 0; px < 12; px++) {
                tablero[py][px] = tableroCopia[py][px]
            }
        }
    }

    function inicializaTeclado() {
        document.addEventListener('keydown', function(tecla) {
        
            if(tecla.keyCode == 38) {
                pieza.rotar()
            }

            if(tecla.keyCode == 40) {
                pieza.abajo()
            }

            if(tecla.keyCode == 37) {
                pieza.izquierda()
            }   

            if(tecla.keyCode == 39) {
                pieza.derecha()
            }
        })
    }

    function inicializa() {
        canvas=document.getElementById('canvas')
        ctx=canvas.getContext('2d')

        document.getElementById('canvas').style.width = anchoCanvas
        document.getElementById('canvas').style.height = altoCanvas

        inicializaTeclado()
        pieza = new ObjetoPieza()

        setInterval(function() {
        principal()
    }, 1000/fps)
    }

    function borrarCanvas() {
        canvas.width = anchoCanvas
        canvas.height = altoCanvas
    }

    function principal() {
        borrarCanvas()
        dibujaTablero()
        pieza.caer()
        pieza.dibuja()
    
    }


    var ObjetoPieza = function() {
        this.x = 4
        this.y = 0
        this.angulo = 0
        this.tipo = 0
        this.retraso = 50
        this.fotograma = 0
    
        this.nueva = function() {
            this.tipo = Math.floor(Math.random() * 7)
            this.fotograma = 0
            this.y = 0
            this.x = 4
        }

        this.fijar = function() {
            for(py = 0; py < 4; py++) {
                for(px = 0; px <= 4; px++) {

                    if(fichaGrafico[this.tipo][this.angulo][py][px] > 0) {
                        tablero[this.y + py][this.x + px] = fichaGrafico[this.tipo][this.angulo][py][px]
                    }
                }
            }
        }

        this.caer = function() {
            if(this.fotograma < this.retraso)
                this.fotograma++
            else {
                if(this.colision(this.angulo, this.y + 1, this.x) == false) {
                    this.y++
                }
                else {
                    this.fijar()
                    this.limpiar()
                    this.nueva()

                    if(this.perder() == true)
                        resetearTablero()
                }
                this.fotograma = 0
            }
        }

        this.colision = function(anguloNuevo, yNueva, xNueva) {
           var choque = false

           for(py = 0;py < 4; py++) {
               for(px = 0;px < 4; px++) {

                   if(fichaGrafico[this.tipo][anguloNuevo][py][px] > 0) {
                       if(tablero[yNueva + py][xNueva + px] > 0)
                           choque = true
                    }
                }
            }
           return choque
        }   

        this.perder = function() {
           var restart = false

           for(px = 1; px < anchoTablero + 1; px++) {
               if(tablero[2][px] > 0) {
                   restart = true
                }
            }
           return restart
        }   

        this.limpiar = function() {
            var filacompleta

            for(py = margenSuperior; py < altoTablero; py++) {
                filacompleta = true
                for(px = 1;px < anchoTablero + 1; px++) {
                    if(tablero[py][px] == 0) {
                        filacompleta = false
                    }
                }
                if(filacompleta == true) {
                    for(px = 1; px < anchoTablero + 1; px++) {
                        tablero[py][px] = 0
                    }
                }
            }
        }

        this.dibuja = function() {
            for(py = 0;py < 4; py++) {
                for(px = 0;px <= 4; px++) {
                   if(fichaGrafico[this.tipo][this.angulo][py][px] > 0) {
                        if(fichaGrafico[this.tipo][this.angulo][py][px] == 1)
                            ctx.fillStyle = rojo
                        if(fichaGrafico[this.tipo][this.angulo][py][px] == 2)
                            ctx.fillStyle = morado
                        if(fichaGrafico[this.tipo][this.angulo][py][px] == 3)
                            ctx.fillStyle = naranja
                        if(fichaGrafico[this.tipo][this.angulo][py][px] == 4)
                            ctx.fillStyle = amarillo
                        if(fichaGrafico[this.tipo][this.angulo][py][px] == 5)
                            ctx.fillStyle = verde
                        if(fichaGrafico[this.tipo][this.angulo][py][px] == 6)
                            ctx.fillStyle = cyan
                        if(fichaGrafico[this.tipo][this.angulo][py][px] == 7)
                            ctx.fillStyle = azul
                    
                        ctx.fillRect(((this.x + px - 1) * tamanyoFicha), (((this.y - margenSuperior) + py) * tamanyoFicha), tamanyoFicha, tamanyoFicha)
                    }
                }
            }
        }

        this.rotar = function() {
            var anguloNuevo = this.angulo

            if(anguloNuevo < 3)
                anguloNuevo++
            else {
                anguloNuevo = 0
            }
            if(this.colision(anguloNuevo, this.y, this.x) == false)
                this.angulo = anguloNuevo
            console.log('rotar')
        }

        this.abajo = function() {
            if(this.colision(this.angulo,this.y + 1, this.x) == false)
                this.y++
            console.log('abajo')
        }

        this.derecha = function() {
            if(this.colision(this.angulo, this.y, this.x + 1) == false)
                this.x++
            console.log('derecha')
        }

        this.izquierda = function() {
            if(this.colision(this.angulo, this.y, this.x - 1) == false)
                this.x--
            console.log('izquierda')
        }

    this.nueva()
}
