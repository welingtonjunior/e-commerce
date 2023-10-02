
import 'bootstrap/dist/css/bootstrap.min.css';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


import 'jquery-ui-dist/jquery-ui.min.css';


import $ from 'jquery';


import 'bootstrap/dist/js/bootstrap.min.js';


import 'owl.carousel';


import 'jquery-ui-dist/jquery-ui.min.js';

import '@fortawesome/fontawesome-free/css/all.min.css';


import '../css/style.css';

// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){
   
   $('.owl-carousel').owlCarousel();
   
   let titulos = $('h4') // tag
   
   let itens = $('.featured-item') // class
   
   let destaques = $('#featured') // id
   
   console.log(titulos.first());
   
   // Configuração de produtos
   
   $('.featured-item a').addClass('btn btn-dark stretch-link');
   
   // $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>') -> adicionaria um novo elemento span com a classe "badge bg-secondary" contendo o texto "Novo" antes do elemento h4 selecionado.
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')  -> Esta linha substitui o conteúdo do elemento h4 selecionado pelo novo elemento span adicionado contendo o texto "Novo".
   // $('.featured-item:first h4').addClass('active') -> Esta linha adiciona a classe "active" ao elemento h4 selecionado.
   // $('.featured-item:first h4').removeClass('active') -> Esta linha remove a classe "active" do elemento h4 selecionado.
   // $('.featured-item:first h4').toggleClass('active') -> Esta linha alterna a classe "active" do elemento h4 selecionado, adicionando-a se não existir e removendo-a se já existir.
   // $('.featured-item:first h4').hide() ->  Esta linha oculta o elemento h4 selecionado.
   // $('.featured-item:first h4').show() -> Esta linha exibe o elemento h4 selecionado, caso ele esteja oculto.
   // $('.featured-item:first h4').fadeIn(2000) -> Esta linha exibe gradualmente o elemento h4 selecionado com uma animação de desvanecimento, com duração de 2000 milissegundos.
   // $('.featured-item:first h4').fadeOut() -> Esta linha oculta gradualmente o elemento h4 selecionado com uma animação de desvanecimento.
   //  $('.featured-item:first h4').css('color', '#f00') -> Esta linha define a cor do texto do elemento h4 selecionado para vermelho (#f00).
   
   $('.featured-item h4').dblclick( function(){
      
      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });
      
   });
   
   /*
   * Manipulação de eventos
   */
   
   /*  
   * Callback  
   * entendendo ações que começão ao termino de outra
   */ 
   
   
   $('.featured-item').on('click', function(e) {
      e.preventDefault();
      $('.btn-dark', this).text('Esgotado').attr('disabled', true).addClass('disabled');
    });
   
   
   /*
   * Animações
   */
   
  // const duracao = 1000 // equivalente a 1 segundo
   
   $('.featured-item:nth(0)')
   .hide(duracao)
   .show(duracao)
   .fadeOut(duracao)
   .fadeIn(duracao)
   .toggle(duracao)
   .toggle(duracao)
   
   
   $('#form-submit').on('click', function(e){
      
      e.preventDefault()
      
      if($('#email').val().length < 1){
         $('#email').animate({
            opacity: 'toggle'
            
         })
         
      }
      
      
      
      
      
      
      
   })
   





   
   /*
   * TODO: incrementar a validação
   * - checar se o nome é calido (mais de 2 caracteres)
   * - checar se o email é valido com ao menos um '@' e '.'
   */
   
   
   
   /*
   *  Ouvinte de eventos .nav-modal-open
   */
   $('.nav-modal-open').on('click', function(e){
      
      e.preventDefault();
      
      
      let elem = $(this).attr('rel')
      
      $('.modal-body').html($('#'+elem).html())
      $('.modal-header h5.modal-title').html($(this).text())
      
      let myModal = new bootstrap.Modal($('#modalId'))
      
      myModal.show()
      
      
      
   })
   
   
   function validate(elem){
      if (elem.val() == '') {
         
         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')

         elem.parent().find('.text-muted').show()
         
         elem.addClass('invalid')
         
         return false
         
         
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }      
      
      
      
      
      
   }
   
   
   
   
   
   
   $('body').on('submit', '.modal-body .form', function(e){
      
      e.preventDefault()
      
      const inputName = $('#name')
      const inputEmail = $('#email')
      
      validate(inputName)
      validate(inputEmail)
      
      
      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
        
         
         return false
      } else {
         $(this).submit()
         
      }
      
   })
   
   
   

   /* Este trecho de código utiliza o jQuery para adicionar eventos de blur e focus em diversos campos de um formulário, 
    * aplicando validações e máscaras de dados para garantir a consistência e precisão dos dados inseridos.

   */

   
   $('body').on('blur', '#nome', function(){
      validate($(this))
      
      
      
   } )
   
   
   $('body').on('blur', '#email', function(){
      validate($(this))
      
      
      
   } )


   $('body').on('focus', '#date', function(){
      $(this).datepicker()


   })
   
   
   $('body').on('blur', '#date', function(){
      validate($(this))
      $(this).mask('00/00/0000');
      
      
      
   } )
   
   $('body').on('blur', '#time', function(){
      validate($(this))
      $(this).mask('00:00');
      
      
      
   } )
   
   $('body').on('blur', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000');
      
      
      
   } )
   
   $('body').on('blur', '#phone', function(){
      validate($(this))
      $(this).mask('000000-0000');
      
      
      
   } )
   
   $('body').on('blur', '#cpf', function(){
      validate($(this))
      $(this).mask('000.000.000-00');
      
      
      
   } )
   
   
   
   
   
   
   
   
   
   
})







