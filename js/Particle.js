class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.5
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }

    display() {

        if(this.body.position.y > 780 && this.body.position.x < 80 && this.body.position.x > 0){

            score = score + 500;
            this.body.position.y = -100;
            Matter.Body.setStatic(this.body, true);

        }

        if(this.body.position.y > 780 && this.body.position.x < 240 && this.body.position.x > 80){

            score = score + 100;
            this.body.position.y = -100;
            Matter.Body.setStatic(this.body, true);

        }

        if(this.body.position.y > 780 && this.body.position.x < 400 && this.body.position.x > 240){

            score = score + 300;
            this.body.position.y = -100;
            Matter.Body.setStatic(this.body, true);

        }

        if(this.body.position.y > 780 && this.body.position.x < 480 && this.body.position.x > 400){

            score = score + 100;
            this.body.position.y = -100;
            Matter.Body.setStatic(this.body, true);

        }

        if(this.body.position.y > 780 && this.body.position.x < 640 && this.body.position.x > 480){

            score = score + 300;
            this.body.position.y = -100;
            Matter.Body.setStatic(this.body, true);

        }

        if(this.body.position.y > 780 && this.body.position.x < 720 && this.body.position.x > 640){

            score = score + 500;
            this.body.position.y = -100;
            Matter.Body.setStatic(this.body, true);

        }

        if(this.body.position.y > 780 && this.body.position.x < 800 && this.body.position.x > 720){

            score = score + 100;
            this.body.position.y = -100;
            Matter.Body.setStatic(this.body, true);

        }

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};