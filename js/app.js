$(function () {
  var scene = $('div.scene');
  var squares = scene.find('div.element');

  squares.each(function () {
    var blueBox = $(this);
    blueBox.css({
      'z-index': blueBox.data('z'),
      left: blueBox.data('x') + 'px',
      top: blueBox.data('y') + 'px'
    });
  });

  var oldMousePositionX = 0;
  var oldMousePositionY = 0;
  var currentMousePositionX = 0;
  var currentMousePositionY = 0;
  scene.on('mouseenter', function () {
    oldMousePositionX = event.pageX;
    oldMousePositionY = event.pageY;
  });

  scene.on('mousemove', function (event) {
    currentMousePositionX = event.pageX;
    currentMousePositionY = event.pageY;

    var mouseMoveX = oldMousePositionX - currentMousePositionX;
    var mouseMoveY = oldMousePositionY - currentMousePositionY;

    oldMousePositionX = currentMousePositionX;
    oldMousePositionY = currentMousePositionY;

    squares.each(function () {
      var blueBox = $(this);
      var speed = blueBox.data('speed');
      blueBox.css({
        left: '-='+(speed*mouseMoveX),
        top: '-='+(speed*mouseMoveY)
      });
    });
  });
});