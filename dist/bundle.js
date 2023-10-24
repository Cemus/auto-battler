/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entities/enemies.js":
/*!*********************************!*\
  !*** ./src/entities/enemies.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Enemy: () => (/* binding */ Enemy),\n/* harmony export */   updateEnemyBehavior: () => (/* binding */ updateEnemyBehavior)\n/* harmony export */ });\n/* harmony import */ var _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/aiFunctions.js */ \"./src/utils/aiFunctions.js\");\n/* harmony import */ var _utils_draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/draw.js */ \"./src/utils/draw.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n//Variables\nvar target = null;\nvar Enemy = /*#__PURE__*/function () {\n  function Enemy(name, job, positionX, positionY, coolDown) {\n    _classCallCheck(this, Enemy);\n    this.name = name;\n    this.job = job;\n    this.positionX = positionX;\n    this.positionY = positionY;\n    this.coolDown = coolDown;\n  }\n  _createClass(Enemy, [{\n    key: \"sprite\",\n    value: function sprite() {\n      switch (this.job) {\n        case \"warrior\":\n          (0,_utils_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawTriangle)(this.positionX, this.positionY, \"red\");\n          break;\n        case \"mage\":\n          (0,_utils_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawCircle)(this.positionX, this.positionY, \"red\");\n          break;\n        case \"archer\":\n          (0,_utils_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawCross)(this.positionX, this.positionY, \"red\");\n          break;\n        default:\n          (0,_utils_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawSquare)(this.positionX, this.positionY, \"red\");\n          break;\n      }\n    }\n  }]);\n  return Enemy;\n}(); //States\nvar STATE_FIND_ENEMY = \"FIND\";\nvar STATE_FOLLOW_ENEMY = \"FOLLOW\";\nvar STATE_ATTACK_ENEMY = \"ATTACK\";\nvar STATE_ENGAGE_ENEMY = \"ENGAGE\";\nvar currentState = STATE_FIND_ENEMY;\nfunction updateEnemyBehavior(self, playersList, allies) {\n  _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.correctPosition(self);\n  self.sprite();\n  if (self.coolDown > 0) {\n    self.coolDown--;\n  }\n  console.log(currentState);\n  switch (currentState) {\n    case STATE_FIND_ENEMY:\n      var playerTargetted = _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.findTarget(self, playersList);\n      if (playerTargetted) {\n        target = playerTargetted;\n        currentState = STATE_FOLLOW_ENEMY;\n      } else {\n        currentState = STATE_FIND_ENEMY;\n      }\n      break;\n    case STATE_FOLLOW_ENEMY:\n      if (target) {\n        if (!_utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.canAttack(self)) {\n          if (Math.abs(target.positionX - self.positionX) >= 50 || Math.abs(target.positionY - self.positionY) >= 50) {\n            var allyWhichIsTooClose = _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isTooCloseFromAlly(self, allies);\n            console.log(allyWhichIsTooClose);\n            if (allyWhichIsTooClose !== null) {\n              console.log(\"too close\");\n              _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.moveAwayFromAlly(self, allyWhichIsTooClose);\n            } else {\n              _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.followEnemy(self, target);\n            }\n          }\n        }\n        if (_utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.canAttack(self)) {\n          currentState = STATE_ENGAGE_ENEMY;\n        }\n      } else {\n        currentState = STATE_FIND_ENEMY;\n      }\n      break;\n    case STATE_ENGAGE_ENEMY:\n      if (!_utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isNextToEnemy(self, target)) {\n        var _allyWhichIsTooClose = _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isTooCloseFromAlly(self, allies);\n        console.log(_allyWhichIsTooClose);\n        if (_allyWhichIsTooClose !== null) {\n          console.log(\"too close\");\n          _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.moveAwayFromAlly(self, _allyWhichIsTooClose);\n        } else {\n          _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.followEnemy(self, target);\n        }\n      } else {\n        currentState = STATE_ATTACK_ENEMY;\n      }\n      break;\n    case STATE_ATTACK_ENEMY:\n      if (_utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.canAttack(self)) {\n        _utils_aiFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Attack(self, target);\n        self.coolDown = 100;\n      } else {\n        currentState = STATE_FOLLOW_ENEMY;\n      }\n      break;\n  }\n}\n\n\n//# sourceURL=webpack://battler/./src/entities/enemies.js?");

