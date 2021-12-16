var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.15480030848348392,
        "pitch": 0.05237035943492607,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.774481833108327,
          "pitch": -0.0247443146353028,
          "rotation": 6.283185307179586,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6635168706074381,
          "pitch": 0.1475539677269282,
          "title": "Welcome to FoE!",
          "text": "NUS is FUN!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.2074119987186585,
        "pitch": -0.31080566818392086,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.1307825639535629,
          "pitch": -0.0974817307296405,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -0.946367349266314,
          "pitch": -0.0596336350837916,
          "rotation": 4.71238898038469,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3121412190457598,
          "pitch": -0.37659463828588,
          "title": "Cool sculpture",
          "text": "So cool!"
        },
        {
          "yaw": 0.3064602380807617,
          "pitch": -0.06699983072293847,
          "title": "Auditorium",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.17377814031910077,
        "pitch": 0.10143160873751533,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.9854725529100214,
          "pitch": 0.01908379841501784,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1700384086804902,
          "pitch": -0.14413397575332354,
          "title": "Spinelli",
          "text": "Awesome cookies!"
        },
        {
          "yaw": -0.08575707396481747,
          "pitch": -0.09291162002074671,
          "title": "Stairway to class",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
