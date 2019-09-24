# The-Carousel-Project

[![Build Status](https://travis-ci.org/sparkeplug/The-Carousel-Project.svg?branch=master)](https://travis-ci.org/sparkeplug/The-Carousel-Project)
[![Coverage Status](https://coveralls.io/repos/github/sparkeplug/The-Carousel-Project/badge.svg?branch=master)](https://coveralls.io/github/sparkeplug/The-Carousel-Project?branch=master)

A small Carousel library.

## NOTE / WARNING

    This is my first NPM package. I'm trying to publish a reusable component for the community. Still in testing phase. Still under construction and fixing of bugs.

    For demo please visit the following link :

    [StackBlitz - Sparkeplug](https://stackblitz.com/edit/slide-carousel-class)

## Installation

`npm install the-carousel-project`

## HTML example

    <div class="gt-carousel home-carousel">
      <ul class="gt-carousel__cards">
        <li class="gt-carousel__card">
          <img
            class="gt-carousel__card-img"
            data-header="Russia"
            data-sub-header="Moscow"
            src="https://i2.wp.com/wallur.com/wp-content/uploads/2016/12/russia-background-8.jpg?fit=1920%2C1080"
            alt=""
          />
        </li>
        <li class="gt-carousel__card">
          <img
            class="gt-carousel__card-img"
            data-header="India"
            data-sub-header="New Delhi"
            src="https://data.1freewallpapers.com/download/india-monuments.jpg"
            alt=""
          />
        </li>
        <li class="gt-carousel__card">
          <img
            class="gt-carousel__card-img"
            data-header="France"
            data-sub-header="Paris"
            src="https://worldoftravel.co/wp-content/uploads/My_World_Paris_59079f6834a4f50d46219cca.jpeg"
            alt=""
          />
        </li>
      </ul>
    </div>

## Usage

`const slideCarousel = require('the-carousel-project');`

## Tests

`npm test`
