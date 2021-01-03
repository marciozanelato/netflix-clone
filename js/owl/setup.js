$('.owl-carousel').owlCarousel({ /* Configurações do carrosel */
  loop:true, /* loop */
  margin:10,  /* margem entre as imagens */
  nav:false,  /* tecla de navegação */
  responsive:{  /* responsividade */
      0:{                /* Proximo a 0 */
          items:1        /* mostra 1 item */
      },
      600:{              /* Até 600px */
          items:3        /* Mostra 3 items */
      },
      1000:{             /* 1000px */
          items:5        /* Mostra 5 items */
      }
  }
})