"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventDispatcher = function () {
	function EventDispatcher() {
		_classCallCheck(this, EventDispatcher);

		this.listeners = {};
	}

	_createClass(EventDispatcher, [{
		key: "addListener",
		value: function addListener(eventType, callback) {
			if (this.listeners[eventType] === undefined) {
				this.listeners[eventType] = [];
			}

			var obj = { callback: callback };
			this.listeners[eventType].push(obj);
			return obj;
		}
	}, {
		key: "removeListener",
		value: function removeListener(eventType, listener) {
			if (this.listeners[eventType] === undefined) {
				return;
			}

			var index = this.listeners[eventType].indexOf(listener);
			if (index > -1) {
				this.listeners[eventType].splice(index, 1);
			}
		}
	}, {
		key: "dispatch",
		value: function dispatch(eventType, data) {
			if (this.listeners[eventType] === undefined) {
				return;
			}

			this.listeners[eventType].forEach(function (x) {
				return x.callback(data);
			});
		}
	}]);

	return EventDispatcher;
}();

exports.default = EventDispatcher;