/***/ }),

/***/ "./src/entities/player.js":
/*!********************************!*\
  !*** ./src/entities/player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   updatePlayerBehavior: () => (/* binding */ updatePlayerBehavior)\n/* harmony export */ });\n/* harmony import */ var _utils_aiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/aiFunctions */ \"./src/utils/aiFunctions.js\");\n/* harmony import */ var _utils_draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/draw.js */ \"./src/utils/draw.js\");\n/* harmony import */ var _utils_conditions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/conditions.js */ \"./src/utils/conditions.js\");\n/* harmony import */ var _utils_actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/actions.js */ \"./src/utils/actions.js\");\n/* harmony import */ var _utils_canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/canvas.js */ \"./src/utils/canvas.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player(name, job, positionX, positionY, coolDown) {\n    _classCallCheck(this, Player);\n    this.name = name;\n    this.job = job;\n    this.positionX = positionX;\n    this.positionY = positionY;\n    this.coolDown = coolDown;\n  }\n  _createClass(Player, [{\n    key: \"sprite\",\n    value: function sprite() {\n      switch (this.job) {\n        case \"warrior\":\n          (0,_utils_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawTriangle)(this.positionX, this.positionY, \"blue\");\n          break;\n        case \"mage\":\n          (0,_utils_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawCircle)(this.positionX, this.positionY, \"blue\");\n          break;\n        case \"archer\":\n          (0,_utils_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawCross)(this.positionX, this.positionY, \"blue\");\n          break;\n        default:\n          (0,_utils_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawSquare)(this.positionX, this.positionY, \"blue\");\n          break;\n      }\n    }\n  }]);\n  return Player;\n}();\nvar Gambit = /*#__PURE__*/function () {\n  function Gambit(player, subject, condition, action, target) {\n    _classCallCheck(this, Gambit);\n    this.subject = subject;\n    this.condition = condition;\n    this.action = action;\n    this.target = target;\n    this.player = player;\n  }\n  _createClass(Gambit, [{\n    key: \"evaluate\",\n    value: function evaluate(player, enemies, target, subject) {\n      if ((0,_utils_conditions_js__WEBPACK_IMPORTED_MODULE_2__.conditionParser)(this.condition, subject)) {\n        (0,_utils_actions_js__WEBPACK_IMPORTED_MODULE_3__.actionParser)(this.action);\n      }\n    }\n  }]);\n  return Gambit;\n}();\nvar gambitContainers = document.querySelectorAll(\".gambit-container\");\nvar gambits = [];\ngambitContainers.forEach(function (container, index) {\n  var subjectSelect = container.querySelector(\"#subject\".concat(index));\n  var conditionSelect = container.querySelector(\"#condition\".concat(index));\n  var actionSelect = container.querySelector(\"#action\".concat(index));\n  var targetSelect = container.querySelector(\"#target\".concat(index));\n  var subject = subjectSelect.value;\n  var condition = conditionSelect.value;\n  var action = actionSelect.value;\n  var target = targetSelect.value;\n  var newGambit = new Gambit(subject, condition, action, target);\n  gambits.push(newGambit);\n});\nconsole.log(gambits);\nfunction updatePlayerBehavior(self, enemies) {\n  _utils_aiFunctions__WEBPACK_IMPORTED_MODULE_0__.correctPosition(self);\n  self.sprite();\n  if (self.coolDown === 0) {\n    var _iterator = _createForOfIteratorHelper(gambits),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var gambit = _step.value;\n        gambit.evaluate(self, enemies);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  } else {\n    self.coolDown--;\n  }\n}\n\n\n//# sourceURL=webpack://battler/./src/entities/player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entities_enemies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/enemies.js */ \"./src/entities/enemies.js\");\n/* harmony import */ var _entities_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/player.js */ \"./src/entities/player.js\");\n/* harmony import */ var _utils_charactersCreation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/charactersCreation.js */ \"./src/utils/charactersCreation.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _utils_canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/canvas.js */ \"./src/utils/canvas.js\");\n\n\n\n\n\nfunction gameLoop() {\n  _utils_canvas_js__WEBPACK_IMPORTED_MODULE_4__.ctx.clearRect(0, 0, _utils_canvas_js__WEBPACK_IMPORTED_MODULE_4__.canvas.width, _utils_canvas_js__WEBPACK_IMPORTED_MODULE_4__.canvas.height);\n  _utils_charactersCreation_js__WEBPACK_IMPORTED_MODULE_2__.playersList.forEach(function (player) {\n    (0,_entities_player_js__WEBPACK_IMPORTED_MODULE_1__.updatePlayerBehavior)(player, _utils_charactersCreation_js__WEBPACK_IMPORTED_MODULE_2__.enemiesList, _utils_charactersCreation_js__WEBPACK_IMPORTED_MODULE_2__.playersList);\n  });\n  _utils_charactersCreation_js__WEBPACK_IMPORTED_MODULE_2__.enemiesList.forEach(function (enemy) {\n    (0,_entities_enemies_js__WEBPACK_IMPORTED_MODULE_0__.updateEnemyBehavior)(enemy, _utils_charactersCreation_js__WEBPACK_IMPORTED_MODULE_2__.playersList, _utils_charactersCreation_js__WEBPACK_IMPORTED_MODULE_2__.enemiesList);\n  });\n  requestAnimationFrame(gameLoop);\n}\ngameLoop();\n\n//# sourceURL=webpack://battler/./src/index.js?");

