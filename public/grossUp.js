class GrossUp extends Component {
	constructor(renderHookId) {
		super(renderHookId);
	}

	totalOutput(val) {
		console.log("output start");
		let x = val;
		console.log(x);

		this.xtotal.innerHTML = `
        <h2>${x.toFixed(2)}</h2>
        `;
		console.log(this.xtotal);
	}

	grossUpCalc(a, b) {
		let c = a;
		let d = b;

		return +c * (+d * 0.01 + 1);
	}

	grossUp() {
		console.log("calc run");
		let income = document.getElementById("income-input").value;
		let grossPercent = document.getElementById("gross-up-input").value;
		let grossOutput = document.getElementById("grossed-up-output");

		grossOutput = this.grossUpCalc(income, grossPercent);
		console.log(grossOutput);

		const grossedIncome = grossOutput;
		console.log("calc end");
		this.totalOutput(grossedIncome);
	}

	render() {
		const grossUpFormEl = this.createRootElement("form", "gross-up-income");
		grossUpFormEl.innerHTML = `
        <h3>Gross Up</h3>
			<div class="container">
				<div class="flex margin-10">
					<label for="Income">Income: </label>
					<input type="text" class="income-input" id="income-input" />
				</div>

				<div class="flex margin-10">
					<label for="Gross Up">Gross Up Percent: </label>
					<input type="text" class="gross-up-input" id="gross-up-input" />
				</div>

				<div class="grossed-up-output margin-10 output">
					<label for="Grossed Up Income Output">Grossed Up Income: </label>
					<h2>${0}</h2>
				</div>

				<button class="grossUp-btn btn margin-10">Calculate</button>
			</div>
        `;
		this.xtotal = document.querySelector(".grossed-up-output h2");

		let grossUpBtn = document.querySelector(".grossUp-btn");

		grossUpBtn.addEventListener("click", (e) => {
			e.preventDefault();
			console.log("calc start");
			this.grossUp();
		});

		// return outputEl;
	}
}

class GrossUpCalc extends Component {
	constructor() {
		super();
	}

	render() {
		this.calc = new GrossUp("gross-up");
	}
}

class GUApp {
	static calc;

	static init() {
		const grossCalc = new GrossUpCalc();
		this.calc = grossCalc.calc;
	}
}

GUApp.init();
