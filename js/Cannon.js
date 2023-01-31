class Cannon { //classe canhão 
  constructor(x, y, width, height, angle) { //contruir o objeto com posição x e y , largura, altura e angulo
    this.x = x; //posição x é modificavel
    this.y = y; //posição y é modificavel
    this.width = width; //largura é modificavel
    this.height = height; //altura é modificavel
    this.angle = angle; //angulo é modificavel
  }
  display() { // função para exibir na tela
   if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) { //se a tecla abaixada é a SETA DIREITA e o angulo é menor que 0.35
    this.angle += 0.02; //o caminhão vai ter seu angulo aumentando em 0.02
   }
   
   if (keyisDown(LEFT_ARROW) && this.angle > -1.45) { //se a tecla abaixada é a SETA ESQUERDA e o angulo é maior que -1.45
     this.angle -= 0.02; //o canhao vai ter seu angulo diminuido em 0.02
   }
    
    fill("#676e6a"); //a cor preenchida é cinza
    push(); //cria uma nova configuraçaõ de acorodo com o que existe entre push() e pop()
    translate(this.x, this.y); //passa a posição inicial x e y para a do objeto e não da tela
    rotate(this.angle); //rotaciona a imagem de acordo com o angulo dado
    rect(-10, -20, this.width, this.height); //cria a base do canhao que ira se mover
    pop(); //faz retornar para as configuraço~es iniciais
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI); //cria um arco preencido de cinza para a base do canhao 
    noFill(); //nao preenche de cor com o resto da tela
  }
}