/***/ }),

/***/ "./src/utils/actions.js":
/*!******************************!*\
  !*** ./src/utils/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   actionParser: () => (/* binding */ actionParser)\n/* harmony export */ });\nfunction actionParser(player, action, target) {\n  switch (action) {\n    case \"attack\":\n      return attack(player, target);\n    case \"defend\":\n      return defend(player);\n    case \"heal\":\n      return heal(player, target);\n  }\n}\nvar isClosedToEnemy = function isClosedToEnemy(subject, target) {\n  return Math.abs(subject.positionX - target.positionX) <= 50 && Math.abs(subject.positionY - target.positionY) <= 50;\n};\nvar heal = function heal(player, target) {\n  console.log(\"je heal \".concat(target, \" ^^\"));\n};\nvar defend = function defend(player) {\n  console.log(\"je defends lol\");\n};\nvar canAttack = function canAttack(player) {\n  console.log(\"puis-je attaquer ?\");\n  return player.coolDown <= 0;\n};\nvar followEnemy = function followEnemy(player, enemies) {\n  if (player.positionX < enemies.positionX) {\n    player.positionX += 1;\n  } else {\n    player.positionX -= 1;\n  }\n  if (player.positionY < enemies.positionY) {\n    player.positionY += 1;\n  } else {\n    player.positionY -= 1;\n  }\n};\nvar attack = function attack(player, enemies) {\n  if (canAttack(player) && isClosedToEnemy(player, enemies)) {\n    if (player.positionX < enemies.positionX) {\n      enemies.positionX -= 10;\n    } else {\n      enemies.positionX += 10;\n    }\n    if (player.positionY < enemies.positionY) {\n      enemies.positionY -= 10;\n    } else {\n      enemies.positionY += 10;\n    }\n    player.coolDown = 100;\n  } else {\n    followEnemy(enemies);\n  }\n};\n\n\n//# sourceURL=webpack://battler/./src/utils/actions.js?");

/***/ }),

