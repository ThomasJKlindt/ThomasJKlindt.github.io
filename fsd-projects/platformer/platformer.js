$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform(200, 600, 200, 50, "goldenrod");
    createPlatform(200, 300, 200, 50, "goldenrod");
    createPlatform(1000, 300, 200, 50, "goldenrod");
    createPlatform(1000, 600, 200, 50, "goldenrod");
    createPlatform(600, 450, 200, 50, "goldenrod");

    // TODO 3 - Create Collectables

    createCollectable("diamond", 280, 250);
    createCollectable("diamond", 1080, 250);
    createCollectable("diamond", 680, 100);

    // TODO 4 - Create Cannons

    createCannon("top", 760, 2000);
    createCannon("left", 200, 2000);
    createCannon("right", 500, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
