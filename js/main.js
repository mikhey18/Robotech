$(document).ready(function() {

	$('#fullpage').fullpage({
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		normalScrollElements: '.js_project_sort_application_popup',
		normalScrollElements: '.header-menu__mobile'
		
		// normalScrollElements: '.connect__with-us'
		
	});

	// new fullpage('#fullpage', {
	// 	// anchors: ['page1', 'page2', 'page3', 'page4'],
	// 	sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
	// 	normalScrollElements: '.js_project_sort_application_popup',
	// });
	

	// $('.project-v4').on('click', '#moveDown', function(){
	// 	fullpage_api.moveSectionDown();
	// });

	$("#moveDown").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#section1").offset().top
		}, 700);
	});

	// $(document).click(function() {
	// 	$([document.documentElement, document.body]).animate({
	// 		scrollTop: $("#section0").offset().top
	// 	}, 700);
	// });

	// DROPZONE
	// Dropzone.autoDiscover = false;
	// $(".dropzone").dropzone({
	// 	addRemoveLinks: true,
	// 	removedfile: function(file) {
	// 	var name = file.name; 
		
	// 	$.ajax({на 
	// 		type: 'POST',
	// 		url: 'upload.php',
	// 		data: {name: name,request: 2},
	// 		sucess: function(data){
	// 			console.log('success: ' + data);
	// 		}
	// 	});
	// 	var _ref;
	// 		return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
	// 	}
	// });

	// показывает меню при клике на бургер
	$('.header-wrapper button').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header-menu__mobile').toggleClass('active');
		$('.header-menu__block').toggleClass('active');
		$('.header-menu__wrap').toggleClass('active');
	})


	// $('.item-arr').click(function(e) {
	// 	e.preventDefault();
	// 	$(this).find('ul').slideToggle();

	// });


	// РАНДОМНОЕ ЧИСЛО
	// function getRandomInRange(min, max) {
	// 	return Math.floor(Math.random() * (max - min + 1)) + min;
	// }

	// let randomNumberSlider = getRandomInRange(0, 2);

	// СЛАЙДЕР НА ГЛАВНОЙ СТРАНИЦЕ
	var textArray = [
		'Проектирование',
		'Интеграция',
		'Сервисное обслуживание'
	];

	var swiper = new Swiper('.main-slide', {
		lazy: true,
		onlyExternal: true,
		grabCursor: false,
		preventInteractionOnTransition: true,
		// initialSlide: randomNumberSlider,
		allowTouchMove:false,
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		loop: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + textArray[index] + '</span>';
			},
		},
	});

	jQuery('.header-wrapper__logo').click(function(e) {
	jQuery('.logo-popup ').css('display','block');
	$('.logo-popup__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false
		});
	})

	jQuery('.logo-popup__slide > button').click(function(e) {
	jQuery('.logo-popup ').css('display','none');
	})

	jQuery('.logo-popup__link').click(function(e) {
	e.preventDefault();
	jQuery('.connect__with-us').css('display','block');
	})

	jQuery('.connect__with-us > button').click(function(e) {
	e.preventDefault();
	jQuery('.connect__with-us').css('display','none');
	}) 

	// страница СЕРВИСЫ, отображение текста в мобильной версии при клике на блоки "ЧТО МЫ ДЕЛАЕМ?"

	// jQuery('.js_services_mobile_engineering').click(function(e) {
	// 	e.preventDefault();
	// 	$('.js_services_mobile_engineering_text').slideToggle("slow");

	// });

	// jQuery('.js_services_mobile_integration').click(function(e) {
	// 	e.preventDefault();
	// 	$('.js_services_mobile_integration_text').slideToggle("slow");

	// });

	// jQuery('.js_services_mobile_service').click(function(e) {
	// 	e.preventDefault();
	// 	$('.js_services_mobile_service_text').slideToggle("slow");

	// });

	// ------------------------------------------------------>

	// cnраница "ПРОИЗВОДСТВЕННАЯ БАЗА"--------------------------->

	$('.industrial-base-descr__mobile-wrapper').click(function(e) {
		e.preventDefault();
		$(this).find('.industrial-base-descr__mobile-text').slideToggle();
	});


	$(document).ready(function() {

	// $('.logo-popup__slider').slick({
	//   infinite: true,
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   dots: false
	// });

	});


	$("#phone-number").mask("+7(999) 999-9999");

	// АНИМАЦИЯ ЦИФР НА ГЛАВНОЙ СТРАНИЦЕ

		// КОЛИЧЕСТВО ОПЫТА
		$(function() {	
			$({numberValue: 0}).animate({numberValue: 5}, {	
				duration: 2000, // Продолжительность анимации,
				easing: "linear",		
				step: function(val) {		
					$(".main-number-experience").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию			
				}		
			});	
		});

		//КОЛИЧЕСТВО ПРОЕКТОВ
		$(function() {	
			$({numberValue: 0}).animate({numberValue: 16}, {	
				duration: 2000, // Продолжительность анимации
				easing: "linear",		
				step: function(val) {		
					$(".main-number-projects").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию			
				}		
			});	
		});

		// КОЛИЧЕСТВО РАБОТНИКОВ
		$(function() {	
			$({numberValue: 0}).animate({numberValue: 258}, {	
				duration: 2000, // Продолжительность анимации
				easing: "linear",		
				step: function(val) {		
					$(".main-number-worker").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию			
				}		
			});	
		});


});


	