/***/ "./src/utils/aiFunctions.js":
/*!**********************************!*\
  !*** ./src/utils/aiFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Attack: () => (/* binding */ Attack),\n/* harmony export */   canAttack: () => (/* binding */ canAttack),\n/* harmony export */   correctPosition: () => (/* binding */ correctPosition),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   findTarget: () => (/* binding */ findTarget),\n/* harmony export */   followEnemy: () => (/* binding */ followEnemy),\n/* harmony export */   isNextToEnemy: () => (/* binding */ isNextToEnemy),\n/* harmony export */   isTooCloseFromAlly: () => (/* binding */ isTooCloseFromAlly),\n/* harmony export */   moveAwayFromAlly: () => (/* binding */ moveAwayFromAlly)\n/* harmony export */ });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/utils/canvas.js\");\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw */ \"./src/utils/draw.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\nvar correctPosition = function correctPosition(self) {\n  if (self.positionX <= 0 || self.positionY <= 0) {\n    self.positionX += 1;\n    self.positionY += 1;\n  }\n  if (self.positionX > _canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width || self.positionY > _canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height) {\n    self.positionX -= 1;\n    self.positionY -= 1;\n  }\n};\nvar isTooCloseFromAlly = function isTooCloseFromAlly(self, allies) {\n  var safeDistance = 30;\n  var _iterator = _createForOfIteratorHelper(allies),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var ally = _step.value;\n      if (ally !== self) {\n        var deltaX = self.positionX - ally.positionX;\n        var deltaY = self.positionY - ally.positionY;\n        var distance = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY));\n        console.log(distance);\n        if (distance < safeDistance) {\n          console.log(ally);\n          return ally;\n        }\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return null;\n};\nvar moveAwayFromAlly = function moveAwayFromAlly(self, ally) {\n  console.log(\"movingaway\");\n  var safeDistance = 30;\n  var deltaX = self.positionX - ally.positionX;\n  var deltaY = self.positionY - ally.positionY;\n  var distance = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY));\n  console.log(distance);\n  console.log(deltaX + \" x\");\n  console.log(deltaY + \" y\");\n  if (distance < safeDistance) {\n    if (distance < safeDistance) {\n      if (deltaX <= 0) {\n        console.log(deltaX + \" deltaX\");\n        self.positionX -= 1;\n      } else {\n        self.positionX += 1;\n      }\n      if (deltaY <= 0) {\n        console.log(deltaY + \" deltaY\");\n        self.positionY -= 1;\n      } else {\n        self.positionY += 1;\n      }\n    }\n  }\n};\nvar Attack = function Attack(self, target) {\n  if (target.positionX <= self.positionX) {\n    target.positionX -= 10;\n  } else {\n    target.positionX += 10;\n  }\n  if (target.positionY <= self.positionY) {\n    target.positionY -= 10;\n  } else {\n    target.positionY += 10;\n  }\n};\nvar canAttack = function canAttack(self) {\n  return self.coolDown <= 0;\n};\nvar followEnemy = function followEnemy(self, target) {\n  if (target.positionX + 10 < self.positionX) {\n    self.positionX -= 1;\n  } else {\n    self.positionX += 1;\n  }\n  if (target.positionY + 10 < self.positionY) {\n    self.positionY -= 1;\n  } else {\n    self.positionY += 1;\n  }\n};\nvar findTarget = function findTarget(self, opponentList) {\n  var closestTarget = null;\n  opponentList.forEach(function (player) {\n    if (closestTarget === null || closestTarget.positionX < Math.abs(player.positionX - self.positionX)) {\n      closestTarget = player;\n    }\n  });\n  return closestTarget;\n};\nvar isNextToEnemy = function isNextToEnemy(self, target) {\n  if (target.positionX < self.positionX + _draw__WEBPACK_IMPORTED_MODULE_1__.squareSize && target.positionX + _draw__WEBPACK_IMPORTED_MODULE_1__.squareSize > self.positionX && target.positionY < self.positionY + _draw__WEBPACK_IMPORTED_MODULE_1__.squareSize && target.positionY + _draw__WEBPACK_IMPORTED_MODULE_1__.squareSize > self.positionY) {\n    return true;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  correctPosition: correctPosition,\n  isTooCloseFromAlly: isTooCloseFromAlly,\n  moveAwayFromAlly: moveAwayFromAlly,\n  Attack: Attack,\n  canAttack: canAttack,\n  followEnemy: followEnemy,\n  findTarget: findTarget,\n  isNextToEnemy: isNextToEnemy\n});\n\n//# sourceURL=webpack://battler/./src/utils/aiFunctions.js?");

/***/ }),

/***/ "./src/utils/canvas.js":
/*!*****************************!*\
  !*** ./src/utils/canvas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   canvas: () => (/* binding */ canvas),\n/* harmony export */   ctx: () => (/* binding */ ctx)\n/* harmony export */ });\nvar canvas = document.getElementById(\"gameCanvas\");\nvar ctx = canvas.getContext(\"2d\");\n\n\n//# sourceURL=webpack://battler/./src/utils/canvas.js?");

