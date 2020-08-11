export default (req, res) => {
  res.statusCode = 200;
  res.json({
    title:
      "Dispositivos de entrada para un computador. Articulos para un ambiente de trabajo  correcto segun tu presupuesto",
    description: "nananana",
    otro: "",
    author: [
      {
        name: "Richard Vinueza",
        code: "6745",
      },
      {
        name: "Juan diego Román",
        code: "6751",
      },
      {
        name: "Anderson Tufiño",
        code: "6807",
      },
      {
        name: "Majos Tapia ",
        code: "6573",
      },
      {
        name: "Wilson Lluilema",
        code: "6699",
      },
    ],
    productos: [
      {
        _id: "p-1",
        title: "WISFOX Full-Size",
        category: "keyboard",
        description: "Teclado economico",
        price: "33.99$",
        photo:
          "https://m.media-amazon.com/images/I/71+DZvi3dGL._AC_UY436_FMwebp_QL65_.jpg",
        link:
          "https://www.amazon.com/Wireless-Keyboard-Full-Size-Desktops-Computer/dp/B07XDWCLYF/ref=sr_1_1_sspa?dchild=1&keywords=keyboard&qid=1597124226&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFXQVA2WVRJVEMxWUcmZW5jcnlwdGVkSWQ9QTA1MTE2MTZRSlg1ODhTSkxPTEImZW5jcnlwdGVkQWRJZD1BMDY0MTM4ODI3NUhTSkFSQURXQzAmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
      },
      {
        _id: "p-2",
        title: "Keychron K6",
        category: "keyboard",
        description: "Teclado mecanico",
        price: "60 - 90$",
        photo:
          "https://underkg.co.kr:44391/files/attach/images/118/547/681/002/9dcd5ad6166dd2af86567a1c24cc2ce8.jpg",
        link:
          "https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard",
      },
      {
        _id: "p-2",
        title: "KBDfans TOFU Keyboard",
        category: "keyboard",
        description:
          "Teclados personalizados para nivel competitivo principalemente",
        price: "3500$",
        photo:
          "https://cdn.vox-cdn.com/thumbor/KzeuDJ3s0X3GmgxUJKqoyfTXKHQ=/0x0:2313x1211/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19655045/tht.png",
        link: "https://www.youtube.com/watch?v=u3Fy4PkpTVs",
      },
      {
        _id: "p-2",
        title: "Logitech G903",
        category: "Mouse",
        description: "gaming",
        price: "119$",
        photo:
          "https://resource.logitechg.com/e_trim/w_652,ar_4:3,c_limit,q_auto:best,f_auto/w_692,h_519,c_lpad,b_rgb:2f3132,dpr_auto/content/dam/gaming/en/products/g903/g903-gallery-1.png?v=1",
        link:
          "https://www.amazon.es/Logitech%C2%AE-Lightspeed-Gaming-Mouse-Sensor/dp/B07SF1RCYF/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=logitech+g903&qid=1597129162&s=electronics&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyR1k4RVk0SThHNE9ZJmVuY3J5cHRlZElkPUEwNjI3MTYyMThFWVI5RkhKSVlJJmVuY3J5cHRlZEFkSWQ9QTA4MDUyNzUzQTlVWE42VlBITTY0JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
      },
      {
        _id: "p-2",
        title: "Logitech MX vertical",
        category: "Mouse para uso intenso",
        description: "Ergonómico para oficina",
        price: "90$",
        photo:
          "https://assets.logitech.com/assets/65520/26/mx-vertical-pdp.jpg",
        link:
          "https://www.amazon.es/Logitech-Vertical-ergon%C3%B3mico-avanzado-Esfuerzo/dp/B07FNHV4MW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3Q66Y2N6YY77&dchild=1&keywords=logitech+mx+vertical&qid=1597129203&s=electronics&sprefix=logitech+mx+ve%2Celectronics%2C326&sr=1-1",
      },
      {
        _id: "p-2",
        title: "Genius DX-125",
        category: "Economico",
        description: "Mouse basico",
        price: "5$",
        photo:
          "https://http2.mlstatic.com/mouse-genius-wired-dx-125-usb-black-g5-D_NQ_NP_693723-MEC32197754164_092019-F.jpg",
        link:
          "https://www.amazon.es/Genius-dx-125-usb-black-1000dpi/dp/B01CEE9I7K",
      },
      {
        _id: "p-2",
        title: "Webcam Cámara Web Hd",
        category: "camara",
        description: "dasd",
        price: "$17",
        photo:
          "https://http2.mlstatic.com/camaras-web-hd-web-cam-1280-x-720-teletrabajo-zoom-pc-laptop-D_NQ_NP_758674-MEC42202858400_062020-F.webp",
        link:
          "https://articulo.mercadolibre.com.ec/MEC-426064099-webcam-camara-web-hd-720p-microfono-pc-laptop-teletrabajo-_JM",
      },
      {
        _id: "p-2",
        title: "AUKEY Webcam 1080P Full HD",
        category: "camara",
        description: "dasd",
        price: "$60",
        photo:
          "https://images-na.ssl-images-amazon.com/images/I/51NaTEP5xbL._AC_SL1500_.jpg",
        link:
          "https://www.amazon.es/AUKEY-Micr%C3%B3fono-Est%C3%A9reo-Grabaci%C3%B3n-Compatible/dp/B0721MKXQ2",
      },
      {
        _id: "p-2",
        title: "Logitech C922 Pro Stream",
        category: "camara",
        description: "dasd",
        price: "$195",
        photo:
          "https://images-na.ssl-images-amazon.com/images/I/41GLG9%2B-M4L._AC_SX355_.jpg",
        link:
          "https://www.amazon.com/Logitech-Stream-Streaming-Recording-Included/dp/B01MTTMPKT",
      },
      {
        _id: "p-2",
        title: "Razer seiren elite",
        category: "micrifono",
        description: "Entra de audi increible y de excelente calidad ",
        price: "257,26$",
        photo: "https://i.ytimg.com/vi/-q4AZpiUfGQ/maxresdefault.jpg",
        link: "https://www2.razer.com/es-es/store/razer-seiren",
      },
      {
        _id: "p-2",
        title: "Shure MV5",
        category: "microfono",
        description: "e calidad media pero apto para todo",
        price: "99,98$",
        photo:
          "https://smhttp-ssl-43310.nexcesscdn.net/media/extendware/ewimageopt/media/inline/6b/7/shure-mv5-ltg-mv5-digital-condenser-microphone-in-gray-with-usb-lightning-cable-c77.jpg",
        link:
          "https://es.shure.com/productos/microfonos/motiv/microfono-de-condensador-digital-mv5",
      },
      {
        _id: "p-2",
        title: "Microfono Jounivo",
        category: "microfone",
        description: "De calida baja ",
        price: "29,26$",
        photo:
          "https://images-na.ssl-images-amazon.com/images/I/51KYOFKC80L._AC_SL1122_.jpg",
        link:
          "https://www.amazon.com/Microphone-Condenser-Indicator-Gooseneck-Recording/dp/B07N2WRHMY",
      },
      {
        _id: "p-2",
        title: "ADS-1700W",
        category: "escaner",
        description: "dispositivo de documentos ",
        price: "287,48$",
        photo:
          "https://http2.mlstatic.com/brother-ads-1700w-escaner-color-doble-cara-wifi-D_NQ_NP_656270-MCO29461447924_022019-O.jpg",
        link:
          "https://www.amazon.es/Brother-ADS-1700W-departamental-resoluci%C3%B3n-identificaci%C3%B3n/dp/B07H3B9Z7Q",
      },
      {
        _id: "p-2",
        title: "Stream Deck Xl",
        category: "controlador",
        description: "mejora la experiencia de transmitir ",
        price: "222,13",
        photo:
          "https://www.profesionalreview.com/wp-content/uploads/2019/06/stream-deck-xl-review02.jpg",
        link: "https://www.elgato.com/es/gaming/stream-deck-xl",
      },
      {
        _id: "p-2",
        title: "Gamepad",
        category: "Jostick",
        description: "dasd",
        price: "40$-200$",
        photo: "https://i.blogs.es/21f6e6/mandos/1366_2000.jpeg",
        link:
          "https://www.amazon.com/s?k=gamepad&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2",
      },
    ],
  });
};
