class Downpayment extends Component {
	constructor(renderHookId) {
		super(renderHookId);
	}

	totalOutput(val1, val2, val3, val4) {
		console.log("output start");
		let dp = val1;
		let cc = val2;
		let tdp = val3;
		let ld = val4;

		this.xtotal.innerHTML = `
        <div id="downpayment-output flex margin-10">
					<label for="Downpayment">Downpayment: </label>
					<h2>${dp.toFixed(2)}</h2>
				</div>
				<div id="closing-costs-output flex margin-10">
					<label for="Closing Costs">Closing Costs: </label>
					<h2>${cc.toFixed(2)}</h2>
				</div>
				<div id="total-dp-output flex margin-10">
					<label for="Total Downpayment">Total Downpayment: </label>
					<h2>${tdp.toFixed(2)}</h2>
				</div>
				<div id="less-dp-output flex margin-10">
					<label for="Less Deposit">Less Deposit: </label>
					<h2>${ld.toFixed(2)}</h2>
				</div>
		`;

		console.log(this.xtotal);
	}

	downpaymentCalc(a, b) {
		let purchasePrice = a;
		let netFirstMortgage = b;

		return purchasePrice - netFirstMortgage;
	}

	closingCostsCalc(c, d) {
		let closingCosts = c;
		let purchasePrice = d;

		return closingCosts * 0.01 * purchasePrice;
	}

	totalDownpaymentCalc(e, f) {
		let totalDownpayment = e;
		let closingCosts = f;

		return totalDownpayment + closingCosts;
	}

	lessDeposit(g, h) {
		let totalDownpayment = g;
		let dpOnOffer = h;

		return totalDownpayment - dpOnOffer;
	}

	downpayment() {
		console.log("calc run");

		let purchasePrice = document.getElementById("purchase-price-input").value;
		let netFirstMortgage = document.getElementById("net-first-input").value;
		let cCostPercentage = document.getElementById("cc-percentage-input").value;
		let dpOnOffer = document.getElementById("deposit-offer-input").value;

		let downpayment = this.downpaymentCalc(+purchasePrice, +netFirstMortgage);
		let closingCosts = this.closingCostsCalc(+purchasePrice, +cCostPercentage);
		let totalDownpayment = this.totalDownpaymentCalc(downpayment, closingCosts);
		let lessDeposit = this.lessDeposit(totalDownpayment, dpOnOffer);

		this.totalOutput(downpayment, closingCosts, totalDownpayment, lessDeposit);
	}

	render() {
		console.log("start");
		const downpaymentFormEl = this.createRootElement("form", "downpayment");
		downpaymentFormEl.innerHTML = `
        <h3>Downpayment</h3>
			<div class="container">
				<div class="flex margin-10">
					<label for="Purchase Price">Pruchase Price: </label>
					<input
						type="text"
						class="purchase-price-input"
						id="purchase-price-input"
					/>
				</div>
				<div class="flex margin-10">
					<label for="Net First">Net First Mortgage: </label>
					<input type="text" class="net-first-input" id="net-first-input" />
				</div>
				<div class="flex margin-10">
				
					<label for="Deposit Offer">
						Deposit Offer:
					</label>
					<input
						type="text"
						id="deposit-offer-input"
						class="deposit-offer-input"
					/>
				</div>
				<div class="flex margin-10">
					
					<label for="Closing Cost">CC (%): </label>
					<input
						type="text"
						id="cc-percentage-input"
						class="cc-percentage-input"
					/>
				</div>
				<div class="closing-cost-monetary flex margin-10">
						<label for="Closing Cost">CC ($): </label>
					<input type="text" id="cc-monetary-input" class="cc-monetary-input" />
				</div>
				<div class = 'output flex margin-10'>
					<div id="downpayment-output flex margin-10">
						<label for="Downpayment">Downpayment: </label>
						<h2>${0}</h2>
					</div>
					<div id="closing-costs-output flex margin-10">
						<label for="Closing Costs">Closing Costs: </label>
						<h2>${0}</h2>
					</div>
					<div id="total-dp-output flex margin-10">
						<label for="Total Downpayment">Total Downpayment: </label>
						<h2>${0}</h2>
					</div>
					<div id="less-dp-output flex margin-10">
						<label for="Less Deposit On Offer">Less Deposit: </label>
						<h2>${0}</h2>
					</div>
				</div>
				<button class="downpayment-btn btn margin-10">Calculate</button>
			</div>
        `;
		this.xtotal = downpaymentFormEl.querySelector(".output");

		let downpaymentBtn = document.querySelector(".downpayment-btn");

		downpaymentBtn.addEventListener("click", (e) => {
			e.preventDefault();
			console.log("calc start");
			this.downpayment();
		});

		// return outputEl;
	}
}

class DownpaymentCalc extends Component {
	constructor() {
		super();
	}

	render() {
		this.calc = new Downpayment("downpayment");
	}
}

class DPApp {
	static calc;

	static init() {
		const downpaymentCalc = new DownpaymentCalc();
		this.calc = downpaymentCalc.calc;
	}
}

DPApp.init();
