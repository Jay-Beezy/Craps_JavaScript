let display ={
  start_menu: document.getElementById("start-menu"),
  start_btn: document.getElementById("start-button"),
  board: document.getElementById("board"),
  dice_menu: document.getElementById("dice-menu"),
  roll_btn: document.getElementById('roll-button'),
  console: document.getElementById("console-col"),
  console_message: document.getElementById("console-messages"),
  start_slider: document.getElementById("start-slider"),


	init: function() {
		this.setEventListeners();
    this.hideBoard();
    this.hideDice();
    this.hideRollButton();
    this.hideConsole();
	},

  setEventListeners: function() {


    this.start_btn.addEventListener("click", () => {
      this.hideAll();
      this.showBoard();
      this.showDice();
      this.showRollButton();
      this.showConsole();
      GameConsole.write("Your total starting amount is: $" + this.start_slider.value);
      //Continue with the game?
    });

  },

  reset: function() {
    this.hideAll();
    this.showStartMenu();
  },

  hideStartMenu: function() {
    this.start_menu.style.display = "none";
  },

  showStartMenu: function() {
    this.start_menu.style.display = "block";
  },

  hideBoard: function() {
    this.board.style.display = "none";
  },

  showBoard: function() {
    this.board.style.display = "block";
  },

  hideDice: function() {
    this.dice_menu.style.display = "none";
  },

  showDice: function() {
    this.dice_menu.style.display = "block";
  },

  hideRollButton: function() {
    this.roll_btn.style.display = "none";
  },

  showRollButton: function() {
    this.roll_btn.style.display = "block";
  },

  hideConsole: function() {
    this.console.style.display = "none";
    this.console_message.style.display = "none";
  },

  showConsole: function() {
    this.console.style.display = "block";
    this.console_message.style.display = "block";
  },

  hideStartSlider: function() {
    this.start_slider.style.display = "none";
    starting_slider.destroy();
  },

  showStartSlider: function() {
    this.start_slider.style.display = "block";
    starting_slider.disabled(false);
  },

  hideAll: function(){
    this.hideStartMenu();
    this.hideBoard();
    this.hideDice();
    this.hideRollButton();
    this.hideStartSlider();
  }


};

var starting_slider = new rSlider({
    target: 'start-slider',
    values: {min: 5, max:1000},
    step:5,
    range: false,
    tooltip: true,
    scale: true,
    labels: false,
    set: [1],
    width: 200
});
