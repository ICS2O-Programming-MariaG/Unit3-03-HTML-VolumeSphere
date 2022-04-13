// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: April 13, 2022
// This file contains the JS functions for index.html

"use strict"

function radiusSent() {
  let radiusSphere = parseFloat(document.getElementById("radius").value);
  const pi = Math.PI;
  let volume = radiusSphere ** 3 * pi * 4 / 3;
  document.getElementById("results").innerHTML = "The volume of the sphere is " + volume.toFixed(2) + "cm<sup>3</sup>.";
}