/***/ }),

/***/ "./src/utils/charactersCreation.js":
/*!*****************************************!*\
  !*** ./src/utils/charactersCreation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   enemiesList: () => (/* binding */ enemiesList),\n/* harmony export */   playersList: () => (/* binding */ playersList)\n/* harmony export */ });\n/* harmony import */ var _entities_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/player.js */ \"./src/entities/player.js\");\n/* harmony import */ var _entities_enemies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/enemies */ \"./src/entities/enemies.js\");\n\n\nvar playersList = [];\nvar enemiesList = [];\nvar playerChar1 = new _entities_player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"Jean\", \"mage\", 25, 25, 100);\nvar playerChar2 = new _entities_player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"Jean\", \"mage\", 50, 50, 100);\nvar playerChar3 = new _entities_player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"Jean\", \"mage\", 10, 10, 100);\nvar enemyChar1 = new _entities_enemies__WEBPACK_IMPORTED_MODULE_1__.Enemy(\"Méchant archer\", \"archer\", 10, 10, 546);\nvar enemyChar2 = new _entities_enemies__WEBPACK_IMPORTED_MODULE_1__.Enemy(\"Méchant mage\", \"mage\", 10, 10, 456);\nvar enemyChar3 = new _entities_enemies__WEBPACK_IMPORTED_MODULE_1__.Enemy(\"Méchant mage\", \"mage\", 10, 10, 258);\nplayersList.push(playerChar1, playerChar2, playerChar3);\nenemiesList.push(enemyChar1, enemyChar2, enemyChar3);\n\n\n//# sourceURL=webpack://battler/./src/utils/charactersCreation.js?");

/***/ }),

/***/ "./src/utils/conditions.js":
/*!*********************************!*\
  !*** ./src/utils/conditions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conditionParser: () => (/* binding */ conditionParser),\n/* harmony export */   ifHPUnder50: () => (/* binding */ ifHPUnder50)\n/* harmony export */ });\nfunction conditionParser(condition, subject) {\n  switch (condition) {\n    case \"HP > 50%\":\n      return ifHPUnder50(subject);\n    case \"enemies nearby\":\n      return areEnemiesNearby(subject, enemies);\n      sub;\n  }\n}\nvar ifHPUnder50 = function ifHPUnder50(subject) {\n  console.log(\"hi\");\n  return true;\n};\nvar areEnemiesNearby = function areEnemiesNearby(subject, enemies) {\n  //\n};\n\n\n//# sourceURL=webpack://battler/./src/utils/conditions.js?");

/***/ }),

/***/ "./src/utils/draw.js":
/*!***************************!*\
  !*** ./src/utils/draw.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawCircle: () => (/* binding */ drawCircle),\n/* harmony export */   drawCross: () => (/* binding */ drawCross),\n/* harmony export */   drawSquare: () => (/* binding */ drawSquare),\n/* harmony export */   drawTriangle: () => (/* binding */ drawTriangle),\n/* harmony export */   squareSize: () => (/* binding */ squareSize)\n/* harmony export */ });\n/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/canvas */ \"./src/utils/canvas.js\");\n\nvar squareSize = 30;\nfunction drawSquare(x, y, color) {\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = color;\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(x, y, squareSize, squareSize);\n}\nfunction drawTriangle(x, y, color) {\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = color;\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.moveTo(x, y);\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.lineTo(x + 20, y + 40);\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.lineTo(x - 20, y + 40);\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath();\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();\n}\nfunction drawCross(x, y, color) {\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = color;\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = 3;\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.moveTo(x - 10, y - 10);\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.lineTo(x + 10, y + 10);\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.moveTo(x - 10, y + 10);\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.lineTo(x + 10, y - 10);\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke();\n}\nfunction drawCircle(x, y, color) {\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = color;\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n  var radius = 15;\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(x, y, radius, 0, Math.PI * 2);\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();\n}\n\n\n//# sourceURL=webpack://battler/./src/utils/draw.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  background-color: black;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.gambit-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  background-color: white;\r\n  color: black;\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n}\r\ncanvas {\r\n  align-self: center;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battler/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battler/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battler/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battler/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battler/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battler/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battler/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battler/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battler/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battler/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;