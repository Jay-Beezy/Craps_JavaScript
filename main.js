window.onload = function() {
	display.init();
};

let GameConsole = {
	row: document.getElementById("console-row"),
	message_list: document.getElementById("console-messages"),
	messages_active: 0,

	write: function(message, highlight) {
		let msg = message;
		let li = document.createElement("li");

		//None of this makes sense so figure it out or source it
		if (highlight) {
			li.classList.add("game-positive");
		}
		let text = document.createTextNode(msg);
		li.appendChild(text);
		this.message_list.appendChild(li);
		this.messages_active++;
		//None of this makes sense so figure it out /\

		// Remove oldest message when list grows.
		if(this.messages_active > 3) {
			this.message_list.childNodes[0].remove();
		}
	},

	clearText: function() {
		let messages = this.message_list.childNodes;
		for(let m in messages) {
			m.remove();
		}
	},

};
