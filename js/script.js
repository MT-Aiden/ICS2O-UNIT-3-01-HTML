// Created by: Aiden McLeod
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a trapezoid.
 */
function calculate () {
  // input
  const basea = parseInt(document.getElementById('basea').value)
  const baseb = parseInt(document.getElementById('baseb').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  
  const area = ( ( basea + baseb ) / 2 ) * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}