window.addEventListener('DOMContentLoaded', function() {

	let img = document.querySelectorAll('img');
	img.forEach(elem => {
		elem.classList.add('lazy');
	});

	'use strict';
	// if (window.getSelection().rangeCount >= 1) {var r = window.getSelection().getRangeAt(0);}

	//ГЛАВНАЯ отследить скролл и убрать подпись с контактами
		if(document.querySelector('.bottom-container')) {
			
			let header = document.querySelector('header');
			let target = document.querySelector('body');
			let contacts = document.querySelector('.bottom-container');//полоса с контактами
			let numberSlide = 2;

			// Конфигурация observer (за какими изменениями наблюдать)
			const config = {
				attributes: true
			};


			// Колбэк-функция при срабатывании мутации
			const callback = function() {
				if(numberSlide < Number(target.classList.value.slice(-1))) {
					header.classList.add('header-hide');
					contacts.classList.add('bottom-container-hide');
					numberSlide = Number(target.classList.value.slice(-1));
				} else {
					header.classList.remove('header-hide');
					numberSlide = Number(target.classList.value.slice(-1));
					contacts.classList.remove('bottom-container-hide');
				}
				// numberSlide = Number(target.classList.value.slice(-1));
				// console.log(numberSlide);

				// if(target.classList.contains('fp-viewing-0')) {
				// 	contacts.style.opacity = 1;
				// } else {
				// 	console.log('no');
				// 	contacts.style.opacity = 0;
				// }
					
				
			};

			// Создаём экземпляр наблюдателя с указанной функцией колбэка
			const observer = new MutationObserver(callback);

			// Начинаем наблюдение за настроенными изменениями целевого элемента
			observer.observe(target, config);
			
		}

	//ГЛАВНАЯ отследить скролл и убрать подпись с контактами
	if(document.querySelector('.project-v4')) {
			
		let header = document.querySelector('header');
		let target = document.querySelector('body');

		let numberSlide = 0;

		// Конфигурация observer (за какими изменениями наблюдать)
		const config = {
			attributes: true
		};


		// Колбэк-функция при срабатывании мутации
		const callback = function() {
			if(numberSlide < Number(target.classList.value.slice(-1))) {
				header.classList.add('header-hide');
				numberSlide = Number(target.classList.value.slice(-1));
			} else {
				header.classList.remove('header-hide');
				numberSlide = Number(target.classList.value.slice(-1));
			}

			if(Number(target.classList.value.slice(-1)) < 2) {
				header.classList.remove('header-scroll');
			} else {
				header.classList.add('header-scroll');
			}
			// numberSlide = Number(target.classList.value.slice(-1));
			// console.log(numberSlide);

			// if(target.classList.contains('fp-viewing-0')) {
			// 	contacts.style.opacity = 1;
			// } else {
			// 	console.log('no');
			// 	contacts.style.opacity = 0;
			// }
				
			
		};

		// Создаём экземпляр наблюдателя с указанной функцией колбэка
		const observer = new MutationObserver(callback);

		// Начинаем наблюдение за настроенными изменениями целевого элемента
		observer.observe(target, config);
		
	}



	//скролл страницы вниз при клике на стрелки вниз
		if(document.querySelector('.catalog-top-content__img')) {
			let arrow = document.querySelector('.catalog-top-content__img');//стрелки
			arrow.addEventListener('click', () => {

				if(window.innerWidth < 1200) {
					window.scrollTo(0, 460);
				} else {
					

					if(document.querySelector('.about')) {
						window.scrollTo(0, 450);
					} else if (document.querySelector('.application-typing')) {
						window.scrollTo(0, 350);
					} else if (document.querySelector('.project-v4')) {
						let body = document.querySelector('body');
						body.classList.remove('fp-viewing-0');
						body.classList.add('fp-viewing-1');
						console.log('hjhjhjh');
					} else {
						window.scrollTo(0, (document.documentElement.clientHeight -60));
					}
				}
				
			});
		}

	// блок "ПРИМЕНЕНИЯ" слайдер mixin 'application-block' -------->
		let applicationSlider = new Swiper('.application-slider', {
			// Optional parameters
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 1,
			speed: 10000,
			autoplay: {
				delay: 0,
				disableOnInteraction: true,
			  },
			loop: true,
			loopFillGroupWithBlank: true,
			direction: 'horizontal',		
		
			// Navigation arrows
			navigation: {
				nextEl: '.application-slider__prev',
				prevEl: '.application-slider__next',
			},


		

		})

		if(document.querySelector('.application-slider')) {

			let slider = document.querySelector('.application-slider');//слайдер
			let buttonPrev = slider.querySelector('.swiper-button-prev.application-slider__prev');
			let buttonNext = slider.querySelector('.swiper-button-next.application-slider__next');

			buttonPrev.addEventListener('click', () => {
				applicationSlider.autoplay.stop();
				applicationSlider.slideTo(applicationSlider.activeIndex - 1, 500);
				setTimeout(() => applicationSlider.autoplay.start(), 6000);
			});
			buttonNext.addEventListener('click', () => {
				applicationSlider.autoplay.stop();
				applicationSlider.slideTo(applicationSlider.activeIndex + 1, 500);
				setTimeout(() => applicationSlider.autoplay.start(), 6000);
			});
		}

	//слайдер "УСПЕШНЫЙ ОПЫТ НАШИХ КЛИЕНТОВ"
		var successfulExperienceSlider = new Swiper('.successful-experience-slider', {
			lazy: true,
			// Optional parameters
			slidesPerView: 1,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			direction: 'horizontal',
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			},
		})

	//слайдер "СРЕДИ НАШИХ КЛИЕНТОВ (ЛОГОТИПЫ)"
		var clientsLogoSlider = new Swiper('.clients-slider', {
			lazy: true,
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 4,
			loop: true,
			loopFillGroupWithBlank: true,
			direction: 'horizontal',
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			},
		})

	//слайдер desktop "СРЕДИ НАШИХ КЛИЕНТОВ (СЕРТИФИКАТЫ)"
		var clientsCertificatesSliderDesktop = new Swiper('.clients-certificates-slider', {
			// Optional parameters
			lazy: true,
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 1,
			// loop: true,
			loopFillGroupWithBlank: true,
			direction: 'horizontal',
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			},
		})

	let clientsCertificatesSlide = document.querySelectorAll('.js_clients_certificates_slide');//слайд на странице сертификаты
	let clientsCertificatesPopup = document.querySelectorAll('.js_clients_certificates_popup');//popup "сертификаты"
	let clientsCertificatesPopupClose = document.querySelectorAll('.js_clients_certificates_popup_close');// "Х" на popup

		// показать сертификат popup	
		clientsCertificatesSlide.forEach((elem) => {
			elem.addEventListener('click', () => {
				// console.log(elem.dataset.index);
				let indexSlide = elem.dataset.index;//на каком слайде был клик
				clientsCertificatesPopup[indexSlide].classList.remove('hide');
				bodyFixPosition();
			});
		});

		// скрыть сертификат popup при клике на "Х"
		clientsCertificatesPopupClose.forEach((elem, index) => {
			elem.addEventListener('click', () => {
				clientsCertificatesPopup[index].classList.add('hide');
				bodyUnfixPosition();
			});
		});

		// при клике на серый фон
		clientsCertificatesPopup.forEach((elem, index) => {
			elem.addEventListener('click', () => {
				clientsCertificatesPopup[index].classList.add('hide');
				bodyUnfixPosition();
			});
		});

		

	//слайдер mobile "СРЕДИ НАШИХ КЛИЕНТОВ (СЕРТИФИКАТЫ)"
		let clientsCertificatesSliderMobileItem = document.querySelectorAll('.js_clients_certificates_slider_mobile_item'); //слайд сертификат mobile

		clientsCertificatesSliderMobileItem.forEach(elem => {

			elem.addEventListener('click', () => {

				let clickIndex = elem.dataset.index;//номер элемента на котором был клик
				clientsCertificatesPopup[clickIndex].classList.remove('hide'); 
				bodyFixPosition();

			});
		});

	//слайдер desktop "КАТАЛОГ РОБОТОВ"(mixin catalog-robots-slider)
		var catalogRobotsSliderDesktop = new Swiper('.catalog-robots__slider', {
			// Optional parameters
			lazy: true,
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			direction: 'horizontal',
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			},
		})

	// слайдер desktop "НОВОСТИ ТИПОВАЯ"
		var newstypicalSliderDesktop = new Swiper('.news-typical-desktop', {
			// Optional parameters
			lazy: true,
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			direction: 'horizontal',
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			},
		})

	// слайдер desktop "НОВОСТИ ТИПОВАЯ popup"

		let newsTypicalContentPopup = document.querySelector('.js_news_typical_content_popup');

		if (newsTypicalContentPopup) {

			let newsTypicalContentSlide = document.querySelectorAll('.js_news_typical_content_slide');// слайд на странице
			
			let newsTypicalContentPopupClose = document.querySelector('.js_news_typical_content_popup_close');

			newsTypicalContentSlide.forEach(elem => {

				elem.addEventListener('click',() => {
					newsTypicalContentPopup.classList.remove('hide');
					bodyFixPosition();
					
					// инициализация слайдера
					var newstypicalSliderDesktop = new Swiper('.news-typical-content__slider-popup', {
						// Optional parameters
						lazy: true,
						slidesPerView: 1,
						spaceBetween: 0,
						slidesPerGroup: 1,
						loop: true,
						loopFillGroupWithBlank: true,
						direction: 'horizontal',
					
						// If we need pagination
						pagination: {
						el: '.swiper-pagination',
						},
					
						// Navigation arrows
						navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
						},
					
						// And if we need scrollbar
						scrollbar: {
						el: '.swiper-scrollbar',
						},
					})

					

				});
			});

			newsTypicalContentPopupClose.addEventListener('click', () => {
				newsTypicalContentPopup.classList.add('hide');
				bodyUnfixPosition();
			});


		} 

	// слайдер desktop "УСЛУГИ"
		if(document.querySelector('.services-slider')) {
			// инициализация слайдера
			const servicesSlider = new Swiper('.services-slider', {
				// Optional parameters
				lazy: true,
				direction: 'vertical',
				loop: true,
				slidesPerView: 3,
				spaceBetween: 10,
				speed: 800,
				mousewheel: {
					invert: true,
				},
			  
				// If we need pagination
				pagination: {
				  el: '.swiper-pagination',
				},
			  
				// Navigation arrows
				// navigation: {
				//   nextEl: '.swiper-button-next',
				//   prevEl: '.swiper-button-prev',
				// },
			  
				// And if we need scrollbar
				// scrollbar: {
				//   el: '.swiper-scrollbar',
				// },
			});
		}

	// слайдер desktop "ВАКАНСИИ"
		if(document.querySelector('.vacancies-content__slider')) {

			// инициализация слайдера
			const vacanciesSlider = new Swiper('.vacancies-content__slider', {
				// Optional parameters
				lazy: true,
				direction: 'vertical',
				// loop: true,
				slidesPerView: 3,
				spaceBetween: 30,
				speed: 500,
				mousewheel: {
					invert: true,
				},
				
				
			});


		}

	// HEADER 	
		if(document.querySelector('header')) {
			let header = document.querySelector('header');
			let headerMenuWrap = document.querySelector('.header-menu__wrap');//обертка для бокового меню
			let headerMenuMobile = document.querySelector('.header-menu__mobile');//боковое меню
			let headerMenuButton = document.querySelector('.header-menu__button');//кнопка бокового меню
			let headerMenuBlock = document.querySelector('.header-menu__block');//невидимый блок чтобы меню не убегало

			// при скролле убирает "ПОИСК"
			window.addEventListener('scroll', () => {
				if(pageYOffset > 20) {
					header.classList.add('header-scroll');
				} else {
					header.classList.remove('header-scroll');
				}
			});

			window.addEventListener('wheel', () => {
				headerMenuWrap.classList.remove('active');
				headerMenuMobile.classList.remove('active');
				headerMenuButton.classList.remove('active');
				headerMenuBlock.classList.remove('active');
			});

			headerMenuWrap.addEventListener('click', () => {
				// console.log('wrap');
				headerMenuWrap.classList.remove('active');
				headerMenuMobile.classList.remove('active');
				headerMenuButton.classList.remove('active');
				headerMenuBlock.classList.remove('active');
			});

			headerMenuMobile.addEventListener('click', (e) => {
				// console.log('menu');
				e.stopPropagation();
			});

			// открытие/закрытие подменю
				let itemArrTitle = document.querySelectorAll('.item-arr__title');//заголовок подменю

				itemArrTitle.forEach(elem => {
					elem.addEventListener('click', () => {
						elem.classList.toggle('active');
					});
				});
			
			// при открытии бокового меню запретить скролл страницы
			headerMenuButton.addEventListener('click', () => {
				if(!headerMenuMobile.classList.contains('active')) {
					headerMenuMobile.addEventListener('wheel', (e) => {
					e.stopPropagation();
					});
				}
				
				});

		}

	// окно СВЯЗАТЬСЯ С НАМИ
		if(document.querySelector('.connect__with-us-button')) {
			
			let logoPopup = document.querySelector('.logo-popup');//окно слайдера роботов
			let connectWithUs = document.querySelector('.connect__with-us');//окно связаться с нами
			let popupThx = document.querySelector('.popup-thx');//окно СПАСИБО
			let popupThxClose = document.querySelector('.popup-thx__close');//кнопка закрыть Х для окна СПАСИБО

			let connectWithUsButton = document.querySelector('.connect__with-us-button');//кнопка ОТПРАВИТЬ
			let connectWithUsForm = document.querySelector('.connect__with-us-form');//форма связаться с нами
			let connectWithUsTopInputemail = document.querySelector('.connect__with-us-top-inputemail');//input email
			let connectWithUsTopInputlephone = document.querySelector('.connect__with-us-top-inputlephone');//input telephone

			

			connectWithUsForm.addEventListener('submit', function (event) {
				event.preventDefault();
				// console.log('clicked on validate');
				logoPopup.style.display = 'none';
				connectWithUs.style.display = 'none';
				popupThx.classList.remove('hidden');

			  });

			  popupThxClose.addEventListener('click', () => {
				popupThx.classList.add('hidden');
			  });

		}

	// страница "ГЛАВНАЯ ПОИСК"

		let mainSearch = document.querySelector('.main-search');//строка поиск
		// скрыть/показать header/footer на главной странице

		if (document.querySelector('main')) {

			let header = document.querySelector('header');//header-menu
			let mainPageContact = document.querySelectorAll('.bottom-container');//контакты на ГЛАВНОЙ странице внизу.
			let headerMenuSearch = document.querySelectorAll('.header-menu__search');//кнопки "ПОИСК" в меню
			let headerMenuWrap = document.querySelector('.header-menu__wrap');//обертка для бокового меню
			let headerMenuMobile = document.querySelector('.header-menu__mobile');//выплывающее меню справа
			let headerMenuButton = document.querySelector('.header-menu__button');//кнопка бокового меню

			//отследить прорутку колесика мыши и убрать header/footer
				document.addEventListener('wheel', (e) => {

					headerMenuMobile.classList.remove('active');//закрывает бокове меню при скролле
					headerMenuButton.classList.remove('active');//убирает активный класс у кнопки открытия меню
					headerMenuWrap.classList.remove('active');

					if(mainSearch.classList.contains('main-search-active')) {
						mainSearch.classList.remove('main-search-active');
						headerMenuSearch.forEach(elem => {
							elem.classList.remove('active');
						})
					}
					
					if(e.deltaY > 0) {
						header.classList.add('header-hide');
						mainPageContact.forEach(elem => {
							elem.classList.add('bottom-container-hide');
						})
					} else {
						header.classList.remove('header-hide');
						mainPageContact.forEach(elem => {
							elem.classList.remove('bottom-container-hide');
						})
					}

				});

			let thirdScreenSlide = document.querySelectorAll('.third-screen__slide');

			thirdScreenSlide.forEach(elem => {
				elem.addEventListener('mousedown', () => {
					swiper.autoplay.stop();
					
				});
				elem.addEventListener('mouseup', () => {
					swiper.autoplay.start();
					swiper.slideNext(600, true);
				});
			});

		}
	
	// строка "ПОИСК"
		if (mainSearch) {

			let headerMenuSearch = document.querySelectorAll('.header-menu__search');//кнопки "ПОИСК" в меню
			let headerMenuButton = document.querySelector('.header-menu__button');//кнопка меню
			let headerMenuWrap = document.querySelector('.header-menu__wrap');//обертка для бокового меню
			let headerMenu = document.querySelector('.header-menu__mobile');//весь блок меню
			let mainSearchInput = document.querySelector('.main-search input');//input в поле поиск
			let mainSearchSearch = document.querySelector('.main-search__search');//кнопка поиск в input
			let body = document.querySelector('body');

			//при клике на страницу при открытом поиске, закрывает его
			mainSearch.addEventListener('click', () => {
				mainSearch.classList.remove('main-search-active');
				headerMenuSearch.forEach(elem => {
					elem.classList.remove('active');
				});
				
			});

			//отменяет закрытие поиска при клике на input поиска
			mainSearchInput.addEventListener('click', (e) => {
				e.stopPropagation();

			});

			// при скролле убирает "ПОИСК"
			window.addEventListener('scroll', () => {
				if(mainSearch.classList.contains('main-search-active')) {
					mainSearch.classList.remove('main-search-active');
					headerMenuSearch.forEach(elem => {
						elem.classList.remove('active');
					});
				}
			});

			// показывает поиск при клике на "ПОИСК"
			headerMenuSearch.forEach(elem => {
				elem.addEventListener('click', () => {
					if(mainSearch.classList.contains('main-search-active')) {
						mainSearch.classList.remove('main-search-active');
						headerMenuWrap.classList.remove('active'); 
						headerMenuSearch.forEach(elem => {
							elem.classList.remove('active');
						})

					} else {
						mainSearch.classList.add('main-search-active');
						headerMenuButton.classList.remove('active');
						headerMenuWrap.classList.remove('active'); 
						headerMenu.classList.remove('active');
						mainSearchInput.focus();
						headerMenuSearch.forEach(elem => {
							elem.classList.add('active');
						})

					}
				});
			});


			//при клике на кнопку поиска(лупа) в строке поиска проверка на количество символов
			mainSearchSearch.addEventListener('click', (e) => {

				e.stopPropagation();

				if (mainSearchInput.value.length < 3) {
					mainSearchInput.value = '';
					mainSearchInput.placeholder = 'Введите минимум 3 символа';
				} else {
					document.location.href = "/search/?q="+mainSearchInput.value;
					setTimeout(() => mainSearch.classList.remove('main-search-active'), 1000);
				}
			});
		}
		
		$('.main-search__input').keyup(function(e){
			if(e.which == 13)
			{
				$('.main-search__search').click();
			}
		});

	//страница КОНТАКТЫ
		
		if(document.querySelector('.contacts')) {
			/*
			ymaps.ready(init);

			function init () {
			var myMap = new ymaps.Map("map", {
					center: [57.950223, 56.112815],
					zoom: 16
				}),

				roboIcon = new ymaps.Placemark([57.950223, 56.112815], {
					// Свойства.
					// hintContent: 'Собственный значок метки'
					// Кнопка изменения масштаба.
					
				}, {
					// Опции.
					// Своё изображение иконки метки.
					iconImageHref: '../img/contacts-map-logo.svg',
					// Размеры метки.
					iconImageSize: [40, 45],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-20, -45]
				});

			myMap.controls
				// Кнопка изменения масштаба.
				.add('zoomControl', { left: 5, top: 5 });
		
			// Добавляем все метки на карту.
			myMap.geoObjects
				
				.add(roboIcon);
			}

		*/



			ymaps.ready(function () {
				var myMap = new ymaps.Map('map', {
						center: [57.950223, 56.112815],
						zoom: 16
					}, {
						searchControlProvider: 'yandex#search'
					}),
			
					// Создаём макет содержимого.
					MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
						'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
					),
			
			
					myPlacemarkWithContent = new ymaps.Placemark([57.950223, 56.112815], {
						hintContent: 'Robotech',
						balloonContent: '',
						iconContent: ''
					}, {
						// Опции.
						// Необходимо указать данный тип макета.
						iconLayout: 'default#imageWithContent',
						// Своё изображение иконки метки.
						iconImageHref: '/local/templates/robo/img/contacts-map-logo.svg',
						// Размеры метки.
						iconImageSize: [40, 45],
						// Смещение левого верхнего угла иконки относительно
						// её "ножки" (точки привязки).
						iconImageOffset: [-20, -45],
						// Смещение слоя с содержимым относительно слоя с картинкой.
						iconContentOffset: [15, 15],
						// Макет содержимого.
						iconContentLayout: MyIconContentLayout
					});
			
				myMap.geoObjects
			
					.add(myPlacemarkWithContent);
			});
		
		}

	// страница "СТРАНИЦА РОБОТА" первая
		if (document.querySelector('.robot-one')) {

			let robotSlider = document.querySelector('.robot-slider');//СЛАЙДЕР РОБОТА
			let robotBreak = document.querySelector('.robot-break');

			/*
			//прверка ширины экрана
			if (window.innerWidth >= 1200) {
				// ФИКСИРОВАНИЕ СЛАЙДЕРА
				window.addEventListener('scroll', function() {
					// console.log(pageYOffset);
					if(pageYOffset > 150 && pageYOffset < 230) {
						robotSlider.classList.add('fixed');
						robotBreak.classList.add('active');
					} else {
						robotSlider.classList.remove('fixed');
						robotBreak.classList.remove('active');
					}
				});
			}

			//событие проверки ширины экрана
			window.addEventListener('resize', () => {
				// console.log(window.innerWidth);
				if (window.innerWidth >= 1200) {
					//ФИКСИРОВАНИЕ СЛАЙДЕРА
					window.addEventListener('scroll', function() {
				
						if(pageYOffset > 150 && pageYOffset < 230) {
							robotSlider.classList.add('fixed');
						} else {
							robotSlider.classList.remove('fixed');
						}
					});
				}
			}); 
			*/
			
			/*
			//отследить прорутку колесика мыши и убрать header
			let header = document.querySelector('header');//header-menu
			document.addEventListener('wheel', (e) => {
				if(e.deltaY > 0) {
					header.classList.add('header-hide');
				} else {
					header.classList.remove('header-hide');
				}
			});

			*/

			//МАССИВ МОДЕЛИ РОБОТОВ ДЛЯ СЛАЙДЕРА
			let textPagination = [
				'RP-10',
				'RP-65M',
				'RP-250',
				'RP-700',
				'RP-1000',
				'Arc-800'
			];

			// инициализация слайдера на странице "РОБОТ"
			var robotSliderPage = new Swiper('.robot-slider', {
				// Optional parameters
				lazy: true,
				direction: 'horizontal',
				speed: 1000,
				loop: true,	
				effect: 'fade',
  				// initialSlide: 2,
			  
				// If we need pagination
				pagination: {
					el: '.robot-slider__pagination',
					clickable: true,
					dynamicBullets: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + textPagination[index] + '</span>';
					},
				},
			  
				// Navigation arrows
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},
			  
				// And if we need scrollbar
				scrollbar: {
				  el: '.swiper-scrollbar',
				  
				},
			})

			
			let allRobotCharacteristicsDescrItem = document.querySelectorAll('.js_robot_characteristics_descr_item');//ВСЕ описания под заголовками

			// при клике на описание
			allRobotCharacteristicsDescrItem.forEach(elem => {
				elem.addEventListener('click', () => {

					allRobotCharacteristicsDescrItem.forEach(elem => {
						elem.classList.toggle('active');
					});

				});
			});

			if(window.innerWidth > 1200) {
				window.addEventListener('scroll', () => {
					// console.log(pageYOffset);
					if(pageYOffset > 1000) {
						allRobotCharacteristicsDescrItem.forEach(elem => {
							elem.classList.remove('active');
						});
					}
				});
			}

			



			let robotCharacteristicsTitleWrap = document.querySelectorAll('.js_robot_characteristics_title_wrap');//обертка для заголовков и описания.

			robotCharacteristicsTitleWrap.forEach(elem => {

				let robotCharacteristicsTitle = elem.querySelectorAll('.js_robot_characteristics_title_text');//заголовоки

				let robotCharacteristicsDescrItem = elem.querySelectorAll('.js_robot_characteristics_descr_item');//табы описание, текст

				// при клике на описание делает его видимым полностью
				// robotCharacteristicsDescrItem.forEach((elem, index) => {
				// 	elem.addEventListener('click', () => {
				// 		elem.classList.toggle('active');
				// 	});
				// });

				// при клике на заголовок
				robotCharacteristicsTitle.forEach((elem, index) => {
					elem.addEventListener('click', () => {

						// удаляет со всех заголовков активный класс
						robotCharacteristicsTitle.forEach((elem, index) => {
							elem.classList.remove('active');
						});

						// доабвляет заголовку активный класс
						elem.classList.add('active');

						// при клике на описание делает его видимым полностью
						// robotCharacteristicsDescrItem.forEach((elem, index) => {
						// 	elem.classList.remove('active');
						// });

						// скрывает все описания
						robotCharacteristicsDescrItem.forEach(elem => {
							elem.classList.remove('show');
							
						});
						// показывает описание соответствующее текущему заголовку
						robotCharacteristicsDescrItem[index].classList.add('show');
	
					});
				});
			})
			
		}

	// страница "СТРАНИЦА РОБОТА" вторая
		if (document.querySelector('.robot-two')) {

			let robotSlider = document.querySelector('.robot-slider');//СЛАЙДЕР РОБОТА
			let robotBreak = document.querySelector('.robot-break');

			/*
			//прверка ширины экрана
			if (window.innerWidth >= 1200) {
				// ФИКСИРОВАНИЕ СЛАЙДЕРА
				window.addEventListener('scroll', function() {
					// console.log(pageYOffset);
					if(pageYOffset > 150 && pageYOffset < 230) {
						robotSlider.classList.add('fixed');
						robotBreak.classList.add('active');
					} else {
						robotSlider.classList.remove('fixed');
						robotBreak.classList.remove('active');
					}
				});
			}

			//событие проверки ширины экрана
			window.addEventListener('resize', () => {
				// console.log(window.innerWidth);
				if (window.innerWidth >= 1200) {
					//ФИКСИРОВАНИЕ СЛАЙДЕРА
					window.addEventListener('scroll', function() {
				
						if(pageYOffset > 150 && pageYOffset < 230) {
							robotSlider.classList.add('fixed');
						} else {
							robotSlider.classList.remove('fixed');
						}
					});
				}
			}); 
			*/
			
			/*
			//отследить прорутку колесика мыши и убрать header
			let header = document.querySelector('header');//header-menu
			document.addEventListener('wheel', (e) => {
				if(e.deltaY > 0) {
					header.classList.add('header-hide');
				} else {
					header.classList.remove('header-hide');
				}
			});

			*/

			//МАССИВ МОДЕЛИ РОБОТОВ ДЛЯ СЛАЙДЕРА
			let textPagination = [
				'RP-10',
				'RP-65M',
				'RP-250',
				'RP-700',
				'RP-700 Arc'
			];

			// инициализация слайдера на странице "РОБОТ"
			var robotSliderPage = new Swiper('.robot-slider', {
				// Optional parameters
				lazy: true,
				direction: 'horizontal',
				speed: 1000,
				loop: true,	
				effect: 'fade',			
				// initialSlide: 2,
			
				// If we need pagination
				pagination: {
					el: '.robot-slider__pagination',
					clickable: true,
					dynamicBullets: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + textPagination[index] + '</span>';
					},
				},
			
				// Navigation arrows
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
			
				// And if we need scrollbar
				scrollbar: {
				el: '.swiper-scrollbar',
				
				},
			})

			
			let allRobotCharacteristicsDescrItem = document.querySelectorAll('.js_robot_characteristics_descr_item');//ВСЕ описания под заголовками

			// при клике на описание
			allRobotCharacteristicsDescrItem.forEach(elem => {
				elem.addEventListener('click', () => {

					allRobotCharacteristicsDescrItem.forEach(elem => {
						elem.classList.toggle('active');
					});

				});
			});

			window.addEventListener('scroll', () => {
				console.log(pageYOffset);
				if(pageYOffset > 1000) {
					allRobotCharacteristicsDescrItem.forEach(elem => {
						elem.classList.remove('active');
					});
				}
			});



			let robotCharacteristicsTitleWrap = document.querySelectorAll('.js_robot_characteristics_title_wrap');//обертка для заголовков и описания.

			robotCharacteristicsTitleWrap.forEach(elem => {

				let robotCharacteristicsTitle = elem.querySelectorAll('.js_robot_characteristics_title_text');//заголовоки

				let robotCharacteristicsDescrItem = elem.querySelectorAll('.js_robot_characteristics_descr_item');//табы описание, текст

				// при клике на описание делает его видимым полностью
				// robotCharacteristicsDescrItem.forEach((elem, index) => {
				// 	elem.addEventListener('click', () => {
				// 		elem.classList.toggle('active');
				// 	});
				// });

				// при клике на заголовок
				robotCharacteristicsTitle.forEach((elem, index) => {
					elem.addEventListener('click', () => {

						// удаляет со всех заголовков активный класс
						robotCharacteristicsTitle.forEach((elem, index) => {
							elem.classList.remove('active');
						});

						// доабвляет заголовку активный класс
						elem.classList.add('active');

						// при клике на описание делает его видимым полностью
						// robotCharacteristicsDescrItem.forEach((elem, index) => {
						// 	elem.classList.remove('active');
						// });

						// скрывает все описания
						robotCharacteristicsDescrItem.forEach(elem => {
							elem.classList.remove('show');
							
						});
						// показывает описание соответствующее текущему заголовку
						robotCharacteristicsDescrItem[index].classList.add('show');

					});
				});
			})
			
		}
		
	// страница "3D принтера"
		if (document.querySelector('.robot-print')) {

			let robotSlider = document.querySelector('.robot-slider');//СЛАЙДЕР РОБОТА
			let robotBreak = document.querySelector('.robot-break');

			/*
			//прверка ширины экрана
			if (window.innerWidth >= 1200) {
				// ФИКСИРОВАНИЕ СЛАЙДЕРА
				window.addEventListener('scroll', function() {
					// console.log(pageYOffset);
					if(pageYOffset > 150 && pageYOffset < 230) {
						robotSlider.classList.add('fixed');
						robotBreak.classList.add('active');
					} else {
						robotSlider.classList.remove('fixed');
						robotBreak.classList.remove('active');
					}
				});
			}

			//событие проверки ширины экрана
			window.addEventListener('resize', () => {
				// console.log(window.innerWidth);
				if (window.innerWidth >= 1200) {
					//ФИКСИРОВАНИЕ СЛАЙДЕРА
					window.addEventListener('scroll', function() {
				
						if(pageYOffset > 150 && pageYOffset < 230) {
							robotSlider.classList.add('fixed');
						} else {
							robotSlider.classList.remove('fixed');
						}
					});
				}
			}); 
			*/
			
			/*
			//отследить прорутку колесика мыши и убрать header
			let header = document.querySelector('header');//header-menu
			document.addEventListener('wheel', (e) => {
				if(e.deltaY > 0) {
					header.classList.add('header-hide');
				} else {
					header.classList.remove('header-hide');
				}
			});

			*/

			//МАССИВ МОДЕЛИ РОБОТОВ ДЛЯ СЛАЙДЕРА
			let textPagination = [
				'PBJ-2000',
				'PBJ-600'
			];

			// инициализация слайдера на странице "РОБОТ"
			var robotSliderPage = new Swiper('.robot-slider', {
				// Optional parameters
				lazy: true,
				direction: 'horizontal',
				speed: 1000,
				loop: true,	
				effect: 'fade',			
				// initialSlide: 2,
			
				// If we need pagination
				pagination: {
					el: '.robot-slider__pagination',
					clickable: true,
					dynamicBullets: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + textPagination[index] + '</span>';
					},
				},
			
				// Navigation arrows
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
			
				// And if we need scrollbar
				scrollbar: {
				el: '.swiper-scrollbar',
				
				},
			})

			
			let allRobotCharacteristicsDescrItem = document.querySelectorAll('.js_robot_characteristics_descr_item');//ВСЕ описания под заголовками

			// при клике на описание
			allRobotCharacteristicsDescrItem.forEach(elem => {
				elem.addEventListener('click', () => {

					allRobotCharacteristicsDescrItem.forEach(elem => {
						elem.classList.toggle('active');
					});

				});
			});

			window.addEventListener('scroll', () => {
				console.log(pageYOffset);
				if(pageYOffset > 1000) {
					allRobotCharacteristicsDescrItem.forEach(elem => {
						elem.classList.remove('active');
					});
				}
			});



			let robotCharacteristicsTitleWrap = document.querySelectorAll('.js_robot_characteristics_title_wrap');//обертка для заголовков и описания.

			robotCharacteristicsTitleWrap.forEach(elem => {

				let robotCharacteristicsTitle = elem.querySelectorAll('.js_robot_characteristics_title_text');//заголовоки

				let robotCharacteristicsDescrItem = elem.querySelectorAll('.js_robot_characteristics_descr_item');//табы описание, текст

				// при клике на описание делает его видимым полностью
				// robotCharacteristicsDescrItem.forEach((elem, index) => {
				// 	elem.addEventListener('click', () => {
				// 		elem.classList.toggle('active');
				// 	});
				// });

				// при клике на заголовок
				robotCharacteristicsTitle.forEach((elem, index) => {
					elem.addEventListener('click', () => {

						// удаляет со всех заголовков активный класс
						robotCharacteristicsTitle.forEach((elem, index) => {
							elem.classList.remove('active');
						});

						// доабвляет заголовку активный класс
						elem.classList.add('active');

						// при клике на описание делает его видимым полностью
						// robotCharacteristicsDescrItem.forEach((elem, index) => {
						// 	elem.classList.remove('active');
						// });

						// скрывает все описания
						robotCharacteristicsDescrItem.forEach(elem => {
							elem.classList.remove('show');
							
						});
						// показывает описание соответствующее текущему заголовку
						robotCharacteristicsDescrItem[index].classList.add('show');

					});
				});
			})
			
		}

	// страница "О КОМПАНИИ" -------------------->
		let aboutTop = document.querySelector('.js_about_top');

		if (aboutTop) {

			let aboutBg = document.querySelector('.js_about_top_bg');//bg на странице "О КОМПАНИИ"
			let aboutBreak = document.querySelector('.js_about_break');//отступ на странице "О КОМПАНИИ"
			let aboutText = document.querySelector('.js_about_text');//текст на странице "О КОМПАНИИ"

			// паралакс эффект------------------------->
			window.addEventListener('mousemove', function(e) {
				let x = e.clientX / window.innerWidth;
				let y = e.clientY / window.innerHeight;  
				aboutBg.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
			});

		

			if (window.innerWidth >= 1200) {
				scrollEffect();
			}

			// отслеживает ширину экрана
			window.addEventListener('resize', () => {

				if (window.innerWidth >= 1200) {
					scrollEffect();
				}
			});

			//эффект при скролле стрнаицы---------------
			function scrollEffect() {
				window.addEventListener('scroll', () => {
				
					let heightScroll = pageYOffset;

					if (heightScroll > 550 ) {

						aboutTop.style.position = 'relative';
						aboutBreak.style.display = 'none';
						aboutText.style.marginTop = -350 + 'px';
										
					} else {

						aboutTop.style.position = 'fixed';
						aboutBreak.style.display = 'block';
						aboutText.style.marginTop = 0;
					}
				});
			}
		}

	// страница "УСЛУГИ", появление текста на desktop----------->
		if (document.querySelector('.services-content')) {


		// блок с фото

			let servicesActiveBlock = document.querySelectorAll('.services-content-left__active-vacancies .js_servives_input');//активный блок с картинкой
			let servicesBlock = document.querySelectorAll('.services-slider .js_servives_input');//блоки с заголовком в слайдере
			let servicesContent = document.querySelectorAll('.js_services_content');//блок с описанием

			let servicesContentLeft = document.querySelector('.services-content-left');//часть с блоками с заголовками
			let servicesContentRight = document.querySelector('.services-content-right');//часть с описанием
			
			servicesBlock[0].classList.add('hide');

			// при клике на блок с заголовком, показывается описание
			servicesBlock.forEach((elem, index) => {

				elem.addEventListener('click', () => {

					
					// убирает со всех блоков в слайдере класс hide
					servicesBlock.forEach(elem => {
						elem.classList.remove('hide');
					});

					// скрывает активный элемент в слайдере
					elem.classList.add('hide');

					// console.log(elem.dataset.swiperSlideIndex);

					servicesActiveBlock.forEach(elem => {
						elem.classList.remove('active');
					});

					servicesActiveBlock[elem.dataset.swiperSlideIndex].classList.add('active');

					scrollTo(0, 800);

					servicesContent.forEach(elem => {
						elem.classList.remove('show');
					});

					servicesContent[elem.dataset.swiperSlideIndex].classList.add('show');

					
					servicesContentRight.scrollTo({
						top: 0,
						behavior: "smooth"
					});

				});

			});

			//при скролле части с блоками заголовков поднимается в самый верх
			// servicesContentLeft.addEventListener('scroll', () => {
			// 	servicesContentLeft.innerHeight
			// });

		// блок с услугами для мобилки
			let servicesMobileItem = document.querySelectorAll('.js_services_mobile');// блок с услугой для мобильных

			// открывает/закрывает описание для услуги
			servicesMobileItem.forEach((elem, index) => {
				elem.addEventListener('click', (event) => {
					event.preventDefault();
					let servicesDescr = elem.querySelector('.js_services_mobile_item_text');
					servicesDescr.classList.toggle('active');
				});
			});

			

		// определяет url при загрузке страницы и добавляет тот который был в ссылке	
			let urlPage = window.location.href;
			let anchorUrlPage = urlPage.split('#').pop();
			// console.log(anchorUrlPage);

			servicesBlock.forEach(elem => {
				// console.log(elem.href.split('#').pop());

				if(anchorUrlPage == elem.href.split('#').pop()) {

					//убрать со всех активных блоков класс active
					servicesActiveBlock.forEach(elem => {
						elem.classList.remove('active');
					});

					//определяет какой якорь и делает активным этот слайд
					servicesActiveBlock[elem.dataset.swiperSlideIndex].classList.add('active');
					console.log(elem.dataset.swiperSlideIndex);
				} else {
					// console.log('NO');
				}
			});


		}

	// страница "ВАКАНСИИ"
		if (document.querySelector('.vacancies')) {

			let vacanciesBlock = document.querySelectorAll('.vacancies-content__slider .swiper-slide');//блоки с вакансией в слайдере
			let vacanciesActiveBlock = document.querySelectorAll('.vacancies-content__desktop-wrap > .js_vacancies_block');//активные блоки с названием вакансий
			let vacanciesDescr = document.querySelectorAll('.js_vacancies_descr');//описание вакансии


			// страница "ВАКАНСИИ" мобильная версия

			let vacanciesContentMobile = document.querySelector('.vacancies-content__mobile');//блок акансий мобильный
			let vacanciesContentMobileItem = vacanciesContentMobile.querySelectorAll('.js_vacancies_block');

			if ( window.innerWidth > 1200) {
				//добавляет активный класс блоку, на который нажали
				vacanciesActiveBlock[0].classList.add('active');//при загрузке страницы 1 название вакансии активно
				vacanciesDescr[0].classList.add('active');//при загрузке страницы 1 описание с вакансией активное
				
	
				vacanciesBlock[0].classList.add('active');
				// vacanciesBlock.forEach(elem => {
				// 	console.log(elem.dataset);
				// 	if(elem.dataset.swiperSlideIndex == 0) {
				// 		elem.classList.add('active');
				// 	}
				// });

				vacanciesBlock.forEach((elem, index) => {

					elem.addEventListener('click', () => {
						//скрывает все вакансии
						vacanciesBlock.forEach(elem => {
							elem.classList.remove('active');
						})

						//скрывает все описания
						vacanciesDescr.forEach(elem => {
							elem.classList.remove('active');
						})
						
						// console.log(elem.dataset.swiperSlideIndex);

						
						//показывает блок с вакансией
						elem.classList.add('active');

						//индекс блока с вакансией на который кликнули
						// let indexActivVacancies = elem.dataset.swiperSlideIndex;

						//убрать все активные заголовоки вакансии
						vacanciesActiveBlock.forEach(elem  => {
							elem.classList.remove('active');
						});

						//показать активный заголовок
						vacanciesActiveBlock[index].classList.add('active');


						//индекс блока с описанием вакансии
						let indexActivDescr = Number(vacanciesDescr[index].dataset.indexVacanciesDescr);
						let vacanciesBlockWrap = document.querySelector('.js_vacancies_block_wrap');

						//если индексы вакансии и описания совпадают, то показывает описание
						if(index == indexActivDescr) {
							vacanciesDescr[index].classList.add('active');

							// vacanciesBlock.forEach(elem => {
							// 	if(elem.classList.contains('active')) {	
							// 		vacanciesBlockWrap.style.paddingTop = (elem.clientHeight + 40) + 'px';
							// 	}
							// });

						}
						
						scrollTo(0, 0);

					});
				});
		 	} else {
				console.log(vacanciesContentMobileItem);
				vacanciesContentMobileItem.forEach((elem, index) => {

					elem.addEventListener('click', () => {
						console.log(index);
						vacanciesContentMobile.classList.add('active');
					});
				});
			 }

			
			
			

			let vacanciesContentDescrButton = document.querySelectorAll('.vacancies-content-descr__button');//кнопка откликнуться
			let vacanciesContentColumnSecond = document.querySelector('.vacancies-content__column-second');

			vacanciesContentDescrButton.forEach(elem => {
				elem.addEventListener('click', () => {
					vacanciesContentColumnSecond.scrollBy({				
						top: 1000,
						behavior: 'smooth'

					});

					window.scrollBy({				
						top: 800,
						behavior: 'smooth'
					});


				});
			});
			
			// dropzone
			let vacanciesContentDescrFormDropzone = document.querySelectorAll('.vacancies-content-descr__form-dropzone');//форма с загрузкой резюме
			
			// Dropzone.options = {
			// 	maxFiles:3,
			// 	init: function() {
			// 		this.on("addedfile", function(file) { console.log(123321); });
			// 		this.on("maxfilesexceeded", function(file) {
			//             this.removeAllFiles();
			//             this.addFile(file);
			//       	});
			// 	}
			// };

			// console.log(Dropzone.options);
			
			// var myDropzone = new Dropzone("form#customDropzone", { 
			// 	url: "/file/post",
			// 	maxFiles:3,
			// 	init: function() {
			// 		this.on("addedfile", function(file) { console.log(123321); });
			// 		this.on("maxfilesexceeded", function(file) {
			//             this.removeAllFiles();
			//             this.addFile(file);
			//       	});
			// 	}
			// });

			// console.log(vacanciesContentDescrFormDropzone);

			// dz-started класс который добавляется
			vacanciesContentDescrFormDropzone.forEach(elem => {

				let activeElement = elem;
				// Конфигурация observer (за какими изменениями наблюдать)
				const config = {
					attributes: true
				};
				const callback = function(mutationsList, observer) {

					let delResume = elem.querySelectorAll('.dz-error-mark');//кнопка 
					let dzPreview = elem.querySelectorAll('.vacancies-content-descr__form-dropzone.dropzone .dz-preview');//весь блок с загруженным файлом

					delResume.forEach((element, index) => {
						element.addEventListener('click', () => {
							console.log(index);
							// dzPreview.style.display = "none";
							activeElement.removeChild(dzPreview[index]);
						});
					});
					
				};
				const observer = new MutationObserver(callback);
				// Начинаем наблюдение за настроенными изменениями целевого элемента
				observer.observe(elem, config);
			});
			

			// определяет ширину экрана
			let windowWidth = window.innerWidth;

			// при ширине экрана меньше 1200px при клике на вакансию идет переход на страницу описания вакансиии
			// if (windowWidth <= 1200) {
				
			// 	vacanciesBlock.forEach(elem => {
			// 		elem.addEventListener('click', () => {
			// 			document.location.href = "page-vacanсies-mobile.html";
			// 		});
			// 	});
			// }

			// отслеживает ширину экрана
			// window.addEventListener('resize', () => {
			// 	windowWidth = window.innerWidth;

			// 	if (windowWidth <= 1200) {
				
			// 		vacanciesBlock.forEach(elem => {
			// 			elem.addEventListener('click', () => {
			// 				document.location.href = "page-vacanсies-mobile.html";
			// 			});
			// 		});
			// 	}
			// });


			//загрузка резюме
			let vacanciesContentFormUploader = document.querySelectorAll('.vacancies-content-descr__form-uploader');
			const reader = new FileReader();

		}	

	// страница ВАКАНСИИ  форма ОТПРАВКИ РЕЗЮМЕ мобильная
		if(document.querySelector('.vacancies-mobile-content')) {
			
			// dropzone
			let vacanciesContentDescrFormDropzone = document.querySelectorAll('.vacancies-content-descr__form-dropzone');//форма с загрузкой резюме
				
			// dz-started класс который добавляется
			vacanciesContentDescrFormDropzone.forEach(elem => {

				let activeElement = elem;
				// Конфигурация observer (за какими изменениями наблюдать)
				const config = {
					attributes: true
				};
				const callback = function(mutationsList, observer) {

					let delResume = elem.querySelectorAll('.dz-error-mark');//кнопка 
					let dzPreview = elem.querySelectorAll('.vacancies-content-descr__form-dropzone.dropzone .dz-preview');//весь блок с загруженным файлом

					delResume.forEach((element, index) => {
						element.addEventListener('click', () => {
							console.log(index);
							// dzPreview.style.display = "none";
							activeElement.removeChild(dzPreview[index]);
						});
					});
					
				};
				const observer = new MutationObserver(callback);
				// Начинаем наблюдение за настроенными изменениями целевого элемента
				observer.observe(elem, config);
			});
		}




	// страница ВАКАНСИИ ТИПОВАЯ
		// if(document.querySelector('.news-typical')) {
		// 	let newsTypicalNewsItem = document.querySelectorAll('.news-typical-news__item');
		// 	newsTypicalNewsItem.forEach(elem => {
		// 		elem.addEventListener('click', () => {
		// 			document.location.href = "page-news-typical.html";
			
		// 		});
		// 	});
		// }

	// маска номера телефона на странице описания вакансии
		if (document.querySelectorAll('.js_vacancies_descr')) {

			// маска для ввода номера телфона
			function setCursorPosition(pos, elem) {
				elem.focus();
				if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
				else if (elem.createTextRange) {
					var range = elem.createTextRange();
					range.collapse(true);
					range.moveEnd("character", pos);
					range.moveStart("character", pos);
					range.select()
				}
			}
			
			function mask(event) {
				var matrix = "+7 (___) ___ ____",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, "");
				if (def.length >= val.length) val = def;
				this.value = matrix.replace(/./g, function(a) {
					return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
				});
				if (event.type == "blur") {
					if (this.value.length == 2) this.value = ""
				} else setCursorPosition(this.value.length, this)
			};

			var input = document.querySelectorAll("#vacancies-phone");

			input.forEach(elem => {

				elem.addEventListener("input", mask, false);
				elem.addEventListener("focus", mask, false);
				elem.addEventListener("blur", mask, false); 	
			});

			// if (input) {
			// 	input.addEventListener("input", mask, false);
			// 	input.addEventListener("focus", mask, false);
			// 	input.addEventListener("blur", mask, false); 

			// }


		}

	// страница "УСПЕШНЫЙ ОПЫТ НАШИХ КЛИЕНТОВ"
		
		let projectSortApplication = document.querySelector('.js_project_sort__application');//текст "ВСЕ ПРИМЕНЕНИЯ" 

		if (projectSortApplication) {

			//инициализация вертикального слайдера

			var projectV3Slider = new Swiper('.page-project-v3-slider', {
				lazy: true,
				direction: 'vertical',
				slidesPerView: 1,
				spaceBetween: 0,
				mousewheel: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});

			let footer = document.querySelector('footer');//footer

			projectV3Slider.on('scroll', (e) => {
				// console.log('активный слайд ' + projectV3Slider.activeIndex);
				// console.log(e.deltaY);
				// console.log('количество слайдов ' + (projectV3Slider.slides.length - 1));

				if ((projectV3Slider.slides.length - 1) == projectV3Slider.activeIndex && e.deltaY > 0) {
					projectV3Slider.mousewheel.disable();
					

					setTimeout(() => 
						window.addEventListener('wheel', (e) => {
							if(e.deltaY > 0) {
							
								console.log('bottom');
								footer.classList.add('active');
							} else {
								console.log('top');
								footer.classList.remove('active');
								projectV3Slider.mousewheel.enable();
								// отменить обработчик событий для window после этой строчки 

							}
						}), 1000);

				} 
				
			});

			
			let projectSortApplication = document.querySelector('.js_project_sort__application');//строка ВСЕ ПРИМЕНЕНИЯ
			let projectSortApplicationPopup = document.querySelector('.js_project_sort_application_popup');//wrapper popup
			let projectSortApplicationPopupLink = document.querySelectorAll('.js_project_sort_application_popup_link');//пункты выпадающего меню 
			let body = document.querySelector('body');

			body.addEventListener('click', () => {
				if(!projectSortApplicationPopup.classList.contains('hide')) {
					projectSortApplicationPopup.classList.add('hide');
				} 
			});

			projectSortApplication.addEventListener('click', (e) => {
				e.stopPropagation();
			});

			projectSortApplication.addEventListener('click', (e) => {
				e.stopPropagation();
				projectSortApplicationPopup.classList.toggle('hide');
			});

			projectSortApplicationPopup.addEventListener('wheel', (e) => {
				e.stopPropagation();
			});

			// projectSortApplicationPopup.addEventListener('mouseenter', () => {
			// 	let header = document.querySelector('header');
			// 	header.classList.add('header-show');

			// });

			// projectSortApplicationPopup.addEventListener('mouseleave', () => {
			// 	let header = document.querySelector('header');
			// 	header.classList.remove('header-show');
			// 	header.classList.remove('header-hide');


			// });




			projectSortApplicationPopupLink.forEach(elem => {
				elem.addEventListener('click', () => {
					projectSortApplication.textContent = elem.textContent;
					projectSortApplicationPopup.classList.add('hide');					
				});
			});

		}

	// cтраница "ПРОИЗВОДСТВЕННАЯ БАЗА" смена картинок
		let industrialBaseDesktopImages = document.querySelectorAll('.js_industrial_base_descr_desktop_images');
		let industrialBaseDesktopInput = document.querySelectorAll('.js_industrial_base_descr_desktop_input');

		if(industrialBaseDesktopImages) {

			industrialBaseDesktopInput.forEach((elem, index) => {

				elem.addEventListener('change', () => {

					let activeInput = index;

					industrialBaseDesktopImages.forEach((elem, index) => {
						elem.classList.remove('industrial-show-img');

					});

					industrialBaseDesktopImages[activeInput].classList.add('industrial-show-img');

				})

			});



		}

	//страница	"ПРИМЕНЕНИЯ" 

		if(document.querySelector('.application-page-slider__container')) {

			let activSlide = 0;
			// вертикальный слайдер (верхний слайдер)
			var applicationPageSlider = new Swiper('.application-page-slider__container', {
				// Optional parameters
				lazy: true,
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 1,
				loop: true,
				loopFillGroupWithBlank: true,
				direction: 'horizontal',
				320: {
					direction: 'vertical',
				  },


				// If we need pagination
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
			
				// Navigation arrows
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
			
				// And if we need scrollbar
				scrollbar: {
				el: '.swiper-scrollbar',
				},
			})

			// верхний баннер на мобильном устройстве
			let mobileTopPage = document.querySelectorAll('.application-page-mobile');
			//нижний слайдер
			let applicationSliderMobileItem = document.querySelectorAll('.application-slider__mobile-item');
			let applicationSliderSlide = document.querySelectorAll('.application-slider__slide');

			selectActivSlideApplication ();
			
			// window.addEventListener('resize', () => {
			// 	console.log(window.innerWidth);
			// })
			// console.log(window.innerWidth);


			// определяет ширину экрана и запускает определенный слайдер
			function selectActivSlideApplication () {
				if(window.innerWidth > 1200) {
					applicationSliderSlide.forEach((elem, index) => {
						elem.addEventListener('click', () => {
							activSlide = (Number(elem.dataset.swiperSlideIndex) +1);
							applicationPageSlider.slideTo(activSlide, 500);
							scrollTo(0, 0);
						})
					})
				} else {
					applicationSliderMobileItem.forEach((elem, index) => {
						elem.addEventListener('click', () => {
							activSlide = Number(elem.dataset.swiperSlideIndex);
							mobileTopPage.forEach(elem => {
								elem.classList.remove('active');
							})
							// console.log(mobileTopPage[index]);
							mobileTopPage[index].classList.add('active');
							scrollTo(0, 0);
						})
					})
				}
			}

			let applicationPageTopBg = document.querySelectorAll('.js_application_page_top_bg');//слой с картинкой для паралакс эффекта

			// паралакс эффект------------------------->
			applicationPageTopBg.forEach(elem => {

				window.addEventListener('mousemove', function(e) {
					let x = e.clientX / window.innerWidth;
					let y = e.clientY / window.innerHeight;  
					elem.style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
				});

			});
			
			


		}

	//страница "ПРИМЕНЕНИЯ ТИПОВАЯ"
		
		let applicationTypingTop = document.querySelector('.js_application_typing_top');//слой с баннером и текстом

		if (applicationTypingTop) {
			
			let applicationTypingBreak = document.querySelector('.js_application_typing_break');//отступ на странице 

			let applicationTypingContent = document.querySelector('.js_application_typing_content');//блок с текстом на странице



			let applicationTypingTopBg = document.querySelector('.js_application_typing_top_bg');//слой с баннером и картинкой


			
			// паралакс эффект на стрнаице
			window.addEventListener('mousemove', function(e) {
				let x = e.clientX / window.innerWidth;
				let y = e.clientY / window.innerHeight;  
				applicationTypingTopBg.style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
			});
			


			// определяет ширину экрана
			let windowWidth = window.innerWidth;

			if (windowWidth >= 1200) {
				
				//эффект при скролле стрнаицы---------------
				window.addEventListener('scroll', () => {

					let heightScroll = pageYOffset;

					if (heightScroll > 350 ) {

						applicationTypingTop.style.position = 'relative';
						applicationTypingBreak.style.display = 'none';
						
						applicationTypingContent.style.marginTop = -350 + 'px';
										
					} else {

						applicationTypingTop.style.position = 'fixed';
						applicationTypingBreak.style.display = 'block';
						applicationTypingContent.style.marginTop = 0;
					}
				});
				
			}

			// отслеживает ширину экрана
			window.addEventListener('resize', () => {
				windowWidth = window.innerWidth;

				if (windowWidth >= 1200) {
					
					//эффект при скролле стрнаицы---------------
					window.addEventListener('scroll', () => {

						let heightScroll = pageYOffset;

						if (heightScroll > 500 ) {

							applicationTypingTop.style.position = 'relative';
							applicationTypingBreak.style.display = 'none';
							
							applicationTypingContent.style.marginTop = -350 + 'px';
											
						} else {

							applicationTypingTop.style.position = 'fixed';
							applicationTypingBreak.style.display = 'block';
							applicationTypingContent.style.marginTop = 0;
						}
					});
					
				}
			});
		}

	// страница "ПОИСК"
		
		let searchCheckboxItem = document.querySelectorAll('.search-checkbox__item');

		if (searchCheckboxItem) {

			let searchNews = document.querySelector('.js_search_news');//страница "ПОИСК с новостями"
			let searchCatalog = document.querySelector('.js_search_catalog');



			searchCheckboxItem.forEach((elem, index) => {

				elem.addEventListener('click', () => {

					searchCheckboxItem.forEach(elem => {
						elem.classList.remove('search-checkbox__item-active');
					});

					elem.classList.add('search-checkbox__item-active');

					if (index == 0) {

						addHidePage();
						searchNews.classList.remove('hide');

					} else {

						addHidePage();
						searchCatalog.classList.remove('hide');
					}

				});
			});

			function addHidePage() {
				searchNews.classList.add('hide');
				searchCatalog.classList.add('hide');
			}
		}

	
	// no scroll body------------------------------------->
		// 1. Фиксация <body>
		function bodyFixPosition() {

			setTimeout( function() {
			/* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */
		
			if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
		
				// Получаем позицию прокрутки
				let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
		
				// Ставим нужные стили
				document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
				document.body.style.overflow = 'hidden';
				document.body.style.position = 'fixed';
				document.body.style.top = '-' + scrollPosition + 'px';
				document.body.style.left = '0';
				document.body.style.width = '100%';
		
			}
		
			}, 15 ); /* Можно задержку ещё меньше, но у меня работало хорошо именно с этим значением на всех устройствах и браузерах */
		
		}
	
	// 2. Расфиксация <body>
		function bodyUnfixPosition() {
		
			if ( document.body.hasAttribute('data-body-scroll-fix') ) {
		
			// Получаем позицию прокрутки из атрибута
			let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
		
			// Удаляем атрибут
			document.body.removeAttribute('data-body-scroll-fix');
		
			// Удаляем ненужные стили
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = '';
			document.body.style.width = '';
		
			// Прокручиваем страницу на полученное из атрибута значение
			window.scroll(0, scrollPosition);
		
			}
		
		}

});

$(function() {
	$('.lazy').Lazy();
	
});




