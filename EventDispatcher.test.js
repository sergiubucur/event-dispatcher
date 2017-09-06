import EventDispatcher from "./EventDispatcher";

describe("EventDispatcher", () => {
	let events;

	let listenerCallback;
	let listenerCallback2;
	let listenerCallback3;

	let listenerId;
	let listenerId2;
	let listenerId3;

	beforeEach(() => {
		listenerCallback = jest.fn();
		listenerCallback2 = jest.fn();
		listenerCallback3 = jest.fn();

		events = new EventDispatcher();
		listenerId = events.addListener("click", listenerCallback);
		listenerId2 = events.addListener("click", listenerCallback2);
		listenerId3 = events.addListener("mouseover", listenerCallback3);
	});

	describe("when an event is dispatched", () => {
		let data = {};

		beforeEach(() => {
			events.dispatch("click", data);
			events.dispatch("mouseover", data);
		});

		it("calls event listeners with the data object as a parameter", () => {
			expect(listenerCallback).toBeCalledWith(data);
			expect(listenerCallback2).toBeCalledWith(data);
			expect(listenerCallback3).toBeCalledWith(data);
		});
	});

	describe("when a listener is removed and the corresponding event is dispatched", () => {
		let data = {};

		beforeEach(() => {
			events.removeListener("click", listenerId);
			events.removeListener("click", listenerId2);
			events.dispatch("click", data);
			events.dispatch("mouseover", data);
		});

		it("doesn't call the listeners for the removed event type", () => {
			expect(listenerCallback).not.toBeCalled();
			expect(listenerCallback2).not.toBeCalled();
		});

		it("calls the listeners for remaining event types", () => {
			expect(listenerCallback3).toBeCalled();
		});
	});
});