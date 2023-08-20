/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auction.js */ "./resources/js/auction.js");


/***/ }),

/***/ "./resources/js/auction.js":
/*!*********************************!*\
  !*** ./resources/js/auction.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
function openModal(modalId) {
  $('.modal-overlay').addClass('modal-open');
  $(modalId).addClass('modal-open');
}
function closeModal() {
  $('.modal-overlay').removeClass('modal-open');
  $('#add-category-modal, #add-lot-modal, #update-lot-modal').removeClass('modal-open');
  $('.error').addClass('hidden');
}
$(document).on('click', '#add-category-button', function (e) {
  e.preventDefault();
  openModal('#add-category-modal');
});
$(document).on('click', '#add-lot-button', function (e) {
  e.preventDefault();
  openModal('#add-lot-modal');
});
$(document).on('click', '#update-lot', function (e) {
  e.preventDefault();
  openModal('#update-lot-modal');
  var lotElement = $(this).closest('.lot');
  var lotId = lotElement.find('#lot_id').val();
  var lotName = lotElement.find('.lot-name').text();
  var updateRoute = $(this).data('update');
  $('#modal-lot-name').text(lotName);
  $('#update-id').val(lotId);
  $('#change-lot').attr('data-update', updateRoute);
});
$(document).on('click', '.close, .modal-overlay', function (e) {
  e.preventDefault();
  closeModal();
});
$(document).on('click', '#create-category', function () {
  var csrfToken = $('meta[name="csrf-token"]').attr('content');
  var newCategory = $('#add-category input').val();
  var createCategoryUrl = $(this).data('create');
  $.ajax({
    url: createCategoryUrl,
    type: 'POST',
    data: {
      _token: csrfToken,
      _method: 'POST',
      name: newCategory
    },
    success: function success() {
      closeModal();
      location.reload();
    },
    error: function error(response) {
      var error = $('#add-category').find('.error');
      error.removeClass('hidden');
      error.text(response.responseJSON.message);
    }
  });
});
$(document).on('click', '#delete-category', function (e) {
  e.preventDefault();
  var csrfToken = $('meta[name="csrf-token"]').attr('content');
  var categoryId = $(this).closest('.category').find('#category_id').val();
  var deleteCategoryUrl = $(this).data('delete');
  $.ajax({
    url: deleteCategoryUrl,
    type: 'DELETE',
    data: {
      _token: csrfToken,
      _method: 'DELETE',
      id: categoryId
    },
    success: function success(response) {
      window.location.href = '/';
    },
    error: function error(response) {
      console.log(response, 'error');
    }
  });
});
$(document).on('click', '#create-lot', function (e) {
  e.preventDefault();
  var csrfToken = $('meta[name="csrf-token"]').attr('content');
  var createLotUrl = $(this).data('create');
  var lotName = $('#add-lot input[name="name"]').val();
  var lotPrice = $('#add-lot input[name="price"]').val();
  var lotDescription = $('#add-lot input[name="description"]').val();
  var categoryName = $('#add-lot input[name="category_name"]').val();
  $.ajax({
    url: createLotUrl,
    type: 'POST',
    data: {
      _token: csrfToken,
      _method: 'POST',
      name: lotName,
      price: lotPrice,
      description: lotDescription,
      category_name: categoryName
    },
    success: function success() {
      location.reload();
    },
    error: function error(response) {
      if (response.responseJSON.message === 'The price field must be a number.') {
        var _error = $('#change-lot-data').find('.error');
        _error.removeClass('hidden');
        _error.text(response.responseJSON.message);
        return;
      }
      var error = $('#add-lot').find('.error');
      error.removeClass('hidden');
      error.text('All fields must be filled');
    }
  });
});
$(document).on('click', '#delete-lot', function (e) {
  e.preventDefault();
  var csrfToken = $('meta[name="csrf-token"]').attr('content');
  var lotId = $(this).closest('.lot').find('#lot_id').val();
  var deleteLotUrl = $(this).data('delete');
  $.ajax({
    url: deleteLotUrl,
    type: 'DELETE',
    data: {
      _token: csrfToken,
      _method: 'DELETE',
      id: lotId
    },
    success: function success(response) {
      window.location.href = '/';
    },
    error: function error(response) {
      console.log(response, 'error');
    }
  });
});
$(document).on('click', '#change-lot', function (e) {
  e.preventDefault();
  var csrfToken = $('meta[name="csrf-token"]').attr('content');
  var updateLotUrl = $(this).data('update');
  var lotName = $('#change-lot-data input[name="name"]').val();
  var lotPrice = $('#change-lot-data input[name="price"]').val();
  var lotDescription = $('#change-lot-data input[name="description"]').val();
  $.ajax({
    url: updateLotUrl,
    type: 'PATCH',
    data: {
      _token: csrfToken,
      name: lotName,
      price: lotPrice,
      description: lotDescription
    },
    success: function success() {
      location.reload();
    },
    error: function error(response) {
      if (response.responseJSON.message === 'The price field must be a number.') {
        var _error2 = $('#change-lot-data').find('.error');
        _error2.removeClass('hidden');
        _error2.text(response.responseJSON.message);
        return;
      }
      var error = $('#change-lot-data').find('.error');
      error.removeClass('hidden');
      error.text('All fields must be filled');
    }
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;