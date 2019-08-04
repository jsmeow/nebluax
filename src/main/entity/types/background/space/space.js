const canvas = require('../../../../canvas');
const factory = require('../../../factory/factory-entity');
const properties = require('../../../properties/properties-entity');
const Entity = require('../../base/entity');

function SpaceEntity() {
  Entity.call(this);

  /** @override **/
  this.x = 0;
  this.y = 0;

  /** @override **/
  this.width = properties.sizes.BACKGROUND.SPACE.SPACE.WIDTH;
  this.height = properties.sizes.BACKGROUND.SPACE.SPACE.HEIGHT;

  /** @override **/
  this.type = [
    properties.types.BACKGROUND.ID,
    properties.types.BACKGROUND.SPACE.ID,
    properties.types.BACKGROUND.SPACE.SPACE
  ];

  // Create the comets entities.
  this.comets = [...Array(20)].map(() => {
    return factory.background.comet();
  });

  // Create the white star entities.
  this.mediumWhite3Stars = [...Array(5)].map(() => {
    return factory.background.mediumWhite3Star();
  });

  // Create the white star entities.
  this.mediumWhite5Stars = [...Array(5)].map(() => {
    return factory.background.mediumWhite5Star();
  });

  // Create the white star entities.
  this.mediumWhite7Stars = [...Array(5)].map(() => {
    return factory.background.mediumWhite7Star();
  });

  // Create the blinking star entities.
  this.smallBlinkingStars = [...Array(20)].map(() => {
    return factory.background.smallBlinkingStar();
  });
  // Create the dark purple star entities.
  this.smallDarkPurpleStars = [...Array(20)].map(() => {
    return factory.background.smallDarkPurpleStar();
  });

  // Create the dark red star entities.
  this.smallDarkRedStars = [...Array(20)].map(() => {
    return factory.background.smallDarkRedStar();
  });

  // Create the light purple star entities.
  this.smallLightPurpleStars = [...Array(20)].map(() => {
    return factory.background.smallLightPurpleStar();
  });

  // Create the light red star entities.
  this.smallLightRedStars = [...Array(20)].map(() => {
    return factory.background.smallLightRedStar();
  });

  // Create the white star entities.
  this.smallWhiteStars = [...Array(20)].map(() => {
    return factory.background.smallWhiteStar();
  });

  /** @override **/
  this.update = function() {
    this.comets.forEach(entity => {
      entity.update();
    });

    this.mediumWhite3Stars.forEach(entity => {
      entity.update();
    });

    this.mediumWhite5Stars.forEach(entity => {
      entity.update();
    });

    this.mediumWhite7Stars.forEach(entity => {
      entity.update();
    });

    this.smallBlinkingStars.forEach(entity => {
      entity.update();
    });

    this.smallDarkPurpleStars.forEach(entity => {
      entity.update();
    });

    this.smallDarkRedStars.forEach(entity => {
      entity.update();
    });

    this.smallLightPurpleStars.forEach(entity => {
      entity.update();
    });

    this.smallLightRedStars.forEach(entity => {
      entity.update();
    });

    this.smallWhiteStars.forEach(entity => {
      entity.update();
    });
  };

  /** @override **/
  this.render = function() {
    // Draw the SpaceEntity background.
    canvas.drawRect({
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      /* FillStyle: '#000514'*/
      fillStyle: '#181818'
    });

    this.comets.forEach(entity => {
      entity.render();
    });

    this.mediumWhite3Stars.forEach(entity => {
      entity.render();
    });

    this.mediumWhite5Stars.forEach(entity => {
      entity.render();
    });

    this.mediumWhite7Stars.forEach(entity => {
      entity.render();
    });

    this.smallBlinkingStars.forEach(entity => {
      entity.render();
    });

    this.smallDarkPurpleStars.forEach(entity => {
      entity.render();
    });

    this.smallDarkRedStars.forEach(entity => {
      entity.render();
    });

    this.smallLightPurpleStars.forEach(entity => {
      entity.render();
    });

    this.smallLightRedStars.forEach(entity => {
      entity.render();
    });

    this.smallWhiteStars.forEach(entity => {
      entity.render();
    });
  };
}

SpaceEntity.prototype = Object.create(Entity.prototype);

module.exports = SpaceEntity;
