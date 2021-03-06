import { CarPositionWithSpeed } from "./types";

const constants = {
  carPositions: [
    { x: 315, y: 560, orientation: 0, speed: 20 },
    { x: 315, y: 555, orientation: 0, speed: 21 },
    { x: 315, y: 550, orientation: 0, speed: 23 },
    { x: 315, y: 545, orientation: 0, speed: 22 },
    { x: 315, y: 540, orientation: 0, speed: 25 },
    { x: 315, y: 535, orientation: 0, speed: 22 },
    { x: 315, y: 530, orientation: 0, speed: 26 },
    { x: 315, y: 525, orientation: 0, speed: 27 },
    { x: 315, y: 515, orientation: 0, speed: 30 },
    { x: 315, y: 505, orientation: 0, speed: 35 },
    { x: 315, y: 498, orientation: 0, speed: 31 },
    { x: 315, y: 491, orientation: 0, speed: 27 },
    { x: 315, y: 485, orientation: 0, speed: 25 },
    { x: 315, y: 480, orientation: 0, speed: 24 },
    { x: 315, y: 475, orientation: 0, speed: 23 },
    { x: 315, y: 470, orientation: 0, speed: 22 },
    { x: 315, y: 465, orientation: 0, speed: 21 },
    { x: 315, y: 460, orientation: 0, speed: 21 },
    { x: 315, y: 455, orientation: 0, speed: 21 },
    { x: 315, y: 450, orientation: 0, speed: 20 },
    { x: 315, y: 445, orientation: 0, speed: 20 },
    { x: 315, y: 440, orientation: 0, speed: 21 },
    { x: 315, y: 435, orientation: 0, speed: 21 },
    { x: 315, y: 430, orientation: 0, speed: 21 },
    { x: 315, y: 425, orientation: 0, speed: 21 },
    { x: 315, y: 420, orientation: 0, speed: 21 },
    { x: 315, y: 415, orientation: 0, speed: 20 },
    { x: 315, y: 410, orientation: 0, speed: 20 },
    { x: 315, y: 405, orientation: 0, speed: 20 },
    { x: 315, y: 400, orientation: 0, speed: 20 },
    { x: 315, y: 395, orientation: 0, speed: 20 },
    { x: 315, y: 390, orientation: 0, speed: 20 },
    { x: 315, y: 385, orientation: 0, speed: 19 },
    { x: 315, y: 380, orientation: 0, speed: 18 },
    { x: 315, y: 375, orientation: 0, speed: 18 },
    { x: 315, y: 370, orientation: 0, speed: 18 },
    { x: 315, y: 365, orientation: 0, speed: 18 },
    { x: 315, y: 360, orientation: 0, speed: 18 },
    { x: 315, y: 355, orientation: 0, speed: 18 },
    { x: 315, y: 350, orientation: 0, speed: 19 },
    { x: 315, y: 345, orientation: 0, speed: 19 },
    { x: 316, y: 340, orientation: 5, speed: 19 },
    { x: 316, y: 338, orientation: 7, speed: 18 },
    { x: 317, y: 336, orientation: 10, speed: 18 },
    { x: 318, y: 333, orientation: 13, speed: 17 },
    { x: 319, y: 330, orientation: 17, speed: 17 },
    { x: 320, y: 327, orientation: 19, speed: 17 },
    { x: 321, y: 322, orientation: 20, speed: 17 },
    { x: 322, y: 315, orientation: 20, speed: 17 },
    //
    { x: 324, y: 310, orientation: 25, speed: 17 },
    { x: 326, y: 305, orientation: 30, speed: 17 },
    { x: 327, y: 300, orientation: 20, speed: 17 },
    { x: 327, y: 295, orientation: 10, speed: 17 },
    { x: 327, y: 290, orientation: 0, speed: 17 },
    { x: 326, y: 285, orientation: -10, speed: 17 },
    { x: 324, y: 280, orientation: -20, speed: 17 },
    { x: 322, y: 275, orientation: -30, speed: 17 },
    { x: 320, y: 270, orientation: -40, speed: 17 },
    { x: 320, y: 268, orientation: -50, speed: 17 },
    { x: 315, y: 267, orientation: -60, speed: 17 },
    { x: 310, y: 266, orientation: -70, speed: 17 },
    { x: 305, y: 265, orientation: -80, speed: 17 },
    { x: 300, y: 265, orientation: -90, speed: 17 },
    { x: 295, y: 265, orientation: -100, speed: 17 },
    { x: 290, y: 265, orientation: -105, speed: 17 },
    { x: 288, y: 268, orientation: -110, speed: 17 },
    { x: 287, y: 269, orientation: -115, speed: 17 },
    { x: 286, y: 270, orientation: -120, speed: 17 },
    { x: 285, y: 271, orientation: -135, speed: 17 },
    { x: 283, y: 273, orientation: -140, speed: 17 },
    { x: 281, y: 275, orientation: -145, speed: 17 },
    { x: 279, y: 277, orientation: -150, speed: 17 },
    { x: 279, y: 280, orientation: -155, speed: 17 },
    { x: 278, y: 283, orientation: -160, speed: 17 },
    { x: 276, y: 286, orientation: -170, speed: 17 },
    { x: 275, y: 289, orientation: -180, speed: 17 },
    { x: 275, y: 292, orientation: -185, speed: 17 },
    { x: 275, y: 294, orientation: -190, speed: 17 },
    { x: 276, y: 296, orientation: -195, speed: 17 },
    { x: 276, y: 298, orientation: -200, speed: 17 },
    { x: 276, y: 301, orientation: -205, speed: 17 },
    { x: 278, y: 304, orientation: -210, speed: 17 },
    { x: 280, y: 307, orientation: -205, speed: 17 },
    { x: 282, y: 309, orientation: -205, speed: 17 },
    { x: 282, y: 309, orientation: -200, speed: 17 },
    { x: 283, y: 311, orientation: -190, speed: 17 },
    { x: 284, y: 313, orientation: -185, speed: 17 },
    { x: 285, y: 315, orientation: -180, speed: 17 },
    { x: 285, y: 320, orientation: -180, speed: 20 },
    { x: 285, y: 325, orientation: -180, speed: 20 },
    { x: 285, y: 330, orientation: -180, speed: 20 },
    { x: 285, y: 330, orientation: -180, speed: 20 },
    { x: 285, y: 335, orientation: -180, speed: 20 },
    { x: 285, y: 340, orientation: -180, speed: 20 },
    { x: 285, y: 345, orientation: -180, speed: 20 },
    { x: 285, y: 350, orientation: -180, speed: 20 },
    { x: 285, y: 355, orientation: -180, speed: 20 },
    { x: 285, y: 360, orientation: -180, speed: 20 },
    { x: 285, y: 365, orientation: -180, speed: 20 },
    { x: 285, y: 370, orientation: -180, speed: 20 },
    { x: 285, y: 375, orientation: -180, speed: 20 },
    { x: 285, y: 380, orientation: -180, speed: 20 },
    { x: 285, y: 385, orientation: -180, speed: 20 },
    { x: 285, y: 390, orientation: -180, speed: 20 },
    { x: 285, y: 395, orientation: -180, speed: 20 },
    { x: 285, y: 400, orientation: -180, speed: 20 },
    { x: 285, y: 405, orientation: -180, speed: 20 },
    { x: 285, y: 410, orientation: -180, speed: 20 },
    { x: 285, y: 415, orientation: -180, speed: 20 },
  ] as CarPositionWithSpeed[],
};

export default constants;
