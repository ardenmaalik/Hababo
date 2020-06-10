class SalesProceeds extends Component {
	constructor(renderHookId) {
		super(renderHookId);
	}

	totalOutput(val1) {
		console.log("output start");
		let salesProceeds = val1;

		this.xtotal.innerHTML = `
        <div id="sales-proceeds-output flex margin-10">
						<label for="Sales Proceeds">Estimate: </label>
						<h2>${salesProceeds.toFixed(2)}</h2>
					</div>
		`;

		console.log(this.xtotal);
	}

	salesProceedsCalc(a, b, c, d) {
		let salesPrice = a;
		let mortgage = b;
		let realtorFee = c;
		let debts = d;

		return salesPrice - mortgage - salesPrice * realtorFee - debts;
	}

	salesProceeds() {
		console.log("calc run");

		let salesPrice = document.getElementById("sales-price-input").value;
		let mortgage = document.getElementById("mortgage-input").value;
		let debts = document.getElementById("debts-input").value;

		let closingPercentage = document.getElementById("closing-percentage-input")
			.value;
		let realtorPercentage = document.getElementById("realtor-percentage-input")
			.value;

		let realtorFee = +closingPercentage * 0.01 + +realtorPercentage * 0.01;

		let salesProceeds = this.salesProceedsCalc(
			+salesPrice,
			+mortgage,
			+realtorFee,
			+debts
		);

		this.totalOutput(salesProceeds);
	}

	render() {
		console.log("start");
		const salesFormEl = this.createRootElement("form", "sales-proceeds");
		salesFormEl.innerHTML = `
        <h3>Sales Proceeds</h3>
			<div class="container">
				<div class="flex margin-10">
					<label for="Sales Price">Sales Price:</label>
					<input
						type="text"
						class="sales-price-input"
						id="sales-price-input"
					/>
				</div>
				<div class="flex margin-10">
					<label for="Mortgage">Mortgage: </label>
					<input type="text" class="mortgage-input" id="mortgage-input" />
				</div>
				<div class="flex margin-10">
				
					<label for="Debts">
						Debts:
					</label>
					<input
						type="text"
						id="debts-input"
						class="debts-input"
					/>
                </div>
                  <div class="flex margin-10">
					<label for="Closing Costs">CC (%): </label>
					<input
						type="text"
						id="closing-percentage-input"
                        class="closing-percentage-input"
                        value = '1.5'
					/>
				</div>
                <div class="flex margin-10">
					<label for="Realtor Fee">Realtor Fee (%): </label>
					<input
						type="text"
						id="realtor-percentage-input"
                        class="realtor-percentage-input"
                        value = '5'
					/>
				</div>
				<div class = 'output margin-10'>
					<div id="sales-proceeds-output flex margin-10">
						<label for="Sales Proceeds">Sales Proceeds: </label>
						<h2>${0}</h2>
					</div>
				</div>
				<button class="sales-btn btn margin-10">Calculate</button>
			</div>
        `;
		this.xtotal = salesFormEl.querySelector(".output");

		let salesBtn = document.querySelector(".sales-btn");

		salesBtn.addEventListener("click", (e) => {
			e.preventDefault();
			console.log("calc start");
			this.salesProceeds();
		});

		// return outputEl;
	}
}

class SalesCalc extends Component {
	constructor() {
		super();
	}

	render() {
		this.calc = new SalesProceeds("sales-proceeds");
	}
}

class SalesApp {
	static calc;

	static init() {
		const salesCalc = new SalesCalc();
		this.calc = salesCalc.calc;
	}
}

SalesApp.init();
