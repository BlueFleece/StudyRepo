// All Systems Go
// You are working for NASA because you are super cool! It's up to you to write the code that will determine if "all systems are go for launch". Your function will receive a deeply nested object. The keys of the object represent the names of the systems on the spacecraft; the values are true if the system is "go" for launch and false otherwise. Your function should return true only if every system is "go" for launch!

// let systems = {
//   power: {
//     batteries: true,
//     solarCells: true,
//     generator: true,
//     fuelCells: true
//   },
//   telecoms: {
//     antennas: {
//       highGain: true,
//       mediumGain: true,
//       lowGain: true
//     },
//     transmitter: true,
//     receiver: true
//   },
//   attitudeControl: {
//     stabilization: {
//       spin: true,
//       threeAxis: true
//     }
//   },
//   propulsion: {
//     engines: {
//       engine1: true,
//       engine2: true,
//       engine3: false
//     },
//     thrusters: true,
//     propellant: true
//   },
//   environment: {
//     cooling: true,
//     heating: true,
//     lifeSupport: true
//   }
// };

// allSystemsGo(systems); // => false

function allSystemsGo(obj){
  for (let key in obj){
    let value = obj[key];
    if (typeof value === 'object') {
      if (!allSystemsGo(value)){
        return false;
      }
    } else if (!value) { //need to check for all scenarios (in this case boolean and object);
      return false;
    }
  }
  return true;
}

describe('allSystemsGo', () => {
  let bicycle = {
    wheels: true,
    brakes: true,
    helmet: true
  };

  let sailboat = {
    sails: {
      main: true,
      jib: true
    },
    radio: true,
    steering: {
      tiller: true
    }
  };

  let spaceship = {
    power: {
      batteries: true,
      solarCells: true,
      generator: true,
      fuelCells: true
    },
    telecoms: {
      antennas: {
        highGain: true,
        mediumGain: true,
        lowGain: true
      },
      transmitter: true,
      receiver: true
    },
    attitudeControl: {
      stabilization: {
        spin: true,
        threeAxis: true
      }
    },
    propulsion: {
      engines: {
        engine1: true,
        engine2: true,
        engine3: true
      },
      thrusters: true,
      propellant: true
    },
    environment: {
      cooling: true,
      heating: true,
      lifeSupport: true
    }
  };



  it('is a function', () => {
    expect(typeof allSystemsGo).toEqual('function');
  });

  it('returns a boolean', () => {
    let returnedValue = allSystemsGo({example: true});
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if a simple system is ready to go', () => {
    let returnedValue = allSystemsGo(bicycle);
    expect(returnedValue).toEqual(true);
  });

  it('returns false if a simple system is not ready to go', () => {
    bicycle.helmet = false;

    let returnedValue = allSystemsGo(bicycle);
    expect(returnedValue).toEqual(false);
  });

  it('returns true if a more complex system is ready to go', () => {
    let returnedValue = allSystemsGo(sailboat);
    expect(returnedValue).toEqual(true);
  });

  it('returns false if a more complex system is not ready to go', () => {
    sailboat.steering.tiller = false;

    let returnedValue = allSystemsGo(sailboat);
    expect(returnedValue).toEqual(false);
  });

  it('returns true if the spaceship system is ready to go!', () => {
    let returnedValue = allSystemsGo(spaceship);
    expect(returnedValue).toEqual(true);
  });

  it('returns false if the spaceship system is not ready to go!', () => {
    spaceship.propulsion.engines.engine3 = false;

    let returnedValue = allSystemsGo(spaceship);
    expect(returnedValue).toEqual(false);
  });

});
