let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro/2;

//velocidade bola
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variavel da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


let colidiu = false;



//variaveis do oponente
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeYOponente;


//placarDoJogo
let meusPontos = 0;
let pontosOponente = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
    background(0);
  	mostraBolinha();
	movimentaBolinha();
  	vereficaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
  	movimentaRaquete();
	colisaoRaquete();
    verificaColisaoRaquete(xRaquete,yRaquete);
  	mostraRaquete(xRaquete2,yRaquete2);	
    movimentaRaquete2();
  	verificaColisaoRaquete(xRaquete2,yRaquete2);
    incluiPlacar();
    marcaPonto();
    stroke(255);
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}
function vereficaColisaoBorda(){
  
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}



function mostraRaquete (x,y){
  rect(x , y , raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}



function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1
  }
  //limita a colisao no topo
  yRaquete = constrain(yRaquete, 10 , 310);
}



function verificaColisaoRaquete(x,y){
 colidiu =  collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio)
  if(colidiu){
    velocidadeXBolinha *= -1
  }
}

function movimentaRaquete2(){
  velocidadeYOponente = yBolinha - yRaquete2 - raqueteComprimento/2-30;
  yRaquete2 += velocidadeYOponente
  yRaquete2 = constrain(yRaquete2, 10, 310);

}

function incluiPlacar(){
  textAlign(CENTER);
  textSize (16);
  fill(color(255,140,0))
  rect(150, 10, 40, 20)
  fill(255)
  text(meusPontos, 170 , 26)
  fill(color(255,140,0))
  rect(450,10,40,20)
  fill(255)
  text(pontosOponente, 470, 26)

}


function marcaPonto() {
    if (xBolinha > 585) {
        meusPontos += 1;
    }
    if (xBolinha < 15) {
        pontosOponente += 1;
    }
}