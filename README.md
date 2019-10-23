# The Carousel Project

[![Build Status](https://travis-ci.org/sparkeplug/The-Carousel-Project.svg?branch=master)](https://travis-ci.org/sparkeplug/The-Carousel-Project) [![Coverage Status](https://coveralls.io/repos/github/sparkeplug/The-Carousel-Project/badge.svg?branch=master)](https://coveralls.io/github/sparkeplug/The-Carousel-Project?branch=master)

The Carousel Project is a simple and lightweight carousel made with just JAVASCRIPT. 

# Installation

`npm install the-carousel-project`

# Usage

## CSS

Use `theCarouselProject.min.css` file from the `dist` folder into your project.

## JS

`import { CarouselInit } from 'the-carousel-project'`

`CarouselInit();`

## HTML Syntax

```
<div class="tcp-carousel">
    <ul class="tcp-carousel__cards">
        <li class="tcp-carousel__card">
            <img class="tcp-carousel__card-img"
                data-header="<< Header >>"
                data-sub-header="<< Sub Header >>"
                src="<< Image >>"
            />
        </li>
    </ul>
</div>

```

LEGEND for above skeleton :

    1. << Header >> - Replace with a string for HEADER
    2. << Sub Header >> - Replace with a string for SUB HEADER
    3. << Image >> - Replace with an IMAGE url

## HTML ( Example )

```
<div class="tcp-carousel">
      <ul class="tcp-carousel__cards">
        <li class="tcp-carousel__card">
          <img
            class="tcp-carousel__card-img"
            data-header="Russia"
            data-sub-header="Moscow"
            src="https://i2.wp.com/wallur.com/wp-content/uploads/2016/12/russia-background-8.jpg?fit=1920%2C1080"
            alt=""
          />
        </li>
        <li class="tcp-carousel__card">
          <img
            class="tcp-carousel__card-img"
            data-header="India"
            data-sub-header="New Delhi"
            src="https://data.1freewallpapers.com/download/india-monuments.jpg"
            alt=""
          />
        </li>
        <li class="tcp-carousel__card">
          <img
            class="tcp-carousel__card-img"
            data-header="France"
            data-sub-header="Paris"
            src="https://worldoftravel.co/wp-content/uploads/My_World_Paris_59079f6834a4f50d46219cca.jpeg"
            alt=""
          />
        </li>
      </ul>
    </div>
```

# Demo

[STACKBLITZ](https://the-carousel-project.stackblitz.io)

# Note

This is my first NPM package for the open source community. If you find any ISSUES or if you want to collaborate, please feel free to contact. 

Also please use the ISSUE TEMPLATE for bugs and FEATURE REQUEST template for new feature request.



