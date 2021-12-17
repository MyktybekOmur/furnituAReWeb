import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  items: any;
  constructor() {
    this.items = [
      {
        id: 0,
        category: 'room',
        name: 'Red Sofa',
        icon: 'assets/img/redSofa.png',
        tip: [
          {
            id: 13,
            tip_name: 'Red Sofa',
            tip_icon: 'assets/img/redSofa.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/3.glb',
            tip_color: '#F3BDB3',
          },
          {
            id: 14,
            tip_name: 'Chair',
            tip_icon: 'assets/img/whiteChair.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/4.glb',
          },
        ],
      },
      {
        id: 1,
        category: 'room',
        name: 'scene',
        icon: 'assets/img/2.png',
        tip: [
          {
            id: 15,
            tip_name: 'scene',
            tip_icon: 'img/2.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/3.glb',
          },
        ],
      },
      {
        id: 2,
        category: 'kitchen',
        name: 'Sandalye',
        icon: 'assets/img/2.png',
        tip: [
          {
            id: 16,
            tip_name: 'Sandalye',
            tip_icon: 'assets/img/2.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/2.glb',
          },
          {
            id: 17,
            tip_name: 'scene',
            tip_icon: 'assets/img/2.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/1.glb',
          },
        ],
      },
      {
        id: 3,
        category: 'kose',
        name: 'Sofa',
        icon: 'assets/img/redSofa.png',
        tip: [
          {
            id: 18,
            tip_name: 'Sandalye',
            tip_icon: 'assets/img/2.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/2.glb',
          },
          {
            id: 19,
            tip_name: 'scene',
            tip_icon: 'assets/img/2.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/1.glb',
          },
        ],
      },
      {
        id: 4,
        category: 'child',
        name: 'Blue Armchair',
        icon: 'assets/img/blueArmChair.png',
        tip: [
          {
            id: 20,
            tip_name: 'Blue Armchair',
            tip_icon: 'assets/img/blueArmChair.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/1.glb',
            tip_color: '#B2DDEF',
          },
        ],
      },
      {
        id: 5,
        category: 'room',
        name: 'Red Sofa',
        icon: 'assets/img/redSofa.png',
        tip: [
          {
            id: 13,
            tip_name: 'Red Sofa',
            tip_icon: 'assets/img/redSofa.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/3.glb',
            tip_color: '#F3BDB3',
          },
          {
            id: 14,
            tip_name: 'Chair',
            tip_icon: 'assets/img/whiteChair.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/4.glb',
          },
        ],
      },
      {
        id: 6,
        category: 'room',
        name: 'Red Sofa',
        icon: 'assets/img/redSofa.png',
        tip: [
          {
            id: 13,
            tip_name: 'Red Sofa',
            tip_icon: 'assets/img/redSofa.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/3.glb',
            tip_color: '#F3BDB3',
          },
          {
            id: 14,
            tip_name: 'Chair',
            tip_icon: 'assets/img/whiteChair.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/4.glb',
          },
        ],
      },
      {
        id: 7,
        category: 'room',
        name: 'Red Sofa',
        icon: 'assets/img/redSofa.png',
        tip: [
          {
            id: 13,
            tip_name: 'Red Sofa',
            tip_icon: 'assets/img/redSofa.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/3.glb',
            tip_color: '#F3BDB3',
          },
          {
            id: 14,
            tip_name: 'Chair',
            tip_icon: 'assets/img/whiteChair.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/4.glb',
          },
        ],
      },
      {
        id: 8,
        category: 'room',
        name: 'Red Sofa',
        icon: 'assets/img/redSofa.png',
        tip: [
          {
            id: 13,
            tip_name: 'Red Sofa',
            tip_icon: 'assets/img/redSofa.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/3.glb',
            tip_color: '#F3BDB3',
          },
          {
            id: 14,
            tip_name: 'Chair',
            tip_icon: 'assets/img/whiteChair.png',
            tip_link:
              'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/4.glb',
          },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
