describe("Living Room", () => {
  xit("has the light off by default", () => {
  })

  xit("has the light on after pressing the switch with the lights off", () => {
  })

  xit("has the light off after pressing the switch with the lights on", () => {
  })
})

class LivingRoom {
  constructor () {
    this.light = new Light
  }

  hasLightOn () {
    return this.light.isOn()
  }

  pressSwitch () {
    if (this.light.isOn()) {
      this.light.turnOn()
    } else {
      this.light.turnOff()
    }
  }
}

const OFF = 'OFF'
const ON = 'ON'

class Light {
  constructor () {
    this.state = OFF
  }

  turnOn () {
    this.state = ON
  }

  turnOff () {
    this.state = OFF
  }

  isOn () {
    return this.state === ON
  }
}
