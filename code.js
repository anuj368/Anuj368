var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["edd5686b-9d7e-4993-8ca1-b861c8eb45b3","c364d687-f07c-4ddb-a27d-54a62e43977c","f278f0c6-15d9-4bc3-8038-86d3b97b88db","f7e09577-27c7-4db2-9345-77cbc4ea09ab","b2eac24a-8ddd-4457-8b20-c3cf1f629edf"],"propsByKey":{"edd5686b-9d7e-4993-8ca1-b861c8eb45b3":{"name":"brown_sweater_hand_in_pocket_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png","frameSize":{"x":126,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png"},"c364d687-f07c-4ddb-a27d-54a62e43977c":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"f278f0c6-15d9-4bc3-8038-86d3b97b88db":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"f7e09577-27c7-4db2-9345-77cbc4ea09ab":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"b2eac24a-8ddd-4457-8b20-c3cf1f629edf":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

      var life = 5;
      var car1, car2, car3,car4;
      var boundary1, boundary2;
      var sam;
      var gameState="serve";
      var store= 0;
       
        boundary1 = createSprite(190,120,420,3);
        boundary2 = createSprite(190,260,420,3);
        
        sam = createSprite(20,190,13,13);
        sam.shapeColor = "black";
        
        car1 = createSprite(100,130,10,10);
        car1.shapeColor = "red";
        car2 = createSprite(215,130,10,10);
        car2.shapeColor = "blue";
        car3 = createSprite(165,250,10,10);
        car3.shapeColor = "green";
        car4 = createSprite(270,250,10,10);
        car4.shapeColor = "yellow";
      
     sam.setAnimation("brown_sweater_hand_in_pocket_1");
    sam.scale=0.10
        
     car1.setAnimation("car_black_1");
    car1.scale=0.15
    car2.setAnimation("car_green_1");
    car2.scale=0.15
    car3.setAnimation("car_red_1");
    car3.scale=0.15
    car4.setAnimation("car_yellow_1");
    car4.scale=0.15
        
        
         
      //add the velocity to make the car move.
      car1.velocityY=8
      car2.velocityY=10
      car3.velocityY=-9
      car4.velocityY=-11
      
      function draw() {
         background("white");
     
    
     
     
     
     
     
          
    if (sam.isTouching(car1)||
           sam.isTouching(car2)||
           sam.isTouching(car3)||
           sam.isTouching(car4))
    {
        playSound("assets/category_hits/8bit_splat.mp3");
      }
        textSize("20")
        text("store",300,200)
        textSize("20");
        text(" Lives:" + life ,180,100);
        strokeWeight(0);
        fill("lightblue");
        rect(0,120,52,140);
        fill("yellow");
        rect(345,120,52,140);
        
    
      
      
      
        
      // create bounceoff function to make the car bounceoff the boundaries
      createEdgeSprites()
      car1.bounceOff(boundary1)
      car1.bounceOff(boundary2)
      car2.bounceOff(boundary1)
      car2.bounceOff(boundary2)
      car3.bounceOff(boundary1)
      car3.bounceOff(boundary2)
      car4.bounceOff(boundary1)
      car4.bounceOff(boundary2)
      
      //Add the condition to make the sam move left and right
      if (keyDown("right")) {
        sam.x = sam.x+3;
      }
      if (keyDown("left")) {
        sam.x = sam.x-3;
      }
      if(
           sam.isTouching(car1)||
           sam.isTouching(car2)||
           sam.isTouching(car3)||
           sam.isTouching(car4))
        {
           sam.x = 20;
           sam.y = 190;
           life = life - 1;
        }
    
       
        
       drawSprites();
      }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
