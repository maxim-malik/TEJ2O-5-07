/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max Malik
 * Created on: Oct 2025
 * This program moves a servo
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
const servoNumber1 = robotbit.Servos.S2

// button A input
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString("0")
    // moves servo to 0 degrees
    robotbit.Servo(servoNumber1, 0)
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// button B input
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("180")
    // moves servo to 180 degrees
    robotbit.Servo(servoNumber1, 180)
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})